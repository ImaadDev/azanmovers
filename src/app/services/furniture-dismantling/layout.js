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
  url: "https://azanmovers.vercel.app/services/furniture-dismantling",
  image: "https://azanmovers.vercel.app/images/furniture-dismantling.jpg"
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
      name: "Furniture Dismantling",
      item: "https://azanmovers.vercel.app/services/furniture-dismantling"
    }
  ]
};

export const metadata = {
  title: "Furniture Dismantling & Assembly in Saudi Arabia | Azan Packers & Movers",
  description:
    "Professional furniture dismantling and reassembly services in Saudi Arabia. Ensure safe transport of your valuable furniture with Azan Packers & Movers.",
  canonical: "https://azanmovers.vercel.app/services/furniture-dismantling",
  robots: "index, follow",
  openGraph: {
    type: "article",
    title: "Furniture Dismantling & Assembly in Saudi Arabia | Azan Packers & Movers",
    description:
      "Professional furniture dismantling and reassembly services in Saudi Arabia. Ensure safe transport of your valuable furniture with Azan Packers & Movers.",
    url: "https://azanmovers.vercel.app/services/furniture-dismantling",
    images: ["https://azanmovers.vercel.app/images/furniture-dismantling.jpg"],
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
