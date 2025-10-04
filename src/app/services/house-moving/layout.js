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
  serviceType: "House Moving",
  description: "Safe and efficient house moving services for families in Saudi Arabia.",
  url: "https://www.azanmovers.com/services/house-moving",
  image: "https://www.azanmovers.com/images/house-moving.jpg"
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
      name: "House Moving",
      item: "https://www.azanmovers.com/services/house-moving"
    }
  ]
};

export const metadata = {
  title: "🏆 Best House Moving Services in Saudi Arabia | Top Movers in Jeddah | Azan Packers & Movers",
  description:
    "🏆 #1 Best House Moving Services in Saudi Arabia! Experience seamless house moving in Jeddah with Azan Packers & Movers. Professional, safe, and efficient relocation solutions for your home. Trusted by thousands of families!",
  keywords: [
    "best house moving services Saudi Arabia",
    "best house movers in Jeddah",
    "top house moving company Saudi Arabia",
    "professional house movers Jeddah",
    "house moving services Saudi Arabia",
    "home relocation Jeddah",
    "villa moving services Saudi Arabia",
    "residential moving Jeddah",
    "house shifting Saudi Arabia",
    "home moving company Jeddah",
    "best residential movers Saudi Arabia",
    "top house movers Jeddah",
    "professional home moving Saudi Arabia",
    "reliable house movers Jeddah"
  ],
  canonical: "https://www.azanmovers.com/services/house-moving",
  robots: "index, follow",
  openGraph: {
    type: "article",
    title: "🏆 Best House Moving Services in Saudi Arabia | Top Movers in Jeddah | Azan Packers & Movers",
    description:
      "🏆 #1 Best House Moving Services in Saudi Arabia! Experience seamless house moving in Jeddah with Azan Packers & Movers. Professional, safe, and efficient relocation solutions for your home. Trusted by thousands of families!",
    url: "https://www.azanmovers.com/services/house-moving",
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

export default function HouseMovingLayout({ children }) {
  return <>{children}</>;
}
