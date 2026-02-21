import type { Plugin, IndexHtmlTransformContext } from 'vite';
import { build } from 'esbuild';
import path from 'path';

/**
 * Vite plugin that injects JSON-LD schemas as static <script type="application/ld+json">
 * tags directly into the built HTML — no client-side JavaScript required.
 *
 * How it works:
 *   1. Each HTML page has a <script type="module" src="/.../jsonld.ts">
 *      co-located next to its index.html
 *   2. At build time (and in dev), this plugin:
 *      a. Bundles that TS module with esbuild (resolving all imports)
 *      b. Evaluates the bundle to extract the `schemas` export
 *      c. Serializes each schema as a <script type="application/ld+json"> tag
 *      d. Replaces the original <script type="module"> tag (so no JS ships to the client)
 *
 * The TypeScript type system still validates every schema at `tsc` time —
 * missing required fields (like startDate/location on SportsEvent) cause compile errors.
 * The Vite plugin then ensures the validated data lands in static HTML.
 */

const JSONLD_SCRIPT_RE =
  /<script\s+type="module"\s+src="(\/[^"]*jsonld\.ts)"\s*><\/script>/;

export default function jsonld(): Plugin {
  let root: string;

  return {
    name: 'vite-plugin-jsonld',
    enforce: 'pre',

    configResolved(config) {
      root = config.root;
    },

    // order: 'pre' ensures this runs BEFORE Vite resolves <script type="module">
    // tags into the module graph — the tag is replaced with static JSON-LD before
    // Vite ever tries to bundle it.
    transformIndexHtml: {
      order: 'pre',
      async handler(html: string, _ctx: IndexHtmlTransformContext) {
        const match = html.match(JSONLD_SCRIPT_RE);
        if (!match) return html;

        const [fullTag, srcPath] = match;
        const filePath = path.join(root, srcPath);

        // Bundle the TS module into a self-contained IIFE using esbuild
        // (esbuild ships with Vite so no extra dependency needed)
        const result = await build({
          entryPoints: [filePath],
          bundle: true,
          write: false,
          format: 'iife',
          globalName: '__jsonld',
          platform: 'neutral',
          logLevel: 'silent',
        });

        const code = result.outputFiles[0].text;

        // Evaluate the bundle to extract the exported schemas array
        const evaluate = new Function(code + '\nreturn __jsonld;');
        const mod = evaluate() as { schemas?: unknown[] };
        const schemas = mod.schemas ?? [];

        if (schemas.length === 0) {
          return html.replace(fullTag, '');
        }

        // Generate static <script type="application/ld+json"> tags
        const jsonldTags = schemas
          .map(
            (schema) =>
              `<script type="application/ld+json">${JSON.stringify(schema)}</script>`,
          )
          .join('\n    ');

        return html.replace(fullTag, jsonldTags);
      },
    },
  };
}
