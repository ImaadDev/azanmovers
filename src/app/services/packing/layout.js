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
  serviceType: "Packing Services",
  description: "Professional packing and unpacking services for a stress-free move in Saudi Arabia.",
  url: "https://azanmovers.vercel.app/services/packing",
  image: "https://azanmovers.vercel.app/images/packing-services.jpg"
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
      name: "Packing Services",
      item: "https://azanmovers.vercel.app/services/packing"
    }
  ]
};

export const metadata = {
  title: "Packing & Unpacking Services in Saudi Arabia | Azan Packers & Movers",
  description:
    "Expert packing and unpacking services in Saudi Arabia. Secure your belongings with Azan Packers & Movers for a hassle-free relocation.",
  canonical: "https://azanmovers.vercel.app/services/packing",
  robots: "index, follow",
  openGraph: {
    type: "article",
    title: "Packing & Unpacking Services in Saudi Arabia | Azan Packers & Movers",
    description:
      "Expert packing and unpacking services in Saudi Arabia. Secure your belongings with Azan Packers & Movers for a hassle-free relocation.",
    url: "https://azanmovers.vercel.app/services/packing",
    images: ["https://azanmovers.vercel.app/images/packing-services.jpg"],
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

export default function PackingServicesLayout({ children }) {
  return <>{children}</>;
}
