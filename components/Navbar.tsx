"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();
  
  return (
    <nav className="sticky top-0 z-50 py-3">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.3)] px-8 py-3">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group flex-shrink-0">
              <Image
                src="/logo.jpg"
                alt="Bin Mujeeb Logistics"
                width={240}
                height={80}
                className="h-16 md:h-20 w-auto object-contain"
                priority
              />
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 ml-auto" style={{ transform: 'translateX(-120px)' }}>
              <Link 
                href="/" 
                className={`text-lg font-medium uppercase tracking-wide transition-all duration-300 ${
                  pathname === "/" 
                    ? "text-gray-900 font-semibold" 
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                HOME
              </Link>
              <Link 
                href="/about" 
                className={`text-lg font-medium uppercase tracking-wide transition-all duration-300 ${
                  pathname?.startsWith("/about") 
                    ? "text-gray-900 font-semibold" 
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                ABOUT
              </Link>
              <Link 
                href="/services" 
                className={`text-lg font-medium uppercase tracking-wide transition-all duration-300 ${
                  pathname === "/services" 
                    ? "text-gray-900 font-semibold" 
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                SERVICES
              </Link>
              <Link 
                href="/projects" 
                className={`text-lg font-medium uppercase tracking-wide transition-all duration-300 ${
                  pathname === "/projects" 
                    ? "text-gray-900 font-semibold" 
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                PROJECTS
              </Link>
              <Link 
                href="/gallery" 
                className={`text-lg font-medium uppercase tracking-wide transition-all duration-300 ${
                  pathname === "/gallery" 
                    ? "text-gray-900 font-semibold" 
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                GALLERY
              </Link>
              <Link 
                href="/contact" 
                className={`text-lg font-medium uppercase tracking-wide transition-all duration-300 ${
                  pathname === "/contact" 
                    ? "text-gray-900 font-semibold" 
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                CONTACT
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 hover:text-gray-900 transition-colors duration-300"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden pt-4 pb-2 space-y-2 animate-fadeIn">
              <Link 
                href="/" 
                className="block py-2 text-gray-700 hover:text-gray-900 uppercase text-sm font-medium transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                HOME
              </Link>
              <Link 
                href="/about" 
                className="block py-2 text-gray-700 hover:text-gray-900 uppercase text-sm font-medium transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                ABOUT
              </Link>
              <Link 
                href="/services" 
                className="block py-2 text-gray-700 hover:text-gray-900 uppercase text-sm font-medium transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                SERVICES
              </Link>
              <Link 
                href="/projects" 
                className="block py-2 text-gray-700 hover:text-gray-900 uppercase text-sm font-medium transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                PROJECTS
              </Link>
              <Link 
                href="/gallery" 
                className="block py-2 text-gray-700 hover:text-gray-900 uppercase text-sm font-medium transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                GALLERY
              </Link>
              <Link 
                href="/contact" 
                className="block py-2 text-gray-700 hover:text-gray-900 uppercase text-sm font-medium transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                CONTACT
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}





