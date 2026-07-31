import { businessSchema } from '../../scripts/jsonld/business';
import { breadcrumb } from '../../scripts/jsonld/breadcrumb';
import { SITE_URL, BUSINESS_NAME } from '../../scripts/jsonld/shared';
import type { SportsEvent, FAQPage } from '../../scripts/jsonld/types';

const keystoneEvent: SportsEvent = {
  '@context': 'https://schema.org',
  '@type': 'SportsEvent',
  name: 'Keystone Games Combat Sports Showcase 2026',
  description: `Boxing and MMA competition hosted by ${BUSINESS_NAME} as part of the 2026 State Games of America. First bell 5:00 PM at the Ramada Inn & Conference Center, 1450 S Atherton St, State College, PA.`,
  startDate: '2026-08-01T17:00:00-04:00',
  endDate: '2026-08-01T22:00:00-04:00',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  image: `${SITE_URL}/og-image.png`,
  location: {
    '@type': 'Place',
    name: 'Ramada Inn & Conference Center',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1450 S Atherton St',
      addressLocality: 'State College',
      addressRegion: 'PA',
      postalCode: '16801',
      addressCountry: 'US',
    },
  },
  organizer: {
    '@type': 'SportsActivityLocation',
    name: BUSINESS_NAME,
    url: SITE_URL,
  },
  superEvent: {
    '@type': 'SportsEvent',
    name: 'State Games of America 2026',
    url: 'https://www.keystonegames.org/sga2026',
    startDate: '2026-07-24',
    endDate: '2026-08-02',
    location: {
      '@type': 'Place',
      name: 'Penn State University',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'State College',
        addressRegion: 'PA',
        postalCode: '16801',
        addressCountry: 'US',
      },
    },
  },
};

const keystoneFaq: FAQPage = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the State Games of America?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The State Games of America is the nation\'s largest multi-sport Olympic-style event for amateur athletes. In 2026 it will be hosted in State College, PA, featuring 50+ sports and thousands of competitors from across the country. The Combat Sports Showcase runs Saturday, August 1 at the Ramada Inn & Conference Center, 1450 S Atherton St, with the first bell at 5:00 PM.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who can compete in the Combat Sports Showcase?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The card is made up of amateur athletes from USA Boxing registered clubs and NCBA collegiate programs. Bouts are matched by NCBA weight class, with certified officials and full USA Boxing safety protocols.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to be a Legacy Boxing member to compete?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The Keystone Games Combat Sports Showcase is open to eligible amateur athletes from any registered club or collegiate program. Legacy Boxing is hosting the event, but competitors come from clubs and programs across the country.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I find accommodations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The State Games of America has partnered with the Happy Valley Adventure Bureau to provide discounted hotel rates across the State College area. Visit the official SGA 2026 accommodations page for booking options and group rates.',
      },
    },
  ],
};

export const schemas = [
  businessSchema,
  breadcrumb([
    { name: 'Home', url: SITE_URL },
    { name: 'Keystone Games 2026', url: `${SITE_URL}/pages/events/keystone-games/` },
  ]),
  keystoneEvent,
  keystoneFaq,
];
