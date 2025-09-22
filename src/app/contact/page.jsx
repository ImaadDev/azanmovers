import Head from "next/head";
import Link from "next/link";

export default function ContactPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.azanmovers.com#business",
    name: "Azan Packers & Movers",
    description:
      "Azan Packers & Movers in Jeddah provides professional house moving, office relocation, and furniture dismantling services across Saudi Arabia.",
    image: "https://www.azanmovers.com/logo.png", // replace with your logo URL
    address: {
      "@type": "PostalAddress",
      streetAddress: "Al Aziziyah, Jeddah",
      addressLocality: "Jeddah",
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

  return (
    <>
      <Head>
        <title>Contact Azan Packers & Movers – Best Moving Company in Jeddah</title>
        <meta
          name="description"
          content="Contact Azan Packers & Movers in Jeddah for house shifting, office relocation, and furniture moving. Call us today for a free moving quote!"
        />
        <meta name="robots" content="index, follow" />
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
                Contact Us
              </span>
              <div
                className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500"
              />
            </div>

            <h1
              className="text-3xl lg:text-7xl font-black mb-8 leading-none tracking-tight"
              style={{ color: '#374151' }}
            >
              Get in Touch
              <span className="block bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
                With Azan Movers
              </span>
            </h1>

            <p
              className="text-base lg:text-2xl max-w-3xl mx-auto leading-relaxed font-light"
              style={{ color: '#6B7280' }}
            >
              We are here to answer your questions and provide a seamless moving experience.
              Reach out to us today!
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-16 items-start mb-20 lg:mb-24">
            {/* Contact Information */}
            <section className="p-8 bg-white/70 backdrop-blur-xl border border-white/20 transition-all duration-300 hover:border-red-100">
              <h2 className="text-2xl lg:text-4xl font-bold mb-6" style={{ color: '#374151' }}>
                Our Details
              </h2>
              <div className="space-y-6 text-sm md:text-lg" style={{ color: '#6B7280' }}>
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L9.5 13.5a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  <div>
                    <strong>Phone:</strong>{' '}
                    <a href="tel:+966551234567" className="text-red-600 hover:underline">
                      +966 55 123 4567
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 4v7a2 2 0 002 2h14a2 2 0 002-2v-7m-18 0l10 6 10-6" /></svg>
                  <div>
                    <strong>Email:</strong>{' '}
                    <a href="mailto:info@azanmovers.com" className="text-red-600 hover:underline">
                      info@azanmovers.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243m11.314 0A8 8 0 1121 12a8 8 0 01-3.343 4.657z" /></svg>
                  <div>
                    <strong>Address:</strong> Al Aziziyah, Jeddah, Makkah Province, 23334, Saudi Arabia
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  <div>
                    <strong>Opening Hours:</strong> Mon-Sun 08:00 – 22:00
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Form */}
            <section className="p-8 bg-white/70 backdrop-blur-xl border border-white/20 transition-all duration-300 hover:border-red-100">
              <h2 className="text-2xl lg:text-4xl font-bold mb-6" style={{ color: '#374151' }}>
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-red-500 focus:border-red-500 transition duration-200 text-sm md:text-base"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-red-500 focus:border-red-500 transition duration-200 text-sm md:text-base"
                    placeholder="your@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-red-500 focus:border-red-500 transition duration-200 text-sm md:text-base"
                    placeholder="Your message or inquiry"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="group relative inline-flex items-center px-8 py-4 text-base md:text-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-200"
                  style={{ backgroundColor: '#ED3F27' }}
                >
                  <span className="relative z-10">Send Message</span>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </button>
              </form>
            </section>
          </div>

          {/* Map Section */}
          <section className="mb-20 lg:mb-24">
            <h2 className="text-2xl lg:text-4xl font-bold mb-8 text-center" style={{ color: '#374151' }}>
              Our Location
            </h2>
            <div className="w-full h-80 lg:h-96 overflow-hidden border border-white/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.3105908691836!2d39.172778!3d21.543333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d9e1b7f44a6f%3A0x3a1c7c36f9cbb6ab!2sJeddah!5e0!3m2!1sen!2ssa!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Azan Packers & Movers Location on Google Maps"
              ></iframe>
            </div>
          </section>

          {/* CTA Section - Reusing the style from Hero component */}
          <section className="text-center py-16 px-8 bg-gradient-to-br from-red-50 to-orange-50 border border-red-100">
            <h2 className="text-2xl lg:text-4xl font-bold mb-6" style={{ color: '#374151' }}>
              Get Your Free Moving Quote Today!
            </h2>
            <p className="text-base lg:text-xl mb-8 max-w-2xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
              Ready to experience a smooth and efficient relocation? Contact us for a personalized quote.
            </p>
            <Link
              href="/contact"
              className="group relative inline-flex items-center px-10 py-4 text-base md:text-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-200"
              style={{ backgroundColor: '#ED3F27' }}
              aria-label="Get a free moving quote from Azan Packers & Movers"
            >
              <span className="relative z-10">Request a Quote</span>
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
