const siteUrl = 'https://diicsacv.com';

export function GET() {
  return new Response(`User-agent: *
Allow: /
Disallow: /diicsacv.com/

Sitemap: ${siteUrl}/sitemap.xml
`, {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
    },
  });
}
