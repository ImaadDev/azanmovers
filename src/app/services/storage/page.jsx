import Link from "next/link";
import Image from "next/image";

export default function StorageSolutions() {

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
              Storage Solutions
            </span>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500" />
          </div>

          <h1 className="text-3xl lg:text-7xl font-black mb-8 leading-none tracking-tight"
              style={{ color: '#374151' }}
          >
            Secure & Flexible
            <span className="block bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
              Storage Solutions
            </span>
          </h1>

          <p className="text-base lg:text-2xl max-w-3xl mx-auto leading-relaxed font-light"
             style={{ color: '#6B7280' }}
          >
            Whether short-term or long-term, our secure storage facilities in
            Saudi Arabia offer the perfect solution for your belongings.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20 lg:mb-24">
          <div className="relative w-full h-80 overflow-hidden border border-white/20">
            <Image
              src="/Furniture.jpg"
              alt="Secure and flexible storage solutions in Saudi Arabia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <section className="p-8 bg-white/70 backdrop-blur-xl border border-white/20 transition-all duration-300 hover:border-red-100">
            <h2 className="text-2xl lg:text-4xl font-bold mb-6" style={{ color: '#374151' }}>
              Our Secure Storage Expertise
            </h2>
            <p className="text-sm md:text-lg leading-relaxed mb-4" style={{ color: '#6B7280' }}>
              Azan Packers & Movers offers top-notch storage solutions in
              Saudi Arabia, catering to both residential and commercial clients.
              Our facilities are secure, climate-controlled, and monitored 24/7,
              ensuring the safety of your valuables for any duration.
            </p>
            <p className="text-sm md:text-lg leading-relaxed" style={{ color: '#6B7280' }}>
              Whether you need to store items during a move, declutter your home,
              or require long-term storage for business inventory, we provide
              flexible and affordable options tailored to your specific needs.
            </p>
          </section>
        </div>

        <section className="py-16 px-8 bg-gradient-to-br from-red-50 to-orange-50 border border-red-100 mb-20 lg:mb-24">
          <h2 className="text-2xl lg:text-4xl font-bold mb-8 text-center" style={{ color: '#374151' }}>
            Why Choose Azan Packers & Movers for Storage?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-sm md:text-lg" style={{ color: '#6B7280' }}>
            <div className="flex items-start gap-4 p-4 bg-white/60">
              <span className="text-red-600 text-2xl mt-1">✓</span>
              <div>
                <strong>24/7 Security:</strong> State-of-the-art surveillance and security systems.
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-white/60">
              <span className="text-red-600 text-2xl mt-1">✓</span>
              <div>
                <strong>Climate Control:</strong> Optimal conditions to protect sensitive items.
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-white/60">
              <span className="text-red-600 text-2xl mt-1">✓</span>
              <div>
                <strong>Flexible Terms:</strong> Short-term and long-term storage options available.
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-white/60">
              <span className="text-red-600 text-2xl mt-1">✓</span>
              <div>
                <strong>Pest-Free Environment:</strong> Regular maintenance to ensure cleanliness.
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-white/60">
              <span className="text-red-600 text-2xl mt-1">✓</span>
              <div>
                <strong>Easy Access:</strong> Convenient access to your stored belongings.
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-white/60">
              <span className="text-red-600 text-2xl mt-1">✓</span>
              <div>
                <strong>Affordable Rates:</strong> Cost-effective storage solutions without compromising security.
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16 px-8 bg-gradient-to-br from-red-50 to-orange-50 border border-red-100">
          <h2 className="text-2xl lg:text-4xl font-bold mb-6" style={{ color: '#374151' }}>
            Need Reliable Storage for Your Valuables?
          </h2>
          <p className="text-base lg:text-xl mb-8 max-w-2xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
            Contact Azan Packers & Movers for secure and flexible storage
            solutions. Get a free quote today and store with confidence.
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
  );
}
