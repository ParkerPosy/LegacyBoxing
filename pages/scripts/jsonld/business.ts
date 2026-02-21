import { SITE_URL, BUSINESS_NAME, postalAddress, geoCoordinates } from './shared';

/**
 * Main business JSON-LD schema — injected on every page.
 * Multi-type: SportsActivityLocation + ExerciseGym + MartialArtsSchool.
 */
export const businessSchema = {
  '@context': 'https://schema.org' as const,
  '@type': ['SportsActivityLocation', 'ExerciseGym', 'MartialArtsSchool'] as const,
  name: BUSINESS_NAME,
  alternateName: 'Legacy Boxing and Combat Sports Academy',
  description:
    'Legacy Boxing & Combat Sports Academy is a premier MMA and boxing gym in State College, PA, serving Centre County and Penn State students. We offer structured classes in boxing, women\u2019s boxing, youth boxing (ages 8\u201316), and real mixed martial arts for adults and teens. Our MMA program is built on Kosen Judo grappling, Muay Thai striking, and wrestling \u2013 a system that sets us apart from every other gym in the area. All classes are led by USA Boxing and USA Judo certified coaches, including the head coach of the Penn State Boxing Club. Private training is available for beginners, athletes, and competitive fighters. Call or visit today \u2013 your first class is free.',
  image: `${SITE_URL}/og-image.png`,
  logo: `${SITE_URL}/legacy-boxing-logo.webp`,
  url: SITE_URL,
  telephone: '+1-814-599-1682',
  email: 'legacyboxing@proton.me',
  foundingDate: '2024-01',
  address: postalAddress,
  geo: geoCoordinates,
  areaServed: [
    { '@type': 'City', name: 'State College, PA' },
    { '@type': 'AdministrativeArea', name: 'Centre County, PA' },
    { '@type': 'Place', name: 'University Park, State College, PA' },
    { '@type': 'CollegeOrUniversity', name: 'Penn State University' },
    { '@type': 'City', name: 'Bellefonte, PA' },
    { '@type': 'City', name: 'Boalsburg, PA' },
    { '@type': 'City', name: 'Lemont, PA' },
    { '@type': 'City', name: 'Pine Grove Mills, PA' },
    { '@type': 'City', name: 'Port Matilda, PA' },
    { '@type': 'City', name: 'Pleasant Gap, PA' },
    { '@type': 'City', name: 'Centre Hall, PA' },
    { '@type': 'City', name: 'Milesburg, PA' },
    { '@type': 'City', name: 'Julian, PA' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Thursday'],
      opens: '09:30',
      closes: '19:45',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Wednesday',
      opens: '09:30',
      closes: '20:45',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Friday',
      opens: '09:30',
      closes: '18:15',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '11:30',
      closes: '13:30',
    },
  ],
  priceRange: '$60\u2013$125/month',
  currenciesAccepted: 'USD',
  paymentAccepted: 'Cash, Credit Card, Debit Card, Check, Visa, MasterCard',
  founder: {
    '@type': 'Person',
    name: 'Derek Roth',
    jobTitle: 'Head Coach & Founder',
    knowsAbout: [
      'Boxing',
      'MMA',
      'Muay Thai',
      'Kosen Judo',
      'Judo',
      'Brazilian Jiu-Jitsu',
      'Kickboxing',
      'Wrestling',
    ],
    award: '2023 Pennsylvania USA Boxing Coach of the Year',
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Certification',
        name: 'USA Boxing Certified Coach',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Certification',
        name: 'USA Judo Certified Instructor',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Belt Rank',
        name: 'USA Judo Brown Belt',
      },
    ],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Penn State University',
    },
    memberOf: [
      { '@type': 'Organization', name: 'USA Boxing' },
      { '@type': 'Organization', name: 'USA Judo' },
    ],
  },
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Private Training Available', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Youth Boxing Program', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'First Class Free', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Certified USA Boxing Coaches', value: true },
    { '@type': 'LocationFeatureSpecification', name: "Women's Boxing Classes", value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Free Parking', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'On-site Parking', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Wheelchair Accessible Parking', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Wheelchair Accessible Entrance', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Restroom', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Gender-Neutral Restroom', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Kids Discounts', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'LGBTQ+ Friendly', value: true },
  ],
  makesOffer: [
    {
      '@type': 'Offer',
      name: 'Boxing Membership',
      description:
        "Full access to all boxing classes for adults, including women's boxing. First class is free.",
      price: '80.00',
      priceCurrency: 'USD',
    },
    {
      '@type': 'Offer',
      name: "Women's Boxing",
      description:
        "Dedicated women's boxing classes in a supportive, empowering environment. Open to all skill levels. Included with boxing membership.",
      price: '80.00',
      priceCurrency: 'USD',
    },
    {
      '@type': 'Offer',
      name: 'MMA Membership',
      description:
        'Full access to MMA classes built on Kosen Judo grappling, Muay Thai striking, and wrestling. USA Judo certified coaching.',
      price: '80.00',
      priceCurrency: 'USD',
    },
    {
      '@type': 'Offer',
      name: 'Boxing & MMA Combo Membership',
      description: 'Full access to all boxing and MMA classes. Best value for complete training.',
      price: '125.00',
      priceCurrency: 'USD',
    },
    {
      '@type': 'Offer',
      name: 'Youth Boxing Program',
      description:
        'Safe, structured boxing classes for ages 8\u201316. Build confidence, coordination, and real technique.',
      price: '60.00',
      priceCurrency: 'USD',
    },
    {
      '@type': 'Offer',
      name: 'Private Training Session',
      description:
        '1-on-1 private coaching in boxing, MMA, Muay Thai, Judo, or Jiu-Jitsu with Coach Roth.',
      price: '70.00',
      priceCurrency: 'USD',
    },
  ],
  sameAs: [
    'https://www.instagram.com/legacy_boxing_combat_sports/',
    'https://www.facebook.com/legacyboxingandcombatsportsacademy/',
    'https://www.yelp.com/biz/legacy-boxing-and-combat-sports-academy-no-title',
    'https://www.google.com/maps/place/Legacy+Boxing+and+Combat+Sports+Academy',
  ],
};
