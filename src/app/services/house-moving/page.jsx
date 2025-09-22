import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function HouseMoving() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    provider: {
      "@type": "LocalBusiness",
      name: "Azan Packers & Movers",
      telephone: "+966551234567",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Al Aziziyah, Jeddah",
        addressLocality: "Jeddah",
        addressRegion: "Makkah Province",
        postalCode: "23334",
        addressCountry: "SA"
      }
    },
    serviceType: "House Moving",
    description: "Safe and efficient house moving services for families in Jeddah.",
    url: "https://www.azanmovers.com/services/house-moving",
    image: "https://www.azanmovers.com/images/house-moving.jpg" // Replace with actual image URL
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
        name: "Services",
        item: "https://www.azanmovers.com/services"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "House Moving",
        item: "https://www.azanmovers.com/services/house-moving"
      }
    ]
  };

  return (
    <>
      <Head>
        <title>House Moving Services in Jeddah | Azan Packers & Movers</title>
        <meta
          name="description"
          content="Experience seamless house moving in Jeddah with Azan Packers & Movers. Professional, safe, and efficient relocation solutions for your home."
        />
        <link rel="canonical" href="https://www.azanmovers.com/services/house-moving" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="House Moving Services in Jeddah | Azan Packers & Movers" />
        <meta property="og:description" content="Experience seamless house moving in Jeddah with Azan Packers & Movers. Professional, safe, and efficient relocation solutions for your home." />
        <meta property="og:url" content="https://www.azanmovers.com/services/house-moving" />
        <meta property="og:image" content="https://www.azanmovers.com/images/house-moving.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
        />
      </Head>

      <main className="relative overflow-hidden" style={{ backgroundColor: '#FFFCFB' }}>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute top-10 left-5 w-48 h-48 bg-gradient-to-br from-red-500/3 to-orange-500/3 animate-blob filter blur-xl"
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-blue-500/3 to-purple-500/3 animate-blob filter blur-xl animation-delay-2000"
          />
          <div
            className="absolute top-1/3 left-1/3 w-24 h-24 bg-gradient-to-br from-green-500/3 to-teal-500/3 animate-blob filter blur-xl animation-delay-4000"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 py-16 lg:py-24">
          {/* Modern Header Section */}
          <header className="text-center mb-16 lg:mb-24">
            <div className="inline-flex items-center gap-4 mb-8">
              <div
                className="w-16 h-1 bg-gradient-to-r from-red-500 to-orange-500"
              />
              <span
                className="text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 border"
                style={{
                  color: '#ED3F27',
                  borderColor: '#ED3F27',
                  background: 'rgba(237, 63, 39, 0.05)'
                }}
              >
                House Moving
              </span>
              <div
                className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500"
              />
            </div>

            <h1
              className="text-3xl lg:text-7xl font-black mb-8 leading-none tracking-tight"
              style={{ color: '#374151' }}
            >
              Your Home,
              <span className="block bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
                Seamlessly Relocated
              </span>
            </h1>

            <p
              className="text-base lg:text-2xl max-w-3xl mx-auto leading-relaxed font-light"
              style={{ color: '#6B7280' }}
            >
              Experience stress-free house moving services in Jeddah. We ensure every item arrives
              safely and on time, making your relocation a breeze.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-20 lg:mb-24">
            <div className="relative w-full h-80 overflow-hidden border border-white/20">
              <Image
                src="/images/move1.jpg"
                alt="Professional house moving services in Jeddah"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <section className="p-8 bg-white/70 backdrop-blur-xl border border-white/20 transition-all duration-300 hover:border-red-100">
              <h2 className="text-2xl lg:text-4xl font-bold mb-6" style={{ color: '#374151' }}>
                Our House Moving Expertise
              </h2>
              <p className="text-sm md:text-lg leading-relaxed mb-4" style={{ color: '#6B7280' }}>
                Azan Packers & Movers offers comprehensive house moving solutions in Jeddah.
                From meticulous packing of your valuables to secure transportation and
                careful unpacking at your new residence, we manage every detail.
              </p>
              <p className="text-sm md:text-lg leading-relaxed" style={{ color: '#6B7280' }}>
                Our experienced team uses high-quality packing materials and modern
                equipment to ensure the safety and integrity of your belongings throughout
                the entire relocation process. Trust us for a hassle-free move.
              </p>
            </section>
          </div>

          <section className="py-16 px-8 bg-gradient-to-br from-red-50 to-orange-50 border border-red-100 mb-20 lg:mb-24">
            <h2 className="text-2xl lg:text-4xl font-bold mb-8 text-center" style={{ color: '#374151' }}>
              Why Choose Azan Packers & Movers for Your House Move?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-sm md:text-lg" style={{ color: '#6B7280' }}>
              <div className="flex items-start gap-4 p-4 bg-white/60">
                <span className="text-red-600 text-2xl mt-1">✓</span>
                <div>
                  <strong>Expert Packing:</strong> Professional packing of all household items, including fragile goods.
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white/60">
                <span className="text-red-600 text-2xl mt-1">✓</span>
                <div>
                  <strong>Secure Transportation:</strong> Modern fleet ensures safe and timely delivery.
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white/60">
                <span className="text-red-600 text-2xl mt-1">✓</span>
                <div>
                  <strong>Furniture Handling:</strong> Expert dismantling and reassembly of all types of furniture.
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white/60">
                <span className="text-red-600 text-2xl mt-1">✓</span>
                <div>
                  <strong>Transparent Pricing:</strong> Clear, upfront quotes with no hidden fees.
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white/60">
                <span className="text-red-600 text-2xl mt-1">✓</span>
                <div>
                  <strong>24/7 Support:</strong> Dedicated customer service for all your moving queries.
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white/60">
                <span className="text-red-600 text-2xl mt-1">✓</span>
                <div>
                  <strong>Insured Services:</strong> Full insurance coverage for your peace of mind.
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center py-16 px-8 bg-gradient-to-br from-red-50 to-orange-50 border border-red-100">
            <h2 className="text-2xl lg:text-4xl font-bold mb-6" style={{ color: '#374151' }}>
              Ready for a Smooth House Move?
            </h2>
            <p className="text-base lg:text-xl mb-8 max-w-2xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
              Contact Azan Packers & Movers today for a free consultation and personalized quote.
              Let us make your house relocation in Jeddah stress-free.
            </p>
            <Link
              href="/quote"
              className="group relative inline-flex items-center px-10 py-4 text-sm md:text-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-200"
              style={{ backgroundColor: '#ED3F27' }}
              aria-label="Get a free moving quote from Azan Packers & Movers"
            >
              <span className="relative z-10">Get Your Free Quote</span>
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
