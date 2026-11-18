import { getCollection } from 'astro:content';
import { CATEGORY_LABELS, SITE_URL } from '../consts';
import { getPublishedPosts } from '../utils/posts';

export async function GET() {
  const posts = getPublishedPosts(await getCollection('posts'));
  const now = new Date().toISOString();
  const staticPaths = [
    '/',
    '/programs/',
    '/categories/',
    ...Object.keys(CATEGORY_LABELS).map((key) => `/categories/${key}/`),
    '/about/'
  ];

  const urls = [
    ...staticPaths.map((path) => ({ loc: `${SITE_URL}${path}`, lastmod: now })),
    ...posts.map((post) => ({
      loc: `${SITE_URL}/posts/${post.data.slug}/`,
      lastmod: (post.data.updatedDate ?? post.data.date).toISOString()
    }))
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url>\n    <loc>${url.loc}</loc>\n    <lastmod>${url.lastmod}</lastmod>\n  </url>`).join('\n')}
</urlset>`;

  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
