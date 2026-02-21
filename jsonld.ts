import { businessSchema } from './pages/scripts/jsonld/business';
import { SITE_URL, BUSINESS_NAME } from './pages/scripts/jsonld/shared';
import type { WebSite } from './pages/scripts/jsonld/types';

const webSite: WebSite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: BUSINESS_NAME,
  url: SITE_URL,
};

export const schemas = [businessSchema, webSite];
