"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function HomeServices() {
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  const services = [
    { 
      name: "House Moving", 
      href: "/services/house-moving",
      description: "Complete residential moving services with professional packing, safe transportation, and careful handling of your belongings.",
      features: ["Professional Packing", "Safe Transportation", "Furniture Assembly"]
    },
    { 
      name: "Office Relocation", 
      href: "/services/office-relocation",
      description: "Seamless business relocations with minimal downtime, specialized equipment handling, and coordinated moving schedules.",
      features: ["Minimal Downtime", "IT Equipment Care", "Flexible Scheduling"]
    },
    { 
      name: "Furniture Dismantling", 
      href: "/services/furniture-dismantling",
      description: "Expert furniture disassembly and reassembly services ensuring your valuable pieces are moved safely and efficiently.",
      features: ["Expert Assembly", "Safe Handling", "Tool Provided"]
    },
    
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleCards(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.service-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-6 lg:px-8"
      style={{ backgroundColor: '#FFFCFB' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-3xl lg:text-5xl font-bold mb-6"
            style={{ color: '#374151' }}
          >
            Our Professional 
            <span 
              className="block mt-2"
              style={{ color: '#ED3F27' }}
            >
              Services
            </span>
          </h2>
          <p 
            className="text-base lg:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: '#6B7280' }}
          >
            Comprehensive moving and packing solutions tailored to meet your specific needs in Saudi Arabia
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.name}
              data-index={index}
              className={`service-card group relative bg-white p-8 transition-all duration-700 hover:scale-105 focus-within:scale-105 ${
                visibleCards.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: `${index * 200}ms`,
                border: '2px solid #F3F4F6'
              }}
            >
              {/* Service Icon/Number */}
              <div 
                className="w-16 h-16 flex items-center justify-center text-2xl font-bold text-white mb-6 transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: '#ED3F27' }}
              >
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Service Content */}
              <h3 
                className="text-2xl font-bold mb-4 transition-colors duration-300 group-hover:text-red-600"
                style={{ color: '#374151' }}
              >
                {service.name}
              </h3>

              <p 
                className="text-base leading-relaxed mb-6"
                style={{ color: '#6B7280' }}
              >
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex}
                    className="flex items-center text-sm"
                    style={{ color: '#6B7280' }}
                  >
                    <div 
                      className="w-2 h-2 mr-3 flex-shrink-0"
                      style={{ backgroundColor: '#ED3F27' }}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Link */}
              <Link
                href={service.href}
                className="group/link inline-flex items-center text-lg font-semibold transition-all duration-300 hover:translate-x-2 focus:outline-none focus:translate-x-2"
                style={{ color: '#ED3F27' }}
                aria-label={`Learn more about ${service.name} services`}
              >
                <span>Learn More about {service.name}</span>
                <svg 
                  className="w-5 h-5 ml-2 transition-transform duration-300 group-hover/link:translate-x-1"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  />
                </svg>
              </Link>

              {/* Hover Accent */}
              <div 
                className="absolute top-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ backgroundColor: '#ED3F27' }}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p 
            className="text-base md:text-lg mb-6"
            style={{ color: '#6B7280' }}
          >
            Need a custom moving service?
          </p>
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-4 text-base md:text-lg font-semibold text-white transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-200"
            style={{ backgroundColor: '#ED3F27' }}
            aria-label="Contact Azan Packers & Movers for custom moving solutions"
          >
            See All Services
           
          </Link>
          
        </div>
      </div>
    </section>
  );
}