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
  serviceType: "Office Relocation",
  description: "Professional office relocation ensuring minimal downtime for your business in Saudi Arabia.",
  url: "https://azanmovers.vercel.app/services/office-relocation",
  image: "https://azanmovers.vercel.app/images/office-relocation.jpg"
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://azanmovers.vercel.app"
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://azanmovers.vercel.app/services"
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Office Relocation",
      item: "https://azanmovers.vercel.app/services/office-relocation"
    }
  ]
};

export const metadata = {
  title: "Office Relocation Services in Saudi Arabia | Azan Packers & Movers",
  description:
    "Professional office relocation services in Saudi Arabia by Azan Packers & Movers. Ensure minimal business disruption with our efficient moving solutions.",
  canonical: "https://azanmovers.vercel.app/services/office-relocation",
  robots: "index, follow",
  openGraph: {
    type: "article",
    title: "Office Relocation Services in Saudi Arabia | Azan Packers & Movers",
    description:
      "Professional office relocation services in Saudi Arabia by Azan Packers & Movers. Ensure minimal business disruption with our efficient moving solutions.",
    url: "https://azanmovers.vercel.app/services/office-relocation",
    images: ["https://azanmovers.vercel.app/images/office-relocation.jpg"],
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

export default function OfficeRelocationLayout({ children }) {
  return <>{children}</>;
}
