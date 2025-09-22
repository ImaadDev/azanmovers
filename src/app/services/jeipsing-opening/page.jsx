"use client";

import Link from 'next/link';

export default function JeipsingOpeningPage() {
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
            Specialized
            <span className="block bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
              Jeipsing Opening
            </span>
          </h1>

          <p className="text-base lg:text-xl max-w-3xl mx-auto leading-relaxed font-light" style={{ color: '#6B7280' }}>
            Professional opening of jeipsing (wooden crates) for delicate and international cargo.
          </p>
        </header>

        <section className="bg-white/80 backdrop-blur-xl border border-white/20 p-8 md:p-12 shadow-lg space-y-8 text-gray-700">
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#374151' }}>Our Jeipsing Opening Process</h2>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Careful Assessment:</strong> We assess the jeipsing structure and contents to plan the safest opening method.</li>
            <li><strong>Precision Tools:</strong> Using specialized tools, we carefully dismantle the crates, minimizing any risk to your items.</li>
            <li><strong>Content Verification:</strong> Once opened, we verify the contents against inventory lists, ensuring everything is accounted for.</li>
            <li><strong>Damage Prevention:</strong> Our team is trained to handle fragile and valuable items with extreme care during the opening process.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#374151' }}>Why Choose Azan Movers for Jeipsing Opening?</h2>
          <p className="mb-4">Jeipsing (wooden crates) are often used for high-value, fragile, or international shipments. Our expertise in opening these specialized containers ensures the integrity of your items is maintained.</p>
          <p className="mb-4">Trust Azan Packers & Movers for professional and secure jeipsing opening services, providing peace of mind for your most important cargo.</p>
        </section>

        <div className="text-center mt-20">
          <div className="inline-flex flex-col items-center p-8 bg-white/60 backdrop-blur-xl border border-white/20">
            <h3 className="text-xl md:text-2xl font-bold mb-4" style={{ color: '#374151' }}>Need assistance with jeipsing?</h3>
            <p className="text-sm md:text-lg mb-6 max-w-md" style={{ color: '#6B7280' }}>
              Contact us today for expert jeipsing opening solutions and a free consultation.
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
