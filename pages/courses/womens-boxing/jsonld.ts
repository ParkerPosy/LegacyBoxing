import { businessSchema } from '../../scripts/jsonld/business';
import { breadcrumb } from '../../scripts/jsonld/breadcrumb';
import { SITE_URL, organization, courseLocation } from '../../scripts/jsonld/shared';
import type { Course, FAQPage } from '../../scripts/jsonld/types';

const womensCourse: Course = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: "Women's Boxing Classes",
  description:
    "Dedicated women's boxing classes in State College, PA. Learn real boxing technique — footwork, combinations, defense, and mitt work — in a supportive, ego-free environment. USA Boxing certified coaches. No experience or sparring required. First class free.",
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

const womensFaq: FAQPage = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I need any boxing experience to join the women\'s boxing classes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No experience is needed. Most women who join start as complete beginners. Every class builds from fundamentals, so you\'ll learn proper form and technique from day one regardless of your background.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will I have to spar or make contact with anyone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sparring is never required. You\'ll train on heavy bags, mitts, and use skill-building drills like Shoulder Tag that develop reflexes and timing without contact. Sparring is only introduced if and when you decide you want to pursue it — always supervised and at your own pace.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this a real boxing class or more of a fitness class?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It\'s real boxing. We teach proper technique — footwork, stance, defense, combinations, and head movement — the same fundamentals used by our competitive athletes. You\'ll get a great workout, but you\'ll also walk away knowing how to actually box. This is not cardio kickboxing.',
      },
    },
    {
      '@type': 'Question',
      name: "What should I wear or bring to a women's boxing class?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Comfortable athletic clothing and a water bottle are all you need for your first class. We have loaner gloves and wraps available for beginners. As you continue, we recommend getting your own gloves and hand wraps — but you don\'t need anything on day one.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Penn State students join the women\'s boxing classes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Many of our members are Penn State students and faculty. We\'re located minutes from campus at 2820 E College Ave with free on-site parking, and our Monday and Wednesday evening class times fit a student schedule.',
      },
    },
    {
      '@type': 'Question',
      name: "When are the women's boxing classes?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Women's boxing classes are held Monday and Wednesday evenings from 6:15 to 7:30 PM at Legacy Boxing & Combat Sports Academy, 2820 E College Ave Suite F, State College, PA 16801.",
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get started with women\'s boxing at Legacy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your first class is free. You can reach out through our contact page to let us know you\'re coming, or simply show up 10–15 minutes before a Monday or Wednesday evening class. We\'ll get you set up with equipment, introduce you to the group, and have you training right away.',
      },
    },
  ],
};

export const schemas = [
  businessSchema,
  breadcrumb([
    { name: 'Home', url: SITE_URL },
    { name: "Women's Boxing Classes", url: `${SITE_URL}/pages/courses/womens-boxing/` },
  ]),
  womensCourse,
  womensFaq,
];
