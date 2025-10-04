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
  url: "https://www.azanmovers.com/services/office-relocation",
  image: "https://www.azanmovers.com/images/office-relocation.jpg"
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
      name: "Office Relocation",
      item: "https://www.azanmovers.com/services/office-relocation"
    }
  ]
};

export const metadata = {
  title: "🏆 Best Office Relocation Services in Saudi Arabia | Top Movers in Jeddah | Azan Packers & Movers",
  description:
    "🏆 #1 Best Office Relocation Services in Saudi Arabia! Professional office relocation services in Jeddah by Azan Packers & Movers. Ensure minimal business disruption with our efficient moving solutions. Trusted by businesses across Saudi Arabia!",
  keywords: [
    "best office relocation services Saudi Arabia",
    "best office movers in Jeddah",
    "top office moving company Saudi Arabia",
    "professional office movers Jeddah",
    "office relocation services Saudi Arabia",
    "business moving Jeddah",
    "commercial moving services Saudi Arabia",
    "office shifting Jeddah",
    "corporate moving Saudi Arabia",
    "office moving company Jeddah",
    "best commercial movers Saudi Arabia",
    "top office movers Jeddah",
    "professional business moving Saudi Arabia",
    "reliable office movers Jeddah"
  ],
  canonical: "https://www.azanmovers.com/services/office-relocation",
  robots: "index, follow",
  openGraph: {
    type: "article",
    title: "🏆 Best Office Relocation Services in Saudi Arabia | Top Movers in Jeddah | Azan Packers & Movers",
    description:
      "🏆 #1 Best Office Relocation Services in Saudi Arabia! Professional office relocation services in Jeddah by Azan Packers & Movers. Ensure minimal business disruption with our efficient moving solutions. Trusted by businesses across Saudi Arabia!",
    url: "https://www.azanmovers.com/services/office-relocation",
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

export default function OfficeRelocationLayout({ children }) {
  return <>{children}</>;
}
