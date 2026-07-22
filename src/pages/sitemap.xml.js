import { pages } from '../data/site.js';

const siteUrl = 'https://diicsacv.com';
const now = new Date().toISOString();

const routes = [
  { path: '/', alternates: { es: '/', en: '/en/' } },
  { path: '/en/', alternates: { es: '/', en: '/en/' } },
  ...pages.flatMap((page) => [
    {
      path: `/${page.slug}/`,
      alternates: { es: `/${page.slug}/`, en: `/en/${page.slug}/` },
    },
    {
      path: `/en/${page.slug}/`,
      alternates: { es: `/${page.slug}/`, en: `/en/${page.slug}/` },
    },
  ]),
];

const absolute = (path) => new URL(path, siteUrl).toString();
const escapeXml = (value) =>
  value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

export function GET() {
  const urls = routes
    .map((route) => {
      const alternates = [
        `<xhtml:link rel="alternate" hreflang="es-MX" href="${escapeXml(absolute(route.alternates.es))}" />`,
        `<xhtml:link rel="alternate" hreflang="en" href="${escapeXml(absolute(route.alternates.en))}" />`,
        `<xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(absolute(route.alternates.es))}" />`,
      ].join('');

      return `<url><loc>${escapeXml(absolute(route.path))}</loc><lastmod>${now}</lastmod>${alternates}</url>`;
    })
    .join('');

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}</urlset>
`, {
    headers: {
      'content-type': 'application/xml; charset=utf-8',
    },
  });
}
