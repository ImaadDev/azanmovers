"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const navRef = useRef(null);

  const navigationItems = [
    { name: 'Home', href: '/', active: pathname === '/' },
    { name: 'About', href: '/about', active: pathname === '/about' },
    {
      name: 'Services',
      href: '/services',
      active: pathname?.startsWith('/services'),
      dropdown: [
        { name: 'House Moving', href: '/services/house-moving', icon: '🏠' },
        { name: 'Office Relocation', href: '/services/office-relocation', icon: '🏢' },
        { name: 'Furniture Dismantling', href: '/services/furniture-dismantling', icon: '🛠️' },
        { name: 'Furniture Assembly', href: '/services/furniture-assembly', icon: '🛋️' },
        { name: 'Packing Services', href: '/services/packing', icon: '📦' },
        { name: 'Storage Solutions', href: '/services/storage', icon: '🏪' }
      ]
    },
    { name: 'Blog', href: '/blogs', active: pathname?.startsWith('/blog') },
    { name: 'Contact', href: '/contact', active: pathname === '/contact' },
    { name: 'Faqs', href: '/faq', active: pathname === '/faq' }

  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    document.addEventListener('click', handleClickOutside);
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (index) => {
    if (isMobile) {
      setActiveDropdown(activeDropdown === index ? null : index);
    }
  };

  const handleMouseEnter = (index) => {
    if (!isMobile) {
      setActiveDropdown(index);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setActiveDropdown(null);
    }
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl border-b'
          : 'bg-white/80 backdrop-blur-md'
      }`}
      style={{
        borderBottomColor: isScrolled ? 'rgba(237, 63, 39, 0.1)' : 'transparent'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 group transition-transform duration-300 hover:scale-105 focus:outline-none focus:scale-105"
          >
            <div
              className="w-12 h-12 flex items-center justify-center transition-all duration-300 group-hover:rotate-12"
              style={{ backgroundColor: '#ED3F27' }}
            >
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 8l2 2 4-4" />
              </svg>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-black tracking-tight" style={{ color: '#374151' }}>
                Azan <span style={{ color: '#ED3F27' }}>Movers</span>
              </h1>
              <p className="text-xs text-gray-500 -mt-1 tracking-wide">Professional Moving Services</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item, index) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  className={`group relative px-6 py-3 text-base font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:scale-105 ${
                    item.active
                      ? 'text-white'
                      : 'text-gray-700 hover:text-red-600'
                  }`}
                  style={{
                    backgroundColor: item.active ? '#ED3F27' : 'transparent'
                  }}
                >
                  <span className="flex items-center">
                    {item.name}
                    {item.dropdown && (
                      <svg
                        className={`w-4 h-4 ml-2 transition-transform duration-300 ${
                          activeDropdown === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </span>
                  
                  {/* Clean active indicator */}
                  {!item.active && (
                    <div 
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-red-600 group-hover:w-full transition-all duration-300"
                    />
                  )}
                </Link>

                {/* Desktop Dropdown - Clean rectangular design */}
                {item.dropdown && activeDropdown === index && (
                  <div
                    className="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-xl border border-gray-100 overflow-hidden animate-in slide-in-from-top-2 duration-300"
                    style={{ zIndex: 1000 }}
                  >
                    <div className="py-2">
                      {item.dropdown.map((subItem, subIndex) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="group flex items-center px-6 py-4 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all duration-300 border-l-4 border-transparent hover:border-red-600"
                        >
                          <span className="text-xl mr-4">{subItem.icon}</span>
                          <span className="font-medium flex-1">{subItem.name}</span>
                          <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA & Mobile Menu Button */}
          <div className="flex items-center space-x-3">
            {/* CTA Button - Clean rectangular design */}
            <Link
              href="/quote"
              className="hidden md:inline-flex items-center px-8 py-3 text-sm font-bold text-white transition-all duration-300 hover:scale-105 focus:outline-none focus:scale-105 border-2 border-red-600"
              style={{ backgroundColor: '#ED3F27' }}
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.955 8.955 0 01-4.906-1.487L3 21l2.487-5.094A8.955 8.955 0 013 12c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
              </svg>
              Free Quote
            </Link>

            {/* Emergency Call Button */}
            <a
              href="tel:+966123456789"
              className="hidden sm:inline-flex items-center px-6 py-3 text-sm font-semibold text-red-600 border-2 border-red-200 hover:bg-red-50 transition-all duration-300 hover:scale-105 focus:outline-none focus:scale-105"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>

            {/* Mobile Menu Button - Clean rectangular design */}
            <button
              onClick={toggleMenu}
              className="lg:hidden relative w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:scale-110 border-2"
              style={{
                backgroundColor: isMenuOpen ? '#ED3F27' : 'transparent',
                color: isMenuOpen ? 'white' : '#ED3F27',
                borderColor: '#ED3F27'
              }}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute top-1 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 top-2.5' : ''
                  }`}
                />
                <span
                  className={`absolute top-2.5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`absolute top-4 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 top-2.5' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-6 space-y-2">
            {navigationItems.map((item, index) => (
              <div key={item.name}>
                <div
                  className={`flex items-center justify-between px-6 py-4 transition-all duration-300 border-l-4 ${
                    item.active
                      ? 'bg-red-50 text-red-600 border-red-600'
                      : 'text-gray-700 hover:bg-gray-50 border-transparent hover:border-red-600'
                  }`}
                  onClick={() => item.dropdown ? toggleDropdown(index) : null}
                >
                  <Link
                    href={item.href}
                    className="flex-1 font-semibold"
                    onClick={() => !item.dropdown && setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <button className="p-2">
                      <svg
                        className={`w-5 h-5 transition-transform duration-300 ${
                          activeDropdown === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}
                </div>

                {/* Mobile Dropdown */}
                {item.dropdown && (
                  <div
                    className={`ml-6 overflow-hidden transition-all duration-300 ${
                      activeDropdown === index ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="py-2 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="flex items-center px-6 py-3 text-gray-600 hover:text-red-600 hover:bg-red-50 transition-all duration-300 border-l-4 border-transparent hover:border-red-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span className="text-lg mr-4">{subItem.icon}</span>
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Mobile CTA Buttons */}
            <div className="pt-6 mt-6 border-t border-gray-200 space-y-4">
              <Link
                href="/quote"
                className="flex items-center justify-center w-full px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:scale-105 border-2 border-red-600"
                style={{ backgroundColor: '#ED3F27' }}
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.955 8.955 0 01-4.906-1.487L3 21l2.487-5.094A8.955 8.955 0 013 12c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
                </svg>
                Get Free Quote
              </Link>
              <a
                href="tel:+966123456789"
                className="flex items-center justify-center w-full px-8 py-4 text-sm font-semibold text-red-600 border-2 border-red-200 hover:bg-red-50 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
                Emergency Call: +966 12 345 6789
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}