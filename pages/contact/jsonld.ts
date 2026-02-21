import { businessSchema } from '../scripts/jsonld/business';
import { breadcrumb } from '../scripts/jsonld/breadcrumb';
import { SITE_URL } from '../scripts/jsonld/shared';
import type { FAQPage } from '../scripts/jsonld/types';

const contactFaq: FAQPage = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where is Legacy Boxing located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We\u2019re at 2820 East College Avenue, State College, PA 16801 \u2013 just minutes from Penn State campus with free parking available.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to sign up before my first class?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No sign-up needed. Just show up 10\u201315 minutes early, fill out a quick waiver, and you\u2019re in. Your first class is free.',
      },
    },
    {
      '@type': 'Question',
      name: 'What programs does Legacy Boxing offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer boxing (including women\u2019s classes), MMA built on Kosen Judo and Muay Thai, youth boxing for ages 8\u201316, and private coaching in all disciplines.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does a membership cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Boxing and MMA memberships are $80/month each, youth boxing is $60/month, and the combo plan is $125/month. No contracts \u2013 cancel anytime. Drop-in sessions are also available.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Penn State students train at Legacy Boxing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Many of our members are Penn State students and staff. Coach Derek Roth also leads the Penn State Boxing Club. We\u2019re close to campus with evening and Saturday class times that fit a student schedule.',
      },
    },
  ],
};

export const schemas = [
  businessSchema,
  breadcrumb([
    { name: 'Home', url: SITE_URL },
    { name: 'Contact Us', url: `${SITE_URL}/pages/contact/` },
  ]),
  contactFaq,
];
