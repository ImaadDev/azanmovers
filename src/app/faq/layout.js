const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does house moving cost in Saudi Arabia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The cost depends on factors such as the size of your home, distance, and specific services required. Contact Azan Packers & Movers for a free, personalized moving quote in Saudi Arabia.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide professional office relocation services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we specialize in office relocation in Saudi Arabia. Our expert team ensures minimal downtime, safe equipment handling, and smooth business transitions.",
      },
    },
    {
      "@type": "Question",
      name: "Can you dismantle and assemble furniture safely?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Our trained movers provide safe furniture dismantling, secure transport, and careful reassembly to protect your belongings during relocation.",
      },
    },
    {
      "@type": "Question",
      name: "Are my belongings insured during the move?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We take full responsibility for your belongings and offer insurance options for added peace of mind during your house or office move in Saudi Arabia.",
      },
    },
    {
      "@type": "Question",
      name: "What areas do you serve in Saudi Arabia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve all major areas in Saudi Arabia, including Al Aziziyah, Al Hamra, Al Rawdah, Al Salamah, and surrounding districts. Contact us to confirm service in your specific location.",
      },
    },
    {
      "@type": "Question",
      name: "How far in advance should I book my move?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We recommend booking at least 2-4 weeks in advance, especially during peak seasons, to ensure availability and proper planning for your relocation.",
      },
    },
  ],
};

export const metadata = {
  title: "FAQ | 🏆 Best Moving Company in Saudi Arabia | Top Movers in Jeddah | Azan Packers & Movers",
  description:
    "🏆 Find answers to common questions about the #1 best moving services, pricing, insurance, and service areas in Saudi Arabia with Azan Packers & Movers. Get expert answers about house moving, office relocation, and furniture services in Jeddah!",
  keywords: [
    "FAQ moving company Saudi Arabia",
    "best movers FAQ Jeddah",
    "moving services questions Saudi Arabia",
    "house moving FAQ Jeddah",
    "office relocation questions Saudi Arabia",
    "furniture dismantling FAQ Jeddah",
    "moving company questions Saudi Arabia",
    "packers and movers FAQ Jeddah",
    "moving services help Saudi Arabia",
    "relocation questions Jeddah"
  ],
  robots: "index, follow",
  canonical: "https://www.azanmovers.com/faq",

  // Open Graph / Facebook
  openGraph: {
    type: "website",
    title: "FAQ | 🏆 Best Moving Company in Saudi Arabia | Top Movers in Jeddah | Azan Packers & Movers",
    description:
      "🏆 Your questions about the #1 best moving services in Saudi Arabia answered! Get details on house moving, office relocation, furniture services, pricing, and more from Azan Packers & Movers in Jeddah.",
    url: "https://www.azanmovers.com/faq",
    images: ["https://www.azanmovers.com/azanmovers-logo.png"],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "FAQ | 🏆 Best Moving Company in Saudi Arabia | Top Movers in Jeddah | Azan Packers & Movers",
    description:
      "🏆 Common questions about the #1 best moving and relocation services in Saudi Arabia. Azan Packers & Movers has all the answers for house moving, office relocation, and furniture services in Jeddah!",
    images: ["https://www.azanmovers.com/azanmovers-logo.png"],
  },

  // Structured Data
  script: [
    {
      type: "application/ld+json",
      json: faqStructuredData,
    },
  ],
};

export default function FAQLayout({ children }) {
  return <>{children}</>;
}

