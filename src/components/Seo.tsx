import { Helmet } from 'react-helmet-async';

type SeoProps = {
  title: string;
  description: string;
  path: string;
  jsonLd?: unknown;
  breadcrumbs?: Array<{ name: string; path: string }>;
  includeWebSiteJsonLd?: boolean;
};

const SITE_URL = 'https://cartpathcleaning.com';
const SITE_NAME = 'Cart Path Cleaning';
const OG_IMAGE = `${SITE_URL}/hero.jpg`;

export default function Seo({ title, description, path, jsonLd, breadcrumbs, includeWebSiteJsonLd }: SeoProps) {
  const url = `${SITE_URL}${path}`;

  const jsonLdBlocks: unknown[] = [];

  if (includeWebSiteJsonLd) {
    jsonLdBlocks.push({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
    });
  }

  if (breadcrumbs && breadcrumbs.length > 0) {
    jsonLdBlocks.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((b, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: b.name,
        item: `${SITE_URL}${b.path}`,
      })),
    });
  }

  if (Array.isArray(jsonLd)) {
    jsonLdBlocks.push(...jsonLd);
  } else if (jsonLd) {
    jsonLdBlocks.push(jsonLd);
  }

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={OG_IMAGE} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      {jsonLdBlocks.map((block, idx) => (
        <script key={idx} type="application/ld+json">
          {JSON.stringify(block)}
        </script>
      ))}
    </Helmet>
  );
}
