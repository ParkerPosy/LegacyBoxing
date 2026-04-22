import type { JsonLdSchema, FAQPage, BreadcrumbList, Service } from '../scripts/jsonld/types';
import { SITE_URL, organization } from '../scripts/jsonld/shared';
import { breadcrumb } from '../scripts/jsonld/breadcrumb';

const service: Service = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Boxing Classes for Penn State Students',
  description:
    'Open boxing classes at Legacy Boxing & Combat Sports Academy — the approved practice facility for the Penn State Boxing Club. Students train alongside club members under Coach Derek Roth, 2023 NCBA Coach of the Year.',
  provider: organization,
  areaServed: 'State College, PA',
  serviceType: 'Boxing Instruction',
  offers: {
    '@type': 'Offer',
    url: `${SITE_URL}/pages/penn-state/`,
    price: '80',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    category: 'Monthly Membership',
  },
};

const faq: FAQPage = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Legacy Boxing the Penn State Boxing Club?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Legacy Boxing & Combat Sports Academy is a private gym. Legacy is an approved facility for Penn State Boxing Club practice, and Coach Derek Roth leads both — but Legacy\'s open classes are separate from the club. Anyone can train here with a Legacy membership.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I attend Penn State Boxing Club practice at Legacy Boxing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Club practices are private and exclusive to club members — they are not open to the public. Legacy\'s own classes run on a separate schedule and are open to all students.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need boxing experience to train at Legacy Boxing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No experience is needed. Every class covers fundamentals — stance, footwork, defense, and combinations — regardless of who is in the room. Most members started with zero experience.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will I train with Penn State Boxing Club members at Legacy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Very likely. Many PSU Boxing Club members hold Legacy memberships and train during regular class hours. Legacy is where they put in extra work outside of club commitments.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a Legacy Boxing membership cost for students?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Boxing memberships start at $80/mo with no contracts — cancel anytime. Your first class is always free.',
      },
    },
  ],
};

const breadcrumbSchema: BreadcrumbList = breadcrumb([
  { name: 'Home', url: SITE_URL },
  { name: 'Penn State Boxing', url: `${SITE_URL}/pages/penn-state/` },
]);

export const schemas: JsonLdSchema[] = [service, faq, breadcrumbSchema];
