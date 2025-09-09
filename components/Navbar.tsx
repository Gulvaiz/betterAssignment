'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-better-blue">
              Better.com
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <div className="relative group">
                <button
                  className="text-gray-700 hover:text-better-blue px-3 py-2 text-sm font-medium flex items-center"
                  onMouseEnter={() => setIsProductsOpen(true)}
                  onMouseLeave={() => setIsProductsOpen(false)}
                >
                  Products
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isProductsOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <Link href="/mortgage-calculator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-better-gray">
                      Mortgage Calculator
                    </Link>
                    <Link href="/start" className="block px-4 py-2 text-sm text-gray-700 hover:bg-better-gray">
                      Get Started
                    </Link>
                  </div>
                )}
              </div>
              <Link href="/about-us" className="text-gray-700 hover:text-better-blue px-3 py-2 text-sm font-medium">
                About Us
              </Link>
              <Link href="/mortgage-calculator" className="text-gray-700 hover:text-better-blue px-3 py-2 text-sm font-medium">
                Calculator
              </Link>
              <Link href="/start" className="text-gray-700 hover:text-better-blue px-3 py-2 text-sm font-medium">
                Start
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/start" className="btn-primary">
              Get Pre-approved
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-better-blue p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <Link href="/about-us" className="text-gray-700 hover:text-better-blue block px-3 py-2 text-base font-medium">
                About Us
              </Link>
              <Link href="/mortgage-calculator" className="text-gray-700 hover:text-better-blue block px-3 py-2 text-base font-medium">
                Calculator
              </Link>
              <Link href="/start" className="text-gray-700 hover:text-better-blue block px-3 py-2 text-base font-medium">
                Start
              </Link>
              <Link href="/start" className="btn-primary block text-center mt-4">
                Get Pre-approved
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

