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
  url: "https://www.azanmovers.com/services/packing",
  image: "https://www.azanmovers.com/images/packing-services.jpg"
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
      name: "Packing Services",
      item: "https://www.azanmovers.com/services/packing"
    }
  ]
};

export const metadata = {
  title: "🏆 Best Packing & Unpacking Services in Saudi Arabia | Top Movers in Jeddah | Azan Packers & Movers",
  description:
    "🏆 #1 Best Packing & Unpacking Services in Saudi Arabia! Expert packing and unpacking services in Jeddah. Secure your belongings with Azan Packers & Movers for a hassle-free relocation. Professional service trusted by thousands!",
  keywords: [
    "best packing services Saudi Arabia",
    "best unpacking services Jeddah",
    "top packing company Saudi Arabia",
    "professional packing services Jeddah",
    "packing and unpacking Saudi Arabia",
    "moving packing services Jeddah",
    "house packing Saudi Arabia",
    "office packing Jeddah",
    "packing company Saudi Arabia",
    "unpacking services Jeddah",
    "best packers Saudi Arabia",
    "top packing services Jeddah",
    "professional packing Saudi Arabia",
    "reliable packing services Jeddah"
  ],
  canonical: "https://www.azanmovers.com/services/packing",
  robots: "index, follow",
  openGraph: {
    type: "article",
    title: "🏆 Best Packing & Unpacking Services in Saudi Arabia | Top Movers in Jeddah | Azan Packers & Movers",
    description:
      "🏆 #1 Best Packing & Unpacking Services in Saudi Arabia! Expert packing and unpacking services in Jeddah. Secure your belongings with Azan Packers & Movers for a hassle-free relocation. Professional service trusted by thousands!",
    url: "https://www.azanmovers.com/services/packing",
    images: ["https://www.azanmovers.com/azanmovers-logo.png"],
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
