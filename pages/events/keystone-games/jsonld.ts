import { businessSchema } from '../../scripts/jsonld/business';
import { breadcrumb } from '../../scripts/jsonld/breadcrumb';
import { SITE_URL, BUSINESS_NAME } from '../../scripts/jsonld/shared';
import type { SportsEvent, FAQPage } from '../../scripts/jsonld/types';

const keystoneEvent: SportsEvent = {
  '@context': 'https://schema.org',
  '@type': 'SportsEvent',
  name: 'Keystone Games Combat Sports Showcase 2026',
  description: `Boxing and MMA competition hosted by ${BUSINESS_NAME} as part of the 2026 State Games of America. Held at 2820 East College Ave, Suite F, State College, PA.`,
  startDate: '2026-08-01',
  endDate: '2026-08-02',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  image: `${SITE_URL}/og-image.png`,
  location: {
    '@type': 'Place',
    name: BUSINESS_NAME,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2820 East College Ave, Suite F',
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
  offers: {
    '@type': 'Offer',
    url: 'https://event.racereach.com/keysg-boxing',
    availability: 'https://schema.org/InStock',
    price: '45.00',
    priceCurrency: 'USD',
    description: 'Open & Masters divisions $45; Youth divisions $35',
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
        text: 'The State Games of America is the nation\'s largest multi-sport Olympic-style event for amateur athletes. In 2026 it will be hosted in State College, PA, featuring 50+ sports and thousands of competitors from across the country. The Combat Sports Showcase takes place at Legacy Boxing (2820 East College Ave, Suite F).',
      },
    },
    {
      '@type': 'Question',
      name: 'Who can compete in the Combat Sports Showcase?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Boxing is open to amateur athletes from USA Boxing registered clubs and NCBA collegiate programs. MMA eligibility details will be announced once the event page is published. Check the Keystone Games eligibility guidelines for general requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I register?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Boxing registration is open now through RaceReach. Click the Register for Boxing button on this page to go directly to the registration portal. MMA registration details are coming soon - contact us for updates.',
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
