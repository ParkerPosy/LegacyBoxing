import { businessSchema } from '../../scripts/jsonld/business';
import { breadcrumb } from '../../scripts/jsonld/breadcrumb';
import { SITE_URL, BUSINESS_NAME } from '../../scripts/jsonld/shared';
import type { Article } from '../../scripts/jsonld/types';

const keystoneArticle: Article = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Legacy Boxing to Host Boxing & MMA at the 2026 State Games of America',
  description: `${BUSINESS_NAME} has been selected to host the Combat Sports Showcase at the 2026 State Games of America in State College, PA.`,
  datePublished: '2026-02-14',
  image: `${SITE_URL}/og-image.png`,
  author: {
    '@type': 'Organization',
    name: BUSINESS_NAME,
    url: SITE_URL,
  },
  publisher: {
    '@type': 'Organization',
    name: BUSINESS_NAME,
    url: SITE_URL,
    logo: { '@type': 'ImageObject', url: `${SITE_URL}/legacy-boxing-logo.webp` },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${SITE_URL}/pages/articles/legacy-boxing-hosts-keystone-games-2026/`,
  },
};

export const schemas = [
  businessSchema,
  breadcrumb([
    { name: 'Home', url: SITE_URL },
    { name: 'Articles', url: `${SITE_URL}/pages/articles/` },
    {
      name: 'Legacy Boxing Hosts Keystone Games 2026',
      url: `${SITE_URL}/pages/articles/legacy-boxing-hosts-keystone-games-2026/`,
    },
  ]),
  keystoneArticle,
];
