import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: "Professional Unloading Services in Saudi Arabia | Expert Movers Jeddah | Azan Packers & Movers",
  description: "Careful and efficient unloading services in Saudi Arabia. Expert movers in Jeddah for gentle placement and quick settling at your new location. Get free quote today!",
  keywords: [
    "unloading services saudi arabia",
    "professional unloaders jeddah",
    "safe unloading movers saudi arabia",
    "belongings unloading jeddah",
    "gentle unloading saudi arabia",
    "expert unloading services jeddah",
    "azan unloading services",
    "best unloading movers saudi arabia"
  ],
  openGraph: {
    title: "Professional Unloading Services in Saudi Arabia | Expert Movers Jeddah | Azan Packers & Movers",
    description: "Careful and efficient unloading services in Saudi Arabia. Expert movers in Jeddah for gentle placement and quick settling at your new location.",
    url: "https://www.azanmovers.com/services/unloading",
    siteName: "Azan Packers & Movers - Best Movers in Saudi Arabia",
    images: [
      {
        url: "https://www.azanmovers.com/unload 2.jpg",
        width: 1200,
        height: 630,
        alt: "Professional unloading services in Saudi Arabia"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Unloading Services in Saudi Arabia | Expert Movers Jeddah | Azan Packers & Movers",
    description: "Careful and efficient unloading services in Saudi Arabia. Expert movers in Jeddah for gentle placement and quick settling at your new location.",
    images: ["https://www.azanmovers.com/unload 2.jpg"]
  },
  robots: "index, follow"
};

export default function UnloadingPage() {
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
              Unloading Services
            </span>
          </h1>

          <p className="text-base lg:text-xl max-w-3xl mx-auto leading-relaxed font-light" style={{ color: '#6B7280' }}>
            Careful and efficient unloading of your belongings, ensuring a smooth transition into your new space.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20 lg:mb-24">
          <div className="relative w-full h-80 overflow-hidden border border-white/20">
            <Image
              src="/unload 2.jpg"
              alt="Unloading Services"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <section className="p-8 bg-white/70 backdrop-blur-xl border border-white/20 transition-all duration-300 hover:border-red-100">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#374151' }}>Our Unloading Process</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Gentle Placement:</strong> We carefully unload and place your items in their designated rooms, minimizing handling and potential damage.</li>
              <li><strong>Damage Prevention:</strong> Our team takes extra precautions to protect your walls, floors, and furniture during the unloading process.</li>
              <li><strong>Efficient Flow:</strong> We work systematically to ensure a swift and organized unloading experience, helping you settle in faster.</li>
              <li><strong>Assembly Assistance:</strong> If needed, our team can assist with basic reassembly of furniture after unloading.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#374151' }}>Why Choose Azan Movers for Unloading?</h2>
            <p className="mb-4">Unloading can be as strenuous as loading, but with Azan Packers & Movers, it doesn't have to be. Our dedicated team ensures a seamless and stress-free unloading process, allowing you to relax.</p>
            <p className="mb-4">We are committed to delivering your belongings safely and placing them exactly where you need them, providing a truly comprehensive moving experience.</p>
          </section>
        </div>

        <div className="text-center mt-20">
          <div className="inline-flex flex-col items-center p-8 bg-white/60 backdrop-blur-xl border border-white/20">
            <h3 className="text-xl md:text-2xl font-bold mb-4" style={{ color: '#374151' }}>Ready to get started?</h3>
            <p className="text-sm md:text-lg mb-6 max-w-md" style={{ color: '#6B7280' }}>
              Contact us today for a free consultation and personalized unloading plan.
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
