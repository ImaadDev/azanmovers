import Link from "next/link";
import Image from "next/image";

export default function FurnitureDismantling() {

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
              Furniture Dismantling
            </span>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500" />
          </div>

          <h1 className="text-3xl lg:text-7xl font-black mb-8 leading-none tracking-tight"
              style={{ color: '#374151' }}
          >
            Expert Furniture
            <span className="block bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
              Dismantling & Assembly
            </span>
          </h1>

          <p className="text-base lg:text-2xl max-w-3xl mx-auto leading-relaxed font-light"
             style={{ color: '#6B7280' }}
          >
            Professional dismantling, packing, and assembly for all types of
            furniture in Saudi Arabia, ensuring safe transport and setup.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20 lg:mb-24">
          <div className="relative w-full h-80 overflow-hidden border border-white/20">
            <Image
              src="/images/move5.jpg"
              alt="Professional furniture dismantling and assembly services in Saudi Arabia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <section className="p-8 bg-white/70 backdrop-blur-xl border border-white/20 transition-all duration-300 hover:border-red-100">
            <h2 className="text-2xl lg:text-4xl font-bold mb-6" style={{ color: '#374151' }}>
              Our Furniture Dismantling Expertise
            </h2>
            <p className="text-sm md:text-lg leading-relaxed mb-4" style={{ color: '#6B7280' }}>
              Azan Packers & Movers offers specialized furniture dismantling and
              assembly services in Saudi Arabia. We handle all types of furniture, from
              wardrobes and beds to complex office systems.
            </p>
            <p className="text-sm md:text-lg leading-relaxed" style={{ color: '#6B7280' }}>
              Our skilled team uses the right tools and techniques to ensure your
              furniture is safely disassembled, packed, transported, and reassembled
              at your new location, saving you time and effort.
            </p>
          </section>
        </div>

        <section className="py-16 px-8 bg-gradient-to-br from-red-50 to-orange-50 border border-red-100 mb-20 lg:mb-24">
          <h2 className="text-2xl lg:text-4xl font-bold mb-8 text-center" style={{ color: '#374151' }}>
            Why Choose Azan Packers & Movers for Furniture?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-sm md:text-lg" style={{ color: '#6B7280' }}>
            <div className="flex items-start gap-4 p-4 bg-white/60">
              <span className="text-red-600 text-2xl mt-1">✓</span>
              <div>
                <strong>Expert Handling:</strong> Skilled technicians for all types of furniture.
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-white/60">
              <span className="text-red-600 text-2xl mt-1">✓</span>
              <div>
                <strong>Specialized Tools:</strong> Proper equipment for safe dismantling and assembly.
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-white/60">
              <span className="text-red-600 text-2xl mt-1">✓</span>
              <div>
                <strong>Secure Packing:</strong> High-quality materials to protect furniture during transit.
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-white/60">
              <span className="text-red-600 text-2xl mt-1">✓</span>
              <div>
                <strong>Efficient Reassembly:</strong> Quick and correct setup at your new location.
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-white/60">
              <span className="text-red-600 text-2xl mt-1">✓</span>
              <div>
                <strong>Damage Prevention:</strong> Careful handling to avoid scratches or breakages.
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-white/60">
              <span className="text-red-600 text-2xl mt-1">✓</span>
              <div>
                <strong>Time-Saving:</strong> Let us handle the complexities so you can focus on your move.
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16 px-8 bg-gradient-to-br from-red-50 to-orange-50 border border-red-100">
          <h2 className="text-2xl lg:text-4xl font-bold mb-6" style={{ color: '#374151' }}>
            Need Furniture Assistance for Your Move?
          </h2>
          <p className="text-base lg:text-xl mb-8 max-w-2xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
            Contact Azan Packers & Movers for reliable furniture dismantling,
            packing, and assembly services. Get a free quote today.
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
