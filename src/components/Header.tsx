'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/treatments', label: 'Treatments' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/faq', label: 'FAQ' },
    { href: '/blog', label: 'Blog' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/90 border-b border-gray-100/50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar - Luxury accent */}
        <div className="hidden lg:flex items-center justify-center py-2 border-b border-gray-100/50">
          <div className="flex items-center gap-2 text-xs text-gray-600 tracking-[0.2em] uppercase">
            <Star className="w-3 h-3 text-[#eb9142] fill-current" />
            <span className="font-light">Premier Fertility Specialist</span>
            <span className="text-[#eb9142] mx-2">•</span>
            <span className="font-light">Mumbai</span>
            <Star className="w-3 h-3 text-[#eb9142] fill-current" />
          </div>
        </div>

        <div className="flex h-20 items-center justify-between">
          {/* Logo - Luxury Style */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <div className="w-12 h-12 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#47145a] to-[#eb9142] rounded-full opacity-20 blur-xl"></div>
              <div className="relative w-full h-full bg-white rounded-full flex items-center justify-center shadow-md border border-[#47145a]/10">
                <div className="w-9 h-9 bg-gradient-to-br from-[#47145a] to-[#eb9142] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-light">VB</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-light text-[#47145a] tracking-wide">Dr Vrushni Bhuta</span>
              <span className="text-[10px] text-[#eb9142] tracking-[0.3em] uppercase font-light">Fertility Specialist</span>
            </div>
          </Link>

          {/* Desktop Navigation - Refined */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-light text-gray-700 hover:text-[#47145a] transition-colors tracking-wide relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-[#47145a] to-[#eb9142] group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Social Icons & CTA - Desktop */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/drvrushni" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#47145a] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/dr-vrushni-bhuta-2473b529a/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#47145a] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
            <div className="h-8 w-px bg-gray-200"></div>
            <Button asChild className="bg-[#47145a] hover:bg-[#5a1b71] text-white px-6 py-2.5 font-light tracking-wide shadow-md hover:shadow-lg transition-all">
              <Link href="/contact">
                <Phone className="w-4 h-4 mr-2 opacity-80" />
                Book Consultation
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-gray-600 hover:text-[#47145a] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile menu - Refined */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-100/50 bg-white">
            <nav className="flex flex-col space-y-4 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-light text-gray-700 hover:text-[#47145a] transition-colors tracking-wide py-2 border-b border-gray-100/50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-4 pt-4">
                <a href="https://www.instagram.com/drvrushni" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#47145a]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/dr-vrushni-bhuta-2473b529a/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#47145a]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
              <Button asChild className="bg-[#47145a] hover:bg-[#5a1b71] text-white w-full mt-4 font-light tracking-wide">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Phone className="w-4 h-4 mr-2 opacity-80" />
                  Book Consultation
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
