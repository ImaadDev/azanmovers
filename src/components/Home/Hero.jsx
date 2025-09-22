"use client";


import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  
  const words = ['Trusted', 'Professional', 'Reliable', 'Expert'];
  
  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentWord(prev => (prev + 1) % words.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: '#FDF4E3' }}
      role="banner"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute top-20 left-10 w-32 h-32 animate-bounce"
          style={{ backgroundColor: '#ED3F27' }}
        />
        <div 
          className="absolute bottom-20 right-10 w-24 h-24 animate-pulse"
          style={{ backgroundColor: '#ED3F27' }}
        />
        <div 
          className="absolute top-1/2 left-1/4 w-16 h-16 animate-ping"
          style={{ backgroundColor: '#ED3F27' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Main Heading with SEO optimization */}
          <h1 
            className={`text-4xl lg:text-7xl font-bold mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ color: '#374151' }}
          >
            <span className="block mb-2">Azan Packers</span>
            <span 
              className="block"
              style={{ color: '#ED3F27' }}
            >
              & Movers
            </span>
          </h1>

          {/* Dynamic Subtitle */}
          <div 
            className={`text-lg lg:text-3xl mb-8 h-12 flex items-center justify-center transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ color: '#374151' }}
          >
            <span className="mr-3">Your</span>
            <span 
              className="font-semibold transition-all duration-500"
              style={{ color: '#ED3F27' }}
              key={currentWord}
            >
              {words[currentWord]}
            </span>
            <span className="ml-3">Moving Partner in Saudi Arabia</span>
          </div>

          {/* SEO-optimized description */}
          <p 
            className={`text-base lg:text-xl max-w-3xl mx-auto leading-relaxed mb-12 transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ color: '#6B7280' }}
          >
            Professional packing and moving services in Saudi Arabia. 
            Safe, efficient, and affordable relocation solutions for homes and offices. 
            Licensed and insured movers with 24/7 customer support.
          </p>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-700 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Link
              href="/quote"
              className="group relative inline-flex items-center px-10 py-4 text-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-200"
              style={{ backgroundColor: '#ED3F27' }}
              aria-label="Get a free moving quote from Azan Packers & Movers"
            >
              <span className="relative z-10">Get Free Quote</span>
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </Link>
            
            <Link
              href="/services"
              className="group px-12 py-4 text-lg font-semibold border-2 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-200"
              style={{ 
                color: '#ED3F27', 
                borderColor: '#ED3F27'
              }}
              aria-label="View our moving and packing services"
            >
              <span className="group-hover:translate-x-1 inline-block transition-transform duration-300">
                Our Services →
              </span>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div 
            className={`mt-16 flex flex-wrap justify-center items-center gap-8 text-sm transition-all duration-700 delay-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ color: '#6B7280' }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2" style={{ backgroundColor: '#ED3F27' }} />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2" style={{ backgroundColor: '#ED3F27' }} />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2" style={{ backgroundColor: '#ED3F27' }} />
              <span>500+ Happy Customers</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2" style={{ backgroundColor: '#ED3F27' }} />
              <span>Free Estimates</span>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}