import Link from 'next/link';
import Image from "next/image";

export const metadata = {
  title: "Professional Unpacking Services in Saudi Arabia | Expert Movers Jeddah | Azan Packers & Movers",
  description: "Efficient and careful unpacking services in Saudi Arabia. Expert movers in Jeddah for quick settling and organization of your belongings. Get free quote today!",
  keywords: [
    "unpacking services saudi arabia",
    "professional unpackers jeddah",
    "efficient unpacking movers saudi arabia",
    "belongings unpacking jeddah",
    "quick settling saudi arabia",
    "expert unpacking services jeddah",
    "azan unpacking services",
    "best unpackers saudi arabia"
  ],
  openGraph: {
    title: "Professional Unpacking Services in Saudi Arabia | Expert Movers Jeddah | Azan Packers & Movers",
    description: "Efficient and careful unpacking services in Saudi Arabia. Expert movers in Jeddah for quick settling and organization of your belongings.",
    url: "https://www.azanmovers.com/services/unpacking",
    siteName: "Azan Packers & Movers - Best Movers in Saudi Arabia",
    images: [
      {
        url: "https://www.azanmovers.com/unload.jpg",
        width: 1200,
        height: 630,
        alt: "Professional unpacking services in Saudi Arabia"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Unpacking Services in Saudi Arabia | Expert Movers Jeddah | Azan Packers & Movers",
    description: "Efficient and careful unpacking services in Saudi Arabia. Expert movers in Jeddah for quick settling and organization of your belongings.",
    images: ["https://www.azanmovers.com/unload.jpg"]
  },
  robots: "index, follow"
};

export default function UnpackingPage() {
  return (
    <main className="relative overflow-hidden" style={{ backgroundColor: '#FFFCFB' }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-5 w-48 h-48 bg-gradient-to-br from-red-500/3 to-orange-500/3 animate-blob filter blur-xl" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-blue-500/3 to-purple-500/3 animate-blob filter blur-xl animation-delay-2000" />
        <div className="absolute top-1/3 left-1/3 w-24 h-24 bg-gradient-to-br from-green-500/3 to-teal-500/3 animate-blob filter blur-xl animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 py-16 lg:py-24">
        <header className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-orange-500" />
            <span
              className="text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 border"
              style={{
                color: '#ED3F27',
                borderColor: '#ED3F27',
                background: 'rgba(237, 63, 39, 0.05)',
              }}
            >
              Our Services
            </span>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500" />
          </div>

          <h1 className="text-3xl lg:text-5xl font-black mb-8 leading-none tracking-tight" style={{ color: '#374151' }}>
            Professional
            <span className="block bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
              Unpacking Services
            </span>
          </h1>

          <p className="text-base lg:text-xl max-w-3xl mx-auto leading-relaxed font-light" style={{ color: '#6B7280' }}>
            Let us handle the details of unpacking and setting up your new home or office efficiently and carefully.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20 lg:mb-24">
          <div className="relative w-full h-80 overflow-hidden border border-white/20">
            <Image
              src="/unload.jpg"
              alt="Unpacking Services"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <section className="p-8 bg-white/70 backdrop-blur-xl border border-white/20 transition-all duration-300 hover:border-red-100">
           <h2 className="text-2xl font-bold mb-4" style={{ color: '#374151' }}>Our Unpacking Process</h2>
           <ul className="list-disc list-inside space-y-2 ml-4">
             <li><strong>Careful Handling:</strong> We meticulously unpack your items, ensuring nothing is damaged.</li>
             <li><strong>Organization:</strong> Items are placed logically in designated areas as per your instructions.</li>
             <li><strong>Debris Removal:</strong> All packing materials and debris are responsibly removed after unpacking.</li>
             <li><strong>Quick Setup:</strong> Our team works efficiently to help you settle into your new space faster.</li>
           </ul>

           <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#374151' }}>Why Choose Azan Movers for Unpacking?</h2>
           <p className="mb-4">Our professional unpacking services save you time and effort, allowing you to focus on enjoying your new environment. We bring expertise and care to every box, ensuring a smooth transition.</p>
           <p className="mb-4">Whether it's a residential move or an office relocation, our team is equipped to handle all your unpacking needs with precision and a friendly attitude.</p>
         </section>
        </div>

        <div className="text-center mt-20">
          <div className="inline-flex flex-col items-center p-8 bg-white/60 backdrop-blur-xl border border-white/20">
            <h3 className="text-xl md:text-2xl font-bold mb-4" style={{ color: '#374151' }}>Ready to get started?</h3>
            <p className="text-sm md:text-lg mb-6 max-w-md" style={{ color: '#6B7280' }}>
              Contact us today for a free consultation and personalized unpacking plan.
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
          </div>
        </div>
      </div>
    </main>
  );
}
