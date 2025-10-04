const structuredData = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: "Azan Packers & Movers",
  alternateName: "Azan Movers",
  description:
    "Best moving company in Saudi Arabia since 2015. Professional house moving, office relocation, furniture dismantling, and storage services in Jeddah and across Saudi Arabia. Trusted by thousands of families and businesses.",
  foundingDate: "2015",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ibn Qasim Al Khawarizmi Al Bawadi",
    addressLocality: "Jeddah",
    addressRegion: "Makkah Province",
    postalCode: "23443",
    addressCountry: "SA",
  },
  telephone: "+966593694941",
  email: "info@azanmovers.com",
  url: "https://www.azanmovers.com/about",
  openingHours: "Mo-Su 08:00-22:00",
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "150",
    bestRating: "5",
    worstRating: "1"
  },
  serviceType: ["House Moving", "Office Relocation", "Furniture Dismantling", "Storage Solutions", "Packing Services"],
  areaServed: [
    {
      "@type": "City",
      name: "Jeddah"
    },
    {
      "@type": "Country",
      name: "Saudi Arabia"
    }
  ],
  slogan: "Saudi Arabia's Most Trusted Moving Company"
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
  title: "About Us | 🏆 Best Moving Company in Saudi Arabia | Top Movers in Jeddah | Azan Packers & Movers",
  description:
    "🏆 Learn about Azan Packers & Movers, Saudi Arabia's #1 best moving company since 2015! Discover our story, mission, and commitment to excellence in house moving, office relocation, and furniture services across Jeddah and Saudi Arabia. Trusted by thousands!",
  keywords: [
    "about Azan movers",
    "best moving company Saudi Arabia",
    "best movers in Jeddah",
    "top moving company Saudi Arabia",
    "professional movers Jeddah",
    "trusted packers and movers Saudi Arabia",
    "moving company history Saudi Arabia",
    "experienced movers Jeddah",
    "reliable moving services Saudi Arabia",
    "number 1 moving company Saudi Arabia",
    "leading movers Jeddah",
    "top packers and movers Saudi Arabia",
    "premium moving services Jeddah",
    "expert movers Saudi Arabia"
  ],
  robots: "index, follow",
  canonical: "https://www.azanmovers.com/about",

  // Open Graph / Facebook
  openGraph: {
    type: "website",
    title: "About Us | 🏆 Best Moving Company in Saudi Arabia | Top Movers in Jeddah | Azan Packers & Movers",
    description:
      "🏆 Learn about Azan Packers & Movers, Saudi Arabia's #1 best moving company since 2015! Professional house moving, office relocation, and furniture services across Jeddah and Saudi Arabia. Trusted by thousands!",
    url: "https://www.azanmovers.com/about",
    siteName: "Azan Packers & Movers - Best Movers in Saudi Arabia",
    images: ["https://www.azanmovers.com/azanmovers-logo.png"],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "About Us | 🏆 Best Moving Company in Saudi Arabia | Top Movers in Jeddah | Azan Packers & Movers",
    description:
      "🏆 Saudi Arabia's #1 best moving company since 2015! Professional house moving, office relocation, and furniture services across Jeddah and Saudi Arabia. Trusted by thousands!",
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

