import type { BreadcrumbList } from './types';

interface BreadcrumbItem {
  name: string;
  url: string;
}

/** Builds a typed BreadcrumbList schema from an ordered list of items. */
export function breadcrumb(items: BreadcrumbItem[]): BreadcrumbList {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem' as const,
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
