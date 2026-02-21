import { businessSchema } from '../../scripts/jsonld/business';
import { breadcrumb } from '../../scripts/jsonld/breadcrumb';
import { SITE_URL, organization, courseLocation } from '../../scripts/jsonld/shared';
import type { Course, FAQPage } from '../../scripts/jsonld/types';

const mmaCourse: Course = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'MMA Classes \u2013 Kosen Judo, Muay Thai & Wrestling',
  description:
    'Train real MMA built on Kosen Judo grappling, Muay Thai striking, and wrestling. USA Judo certified coaching. Beginner-friendly with structured progression.',
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
  },
};

const mmaFaq: FAQPage = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I need any experience or to be in shape before joining?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not at all. Our MMA program welcomes complete beginners \u2013 many of our members are Penn State students who had never trained before joining. You\u2019ll start with fundamentals and build skills and conditioning over time. Prior fitness or experience is a bonus, not a requirement. Come as you are.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I wear or bring to class? Do I need my own gear?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wear comfortable athletic clothing and bring a water bottle. Wrestling shoes are recommended for mat work. We have loaner gloves and gear for beginners. As you continue, we recommend getting your own gloves, wraps, mouthguard, and shin guards \u2013 but nothing is needed on day one.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is MMA training safe for beginners? Will I have to spar or get hit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Safety comes first. Beginners focus on drilling and light-contact exercises \u2013 you won\u2019t be thrown into hard sparring. Any live work is supervised and matched to your experience level. Protective gear is always worn. More intense sparring is introduced gradually and only when you\u2019re ready. It\u2019s always optional.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Penn State students join your MMA classes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. A large part of our membership is Penn State students and staff. We\u2019re minutes from campus with free parking, and evening and Saturday class times fit a student schedule. Coach Derek also leads the PSU Boxing Club, so you\u2019re training under someone who knows the Penn State community.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer MMA classes for teens or kids?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our MMA classes are open to teens ages 16 and up, training alongside adults with coaching adjusted to their level. For younger children, we offer separate youth boxing programs focused on foundational skills in a safe, age-appropriate setting. Reach out and we\u2019ll help find the right fit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will I get to compete or fight if I train here?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'That\u2019s completely up to you. Many members train for fitness, confidence, and personal development without ever competing. If you do want to compete in MMA, boxing, or grappling, Coach Derek has experience preparing fighters for amateur competition and will guide you when you\u2019re ready. No pressure either way.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get started and try a class?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your first class is free. Contact us to schedule your intro class, or drop in a few minutes early before any MMA session. We\u2019ll get you oriented, introduce you to the coach, and have you training with the group on day one.',
      },
    },
  ],
};

export const schemas = [
  businessSchema,
  breadcrumb([
    { name: 'Home', url: SITE_URL },
    { name: 'MMA Classes', url: `${SITE_URL}/pages/courses/mma/` },
  ]),
  mmaCourse,
  mmaFaq,
];
