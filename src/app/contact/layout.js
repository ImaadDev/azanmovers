const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.azanmovers.com#business",
  name: "Azan Packers & Movers",
  description:
    "Azan Packers & Movers in Saudi Arabia provides professional home, villa, office relocation, and furniture dismantling services across Saudi Arabia.",
  image: "https://www.azanmovers.com/azanmovers-logo.png",
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
  url: "https://www.azanmovers.com",
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
      item: "https://www.azanmovers.com"
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Contact",
      item: "https://www.azanmovers.com/contact"
    }
  ]
};

export const metadata = {
  title: "Contact Us | 🏆 Best Moving Company in Saudi Arabia | Top Movers in Jeddah | Azan Packers & Movers",
  description:
    "🏆 Contact Azan Packers & Movers, Saudi Arabia's #1 best moving company! Get in touch for house shifting, villa relocation, office relocation, and furniture moving in Jeddah. Call us today for a free moving quote!",
  keywords: [
    "contact Azan movers",
    "best moving company Saudi Arabia contact",
    "best movers in Jeddah contact",
    "top moving company Saudi Arabia contact",
    "professional movers Jeddah contact",
    "moving company phone number Saudi Arabia",
    "movers contact Jeddah",
    "packers and movers contact Saudi Arabia",
    "moving services contact Jeddah",
    "free quote moving company Saudi Arabia"
  ],
  robots: "index, follow",
  canonical: "https://www.azanmovers.com/contact",

  // Open Graph / Facebook
  openGraph: {
    type: "website",
    title: "Contact Us | 🏆 Best Moving Company in Saudi Arabia | Top Movers in Jeddah | Azan Packers & Movers",
    description:
      "🏆 Contact Azan Packers & Movers, Saudi Arabia's #1 best moving company! Get in touch for reliable and efficient moving services for homes, villas, and offices in Jeddah and across Saudi Arabia.",
    url: "https://www.azanmovers.com/contact",
    images: ["https://www.azanmovers.com/azanmovers-logo.png"],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | 🏆 Best Moving Company in Saudi Arabia | Top Movers in Jeddah | Azan Packers & Movers",
    description:
      "🏆 Contact Azan Packers & Movers, Saudi Arabia's #1 best moving company! Reach out for all your relocation needs in Jeddah and across Saudi Arabia. Free quotes available!",
    images: ["https://www.azanmovers.com/azanmovers-logo.png"],
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

