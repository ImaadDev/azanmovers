import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function GalleryPage() {
  const galleryImages = [
    {
      src: "/images/move1.jpg",
      alt: "House moving by Azan Packers & Movers in Jeddah",
      title: "House Moving",
      category: "House Moving"
    },
    {
      src: "/images/move2.jpg",
      alt: "Office relocation service in Jeddah",
      title: "Office Relocation",
      category: "Office Relocation"
    },
    {
      src: "/images/move3.jpg",
      alt: "Furniture dismantling and assembly service",
      title: "Furniture Dismantling",
      category: "Furniture Dismantling"
    },
    {
      src: "/images/move4.jpg",
      alt: "Professional movers handling boxes carefully",
      title: "Careful Handling",
      category: "Packing"
    },
    {
      src: "/images/move5.jpg",
      alt: "Packing fragile items with care",
      title: "Fragile Packing",
      category: "Packing"
    },
    {
      src: "/images/move6.jpg",
      alt: "Loading moving truck in Jeddah",
      title: "Truck Loading",
      category: "Logistics"
    }
  ];

  // JSON-LD Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Azan Packers & Movers Gallery",
    "url": "https://www.azanmovers.com/gallery",
    "description": "Gallery of house moving, office relocation, and furniture dismantling services in Jeddah.",
    "image": galleryImages.map((img) => ({
      "@type": "ImageObject",
      "url": `https://www.azanmovers.com${img.src}`,
      "name": img.title,
      "caption": img.alt
    })),
    "author": {
      "@type": "Organization",
      "name": "Azan Packers & Movers"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Azan Packers & Movers",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.azanmovers.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.azanmovers.com/gallery"
    }
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.azanmovers.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Gallery",
        "item": "https://www.azanmovers.com/gallery"
      }
    ]
  };

  return (
    <>
      <Head>
        <title>Gallery – Azan Packers & Movers Jeddah</title>
        <meta
          name="description"
          content="Explore the professional moving services of Azan Packers & Movers in Jeddah through our gallery of house moving, office relocation, and furniture dismantling."
        />
        <link rel="canonical" href="https://www.azanmovers.com/gallery" />
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
                Our Gallery
              </span>
              <div
                className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500"
              />
            </div>

            <h1
              className="text-3xl lg:text-7xl font-black mb-8 leading-none tracking-tight"
              style={{ color: '#374151' }}
            >
              Moments of Mastery
              <span className="block bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
                In Every Move
              </span>
            </h1>

            <p
              className="text-base lg:text-2xl max-w-3xl mx-auto leading-relaxed font-light"
              style={{ color: '#6B7280' }}
            >
              Explore our gallery showcasing professional house moving, office relocation,
              and expert furniture handling services in Jeddah.
            </p>
          </header>

          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-xl border border-white/20 overflow-hidden flex flex-col transition-all duration-300 hover:border-red-100 transform hover:-translate-y-2"
                itemScope
                itemType="https://schema.org/ImageObject"
              >
                <Link href={`/gallery/${image.category.toLowerCase().replace(/ /g, '-')}`}>
                  <div className="relative w-full h-64 overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      title={image.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index < 3} // Prioritize first 3 images for LCP
                      className="transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                </Link>
                <div className="p-6 flex-grow">
                  <h2 className="text-lg md:text-xl font-bold mb-2" itemProp="name" style={{ color: '#374151' }}>
                    {image.title}
                  </h2>
                  <p className="text-sm md:text-base leading-relaxed mb-4" itemProp="description" style={{ color: '#6B7280' }}>
                    {image.alt}
                  </p>
                  <Link
                    href={`/gallery/${image.category.toLowerCase().replace(/ /g, '-')}`}
                    className="inline-flex items-center text-red-600 font-semibold text-sm md:text-base hover:underline transition-colors duration-300 group"
                  >
                    View Details
                    <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </section>

          {/* CTA Section - Reusing the style from Hero component */}
          <section className="text-center py-16 px-8 bg-gradient-to-br from-red-50 to-orange-50 border border-red-100 mt-20 lg:mt-24">
            <h2 className="text-2xl lg:text-4xl font-bold mb-6" style={{ color: '#374151' }}>
              Ready to Capture Your Moving Moment?
            </h2>
            <p className="text-base lg:text-xl mb-8 max-w-2xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
              Contact us today to learn more about our services or to schedule your next move.
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
