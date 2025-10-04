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
  serviceType: "Furniture Dismantling",
  description: "Expert furniture dismantling and assembly to protect your belongings in Saudi Arabia.",
  url: "https://www.azanmovers.com/services/furniture-dismantling",
  image: "https://www.azanmovers.com/images/furniture-dismantling.jpg"
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
      name: "Furniture Dismantling",
      item: "https://www.azanmovers.com/services/furniture-dismantling"
    }
  ]
};

export const metadata = {
  title: "🏆 Best Furniture Dismantling & Assembly in Saudi Arabia | Top Movers in Jeddah | Azan Packers & Movers",
  description:
    "🏆 #1 Best Furniture Dismantling & Assembly Services in Saudi Arabia! Professional furniture dismantling and reassembly services in Jeddah. Ensure safe transport of your valuable furniture with Azan Packers & Movers. Expert service trusted by thousands!",
  keywords: [
    "best furniture dismantling Saudi Arabia",
    "best furniture assembly Jeddah",
    "top furniture dismantling company Saudi Arabia",
    "professional furniture assembly Jeddah",
    "furniture dismantling services Saudi Arabia",
    "furniture assembly Jeddah",
    "furniture disassembly Saudi Arabia",
    "furniture reassembly Jeddah",
    "furniture dismantling company Saudi Arabia",
    "furniture assembly services Jeddah",
    "best furniture movers Saudi Arabia",
    "top furniture dismantling Jeddah",
    "professional furniture services Saudi Arabia",
    "reliable furniture assembly Jeddah"
  ],
  canonical: "https://www.azanmovers.com/services/furniture-dismantling",
  robots: "index, follow",
  openGraph: {
    type: "article",
    title: "🏆 Best Furniture Dismantling & Assembly in Saudi Arabia | Top Movers in Jeddah | Azan Packers & Movers",
    description:
      "🏆 #1 Best Furniture Dismantling & Assembly Services in Saudi Arabia! Professional furniture dismantling and reassembly services in Jeddah. Ensure safe transport of your valuable furniture with Azan Packers & Movers. Expert service trusted by thousands!",
    url: "https://www.azanmovers.com/services/furniture-dismantling",
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

export default function FurnitureDismantlingLayout({ children }) {
  return <>{children}</>;
}
