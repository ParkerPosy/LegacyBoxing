import { businessSchema } from '../scripts/jsonld/business';
import { breadcrumb } from '../scripts/jsonld/breadcrumb';
import { SITE_URL } from '../scripts/jsonld/shared';
import type { FAQPage } from '../scripts/jsonld/types';

const membershipFaq: FAQPage = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I need to sign a contract?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. All memberships are month-to-month with no contracts or long-term commitments. You can cancel anytime.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the first class really free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Drop in for any class on our schedule \u2013 boxing, MMA, or youth \u2013 and train for free with no obligation. If you like it, we\u2019ll walk you through membership options afterward.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is included in a monthly membership?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your membership gets you unlimited access to all scheduled classes in your program \u2013 boxing, MMA, or youth. You\u2019ll train with USA Boxing and USA Judo certified coaches in a real gym built for combat sports.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a USA Boxing membership?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It\u2019s strongly recommended. A USA Boxing membership ($35/year for adults) provides secondary injury and accident insurance and is required for sponsored activities like sanctioned bouts.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I try different programs before committing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Your free first class can be in any program. We also offer drop-in sessions so you can try boxing and MMA before choosing a monthly plan. If you want both, the combo membership saves you $35/month.',
      },
    },
  ],
};

export const schemas = [
  businessSchema,
  breadcrumb([
    { name: 'Home', url: SITE_URL },
    { name: 'Membership & Pricing', url: `${SITE_URL}/pages/membership/` },
  ]),
  membershipFaq,
];
