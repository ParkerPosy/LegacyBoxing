import { businessSchema } from '../../scripts/jsonld/business';
import { breadcrumb } from '../../scripts/jsonld/breadcrumb';
import { SITE_URL, organization, courseLocation } from '../../scripts/jsonld/shared';
import type { Course, FAQPage } from '../../scripts/jsonld/types';

const boxingCourse: Course = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'Boxing Classes',
  description:
    'Beginner, competitive, and women\'s boxing classes with USA Boxing certified coaches. Learn real technique – footwork, combinations, head movement, and defense.',
  provider: organization,
  hasCourseInstance: {
    '@type': 'CourseInstance',
    courseMode: 'onsite',
    location: courseLocation,
  },
  offers: {
    '@type': 'Offer',
    price: '80.00',
    priceCurrency: 'USD',
    category: 'Monthly Membership',
    availability: 'https://schema.org/InStock',
  },
};

const boxingFaq: FAQPage = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I need any boxing experience to join?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No experience is needed. Most of our members started as complete beginners. Every class covers fundamentals alongside advanced work, so you\'ll build skills at your own pace with guidance from USA Boxing certified coaches.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will I have to spar? Is it safe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sparring is never required. You\'ll train on heavy bags, mitts, and partner drills long before sparring is introduced. When you\'re ready, sparring is supervised, matched to your level, and protective gear is always worn. Safety is our top priority.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I wear or bring to my first class?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wear comfortable athletic clothing and bring a water bottle. We have loaner gloves and wraps available for beginners. As you continue training, we recommend investing in your own gloves and hand wraps - but you don\'t need anything on day one.',
      },
    },
    {
      '@type': 'Question',
      name: "Do you offer women's boxing classes?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. We have dedicated women's boxing classes on Monday and Wednesday evenings in State College. These sessions provide focused coaching in a supportive environment for women of all skill levels - from first-timers to experienced athletes.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can Penn State students join boxing classes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Many of our members are Penn State students and staff. We\'re just minutes from campus with free parking, and class times on weekday evenings and Saturdays fit a student schedule. Coach Derek also leads the Penn State Boxing Club.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I train for amateur boxing competitions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Coach Derek is the 2023 NCBA Coach of the Year and has prepared multiple fighters for USA Boxing sanctioned amateur bouts. If competition is your goal, we\'ll build your skills, conditioning, and fight readiness through structured progression and private training.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get started?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your first class is free. Contact us to schedule your intro class, or drop in a few minutes early before any boxing session. We\'ll get you set up with gloves, show you around, and have you training with the group right away.',
      },
    },
  ],
};

export const schemas = [
  businessSchema,
  breadcrumb([
    { name: 'Home', url: SITE_URL },
    { name: 'Boxing Classes', url: `${SITE_URL}/pages/courses/boxing/` },
  ]),
  boxingCourse,
  boxingFaq,
];
