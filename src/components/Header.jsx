"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import azanmoversLogo from '../../public/azanmovers-logo.png';


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const navRef = useRef(null);

if(pathname.startsWith('/studio')){
  return null;
}

  const navigationItems = [
    { name: 'HOME', href: '/', active: pathname === '/' },
    { name: 'ABOUT', href: '/about', active: pathname === '/about' },
    {
      name: 'SERVICES',
      href: '/services',
      active: pathname?.startsWith('/services'),
      dropdown: [
        { name: 'House Moving', href: '/services/house-moving', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 12v10a1 1 0 001 1h3m10-10l2 2m0 0l-7 7-7-7M19 12v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg> },
        { name: 'Office Relocation', href: '/services/office-relocation', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg> },
        { name: 'Furniture Dismantling', href: '/services/furniture-dismantling', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg> },
        { name: 'Furniture Assembly', href: '/services/furniture-assembly', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg> },
        { name: 'Packing Services', href: '/services/packing', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4m0-10l8 4m-8-4l-8 4" /></svg> },
        { name: 'Unpacking Services', href: '/services/unpacking', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2 2m0 0l-7 7-7-7M5 12h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
        { name: 'Loading Services', href: '/services/loading', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v-1a2 2 0 012-2h12a2 2 0 012 2v1m-6-4l-4 4m0 0l4 4m-4-4H3" /></svg> },
        { name: 'Unloading Services', href: '/services/unloading', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 8v1a2 2 0 01-2 2H6a2 2 0 01-2-2V8m6 4l4-4m0 0l-4-4m4 4H21" /></svg> },
        { name: 'Jeipsing Opening', href: '/services/jeipsing-opening', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg> },
        { name: 'Jeipsing Closing', href: '/services/jeipsing-closing', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a2 2 0 00-2-2H8a2 2 0 00-2 2v4h12z" /></svg> },
        { name: 'Storage Solutions', href: '/services/storage', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 19a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2z" /></svg> }
      ]
    },
    { name: 'BLOGS', href: '/blogs', active: pathname?.startsWith('/blog') },
    { name: 'CONTACT', href: '/contact', active: pathname === '/contact' },
    { name: 'FAQS', href: '/faq', active: pathname === '/faq' }

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
            className="flex items-center group transition-transform duration-300 hover:scale-105 focus:outline-none focus:scale-105"
          >
            <div className="w-30 h-30 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
              <Image
                src={azanmoversLogo}
                alt="Azan Movers Logo"
                width={48}
                height={48}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-2xl font-black tracking-tight" style={{ color: '#374151' }}>
                Azan <span style={{ color: '#ED3F27' }}>Movers</span>
              </div>
              <p className="text-xs text-gray-500 -mt-1 tracking-wide">Professional Moving Services</p>
            </div>
          </Link>

       {/* Desktop Navigation */}
<div className="hidden lg:flex items-center space-x-4">
  {navigationItems.map((item, index) => (
    <div
      key={item.name}
      className="relative"
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={item.href}
        className="relative px-4 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-red-600"
      >
        <span className="flex items-center">
          {item.name}
          {item.dropdown && (
            <svg
              className={`w-4 h-4 ml-1 transition-transform duration-200 ${
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

        {/* Bottom line for active & hover */}
        <span
          className={`absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 ${
            item.active ? 'w-full' : 'group-hover:w-full'
          }`}
        />
      </Link>

      {/* Desktop Dropdown */}
      {item.dropdown && activeDropdown === index && (
        <div className="absolute top-full left-0 mt-2 w-72 bg-white border border-gray-100 shadow-lg z-50">
          <div className="py-2">
            {item.dropdown.map((subItem) => (
              <Link
                key={subItem.name}
                href={subItem.href}
                className="flex items-center px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-red-50 transition-colors duration-200"
              >
                <span className="mr-3 text-xl">{subItem.icon}</span>
                <span className="font-medium">{subItem.name}</span>
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
              href="tel:+966593694941"
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