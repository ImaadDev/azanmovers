import Head from "next/head";
import Link from "next/link";

export default function AboutPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Azan Packers & Movers",
    description:
      "Azan Packers & Movers – Trusted moving company in Jeddah offering professional house moving, office relocation, and furniture dismantling services.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Al Aziziyah, Jeddah",
      addressLocality: "Jeddah",
      addressRegion: "Makkah Province",
      postalCode: "23334",
      addressCountry: "SA",
    },
    telephone: "+966551234567",
    url: "https://www.azanmovers.com/about",
    openingHours: "Mo-Su 08:00-22:00",
    serviceType: ["House Moving", "Office Relocation", "Furniture Dismantling"],
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.azanmovers.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About Us",
        item: "https://www.azanmovers.com/about",
      },
    ],
  };

  return (
    <>
      <Head>
        <title>About Azan Packers & Movers – Trusted Movers in Jeddah</title>
        <meta
          name="description"
          content="Learn about Azan Packers & Movers, a trusted moving company in Jeddah since 2015. Discover our story, mission, and commitment to quality service."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.azanmovers.com/about" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="About Azan Packers & Movers – Trusted Movers in Jeddah"
        />
        <meta
          property="og:description"
          content="Learn about Azan Packers & Movers – Jeddah's professional movers for homes, offices, and furniture."
        />
        <meta property="og:url" content="https://www.azanmovers.com/about" />
        <meta property="og:image" content="https://www.azanmovers.com/logo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Azan Packers & Movers – Trusted Movers in Jeddah"
        />
        <meta
          name="twitter:description"
          content="Professional moving company in Jeddah since 2015. House moving, office relocation & furniture dismantling."
        />
        <meta name="twitter:image" content="https://www.azanmovers.com/logo.png" />

        {/* Structured Data */}
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
                About Us
              </span>
              <div
                className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500"
              />
            </div>

            <h1
              className="text-3xl lg:text-7xl font-black mb-8 leading-none tracking-tight"
              style={{ color: '#374151' }}
            >
              Your Journey, Our Priority
              <span className="block bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
                Since 2015
              </span>
            </h1>

            <p
              className="text-base lg:text-2xl max-w-3xl mx-auto leading-relaxed font-light"
              style={{ color: '#6B7280' }}
            >
              Azan Packers & Movers has been dedicated to providing seamless and stress-free
              relocation experiences across Jeddah. Discover our commitment to excellence.
            </p>
          </header>

          {/* Content Sections: Our Story & Mission Values */}
          <div className="grid md:grid-cols-2 gap-16 items-start mb-20 lg:mb-24">
            <article className="p-8 bg-white/70 backdrop-blur-xl border border-white/20 transition-all duration-300 hover:border-red-100">
              <h2 className="text-2xl lg:text-4xl font-bold mb-6" style={{ color: '#374151' }}>
                Our Story
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-4" style={{ color: '#6B7280' }}>
                Established in 2015, Azan Packers & Movers has proudly helped thousands of
                families and businesses relocate smoothly across Jeddah. With years of
                experience, we are committed to providing safe, efficient, and stress-free
                moving services. Our trained team ensures that every item is handled with the
                utmost care and professionalism.
              </p>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: '#6B7280' }}>
                We started with a simple goal: to make moving easy and affordable for everyone.
                Today, we continue to uphold that mission, leveraging modern techniques and a
                customer-first approach to deliver unparalleled service.
              </p>
            </article>

            <section className="p-8 bg-white/70 backdrop-blur-xl border border-white/20 transition-all duration-300 hover:border-red-100">
              <h2 className="text-2xl lg:text-4xl font-bold mb-6" style={{ color: '#374151' }}>
                Our Mission & Values
              </h2>
              <ul className="space-y-4 text-base md:text-lg" style={{ color: '#6B7280' }}>
                <li className="flex items-center gap-3">
                  <span className="text-red-600 text-2xl">✓</span>
                  <div>
                    <strong>Reliability:</strong> We arrive on time and deliver safely.
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-600 text-2xl">✓</span>
                  <div>
                    <strong>Professionalism:</strong> Skilled staff ensures a smooth move.
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-600 text-2xl">✓</span>
                  <div>
                    <strong>Customer Satisfaction:</strong> Our clients are our top priority.
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-600 text-2xl">✓</span>
                  <div>
                    <strong>Integrity:</strong> Honest and transparent services, always.
                  </div>
                </li>
              </ul>
            </section>
          </div>

          {/* CTA Section */}
          <section className="text-center py-16 px-8 bg-gradient-to-br from-red-50 to-orange-50 border border-red-100">
            <h2 className="text-2xl lg:text-4xl font-bold mb-6" style={{ color: '#374151' }}>
              Ready to Make Your Move?
            </h2>
            <p className="text-base lg:text-xl mb-8 max-w-2xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
              Contact Azan Packers & Movers today for a free, no-obligation quote.
              Let us handle the heavy lifting and make your relocation stress-free.
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
