import { readdir, readFile, stat } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

const REQUIRED_META: Array<{ name: string; pattern: RegExp }> = [
  { name: '<title>',                      pattern: /<title>[^<]+<\/title>/ },
  { name: 'meta[name=description]',       pattern: /<meta[^>]+name="description"[^>]+content="[^"]+"/ },
  { name: 'link[rel=canonical]',          pattern: /<link[^>]+rel="canonical"[^>]+href="[^"]+"/ },
  { name: 'meta[property=og:title]',      pattern: /<meta[^>]+property="og:title"[^>]+content="[^"]+"/ },
  { name: 'meta[property=og:description]',pattern: /<meta[^>]+property="og:description"[^>]+content="[^"]+"/ },
  { name: 'meta[property=og:url]',        pattern: /<meta[^>]+property="og:url"[^>]+content="[^"]+"/ },
  { name: 'meta[property=og:image]',      pattern: /<meta[^>]+property="og:image"[^>]+content="[^"]+"/ },
  { name: 'meta[name=twitter:title]',     pattern: /<meta[^>]+name="twitter:title"[^>]+content="[^"]+"/ },
  { name: 'meta[name=twitter:description]',pattern: /<meta[^>]+name="twitter:description"[^>]+content="[^"]+"/ },
];

const SKIP_DIRS = new Set(['dist', 'node_modules', '.vite', 'scripts']);

async function exists(p: string): Promise<boolean> {
  try { await stat(p); return true; } catch { return false; }
}

async function findFiles(dir: string, name: string): Promise<string[]> {
  const results: string[] = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (SKIP_DIRS.has(entry.name)) continue;
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...await findFiles(full, name));
    } else if (entry.name === name) {
      results.push(full);
    }
  }
  return results;
}

async function findAllHtml(dir: string): Promise<string[]> {
  const results: string[] = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (SKIP_DIRS.has(entry.name)) continue;
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...await findAllHtml(full));
    } else if (entry.name.endsWith('.html')) {
      results.push(full);
    }
  }
  return results;
}

async function checkMeta(): Promise<number> {
  const files = await findFiles(ROOT, 'index.html');
  let failures = 0;

  for (const file of files) {
    const raw = await readFile(file, 'utf-8');
    if (raw.includes('http-equiv="refresh"')) continue;

    // Collapse whitespace so multi-line tags match single-line patterns
    const content = raw.replace(/\s+/g, ' ');
    const rel = file.slice(ROOT.length + 1).replace(/\\/g, '/');
    const errors: string[] = [];

    for (const { name, pattern } of REQUIRED_META) {
      if (!pattern.test(content)) errors.push(`  missing ${name}`);
    }

    if (errors.length > 0) {
      console.error(`\n${rel}`);
      for (const e of errors) console.error(e);
      failures++;
    }
  }

  return failures;
}

async function checkLinks(): Promise<number> {
  const htmlFiles = await findAllHtml(ROOT);
  const seen = new Map<string, boolean>();
  let failures = 0;

  for (const file of htmlFiles) {
    const content = await readFile(file, 'utf-8');
    const rel = file.slice(ROOT.length + 1).replace(/\\/g, '/');
    const hrefs = new Set<string>();

    // Find all internal page hrefs (skip anchors, external, and asset paths)
    for (const match of content.matchAll(/href="(\/pages\/[^"#?]+)"/g)) {
      hrefs.add(match[1]!);
    }

    for (const href of hrefs) {
      if (seen.has(href)) {
        if (!seen.get(href)) {
          console.error(`\n${rel}`);
          console.error(`  broken href: ${href}`);
          failures++;
        }
        continue;
      }

      const base = join(ROOT, href);
      const found =
        (await exists(base)) ||
        (await exists(join(base, 'index.html'))) ||
        (await exists(base.replace(/\/$/, '') + '.html'));

      seen.set(href, found);
      if (!found) {
        console.error(`\n${rel}`);
        console.error(`  broken href: ${href}`);
        failures++;
      }
    }
  }

  return failures;
}

async function main(): Promise<void> {
  console.log('Checking meta tags...');
  const metaFails = await checkMeta();

  console.log('Checking internal links...');
  const linkFails = await checkLinks();

  const total = metaFails + linkFails;
  if (total > 0) {
    console.error(`\n${total} check(s) failed.`);
    process.exit(1);
  } else {
    console.log('All checks passed.');
  }
}

main();
