import { allResources } from "../data/site.js";
import { absoluteUrl, pageMetadata } from "../data/seo.js";

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&apos;");
}

function urlEntry({ loc, lastmod, changefreq = "monthly", priority = "0.6" }) {
  return [
    "  <url>",
    `    <loc>${escapeXml(loc)}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    "  </url>",
  ].join("\n");
}

export function GET() {
  const lastmod = new Date().toISOString();
  const entries = [
    ...pageMetadata.map((page) => ({
      loc: absoluteUrl(page.path),
      lastmod,
      priority: page.priority,
    })),
    ...allResources.map((resource) => ({
      loc: absoluteUrl(resource.url),
      lastmod,
      changefreq: "yearly",
      priority: "0.4",
    })),
    {
      loc: absoluteUrl("/llms.txt"),
      lastmod,
      changefreq: "monthly",
      priority: "0.3",
    },
  ];

  const body = [
    "<?xml version=\"1.0\" encoding=\"UTF-8\"?>",
    "<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">",
    ...entries.map(urlEntry),
    "</urlset>",
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
