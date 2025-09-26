const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Azan Packers & Movers",
  description:
    "Azan Packers & Movers – Trusted moving company in Saudi Arabia offering professional home, villa, office relocation, and furniture dismantling services.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Al Aziziyah, Saudi Arabia",
    addressLocality: "Saudi Arabia",
    addressRegion: "Makkah Province",
    postalCode: "23334",
    addressCountry: "SA",
  },
  telephone: "+966551234567",
  url: "https://www.azanmovers.com/about",
  openingHours: "Mo-Su 08:00-22:00",
  serviceType: ["Home Moving", "Villas Moving", "Office Relocation", "Furniture Dismantling"],
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.azanmovers.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About Us",
      item: "https://www.azanmovers.com/about",
    },
  ],
};

export const metadata = {
  title: "About Azan Packers & Movers – Trusted Movers in Saudi Arabia",
  description:
    "Learn about Azan Packers & Movers, a trusted moving company in Saudi Arabia since 2015. Discover our story, mission, and commitment to quality service for homes, villas, and offices.",
  robots: "index, follow",
  canonical: "https://www.azanmovers.com/about",

  // Open Graph / Facebook
  openGraph: {
    type: "website",
    title: "About Azan Packers & Movers – Trusted Movers in Saudi Arabia",
    description:
      "Learn about Azan Packers & Movers – Saudi Arabia's professional movers for homes, villas, offices, and furniture.",
    url: "https://www.azanmovers.com/about",
    images: ["https://www.azanmovers.com/azanmovers-logo.png"],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "About Azan Packers & Movers – Trusted Movers in Saudi Arabia",
    description:
      "Professional moving company in Saudi Arabia since 2015. Home, villa, office moving & furniture dismantling.",
    images: ["https://www.azanmovers.com/azanmovers-logo.png"],
  },

  // Structured Data
  script: [
    {
      type: "application/ld+json",
      json: structuredData
    },
    {
      type: "application/ld+json",
      json: breadcrumbData
    }
  ],
};

export default function AboutLayout({ children }) {
  return <>{children}</>;
}

