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
  serviceType: "Furniture Assembly",
  description: "Expert furniture assembly and installation to save you time and effort in Saudi Arabia.",
  url: "https://azanmovers.vercel.app/services/furniture-assembly",
  image: "https://azanmovers.vercel.app/images/furniture-assembly.jpg"
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
      name: "Furniture Assembly",
      item: "https://azanmovers.vercel.app/services/furniture-assembly"
    }
  ]
};

export const metadata = {
  title: "Furniture Assembly & Installation in Saudi Arabia | Azan Packers & Movers",
  description:
    "Professional furniture assembly and installation services in Saudi Arabia. Let Azan Packers & Movers handle your furniture setup with expertise.",
  canonical: "https://azanmovers.vercel.app/services/furniture-assembly",
  robots: "index, follow",
  openGraph: {
    type: "article",
    title: "Furniture Assembly & Installation in Saudi Arabia | Azan Packers & Movers",
    description:
      "Professional furniture assembly and installation services in Saudi Arabia. Let Azan Packers & Movers handle your furniture setup with expertise.",
    url: "https://azanmovers.vercel.app/services/furniture-assembly",
    images: ["https://azanmovers.vercel.app/images/furniture-assembly.jpg"],
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

export default function FurnitureAssemblyLayout({ children }) {
  return <>{children}</>;
}
