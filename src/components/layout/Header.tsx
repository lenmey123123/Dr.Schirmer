'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import MedicalIcon from '../ui/MedicalIcon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Leistungen', href: '#services' },
    { name: 'Team', href: '#team' },
    { name: 'Standorte', href: '#locations' },
    { name: 'Galerie', href: '#galerie' },
    { name: 'Aktuelles', href: '#blog' },
    { name: 'Karriere', href: '#karriere' },
    { name: 'Downloads', href: '#downloads' },
    { name: 'Kontakt', href: '#contact' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 py-4">
      <div className="container mx-auto px-6">
        <div className="bg-white/80 backdrop-blur-lg rounded-full shadow-sm flex justify-between items-center p-3">
          {/* Logo */}
            <Link href="/" className="flex items-center text-2xl font-bold text-red-600 ml-4">
              <img src="/images/stab.jpg" alt="Logo" className="w-8 h-8 mr-3 object-contain" />
              Hausarztpraxis Dr. Schirmer
            </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 rounded-full hover:bg-gray-100 transition"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <Link
            href="/locations"
            className="hidden md:block bg-red-600 text-white rounded-full px-6 py-3 font-bold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mr-2"
          >
            Termin
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden mr-2 text-red-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menü öffnen"
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/90 backdrop-blur-lg rounded-3xl shadow-sm mt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-center py-3 px-6 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/locations"
              className="block text-center py-4 bg-red-50 text-red-600 font-bold rounded-b-3xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Termin
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;