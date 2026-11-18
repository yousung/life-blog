export async function GET() {
  return new Response(`User-agent: *\nAllow: /\nSitemap: https://health.lovizu.com/sitemap.xml\nSitemap: https://health.lovizu.com/sitemap-index.xml\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  });
}
