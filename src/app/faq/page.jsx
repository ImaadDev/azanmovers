"use client";

import { useState, useEffect, useRef } from 'react';

const faqData = [
  {
    id: 1,
    question: "How much does house moving cost in Saudi Arabia?",
    answer: "The cost depends on factors such as the size of your home, distance, and specific services required. Contact Azan Packers & Movers for a free, personalized moving quote in Saudi Arabia.",
    category: "Pricing"
  },
  {
    id: 2,
    question: "Do you provide professional office relocation services?",
    answer: "Yes, we specialize in office relocation in Saudi Arabia. Our expert team ensures minimal downtime, safe equipment handling, and smooth business transitions.",
    category: "Services"
  },
  {
    id: 3,
    question: "Can you dismantle and assemble furniture safely?",
    answer: "Absolutely. Our trained movers provide safe furniture dismantling, secure transport, and careful reassembly to protect your belongings during relocation.",
    category: "Services"
  },
  {
    id: 4,
    question: "Are my belongings insured during the move?",
    answer: "Yes. We take full responsibility for your belongings and offer insurance options for added peace of mind during your house or office move in Saudi Arabia.",
    category: "Safety"
  },
  {
    id: 5,
    question: "What areas do you serve in Saudi Arabia?",
    answer: "We serve all major areas in Saudi Arabia, including Al Aziziyah, Al Hamra, Al Rawdah, Al Salamah, and surrounding districts. Contact us to confirm service in your specific location.",
    category: "Coverage"
  },
  {
    id: 6,
    question: "How far in advance should I book my move?",
    answer: "We recommend booking at least 2-4 weeks in advance, especially during peak seasons, to ensure availability and proper planning for your relocation.",
    category: "Booking"
  }
];

export default function FAQPage() {
  const [openItem, setOpenItem] = useState(null);
  const [visibleItems, setVisibleItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const sectionRef = useRef(null);

  const categories = ['All', ...new Set(faqData.map(item => item.category))];

  const filteredFAQs = activeCategory === 'All'
    ? faqData
    : faqData.filter(item => item.category === activeCategory);

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer }
    }))
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = sectionRef.current?.querySelectorAll('.faq-item');
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [filteredFAQs]);

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <>
      {/* The Head component and structured data are already handled in layout.js or _app.js */}
      {/* However, for specific page-level structured data or meta tags, you might still use Head */}
      {/* For now, we'll keep the script tags here, assuming they are rendered correctly */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      <main className="relative overflow-hidden" style={{ backgroundColor: '#FFFCFB' }}>
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-red-500/3 to-orange-500/3 animate-pulse" />
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-blue-500/3 to-purple-500/3 animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-gradient-to-br from-green-500/3 to-teal-500/3 animate-pulse" style={{ animationDelay: '4s' }} />
        </div>

        <section
          ref={sectionRef}
          className="max-w-5xl mx-auto relative z-10 py-16 lg:py-24 px-6 lg:px-8"
        >
          {/* Modern Header */}
          <div className="text-center mb-20">
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
                FAQ
              </span>
              <div
                className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500"
              />
            </div>

            <h1
              className="text-3xl lg:text-6xl font-black mb-8 leading-none tracking-tight"
              style={{ color: '#374151' }}
            >
              Got
              <span className="block bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
                Questions?
              </span>
            </h1>

            <p
              className="text-base lg:text-2xl max-w-3xl mx-auto leading-relaxed font-light"
              style={{ color: '#6B7280' }}
            >
              Find answers to the most commonly asked questions about our moving services
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 text-sm md:text-base font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:scale-105 ${
                  activeCategory === category
                    ? 'text-white scale-105'
                    : 'text-gray-600 bg-white/50 hover:bg-white/70'
                }`}
                style={{
                  backgroundColor: activeCategory === category ? '#ED3F27' : undefined,
                  border: activeCategory === category ? 'none' : '1px solid rgba(237, 63, 39, 0.2)'
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="space-y-6">
            {filteredFAQs.map((faq, index) => (
              <div
                key={faq.id}
                data-index={index}
                className={`faq-item group transition-all duration-700 ${
                  visibleItems.includes(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className={`relative bg-white/80 backdrop-blur-xl border border-white/20 transition-all duration-500 hover:bg-white/90 overflow-hidden ${
                    openItem === faq.id ? 'bg-white/95' : ''
                  }`}
                  style={{
                    background: openItem === faq.id
                      ? 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.92) 100%)'
                      : undefined
                  }}
                >
                  {/* Question Header */}
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full text-left p-8 flex items-center justify-between group-hover:bg-red-50/30 transition-all duration-300 focus:outline-none focus:bg-red-50/30"
                    aria-expanded={openItem === faq.id}
                  >
                    <div className="flex items-center gap-4 flex-1">
                      {/* Question Number */}
                      <div
                        className={`flex items-center justify-center w-12 h-12 text-white font-bold text-sm transition-all duration-300 ${
                          openItem === faq.id ? 'scale-110' : ''
                        }`}
                        style={{ backgroundColor: '#ED3F27' }}
                      >
                        {String(faq.id).padStart(2, '0')}
                      </div>

                      {/* Question Text */}
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span
                            className="text-xs font-bold uppercase tracking-wider px-2 py-1"
                            style={{
                              color: '#ED3F27',
                              background: 'rgba(237, 63, 39, 0.1)'
                            }}
                          >
                            {faq.category}
                          </span>
                        </div>
                        <h3
                          className={`text-base lg:text-2xl font-bold transition-colors duration-300 ${
                            openItem === faq.id ? 'text-red-600' : ''
                          }`}
                          style={{ color: openItem === faq.id ? '#DC2626' : '#374151' }}
                        >
                          {faq.question}
                        </h3>
                      </div>
                    </div>

                    {/* Animated Toggle Icon */}
                    <div
                      className={`flex items-center justify-center w-12 h-12 transition-all duration-500 ml-4 ${
                        openItem === faq.id
                          ? 'bg-red-600 text-white rotate-180 scale-110'
                          : 'bg-red-50 text-red-600 hover:bg-red-100'
                      }`}
                    >
                      <svg
                        className="w-6 h-6 transition-transform duration-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>

                  {/* Answer Content */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-out ${
                      openItem === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-8 pb-8 pl-24">
                      <div
                        className="text-sm md:text-lg leading-relaxed"
                        style={{ color: '#6B7280' }}
                      >
                        {faq.answer}
                      </div>
                    </div>
                  </div>

                  {/* Active Indicator */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-500 ${
                      openItem === faq.id ? 'bg-red-600 opacity-100' : 'bg-transparent opacity-0'
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-20">
            <div
              className="inline-flex flex-col items-center p-8 bg-white/60 backdrop-blur-xl border border-white/20"
            >
              <h3
                className="text-xl md:text-2xl font-bold mb-4"
                style={{ color: '#374151' }}
              >
                Still have questions?
              </h3>
              <p
                className="text-sm md:text-lg mb-6 max-w-md"
                style={{ color: '#6B7280' }}
              >
                Our expert team is available 24/7 to provide personalized assistance
              </p>
              <a
                href="tel:+966123456789"
                className="group inline-flex items-center px-8 py-4 text-base md:text-lg font-bold text-white transition-all duration-500 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-red-200"
                style={{ backgroundColor: '#ED3F27' }}
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now for Help
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
