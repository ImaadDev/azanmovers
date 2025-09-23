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
  title: "FAQ – Frequently Asked Questions | Azan Packers & Movers Saudi Arabia",
  description:
    "Find answers to common questions about moving services, pricing, insurance, and service areas in Saudi Arabia with Azan Packers & Movers.",
  robots: "index, follow",
  canonical: "https://azanmovers.vercel.app/faq",

  // Open Graph / Facebook
  openGraph: {
    type: "website",
    title: "FAQ – Azan Packers & Movers Saudi Arabia",
    description:
      "Your questions about moving in Saudi Arabia answered. Get details on services, pricing, and more from Azan Packers & Movers.",
    url: "https://azanmovers.vercel.app/faq",
    images: ["https://azanmovers.vercel.app/logo.png"],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "FAQ – Azan Packers & Movers Saudi Arabia",
    description:
      "Common questions about moving and relocation services in Saudi Arabia. Azan Packers & Movers has the answers.",
    images: ["https://azanmovers.vercel.app/logo.png"],
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

