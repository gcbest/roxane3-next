import { allResources, publications, services, site } from "./site.js";

export const SITE_URL = "https://www.practicalpsychologyconsultancy.com";

export const defaultSeoImage = "/assets/images/work-meeting.jpg";

export const pageMetadata = [
  {
    path: "/",
    label: "Home",
    title: `${site.name} | Workplace Psychology Consultancy`,
    description:
      "Evidence-based workplace psychology consultancy for worker well-being, mental health, leadership development, research, and organisational effectiveness.",
    summary:
      "Overview of Practical Psychology Consultancy's evidence-led support for organisations, teams, and individuals.",
    priority: "1.0",
  },
  {
    path: "/about/",
    label: "About",
    title: `About | ${site.name}`,
    description:
      "Learn about Practical Psychology Consultancy Ltd and Dr. Roxane Gervais, including evidence-based organisational support, research, assessment, and workplace well-being expertise.",
    summary:
      "Background on the consultancy, Dr. Roxane Gervais, and the team's evidence-based approach to organisational support.",
    priority: "0.8",
  },
  {
    path: "/services/",
    label: "Services",
    title: `Services | ${site.name}`,
    description:
      "Business support, research and survey design, work-related stress support, menopause workshops, and leadership development for organisations.",
    summary:
      "Consultancy services covering organisational support, workplace stress, menopause, leadership, and research design.",
    priority: "0.9",
  },
  {
    path: "/resources/",
    label: "Resources",
    title: `Resources | ${site.name}`,
    description:
      "Download Practical Psychology Consultancy PDFs on personal leadership, work stressors, coaching outcomes, and work effectiveness.",
    summary:
      "Downloadable PDF resources for leadership, mental health, coaching outcomes, and work effectiveness.",
    priority: "0.7",
  },
  {
    path: "/publications/",
    label: "Publications",
    title: `Publications | ${site.name}`,
    description:
      "Published occupational safety, health, and workplace psychology articles by Dr. Roxane Gervais on psychosocial risks, worker participation, recovery, presenteeism, and work culture.",
    summary:
      "Selected articles on psychosocial risks, work-related violence, worker participation, detachment, presenteeism, and workaholism.",
    priority: "0.7",
  },
  {
    path: "/contact/",
    label: "Contact",
    title: `Contact | ${site.name}`,
    description:
      "Contact Practical Psychology Consultancy Ltd in Kingston-Upon-Hull for workplace psychology, organisational consultancy, research, and well-being support.",
    summary:
      "Office address, phone, email, contact form, and map for Practical Psychology Consultancy Ltd.",
    priority: "0.8",
  },
];

export const pageMetaByPath = Object.fromEntries(pageMetadata.map((page) => [page.path, page]));

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).href;
}

export function normalizePath(pathname = "/") {
  if (pathname === "/") return pathname;
  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

export function getPageMeta(pathname = "/") {
  return pageMetaByPath[normalizePath(pathname)] ?? pageMetaByPath["/"];
}

export function getOrganizationSchema() {
  return {
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#organization`,
    name: site.name,
    url: SITE_URL,
    logo: absoluteUrl("/assets/images/practicalpsychologyconsultancy_logo.png"),
    image: absoluteUrl(defaultSeoImage),
    description: site.description,
    telephone: site.phoneDisplay,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Cherry Tree Court, 36 Ferensway",
      addressLocality: "Kingston-Upon-Hull",
      postalCode: "HU2 8NH",
      addressCountry: "GB",
    },
    founder: {
      "@type": "Person",
      name: "Dr. Roxane Gervais",
      image: absoluteUrl("/assets/images/roxy_transparent_background.png"),
      sameAs: ["https://www.linkedin.com/in/dr-roxane-gervais/"],
    },
    sameAs: site.socials.map((social) => social.href),
    knowsAbout: [
      "Workplace psychology",
      "Organisational development",
      "Worker well-being",
      "Work-related stress",
      "Leadership development",
      "Research and survey design",
      "Psychological assessment",
    ],
  };
}

export function getWebsiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: site.name,
    url: SITE_URL,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: "en-GB",
  };
}

export function getWebPageSchema(meta) {
  return {
    "@type": "WebPage",
    "@id": `${absoluteUrl(meta.path)}#webpage`,
    url: absoluteUrl(meta.path),
    name: meta.title,
    description: meta.description,
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@id": `${SITE_URL}/#organization`,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: absoluteUrl(defaultSeoImage),
    },
    inLanguage: "en-GB",
  };
}

export function getBreadcrumbSchema(meta) {
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: absoluteUrl("/"),
    },
  ];

  if (meta.path !== "/") {
    items.push({
      "@type": "ListItem",
      position: 2,
      name: meta.label,
      item: absoluteUrl(meta.path),
    });
  }

  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(meta.path)}#breadcrumb`,
    itemListElement: items,
  };
}

export function getPageSpecificSchemas(meta) {
  if (meta.path === "/services/") {
    return [
      {
        "@type": "OfferCatalog",
        "@id": `${absoluteUrl("/services/")}#services`,
        name: "Workplace psychology consultancy services",
        itemListElement: services.map((service, index) => ({
          "@type": "Offer",
          position: index + 1,
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.description,
            provider: {
              "@id": `${SITE_URL}/#organization`,
            },
          },
        })),
      },
    ];
  }

  if (meta.path === "/resources/") {
    return [
      {
        "@type": "CollectionPage",
        "@id": `${absoluteUrl("/resources/")}#resources`,
        name: "Workplace psychology resources",
        hasPart: allResources.map((resource) => ({
          "@type": "DigitalDocument",
          name: resource.title,
          url: absoluteUrl(resource.url),
          encodingFormat: "application/pdf",
        })),
      },
    ];
  }

  if (meta.path === "/publications/") {
    return [
      {
        "@type": "CollectionPage",
        "@id": `${absoluteUrl("/publications/")}#publications`,
        name: "Workplace psychology publications",
        hasPart: publications.map((publication) => ({
          "@type": "ScholarlyArticle",
          headline: publication.title,
          description: publication.description,
          url: publication.url,
          author: {
            "@type": "Person",
            name: "Dr. Roxane Gervais",
          },
        })),
      },
    ];
  }

  if (meta.path === "/contact/") {
    return [
      {
        "@type": "ContactPage",
        "@id": `${absoluteUrl("/contact/")}#contact`,
        name: "Contact Practical Psychology Consultancy",
        url: absoluteUrl("/contact/"),
        mainEntity: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
    ];
  }

  return [];
}
