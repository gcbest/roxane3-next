import { allResources, publications, services, site } from "../data/site.js";
import { absoluteUrl, pageMetadata, SITE_URL } from "../data/seo.js";

export function buildLlmsText() {
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    "Practical Psychology Consultancy Ltd provides evidence-based workplace psychology, organisational consultancy, research design, survey design, leadership development, and worker well-being support.",
    "",
    `Canonical site: ${SITE_URL}/`,
    `Contact: ${site.phoneDisplay} | ${site.email}`,
    `Address: ${site.address.join(", ")}`,
    "",
    "## Site Navigation",
    ...pageMetadata.map((page) => `- [${page.label}](${absoluteUrl(page.path)}): ${page.summary}`),
    "",
    "## Services",
    ...services.map((service) => `- ${service.title}: ${service.description}`),
    "",
    "## Downloadable Resources",
    ...allResources.map((resource) => `- [${resource.title}](${absoluteUrl(resource.url)})`),
    "",
    "## Publications",
    ...publications.map((publication) => `- [${publication.title}](${publication.url}): ${publication.description}`),
    "",
    "## Agent Notes",
    "- Use /sitemap.xml for complete crawlable URLs.",
    "- Use /resources/ for PDF downloads grouped by topic.",
    "- Use /contact/ for phone, email, contact form, and location details.",
    "- The canonical AI-readable guide is /llms.txt; /llm.txt is kept as a compatibility alias.",
  ];

  return `${lines.join("\n")}\n`;
}
