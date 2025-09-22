"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  
  const words = ['Trusted', 'Professional', 'Reliable', 'Expert'];
  const images = ['https://plus.unsplash.com/premium_photo-1663089186311-5638f27bad2b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1645526816819-f4c8cdaf47fc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1679858780488-13faaa89d175?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1661409351559-4172ea985076?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1723662303063-13ea4ba7e648?q=80&w=1134&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

  ];
  
  useEffect(() => {
    setIsVisible(true);
    
    // Word transition interval
    const wordInterval = setInterval(() => {
      setCurrentWord(prev => (prev + 1) % words.length);
    }, 3000);
    
    // Image transition interval
    const imageInterval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length);
    }, 5000); // Slower transition for images to avoid distraction
    
    return () => {
      clearInterval(wordInterval);
      clearInterval(imageInterval);
    };
  }, []);

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center bg-no-repeat"
      role="banner"
    >
      {/* Sliding Background Images */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url('${image}')` }}
          />
        ))}
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute top-20 left-10 w-32 h-32 rounded-full animate-bounce"
          style={{ backgroundColor: '#ED3F27' }}
        />
        <div 
          className="absolute bottom-20 right-10 w-24 h-24 rounded-full animate-pulse"
          style={{ backgroundColor: '#ED3F27' }}
        />
        <div 
          className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full animate-ping"
          style={{ backgroundColor: '#ED3F27' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Main Heading with SEO optimization */}
          <h1 
            className={`text-4xl lg:text-7xl font-extrabold mb-6 tracking-tight transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ color: '#FFFFFF' }}
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
  className={`text-base sm:text-lg md:text-xl lg:text-3xl mb-6 sm:mb-8 min-h-[3rem] flex flex-wrap items-center justify-center text-center transition-all duration-700 delay-300 ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
  }`}
  style={{ color: '#FFFFFF' }}
>
  <span className="mr-2 sm:mr-3">Your</span>
  <span
    className="font-semibold transition-all duration-500"
    style={{ color: '#ED3F27' }}
    key={currentWord}
  >
    {words[currentWord]}
  </span>
  <span className="ml-2 sm:ml-3">Moving Partner in Saudi Arabia</span>
</div>


          {/* SEO-optimized description */}
          <p 
            className={`text-base lg:text-xl max-w-3xl mx-auto leading-relaxed mb-12 transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ color: '#D1D5DB' }}
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
              className="group relative inline-flex items-center px-10 py-4 text-lg font-semibold text-white overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-200"
              style={{ backgroundColor: '#ED3F27' }}
              aria-label="Get a free moving quote from Azan Packers & Movers"
            >
              <span className="relative z-10">Get Free Quote</span>
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </Link>
            
            <Link
              href="/services"
              className="group text-white px-12 py-4 text-lg font-semibold border-2 shadow-md transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-200"
              style={{ 
                borderColor: '#ED3F27',
                backgroundColor: 'transparent'
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
            style={{ color: '#D1D5DB' }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#ED3F27' }} />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#ED3F27' }} />
              <span>24/7 Support</span>
            </div>
           
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#ED3F27' }} />
              <span>Free Estimates</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}