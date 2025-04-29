'use client';

import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from "next/link";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow fixed w-full z-10">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl font-bold text-amber-600">
                CleanPaws Boarding & Grooming
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <XMarkIcon className="block h-6 w-6" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" />
                )}
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex md:space-x-8">
              <Link href="/" className="text-gray-900 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link href="/services" className="text-gray-900 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium">
                Services
              </Link>
              <Link href="/schedule" className="text-gray-900 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium">
                Book Now
              </Link>
              <Link href="/contact" className="text-gray-900 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-amber-600 hover:bg-gray-50">
                Home
              </Link>
              <Link href="/services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-amber-600 hover:bg-gray-50">
                Services
              </Link>
              <Link href="/schedule" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-amber-600 hover:bg-gray-50">
                Book Now
              </Link>
              <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-amber-600 hover:bg-gray-50">
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-grow pt-16">
        {children}
      </main>

      <footer className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} CleanPaws. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
} 