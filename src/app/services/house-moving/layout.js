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
  url: "https://azanmovers.vercel.app/services/house-moving",
  image: "https://azanmovers.vercel.app/images/house-moving.jpg"
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
      name: "House Moving",
      item: "https://azanmovers.vercel.app/services/house-moving"
    }
  ]
};

export const metadata = {
  title: "House Moving Services in Saudi Arabia | Azan Packers & Movers",
  description:
    "Experience seamless house moving in Saudi Arabia with Azan Packers & Movers. Professional, safe, and efficient relocation solutions for your home.",
  canonical: "https://azanmovers.vercel.app/services/house-moving",
  robots: "index, follow",
  openGraph: {
    type: "article",
    title: "House Moving Services in Saudi Arabia | Azan Packers & Movers",
    description:
      "Experience seamless house moving in Saudi Arabia with Azan Packers & Movers. Professional, safe, and efficient relocation solutions for your home.",
    url: "https://azanmovers.vercel.app/services/house-moving",
    images: ["https://azanmovers.vercel.app/images/house-moving.jpg"],
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
