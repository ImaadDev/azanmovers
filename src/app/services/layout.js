export const metadata = {
  title: "Moving Services in Saudi Arabia – Azan Packers & Movers",
  description:
    "Explore our moving services in Saudi Arabia including house moving, office relocation, packing, unpacking, loading, unloading, jeipsing opening and closing, and furniture dismantling. Trusted packers and movers in Saudi Arabia.",
  robots: "index, follow",
  openGraph: {
    title: "Moving Services in Saudi Arabia – Azan Packers & Movers",
    description:
      "Discover comprehensive moving services in Saudi Arabia from Azan Packers & Movers. We offer house moving, office relocation, packing, unpacking, loading, unloading, jeipsing opening and closing, and furniture dismantling.",
    url: "https://azanmovers.vercel.app/services",
    siteName: "Azan Packers & Movers",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moving Services in Saudi Arabia – Azan Packers & Movers",
    description:
      "Your trusted partner for all moving needs in Saudi Arabia: house moving, office relocation, and specialized services. Get a free quote today!",
  },
};

const services = [
  {
    id: 1,
    name: "House Moving",
    description:
      "Our professional house moving services in Saudi Arabia ensure a smooth relocation. From packing and loading to transport and unpacking, we handle your belongings with utmost care.",
    href: "/services/house-moving",
  },
  {
    id: 2,
    name: "Office Relocation",
    description:
      "Minimize downtime with our reliable office relocation in Saudi Arabia. We dismantle, pack, and move your office furniture, electronics, and documents safely and efficiently.",
    href: "/services/office-relocation",
  },
  {
    id: 3,
    name: "Furniture Dismantling",
    description:
      "Our expert movers provide safe furniture dismantling and assembly services in Saudi Arabia. We carefully handle beds, wardrobes, desks, and fragile items to ensure safe relocation.",
    href: "/services/furniture-dismantling",
  },
  {
    id: 4,
    name: "Packing Services",
    description:
      "Comprehensive packing and unpacking services using high-quality materials to ensure your belongings are safe and organized for transit.",
    href: "/services/packing",
  },
  {
    id: 5,
    name: "Unpacking Services",
    description:
      "Efficient unpacking and organization of your belongings at your new location, helping you settle in quickly.",
    href: "/services/unpacking",
  },
  {
    id: 6,
    name: "Loading Services",
    description:
      "Careful and efficient loading of your packed items onto transport vehicles, ensuring safe and optimized space utilization.",
    href: "/services/loading",
  },
  {
    id: 7,
    name: "Unloading Services",
    description:
      "Gentle and precise unloading of your belongings from transport vehicles and placement into your new home or office.",
    href: "/services/unloading",
  },
  {
    id: 8,
    name: "Jeipsing Opening",
    description:
      "Specialized service for opening and preparing jeipsing (wooden crates) for international or delicate item transportation.",
    href: "/services/jeipsing-opening",
  },
  {
    id: 9,
    name: "Jeipsing Closing",
    description:
      "Professional closing and securing of jeipsing (wooden crates) for safe and reliable transportation.",
    href: "/services/jeipsing-closing",
  },
  {
    id: 10,
    name: "Storage Solutions",
    description:
      "Secure and flexible storage solutions for short-term or long-term needs. Our facilities are safe and climate-controlled.",
    href: "/services/storage",
  },
  {
    id: 11,
    name: "Furniture Assembly",
    description:
      "Expert furniture assembly services, ensuring your new or disassembled furniture is put together correctly and safely.",
    href: "/services/furniture-assembly",
  },
];

const faqs = [
  {
    id: 1,
    question: "How much do movers in Saudi Arabia charge?",
    answer:
      "The cost depends on the size of the move, distance, and services required. Contact Azan Packers & Movers for a free personalized quote.",
    category: "Pricing",
  },
  {
    id: 2,
    question: "Do you provide packing materials?",
    answer:
      "Yes, we provide boxes, bubble wrap, and protective packing materials to ensure the safety of your belongings.",
    category: "Services",
  },
  {
    id: 3,
    question: "Can you handle last-minute moves?",
    answer:
      "Yes, we try to accommodate urgent and last-minute moves depending on availability. Contact us to check.",
    category: "Booking",
  },
  {
    id: 4,
    question: "Is my furniture insured during transit?",
    answer: "Absolutely. We offer comprehensive insurance options for all your belongings during the relocation process, ensuring peace of mind.",
    category: "Safety",
  },
  {
    id: 5,
    question: "Do you offer international moving services?",
    answer: "Currently, we specialize in local moving services within Saudi Arabia and surrounding areas. For international moves, we can recommend trusted partners.",
    category: "Coverage",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Moving Services",
  provider: {
    "@type": "LocalBusiness",
    name: "Azan Packers & Movers",
    url: "https://azanmovers.vercel.app",
    telephone: "+966551234567",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Al Aziziyah, Saudi Arabia",
      addressLocality: "Saudi Arabia",
      addressRegion: "Makkah Province",
      postalCode: "23334",
      addressCountry: "SA",
    },
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Moving Services in Saudi Arabia",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.name,
        description: s.description,
      },
    })),
  },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function ServicesLayout({ children }) {
  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
    </>
  );
}
