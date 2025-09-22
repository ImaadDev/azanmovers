const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://azanmovers.vercel.app#business",
  name: "Azan Packers & Movers",
  description:
    "Azan Packers & Movers in Saudi Arabia provides professional home, villa, office relocation, and furniture dismantling services across Saudi Arabia.",
  image: "https://azanmovers.vercel.app/logo.png", // replace with your logo URL
  address: {
    "@type": "PostalAddress",
    streetAddress: "Al Aziziyah, Saudi Arabia",
    addressLocality: "Saudi Arabia",
    addressRegion: "Makkah Province",
    postalCode: "23334",
    addressCountry: "SA"
  },
  telephone: "+966551234567",
  email: "info@azanmovers.com",
  url: "https://azanmovers.vercel.app",
  geo: {
    "@type": "GeoCoordinates",
    latitude: "21.543333", // Jeddah coordinates
    longitude: "39.172778"
  },
  openingHours: "Mo-Su 08:00-22:00",
  sameAs: [
    "https://www.facebook.com/azanmovers",
    "https://www.instagram.com/azanmovers",
    "https://twitter.com/azanmovers"
  ]
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
      name: "Contact",
      item: "https://azanmovers.vercel.app/contact"
    }
  ]
};

export const metadata = {
  title: "Contact Azan Packers & Movers – Best Moving Company in Saudi Arabia",
  description:
    "Contact Azan Packers & Movers in Saudi Arabia for house shifting, villa relocation, office relocation, and furniture moving. Call us today for a free moving quote!",
  robots: "index, follow",
  canonical: "https://azanmovers.vercel.app/contact",

  // Open Graph / Facebook
  openGraph: {
    type: "website",
    title: "Contact Azan Packers & Movers – Saudi Arabia",
    description:
      "Get in touch with Azan Packers & Movers in Saudi Arabia for reliable and efficient moving services for homes, villas, and offices.",
    url: "https://azanmovers.vercel.app/contact",
    images: ["https://azanmovers.vercel.app/logo.png"],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Contact Azan Packers & Movers – Saudi Arabia",
    description:
      "Reach out to Azan Packers & Movers in Saudi Arabia for all your relocation needs. Free quotes available!",
    images: ["https://azanmovers.vercel.app/logo.png"],
  },

  // Structured Data
  script: [
    {
      type: "application/ld+json",
      json: structuredData,
    },
    {
      type: "application/ld+json",
      json: breadcrumbData,
    },
  ],
};

export default function ContactLayout({ children }) {
  return <>{children}</>;
}
