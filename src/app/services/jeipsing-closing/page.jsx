"use client";

import Link from 'next/link';

export default function JeipsingClosingPage() {
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
              Jeipsing Closing Services
            </span>
          </h1>

          <p className="text-base lg:text-xl max-w-3xl mx-auto leading-relaxed font-light" style={{ color: '#6B7280' }}>
            Professional closing and securing of jeipsing (wooden crates) for safe and reliable transportation.
          </p>
        </header>

        <section className="bg-white/80 backdrop-blur-xl border border-white/20 p-8 md:p-12 shadow-lg space-y-8 text-gray-700">
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#374151' }}>Our Jeipsing Closing Process</h2>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Secure Fastening:</strong> We meticulously close and secure jeipsing to withstand transit stresses, using appropriate tools and techniques.</li>
            <li><strong>Weather Protection:</strong> We ensure the crates are sealed to protect contents from environmental factors during transportation.</li>
            <li><strong>Compliance Checks:</strong> All closing procedures adhere to international shipping standards and regulations.</li>
            <li><strong>Custom Solutions:</strong> We can provide custom closing solutions for uniquely shaped or extremely fragile items within jeipsing.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#374151' }}>Why Choose Azan Movers for Jeipsing Closing?</h2>
          <p className="mb-4">The proper closing of jeipsing is crucial for the safe transit of your valuable and delicate items. Our experienced team ensures your wooden crates are securely sealed and prepared for any journey.</p>
          <p className="mb-4">Rely on Azan Packers & Movers for expert jeipsing closing services, guaranteeing the protection and integrity of your specialized cargo from start to finish.</p>
        </section>

        <div className="text-center mt-20">
          <div className="inline-flex flex-col items-center p-8 bg-white/60 backdrop-blur-xl border border-white/20">
            <h3 className="text-xl md:text-2xl font-bold mb-4" style={{ color: '#374151' }}>Need assistance with jeipsing?</h3>
            <p className="text-sm md:text-lg mb-6 max-w-md" style={{ color: '#6B7280' }}>
              Contact us today for expert jeipsing closing solutions and a free consultation.
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
