"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import azanmoversLogo from '../../public/azanmovers-logo.png';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'House Moving', href: '/services/house-moving' },
    { name: 'Office Relocation', href: '/services/office-relocation' },
    { name: 'Furniture Assembly', href: '/services/furniture-assembly' },
    { name: 'Get Quote', href: '/quote' }
  ];

  const serviceAreas = [
    'Riyadh', 
    'Jeddah', 
    'Mecca', 
    'Medina', 
    'Dammam', 
    'Khobar', 
    'Dhahran', 
    'Taif', 
    'Abha', 
    'Tabuk', 
    'Buraidah', 
    'Khamis Mushait', 
    'Hail', 
    'Jizan', 
    'Najran'
  ];
  

  const socialLinks = [
    {
      name: 'WhatsApp',
      href: 'https://wa.me/966593694941',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      ),
      color: '#25D366'
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/share/19qTShxwEf/',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      color: '#1877F2'
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/jeddah_riyadh_dammam_all_over_?igsh=MWxwcHp3cm45d2Zp',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C8.396 0 7.989.016 6.741.074 5.495.132 4.634.178 3.842.31 3.016.447 2.317.598 1.618.985.92 1.372.421 1.871.034 2.569-.351 3.267-.5 3.966-.637 4.792-.769 5.584-.815 6.445-.873 7.691-.93 8.939-.946 9.346-.946 12.017c0 2.671.016 3.078.074 4.326.058 1.246.104 2.107.236 2.933.137.826.288 1.525.675 2.223.388.698.887 1.197 1.585 1.584.698.387 1.397.536 2.223.673.826.132 1.687.178 2.933.236 1.248.058 1.655.074 4.326.074 2.671 0 3.078-.016 4.326-.074 1.246-.058 2.107-.104 2.933-.236.826-.137 1.525-.288 2.223-.675.698-.388 1.197-.887 1.584-1.585.387-.698.536-1.397.673-2.223.132-.826.178-1.687.236-2.933.058-1.248.074-1.655.074-4.326 0-2.671-.016-3.078-.074-4.326-.058-1.246-.104-2.107-.236-2.933-.137-.826-.288-1.525-.675-2.223-.388-.698-.887-1.197-1.585-1.584-.698-.387-1.397-.536-2.223-.673-.826-.132-1.687-.178-2.933-.236C15.078.016 14.671 0 12.017 0zm0 2.16c2.623 0 2.937.01 3.974.058.958.044 1.48.204 1.827.338.459.178.786.391 1.131.736.345.345.558.672.736 1.131.134.347.294.869.338 1.827.048 1.037.058 1.351.058 3.974 0 2.623-.01 2.937-.058 3.974-.044.958-.204 1.48-.338 1.827-.178.459-.391.786-.736 1.131-.345.345-.672.558-1.131.736-.347.134-.869.294-1.827.338-1.037.048-1.351.058-3.974.058-2.623 0-2.937-.01-3.974-.058-.958-.044-1.48-.204-1.827-.338-.459-.178-.786-.391-1.131-.736-.345-.345-.558-.672-.736-1.131-.134-.347-.294-.869-.338-1.827-.048-1.037-.058-1.351-.058-3.974 0-2.623.01-2.937.058-3.974.044-.958.204-1.48.338-1.827.178-.459.391-.786.736-1.131.345-.345.672-.558 1.131-.736.347-.134.869-.294 1.827-.338 1.037-.048 1.351-.058 3.974-.058z"/>
          <path d="M12.017 15.33a3.314 3.314 0 01-3.314-3.314 3.314 3.314 0 013.314-3.314 3.314 3.314 0 013.314 3.314 3.314 3.314 0 01-3.314 3.314zm0-8.465a5.151 5.151 0 00-5.151 5.151 5.151 5.151 0 005.151 5.151 5.151 5.151 0 005.151-5.151 5.151 5.151 0 00-5.151-5.151zm6.548.17a1.204 1.204 0 11-2.408 0 1.204 1.204 0 012.408 0z"/>
        </svg>
      ),
      color: '#E4405F'
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/azanmovers',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      color: '#1DA1F2'
    }
  ];

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: '#374151' }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-gradient-to-br from-red-500/5 to-orange-500/5 rounded-full animate-pulse" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-br from-green-500/5 to-teal-500/5 rounded-full animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Company Info - Spans 5 columns */}
          <div className="lg:col-span-5">
            <div className="mb-8">
              {/* Logo */}
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 flex items-center justify-center mr-4">
                  <Image
                    src={azanmoversLogo}
                    alt="Azan Movers Logo"
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-3xl font-black text-white">
                  Azan <span style={{ color: '#ED3F27' }}>Movers</span>
                </h3>
              </div>

              {/* Company Description */}
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Saudi Arabia's top-rated moving company since 2015. We provide professional, safe, and efficient moving services for homes, villas, and offices. Trusted by thousands of families and businesses across Saudi Arabia.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center mr-4"
                    style={{ backgroundColor: 'rgba(237, 63, 39, 0.1)' }}
                  >
                    <svg className="w-5 h-5" style={{ color: '#ED3F27' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">24/7 Support</p>
                    <a href="tel:+966593694941" className="hover:text-red-400 transition-colors duration-300">
                      +966 593694941
                    </a>
                  </div>
                </div>

                <div className="flex items-center text-gray-300">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center mr-4"
                    style={{ backgroundColor: 'rgba(237, 63, 39, 0.1)' }}
                  >
                    <svg className="w-5 h-5" style={{ color: '#ED3F27' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Email Us</p>
                    <a href="mailto:info@azanmovers.com" className="hover:text-red-400 transition-colors duration-300">
                      info@azanmovers.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start text-gray-300">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1"
                    style={{ backgroundColor: 'rgba(237, 63, 39, 0.1)' }}
                  >
                    <svg className="w-5 h-5" style={{ color: '#ED3F27' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Address</p>
                    <p>Ibn Qasim Al Khawarizmi
                    Al Bawadi, Jeddah 23443, Saudi Arabia,</p>
                    <a href="https://maps.app.goo.gl/MM8BkbSVEWEWXtXLA?g_st=awb">Get Direction</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links - Spans 3 columns */}
          <div className="lg:col-span-3">
            <h4 className="text-xl font-bold text-white mb-8 flex items-center">
              <div 
                className="w-1 h-8 mr-3 rounded-full"
                style={{ backgroundColor: '#ED3F27' }}
              />
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-flex items-center group"
                  >
                    <svg className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300" style={{ color: '#ED3F27' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas - Spans 4 columns */}
          <div className="lg:col-span-4">
            <h4 className="text-xl font-bold text-white mb-8 flex items-center">
              <div 
                className="w-1 h-8 mr-3 rounded-full"
                style={{ backgroundColor: '#ED3F27' }}
              />
              Service Areas in Saudi Arabia
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {serviceAreas.map((area) => (
                <div key={area} className="flex items-center text-gray-300 hover:text-white transition-colors duration-300">
                  <div 
                    className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                    style={{ backgroundColor: '#ED3F27' }}
                  />
                  {area}
                </div>
              ))}
            </div>

            {/* Operating Hours */}
            <div className="mt-8 p-4 rounded-lg" style={{ background: 'rgba(237, 63, 39, 0.1)' }}>
              <h5 className="font-semibold text-white mb-3">Operating Hours</h5>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex justify-between font-semibold" style={{ color: '#ED3F27' }}>
                  <span>Service</span>
                  <span>24/7 Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="mt-16 pt-8 border-t border-gray-600">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Social Media */}
            <div>
              <h5 className="text-lg font-semibold text-white mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg focus:outline-none focus:scale-110"
                    style={{
                      backgroundColor: hoveredSocial === index ? social.color : undefined
                    }}
                    onMouseEnter={() => setHoveredSocial(index)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <div className={`transition-colors duration-300 ${hoveredSocial === index ? 'text-white' : 'text-gray-400'}`}>
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>

           
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-600">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-gray-400 text-center lg:text-left">
              <p>&copy; {currentYear} Azan Packers & Movers. All rights reserved.</p>
              <p className="text-sm mt-1">Licensed Moving Company in Saudi Arabia</p>
            </div>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <Link href="/privacy-policy" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-white transition-colors duration-300">
                Sitemap
              </Link>
             
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}