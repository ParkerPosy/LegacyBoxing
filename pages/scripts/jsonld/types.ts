/**
 * Strict JSON-LD types that enforce Google Rich Results required fields.
 *
 * These are intentionally stricter than schema.org (where most fields are optional).
 * Google Search Console flags missing required fields — these types catch that at
 * compile time so `tsc` fails before a bad schema reaches production.
 *
 * @see https://developers.google.com/search/docs/appearance/structured-data/event
 * @see https://developers.google.com/search/docs/appearance/structured-data/course
 * @see https://developers.google.com/search/docs/appearance/structured-data/faqpage
 * @see https://developers.google.com/search/docs/appearance/structured-data/article
 */

// ─── Shared building blocks ──────────────────────────────────────────────────

export interface PostalAddress {
  '@type': 'PostalAddress';
  streetAddress?: string;
  addressLocality: string;
  addressRegion: string;
  postalCode?: string;
  addressCountry: string;
}

export interface Place {
  '@type': 'Place';
  name: string;
  address: PostalAddress;
}

export interface GeoCoordinates {
  '@type': 'GeoCoordinates';
  latitude: string;
  longitude: string;
}

export interface Organization {
  '@type': 'Organization' | 'SportsActivityLocation';
  name: string;
  url?: string;
  sameAs?: string;
  logo?: string;
}

export interface Offer {
  '@type': 'Offer';
  url?: string;
  price?: string;
  priceCurrency?: string;
  availability?: string;
  category?: string;
  name?: string;
  description?: string;
}

// ─── Event types (Google-required: name, startDate, location) ────────────────

/**
 * SportsEvent with fields that Google requires for Event rich results.
 * Missing `startDate` or `location` will cause a TypeScript error.
 */
export interface SportsEvent {
  '@context': 'https://schema.org';
  '@type': 'SportsEvent';
  name: string;
  description?: string;
  startDate: string;
  endDate?: string;
  eventStatus?: string;
  eventAttendanceMode?: string;
  location: Place;
  organizer?: Organization;
  superEvent?: NestedSportsEvent;
  offers?: Offer;
  image?: string | string[];
  performer?: Organization;
}

/**
 * Nested SportsEvent (e.g. superEvent) — Google validates these too.
 * Missing `startDate` or `location` here is what caused the Search Console error.
 */
export interface NestedSportsEvent {
  '@type': 'SportsEvent';
  name: string;
  startDate: string;
  endDate?: string;
  location: Place;
  url?: string;
}

// ─── Course (Google-required: name, description, provider) ──────────────────

export interface CourseInstance {
  '@type': 'CourseInstance';
  courseMode: string;
  location: Place;
}

export interface Course {
  '@context': 'https://schema.org';
  '@type': 'Course';
  name: string;
  description: string;
  provider: Organization;
  hasCourseInstance?: CourseInstance;
  offers?: Offer;
}

// ─── FAQ (Google-required: mainEntity with Question + Answer) ────────────────

export interface Question {
  '@type': 'Question';
  name: string;
  acceptedAnswer: {
    '@type': 'Answer';
    text: string;
  };
}

export interface FAQPage {
  '@context': 'https://schema.org';
  '@type': 'FAQPage';
  mainEntity: Question[];
}

// ─── Article (Google-required: headline, datePublished, author) ──────────────

/**
 * Google requires `image` for Article rich results.
 * `publisher` must include `logo` for the knowledge panel.
 */
export interface Article {
  '@context': 'https://schema.org';
  '@type': 'Article' | 'NewsArticle' | 'BlogPosting';
  headline: string;
  description?: string;
  datePublished: string;
  dateModified?: string;
  author: Organization | { '@type': 'Person'; name: string };
  publisher:
    | Organization
    | {
        '@type': 'Organization';
        name: string;
        url?: string;
        logo?: string | { '@type': 'ImageObject'; url: string };
      };
  mainEntityOfPage?: { '@type': 'WebPage'; '@id': string };
  image: string | string[];
}

// ─── BreadcrumbList ──────────────────────────────────────────────────────────

export interface ListItem {
  '@type': 'ListItem';
  position: number;
  name: string;
  item: string;
}

export interface BreadcrumbList {
  '@context': 'https://schema.org';
  '@type': 'BreadcrumbList';
  itemListElement: ListItem[];
}

// ─── WebSite (site identity signal) ──────────────────────────────────────────

export interface WebSite {
  '@context': 'https://schema.org';
  '@type': 'WebSite';
  '@id'?: string;
  name: string;
  url: string;
  publisher?: { '@id': string };
}

// ─── Service (private training, 1-on-1 coaching) ────────────────────────────

export interface Service {
  '@context': 'https://schema.org';
  '@type': 'Service';
  name: string;
  description: string;
  provider: Organization;
  areaServed?: string;
  serviceType?: string;
  offers?: Offer;
}

// ─── Union type for schema exports ───────────────────────────────────────────

export type JsonLdSchema =
  | SportsEvent
  | Course
  | FAQPage
  | Article
  | BreadcrumbList
  | WebSite
  | Service
  | Record<string, unknown>;
