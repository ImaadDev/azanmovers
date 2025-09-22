"use client";

export default function TermsOfServicePage() {
  return (
    <main className="relative overflow-hidden" style={{ backgroundColor: '#FFFCFB' }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-5 w-48 h-48 bg-gradient-to-br from-red-500/3 to-orange-500/3 animate-blob filter blur-xl" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-blue-500/3 to-purple-500/3 animate-blob filter blur-xl animation-delay-2000" />
        <div className="absolute top-1/3 left-1/3 w-24 h-24 bg-gradient-to-br from-green-500/3 to-teal-500/3 animate-blob filter blur-xl animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 py-16 lg:py-24 text-left">
        <header className="mb-16 lg:mb-24 text-center">
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
              Legal
            </span>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500" />
          </div>
          <h1 className="text-3xl lg:text-5xl font-black mb-8 leading-none tracking-tight" style={{ color: '#374151' }}>
            Our
            <span className="block bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
              Terms of Service
            </span>
          </h1>
          <p className="text-base lg:text-xl max-w-2xl mx-auto leading-relaxed font-light" style={{ color: '#6B7280' }}>
            Please read these terms carefully before using our services.
          </p>
        </header>

        <section className="bg-white/80 backdrop-blur-xl border border-white/20 p-8 md:p-12 shadow-lg space-y-8 text-gray-700">
          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#374151' }}>1. Acceptance of Terms</h2>
            <p className="mb-4">By accessing and using the services provided by Azan Packers & Movers, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#374151' }}>2. Services Description</h2>
            <p className="mb-4">Azan Packers & Movers provides professional moving and relocation services including, but not limited to, house moving, villa relocation, office relocation, furniture dismantling, furniture assembly, packing services, and storage solutions within Saudi Arabia and surrounding areas.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#374151' }}>3. User Responsibilities</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>You agree to provide accurate and complete information when requesting services.</li>
              <li>You are responsible for ensuring access to your property for moving services.</li>
              <li>You agree to comply with all applicable laws and regulations.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#374151' }}>4. Payment and Fees</h2>
            <p className="mb-4">Service fees will be communicated to you upon quotation. Payment terms and methods will be agreed upon before the commencement of services. Any additional charges due to unforeseen circumstances will be communicated and agreed upon prior to execution.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#374151' }}>5. Limitation of Liability</h2>
            <p className="mb-4">Azan Packers & Movers will take all reasonable care in providing services. However, we shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#374151' }}>6. Governing Law</h2>
            <p className="mb-4">These Terms of Service shall be governed by and construed in accordance with the laws of the Kingdom of Saudi Arabia, without regard to its conflict of law provisions.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#374151' }}>7. Changes to Terms</h2>
            <p className="mb-4">We reserve the right to modify or replace these Terms at any time. We will provide reasonable notice prior to any new terms taking effect. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#374151' }}>8. Contact Information</h2>
            <p className="mb-4">If you have any questions about these Terms of Service, please contact us via our <a href="/contact" className="text-red-600 hover:underline">Contact Page</a>.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
