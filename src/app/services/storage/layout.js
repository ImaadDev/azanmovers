const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: {
    "@type": "LocalBusiness",
    name: "Azan Packers & Movers",
    telephone: "+966551234567",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Al Aziziyah, Saudi Arabia",
      addressLocality: "Saudi Arabia",
      addressRegion: "Makkah Province",
      postalCode: "23334",
      addressCountry: "SA"
    }
  },
  serviceType: "Storage Solutions",
  description: "Secure and flexible storage solutions for short-term or long-term needs in Saudi Arabia.",
  url: "https://www.azanmovers.com/services/storage",
  image: "https://www.azanmovers.com/images/storage-solutions.jpg"
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.azanmovers.com"
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://www.azanmovers.com/services"
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Storage Solutions",
      item: "https://www.azanmovers.com/services/storage"
    }
  ]
};

export const metadata = {
  title: "Storage Solutions in Saudi Arabia | Azan Packers & Movers",
  description:
    "Secure and flexible storage solutions in Saudi Arabia for residential and commercial needs. Azan Packers & Movers offers short-term and long-term storage.",
  canonical: "https://www.azanmovers.com/services/storage",
  robots: "index, follow",
  openGraph: {
    type: "article",
    title: "Storage Solutions in Saudi Arabia | Azan Packers & Movers",
    description:
      "Secure and flexible storage solutions in Saudi Arabia for residential and commercial needs. Azan Packers & Movers offers short-term and long-term storage.",
    url: "https://www.azanmovers.com/services/storage",
    images: ["https://www.azanmovers.com/images/storage-solutions.jpg"],
  },
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

export default function StorageSolutionsLayout({ children }) {
  return <>{children}</>;
}
