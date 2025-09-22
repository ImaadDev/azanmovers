"use client";

import { useState, useEffect, useRef } from 'react';
import Head from "next/head";

const faqData = [
  {
    id: 1,
    question: "Do you provide furniture dismantling?",
    answer: "Yes, we provide professional furniture dismantling and reassembly services. Our experienced team uses proper tools and techniques to safely dismantle your furniture, transport it securely, and reassemble it at your new location with precision and care.",
    category: "Services"
  },
  {
    id: 2,
    question: "Which areas in Jeddah do you serve?",
    answer: "We provide comprehensive moving services throughout Jeddah including Al Aziziyah, Al Hamra, Al Rawdah, Al Salamah, Al Marwah, Al Faisaliah, and all surrounding neighborhoods. Our local expertise ensures efficient service across the entire city.",
    category: "Coverage"
  },
  {
    id: 3,
    question: "How do you ensure the safety of my belongings?",
    answer: "We use high-quality packing materials, professional wrapping techniques, and secure transportation methods. All our staff are trained in proper handling procedures, and we're fully insured to protect your valuable items throughout the entire moving process.",
    category: "Safety"
  },
  {
    id: 4,
    question: "Do you provide packing materials?",
    answer: "Absolutely! We supply all necessary packing materials including boxes, bubble wrap, packing paper, tape, and protective covers. Our materials are of premium quality to ensure maximum protection for your belongings during transit.",
    category: "Services"
  },
  {
    id: 5,
    question: "Can you handle office relocations?",
    answer: "Yes, we specialize in office relocations with minimal business disruption. We offer flexible scheduling, including weekend and after-hours moves, and have experience handling sensitive equipment, documents, and IT infrastructure safely.",
    category: "Business"
  },
  {
    id: 6,
    question: "What are your operating hours?",
    answer: "We operate 7 days a week from 7:00 AM to 10:00 PM. We also offer emergency moving services and can accommodate special timing requests to fit your schedule. Our customer support is available 24/7 for urgent inquiries.",
    category: "Operations"
  }
];

export default function FAQ() {
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
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
        />
      </Head>

      <section 
        ref={sectionRef}
        className="relative py-32 px-6 lg:px-8 overflow-hidden"
        style={{ backgroundColor: '#FFFCFB' }}
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-red-500/3 to-orange-500/3 rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-blue-500/3 to-purple-500/3 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-gradient-to-br from-green-500/3 to-teal-500/3 rounded-full animate-pulse" style={{ animationDelay: '4s' }} />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Modern Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-4 mb-8">
              <div 
                className="w-16 h-1 rounded-full bg-gradient-to-r from-red-500 to-orange-500"
              />
              <span 
                className="text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full border"
                style={{ 
                  color: '#ED3F27', 
                  borderColor: '#ED3F27',
                  background: 'rgba(237, 63, 39, 0.05)'
                }}
              >
                FAQ
              </span>
              <div 
                className="w-16 h-1 rounded-full bg-gradient-to-r from-orange-500 to-red-500"
              />
            </div>
            
            <h2 
              className="text-3xl lg:text-6xl font-black mb-8 leading-none tracking-tight"
              style={{ color: '#374151' }}
            >
              Got
              <span className="block bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
                Questions?
              </span>
            </h2>
            
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
                className={`px-6 py-3 text-sm font-semibold rounded-full transition-all duration-300 hover:scale-105 focus:outline-none focus:scale-105 ${
                  activeCategory === category
                    ? 'text-white shadow-lg scale-105'
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
                  className={`relative bg-white/80 backdrop-blur-xl border border-white/20 transition-all duration-500 hover:bg-white/90 hover:shadow-xl overflow-hidden ${
                    openItem === faq.id ? 'shadow-2xl shadow-red-500/10 bg-white/95' : 'shadow-lg'
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
                        className={`flex items-center justify-center w-12 h-12 rounded-full text-white font-bold text-sm transition-all duration-300 ${
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
                            className="text-xs font-bold uppercase tracking-wider px-2 py-1 rounded"
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
                      className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-500 ml-4 ${
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
                    <div className="px-8 pb-8 lg:pl-24">
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
              className="inline-flex flex-col items-center p-8 rounded-3xl bg-white/60 backdrop-blur-xl border border-white/20"
            >
              <h3 
                className="text-2xl font-bold mb-4"
                style={{ color: '#374151' }}
              >
                Still have questions?
              </h3>
              <p 
                className="text-lg mb-6 max-w-md"
                style={{ color: '#6B7280' }}
              >
                Our expert team is available 24/7 to provide personalized assistance
              </p>
              <a
                href="tel:+966123456789"
                className="group inline-flex items-center px-8 py-4 text-lg font-bold text-white transition-all duration-500 hover:scale-110 hover:shadow-2xl focus:outline-none focus:scale-110 rounded-full"
                style={{ backgroundColor: '#ED3F27' }}
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now for Help
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}