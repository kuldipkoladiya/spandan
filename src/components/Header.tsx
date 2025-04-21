'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="text-white bg-transparent absolute top-0 left-0 w-full z-20">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center relative z-50">
          <Link href="/" className="text-2xl font-bold hover:text-amber-200 text-purple-800">
            Spandan
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-[#732d92] focus:outline-none relative z-50"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke={isMenuOpen ? 'white' : 'currentColor'}
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-amber-200 transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-amber-200 transition-colors">
              About Us
            </Link>
            <Link href="/admission-enquiry" className="hover:text-amber-200 transition-colors">
              Admission Enquiry
            </Link>
            <Link href="/contact" className="hover:text-amber-200 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-[#ebe1ff] z-40 md:hidden flex items-center justify-center">
            <div className="flex flex-col items-center space-y-8">
              <Link
                href="/"
                className="text-2xl text-purple-900 hover:text-amber-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-2xl text-purple-900 hover:text-amber-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/admission-enquiry"
                className="text-2xl text-purple-900 hover:text-amber-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Admission Enquiry
              </Link>
              <Link
                href="/contact"
                className="text-2xl text-purple-900 hover:text-amber-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}