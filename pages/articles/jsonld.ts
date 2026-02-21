import { businessSchema } from '../scripts/jsonld/business';
import { breadcrumb } from '../scripts/jsonld/breadcrumb';
import { SITE_URL } from '../scripts/jsonld/shared';

export const schemas = [
  businessSchema,
  breadcrumb([
    { name: 'Home', url: SITE_URL },
    { name: 'Articles', url: `${SITE_URL}/pages/articles/` },
  ]),
];
