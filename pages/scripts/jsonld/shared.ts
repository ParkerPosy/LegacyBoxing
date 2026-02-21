/** Shared constants and fragments reused across JSON-LD schemas. */

export const SITE_URL = 'https://www.legacy-boxing.com';
export const BUSINESS_NAME = 'Legacy Boxing & Combat Sports Academy';

export const postalAddress = {
  '@type': 'PostalAddress' as const,
  streetAddress: '2820 E College Ave, Suite F',
  addressLocality: 'State College',
  addressRegion: 'PA',
  postalCode: '16801',
  addressCountry: 'US',
};

export const geoCoordinates = {
  '@type': 'GeoCoordinates' as const,
  latitude: '40.8292',
  longitude: '-77.8091',
};

export const place = {
  '@type': 'Place' as const,
  name: BUSINESS_NAME,
  address: { ...postalAddress },
};

export const organization = {
  '@type': 'Organization' as const,
  name: BUSINESS_NAME,
  url: SITE_URL,
  sameAs: SITE_URL,
  logo: `${SITE_URL}/legacy-boxing-logo.webp`,
};

export const courseLocation = {
  '@type': 'Place' as const,
  name: BUSINESS_NAME,
  address: {
    '@type': 'PostalAddress' as const,
    streetAddress: '2820 E College Ave, Suite F',
    addressLocality: 'State College',
    addressRegion: 'PA',
    postalCode: '16801',
    addressCountry: 'US',
  },
};
