import { businessSchema } from '../../scripts/jsonld/business';
import { breadcrumb } from '../../scripts/jsonld/breadcrumb';
import { SITE_URL, organization } from '../../scripts/jsonld/shared';
import type { Service } from '../../scripts/jsonld/types';

const privateTraining: Service = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Private Boxing & MMA Training',
  description:
    '1-on-1 private coaching in boxing, MMA, Muay Thai, Judo, or Jiu-Jitsu with Coach Derek Roth. Tailored sessions for beginners, athletes, and competitive fighters.',
  provider: organization,
  serviceType: 'Private Athletic Training',
  areaServed: 'State College, PA',
  offers: {
    '@type': 'Offer',
    price: '70.00',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
};

export const schemas = [
  businessSchema,
  breadcrumb([
    { name: 'Home', url: SITE_URL },
    { name: 'Private Training', url: `${SITE_URL}/pages/courses/private-training/` },
  ]),
  privateTraining,
];
