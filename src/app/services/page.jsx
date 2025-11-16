import Link from "next/link";
import ServicesFAQ from "../../components/ServicesFAQ";

export const metadata = {
  title: "Moving Services in Saudi Arabia | House Moving, Office Relocation & Furniture Dismantling | Azan Movers",
  description: "Explore comprehensive moving services in Saudi Arabia by Azan Packers & Movers. Professional house moving, office relocation, furniture dismantling, packing, loading, unloading, and storage solutions in Jeddah and across Saudi Arabia.",
  keywords: [
    "moving services saudi arabia",
    "house moving jeddah",
    "office relocation saudi arabia",
    "furniture dismantling jeddah",
    "packing services saudi arabia",
    "loading unloading jeddah",
    "storage solutions saudi arabia",
    "professional movers jeddah",
    "relocation services saudi arabia",
    "azan movers services",
    "best moving company services saudi arabia",
    "house villa moving jeddah",
    "commercial relocation saudi arabia",
    "furniture assembly dismantling jeddah"
  ],
  openGraph: {
    title: "Moving Services in Saudi Arabia | House Moving, Office Relocation & Furniture Dismantling | Azan Movers",
    description: "Explore comprehensive moving services in Saudi Arabia by Azan Packers & Movers. Professional house moving, office relocation, furniture dismantling, packing, loading, unloading, and storage solutions in Jeddah and across Saudi Arabia.",
    url: "https://www.azanmovers.com/services",
    siteName: "Azan Packers & Movers - Best Movers in Saudi Arabia",
    images: [
      {
        url: "https://www.azanmovers.com/azanmovers-logo.png",
        width: 1200,
        height: 630,
        alt: "Azan Packers & Movers - Moving Services in Saudi Arabia"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Moving Services in Saudi Arabia | House Moving, Office Relocation & Furniture Dismantling | Azan Movers",
    description: "Explore comprehensive moving services in Saudi Arabia by Azan Packers & Movers. Professional house moving, office relocation, furniture dismantling, packing, loading, unloading, and storage solutions in Jeddah and across Saudi Arabia.",
    images: ["https://www.azanmovers.com/azanmovers-logo.png"]
  },
  robots: "index, follow"
};

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      name: "House Moving",
      description:
        "Our professional house and villa moving services in Saudi Arabia ensure a smooth relocation. From packing and loading to transport and unpacking, we handle your belongings with utmost care.",
      href: "/services/house-moving",
      icon: (
        <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 12v10a1 1 0 001 1h3m10-10l2 2m0 0l-7 7-7-7M19 12v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      id: 2,
      name: "Office Relocation",
      description:
        "Minimize downtime with our reliable office and commercial relocation in Saudi Arabia. We dismantle, pack, and move your office furniture, electronics, and documents safely and efficiently.",
      href: "/services/office-relocation",
      icon: (
        <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      )
    },
    {
      id: 3,
      name: "Furniture Dismantling",
      description:
        "Our expert movers provide safe furniture dismantling and assembly services in Saudi Arabia. We carefully handle beds, wardrobes, desks, and fragile items to ensure safe relocation.",
      href: "/services/furniture-dismantling",
      icon: (
        <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      id: 4,
      name: "Packing Services",
      description:
        "Comprehensive packing and unpacking services using high-quality materials to ensure your belongings are safe and organized for transit.",
      href: "/services/packing",
      icon: (
        <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4m0-10l8 4m-8-4l-8 4" />
        </svg>
      )
    },
    {
      id: 5,
      name: "Unpacking Services",
      description:
        "Efficient unpacking and organization of your belongings at your new location, helping you settle in quickly.",
      href: "/services/unpacking",
      icon: (
        <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2 2m0 0l-7 7-7-7M5 12h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 6,
      name: "Loading Services",
      description:
        "Careful and efficient loading of your packed items onto transport vehicles, ensuring safe and optimized space utilization.",
      href: "/services/loading",
      icon: (
        <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v-1a2 2 0 012-2h12a2 2 0 012 2v1m-6-4l-4 4m0 0l4 4m-4-4H3" />
        </svg>
      )
    },
    {
      id: 7,
      name: "Unloading Services",
      description:
        "Gentle and precise unloading of your belongings from transport vehicles and placement into your new home or office.",
      href: "/services/unloading",
      icon: (
        <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 8v1a2 2 0 01-2 2H6a2 2 0 01-2-2V8m6 4l4-4m0 0l-4-4m4 4H21" />
        </svg>
      )
    },
    {
      id: 8,
      name: "Jeipsing Opening",
      description:
        "Specialized service for opening and preparing jeipsing (wooden crates) for international or delicate item transportation.",
      href: "/services/jeipsing-opening",
      icon: (
        <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      )
    },
    {
      id: 9,
      name: "Jeipsing Closing",
      description:
        "Professional closing and securing of jeipsing (wooden crates) for safe and reliable transportation.",
      href: "/services/jeipsing-closing",
      icon: (
        <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      )
    }
  ];

  const faqs = [
    {
      id: 1,
      question: "How much do movers in Saudi Arabia charge?",
      answer:
        "The cost depends on the size of the move, distance, and services required. Contact Azan Packers & Movers for a free personalized quote.",
      category: "Pricing"
    },
    {
      id: 2,
      question: "Do you provide packing materials?",
      answer:
        "Yes, we provide boxes, bubble wrap, and protective packing materials to ensure the safety of your belongings.",
      category: "Services"
    },
    {
      id: 3,
      question: "Can you handle last-minute moves?",
      answer:
        "Yes, we try to accommodate urgent and last-minute moves depending on availability. Contact us to check.",
      category: "Booking"
    },
    {
      id: 4,
      question: "Is my furniture insured during transit?",
      answer: "Absolutely. We offer comprehensive insurance options for all your belongings during the relocation process, ensuring peace of mind.",
      category: "Safety"
    },
    {
      id: 5,
      question: "Do you offer international moving services?",
      answer: "Currently, we specialize in local moving services within Saudi Arabia and surrounding areas. For international moves, we can recommend trusted partners.",
      category: "Coverage"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Moving Services",
    provider: {
      "@type": "LocalBusiness",
      name: "Azan Packers & Movers",
      url: "https://www.azanmovers.com",
      telephone: "+966551234567",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Ibn Qasim Al Khawarizmi Al Bawadi",
        addressLocality: "Jeddah",
        addressRegion: "Makkah Province",
        postalCode: "23443",
        addressCountry: "SA"
      }
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Moving Services in Saudi Arabia",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          description: s.description
        }
      }))
    }
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
        "@type": "Question",
      name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <main className="relative overflow-hidden" style={{ backgroundColor: '#FFFCFB' }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-5 w-48 h-48 bg-gradient-to-br from-red-500/3 to-orange-500/3 animate-blob filter blur-xl" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-blue-500/3 to-purple-500/3 animate-blob filter blur-xl animation-delay-2000" />
        <div className="absolute top-1/3 left-1/3 w-24 h-24 bg-gradient-to-br from-green-500/3 to-teal-500/3 animate-blob filter blur-xl animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 py-16 lg:py-24">
        {/* Modern Header Section */}
        <header className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-orange-500" />
            <span
              className="text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 border"
              style={{
                color: '#ED3F27',
                borderColor: '#ED3F27',
                background: 'rgba(237, 63, 39, 0.05)'
              }}
            >
              Our Services
            </span>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500" />
          </div>

          <h1 className="text-3xl lg:text-7xl font-black mb-8 leading-none tracking-tight"
              style={{ color: '#374151' }}
          >
            Professional Moving
            <span className="block bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
              & Relocation Solutions
            </span>
          </h1>

          <p className="text-base lg:text-2xl max-w-3xl mx-auto leading-relaxed font-light"
             style={{ color: '#6B7280' }}
          >
            We offer comprehensive moving services designed to make your relocation
            effortless, safe, and efficient for homes, villas, and offices in Saudi Arabia.
          </p>
        </header>

        {/* Services Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 lg:mb-24">
          {services.map((service) => (
            <div
                key={service.id}
                className="bg-white/70 backdrop-blur-xl border border-white/20 p-8 flex flex-col items-center text-center transition-all duration-300 hover:border-red-100 transform hover:-translate-y-2"
              >
                <div className="mb-6 p-4 bg-red-50" style={{ color: '#ED3F27' }}>
                  {service.icon}
                </div>
                <h2 className="text-lg md:text-2xl font-bold mb-3" style={{ color: '#374151' }}>
                  {service.name}
                </h2>
                <p className="text-sm md:text-base leading-relaxed mb-6 flex-grow" style={{ color: '#6B7280' }}>
                  {service.description}
                </p>
              <Link
                href={service.href}
                  className="inline-flex items-center text-red-600 font-semibold hover:underline transition-colors duration-300 group"
              >
                  Learn More about {service.name}
                  <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
              </Link>
            </div>
          ))}
        </section>

         <ServicesFAQ faqs={faqs} />
          </div>
    </main>
  );
}
