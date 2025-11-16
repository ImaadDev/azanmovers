"use client";

import { useState, useEffect, useRef } from 'react';
import Link from "next/link";

export default function ServicesFAQ({ faqs }) {
  const [openItem, setOpenItem] = useState(null);
  const [visibleItems, setVisibleItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const sectionRef = useRef(null);

  const categories = ['All', ...new Set(faqs.map(item => item.category))];

  const filteredFAQs = activeCategory === 'All'
    ? faqs
    : faqs.filter(item => item.category === activeCategory);

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
    <section
      ref={sectionRef}
      className="relative py-16 px-4 lg:px-8 overflow-hidden bg-gradient-to-br from-red-50 to-orange-50 border border-red-100 mb-20 lg:mb-24"
    >
      <div className="text-center mb-16">
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
            FAQs
          </span>
          <div
            className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500"
          />
        </div>

        <h2
          className="text-2xl lg:text-5xl font-black mb-8 leading-none tracking-tight"
          style={{ color: '#374151' }}
        >
          Common
          <span className="block bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
            Questions
          </span>
        </h2>
        <p
          className="text-base lg:text-xl max-w-3xl mx-auto leading-relaxed font-light"
          style={{ color: '#6B7280' }}
        >
          Find quick answers to the most common inquiries about our services.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-3 text-sm font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:scale-105 ${
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
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full text-left p-4 md:p-8 flex items-center justify-between group-hover:bg-red-50/30 transition-all duration-300 focus:outline-none focus:bg-red-50/30"
                aria-expanded={openItem === faq.id}
              >
                <div className="flex items-center gap-4 flex-1">
                  <div
                    className={`flex items-center justify-center w-16 h-12 text-white font-bold text-sm transition-all duration-300 ${
                      openItem === faq.id ? 'scale-110' : ''
                    }`}
                    style={{ backgroundColor: '#ED3F27' }}
                  >
                    {String(faq.id).padStart(2, '0')}
                  </div>
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
                      className={`text-sm lg:text-2xl font-bold transition-colors duration-300 ${
                        openItem === faq.id ? 'text-red-600' : ''
                      }`}
                      style={{ color: openItem === faq.id ? '#DC2626' : '#374151' }}
                    >
                      {faq.question}
                    </h3>
                  </div>
                </div>

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

              <div
                className={`overflow-hidden transition-all duration-500 ease-out ${
                  openItem === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-8 pl-10 md:pl-24">
                  <div
                    className="text-sm md:text-lg leading-relaxed"
                    style={{ color: '#6B7280' }}
                  >
                    {faq.answer}
                  </div>
                </div>
              </div>

              <div
                className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-500 ${
                  openItem === faq.id ? 'bg-red-600 opacity-100' : 'bg-transparent opacity-0'
                }`}
              />
            </div>
          </div>
        ))}
      </div>

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
    </section>
  );
}