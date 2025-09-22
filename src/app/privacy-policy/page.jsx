"use client";

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </span>
          </h1>
          <p className="text-base lg:text-xl max-w-2xl mx-auto leading-relaxed font-light" style={{ color: '#6B7280' }}>
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
          </p>
        </header>

        <section className="bg-white/80 backdrop-blur-xl border border-white/20 p-8 md:p-12 shadow-lg space-y-8 text-gray-700">
          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#374151' }}>1. Introduction</h2>
            <p className="mb-4">Welcome to Azan Packers & Movers. We are committed to protecting your privacy and handling your data in an open and transparent manner. This Privacy Policy sets out how we collect, store, and process your personal information.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#374151' }}>2. Information We Collect</h2>
            <p className="mb-4">We may collect and process the following types of personal information:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Contact Information:</strong> Name, email address, phone number, and postal address.</li>
              <li><strong>Service Information:</strong> Details about your moving needs, such as move date, origin, destination, and items to be moved.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, operating system, and website usage data collected through cookies and similar technologies.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#374151' }}>3. How We Use Your Information</h2>
            <p className="mb-4">We use your personal information for the following purposes:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>To provide you with moving and relocation services.</li>
              <li>To respond to your inquiries and provide customer support.</li>
              <li>To process your requests for free quotations.</li>
              <li>To improve our website and services.</li>
              <li>To send you marketing communications, where you have consented to receive them.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#374151' }}>4. Data Sharing and Disclosure</h2>
            <p className="mb-4">We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties without your consent, except in the following circumstances:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>To trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.</li>
              <li>When we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#374151' }}>5. Data Security</h2>
            <p className="mb-4">We implement a variety of security measures to maintain the safety of your personal information when you place a request or enter, submit, or access your personal information.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#374151' }}>6. Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access the personal information we hold about you.</li>
              <li>Request correction of any inaccurate data.</li>
              <li>Request deletion of your personal information.</li>
              <li>Object to the processing of your personal information.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#374151' }}>7. Changes to This Policy</h2>
            <p className="mb-4">We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#374151' }}>8. Contact Us</h2>
            <p className="mb-4">If you have any questions regarding this Privacy Policy, you may contact us using the information on our <a href="/contact" className="text-red-600 hover:underline">Contact Page</a>.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
