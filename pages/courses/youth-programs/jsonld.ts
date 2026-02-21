import { businessSchema } from '../../scripts/jsonld/business';
import { breadcrumb } from '../../scripts/jsonld/breadcrumb';
import { SITE_URL, organization, courseLocation } from '../../scripts/jsonld/shared';
import type { Course } from '../../scripts/jsonld/types';

const youthCourse: Course = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'Youth Boxing Program',
  description:
    'Safe, structured boxing classes for kids ages 8\u201316. Build confidence, discipline, coordination, and real boxing technique in a supportive environment.',
  provider: organization,
  hasCourseInstance: {
    '@type': 'CourseInstance',
    courseMode: 'onsite',
    location: courseLocation,
  },
  offers: {
    '@type': 'Offer',
    price: '60.00',
    priceCurrency: 'USD',
    category: 'Monthly Membership',
  },
};

export const schemas = [
  businessSchema,
  breadcrumb([
    { name: 'Home', url: SITE_URL },
    { name: 'Youth Boxing Programs', url: `${SITE_URL}/pages/courses/youth-programs/` },
  ]),
  youthCourse,
];
