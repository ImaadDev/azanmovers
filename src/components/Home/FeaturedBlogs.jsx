"use client";

import { useState, useEffect, useRef } from 'react';
import Head from "next/head";
import Link from "next/link";

const blogs = [
  {
    slug: "stress-free-house-moving",
    title: "Tips for a Stress-Free House Moving in Jeddah",
    date: "2025-09-21",
    summary: "Essential tips to make your house moving smooth and stress-free.",
    category: "Moving Tips",
    readTime: "5 min read",
    featured: true,
    gradient: "from-red-500/20 to-orange-500/20"
  },
  {
    slug: "office-relocation-checklist",
    title: "Office Relocation Checklist for Businesses",
    date: "2025-09-20",
    summary: "Complete checklist for relocating your office efficiently.",
    category: "Business",
    readTime: "7 min read",
    featured: false,
    gradient: "from-blue-500/20 to-purple-500/20"
  }
];

export default function FeaturedBlog() {
  const [visibleCards, setVisibleCards] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

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

    const cards = sectionRef.current?.querySelectorAll('.blog-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e, index) => {
    if (hoveredCard === index) {
      const rect = e.currentTarget.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              itemListElement: blogs.map((blog, index) => ({
                "@type": "ListItem",
                position: index + 1,
                url: `https://www.azanmovers.com/blog/${blog.slug}`,
                name: blog.title
              }))
            })
          }}
        />
      </Head>

      <section 
        ref={sectionRef}
        className="relative py-32 px-6 lg:px-8 overflow-hidden"
        style={{ backgroundColor: '#FDF4E3' }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-red-500/5 to-orange-500/5 rounded-full animate-pulse" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-green-500/5 to-teal-500/5 rounded-full animate-pulse" style={{ animationDelay: '4s' }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Ultra-Modern Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="relative">
                <div 
                  className="w-16 h-1 rounded-full"
                  style={{ backgroundColor: '#ED3F27' }}
                />
                <div 
                  className="absolute top-0 left-0 w-8 h-1 rounded-full animate-pulse"
                  style={{ backgroundColor: '#ED3F27', filter: 'brightness(1.5)' }}
                />
              </div>
              <span 
                className="text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full border"
                style={{ 
                  color: '#ED3F27', 
                  borderColor: '#ED3F27',
                  background: 'rgba(237, 63, 39, 0.05)'
                }}
              >
                Knowledge Hub
              </span>
              <div className="relative">
                <div 
                  className="w-16 h-1 rounded-full"
                  style={{ backgroundColor: '#ED3F27' }}
                />
                <div 
                  className="absolute top-0 right-0 w-8 h-1 rounded-full animate-pulse"
                  style={{ backgroundColor: '#ED3F27', filter: 'brightness(1.5)', animationDelay: '1s' }}
                />
              </div>
            </div>
            
            <h2 
              className="text-4xl lg:text-7xl font-black mb-8 leading-none tracking-tight"
              style={{ color: '#374151' }}
            >
              Latest
              <span className="block bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
                Insights
              </span>
            </h2>
            
            <p 
              className="text-base lg:text-2xl max-w-3xl mx-auto leading-relaxed font-light"
              style={{ color: '#6B7280' }}
            >
              Cutting-edge advice and innovative solutions for your moving journey
            </p>
          </div>

          {/* Advanced Blog Grid */}
          <div className="grid lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
            {blogs.map((blog, index) => (
              <article
                key={blog.slug}
                data-index={index}
                className={`blog-card group relative overflow-hidden transition-all duration-1000 ease-out cursor-pointer ${
                  visibleCards.includes(index) 
                    ? 'opacity-100 translate-y-0 rotate-0' 
                    : 'opacity-0 translate-y-20 rotate-1'
                } ${blog.featured ? 'lg:col-span-8' : 'lg:col-span-4'}`}
                style={{ 
                  transitionDelay: `${index * 300}ms`,
                  transformStyle: 'preserve-3d'
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                onMouseMove={(e) => handleMouseMove(e, index)}
              >
                {/* Glassmorphism Container */}
                <div 
                  className={`relative h-full bg-white/80 backdrop-blur-xl border border-white/20 transition-all duration-700 group-hover:bg-white/90 ${
                    hoveredCard === index ? 'scale-105 shadow-2xl shadow-red-500/10' : 'shadow-lg'
                  }`}
                  style={{
                    background: hoveredCard === index 
                      ? 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)'
                      : 'rgba(255, 255, 255, 0.8)',
                  }}
                >
                  {/* Gradient Overlay */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${blog.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} 
                  />

                  {/* Interactive Light Effect */}
                  {hoveredCard === index && (
                    <div
                      className="absolute pointer-events-none rounded-full transition-all duration-300"
                      style={{
                        width: '200px',
                        height: '200px',
                        background: 'radial-gradient(circle, rgba(237, 63, 39, 0.1) 0%, transparent 70%)',
                        left: mousePosition.x - 100,
                        top: mousePosition.y - 100,
                        filter: 'blur(20px)'
                      }}
                    />
                  )}

                  {/* Featured Floating Badge */}
                  {blog.featured && (
                    <div className="absolute -top-3 -right-3 z-20">
                      <div 
                        className="relative px-6 py-2 text-xs font-bold text-white uppercase tracking-wider transform rotate-3 shadow-lg animate-pulse"
                        style={{ backgroundColor: '#ED3F27' }}
                      >
                        <span className="relative z-10">Featured</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-400 opacity-75" />
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className={`relative z-10 p-8 h-full flex flex-col ${blog.featured ? 'lg:p-12' : ''}`}>
                    {/* Modern Meta Section */}
                    <div className="flex items-center justify-between mb-6">
                      <div 
                        className="px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-full"
                        style={{ 
                          color: '#ED3F27',
                          background: 'rgba(237, 63, 39, 0.1)',
                          border: '1px solid rgba(237, 63, 39, 0.2)'
                        }}
                      >
                        {blog.category}
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 text-sm font-medium" style={{ color: '#9CA3AF' }}>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {formatDate(blog.date)}
                        </div>
                        <div className="w-1 h-1 rounded-full" style={{ backgroundColor: '#9CA3AF' }} />
                        <div className="flex items-center gap-2 text-sm font-medium" style={{ color: '#9CA3AF' }}>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {blog.readTime}
                        </div>
                      </div>
                    </div>

                    {/* Dynamic Title */}
                    <h3 
                      className={`font-black mb-6 leading-tight transition-all duration-500 ${
                        blog.featured ? 'text-xl lg:text-2xl' : 'text-xl lg:text-2xl'
                      } ${hoveredCard === index ? 'text-red-600' : ''}`}
                      style={{ color: hoveredCard === index ? '#DC2626' : '#374151' }}
                    >
                      {blog.title}
                    </h3>

                    {/* Enhanced Summary */}
                    <p 
                      className={`leading-relaxed mb-8 flex-grow ${
                        blog.featured ? 'text-base lg:text-lg' : 'text-base lg:text-lg'
                      }`}
                      style={{ color: '#6B7280' }}
                    >
                      {blog.summary}
                    </p>

                    {/* Premium CTA */}
                    <Link
                      href={`/blogs/${blog.slug}`}
                      className="group/link relative inline-flex items-center text-base md:text-lg font-bold overflow-hidden transition-all duration-500 hover:scale-105 focus:outline-none focus:scale-105"
                      style={{ color: '#ED3F27' }}
                      aria-label={`Read more about ${blog.title}`}
                    >
                      <span className="relative z-10 mr-3">Explore Article</span>
                      <div 
                        className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-500 ${
                          hoveredCard === index ? 'bg-red-600 text-white scale-110' : 'bg-red-50 text-red-600'
                        }`}
                      >
                        <svg 
                          className={`w-5 h-5 transition-all duration-500 ${
                            hoveredCard === index ? 'translate-x-1' : ''
                          }`}
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
                      </div>
                    </Link>
                  </div>

                  {/* Animated Progress Bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100">
                    <div 
                      className={`h-full transition-all duration-700 ease-out ${
                        hoveredCard === index ? 'w-full' : 'w-0'
                      }`}
                      style={{ background: 'linear-gradient(90deg, #ED3F27 0%, #F97316 100%)' }}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Futuristic CTA Section */}
          <div className="text-center mt-24">
            <div className="inline-flex flex-col items-center">
              <p 
                className="text-base md:text-xl mb-8 font-light"
                style={{ color: '#6B7280' }}
              >
                Ready to dive deeper into our expertise?
              </p>
              <Link
                href="/blogs"
                className="group relative inline-flex items-center px-6 md:px-12 py-2 md:py-6 text-sm md:text-xl font-bold text-white overflow-hidden transition-all duration-700 hover:scale-110 hover:shadow-2xl focus:outline-none focus:scale-110"
                style={{ backgroundColor: '#ED3F27' }}
                aria-label="Explore all blog articles from Azan Packers & Movers"
              >
                <span className="relative z-10 mr-4">Explore All Articles</span>
                <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/20 group-hover:bg-white/30 transition-all duration-300">
                  <svg 
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M13 7l5 5m0 0l-5 5m5-5H6" 
                    />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}