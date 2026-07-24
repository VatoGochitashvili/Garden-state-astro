export const DOMAIN = "https://gardenstatelocksmithnj.com";
export const PHONE_DISPLAY = "(856) 588-0580";
export const PHONE_TEL = "+18565880580";

export const organizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${DOMAIN}/#organization`,
  name: "Garden State Locksmith",
  url: DOMAIN,
  logo: `${DOMAIN}/icon-96.png`,
  image: `${DOMAIN}/opengraph.jpg`,
  telephone: PHONE_TEL,
  areaServed: "New Jersey",
  sameAs: [
    "https://www.facebook.com/gardenstate-locksmith",
    "https://www.google.com/maps/place/Garden+State+Locksmith",
  ],
});

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${DOMAIN}/#website`,
  url: DOMAIN,
  name: "Garden State Locksmith",
  publisher: { "@id": `${DOMAIN}/#organization` },
});

export const localBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Locksmith",
  name: "Garden State Locksmith",
  url: DOMAIN,
  telephone: PHONE_TEL,
  description:
    "7 AM – 10 PM licensed and insured locksmith serving all of New Jersey. Emergency lockouts, residential security, commercial access control, and automotive key services.",
  image: `${DOMAIN}/opengraph.jpg`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressRegion: "NJ",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "39.9526",
    longitude: "-75.1652",
  },
  areaServed: {
    "@type": "State",
    name: "New Jersey",
    sameAs: "https://en.wikipedia.org/wiki/New_Jersey",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"],
      opens: "07:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "07:00",
      closes: "18:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Locksmith Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Emergency Locksmith" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Residential Locksmith" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Locksmith" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Automotive Locksmith" } },
    ],
  },
  sameAs: [
    "https://www.facebook.com/gardenstate-locksmith",
    "https://www.google.com/maps/place/Garden+State+Locksmith",
  ],
});

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${DOMAIN}${item.path}`,
    })),
  };
}

export function faqSchema(faqs: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function absoluteImage(src: string): string {
  return src.startsWith("http") ? src : `${DOMAIN}${src}`;
}
