"use client";

import Link from "next/link";
import Image from "next/image";
import { Linkedin, Instagram, MapPin, Phone, Mail, MessageCircle, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // WhatsApp contact number - update this when you have the number
  const whatsappNumber = "968XXXXXXXXX"; // Replace with actual number (format: country code + number without +)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hello, I would like to know more about Bin Mujeeb Logistics services.");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <footer className="relative text-white overflow-hidden">
      {/* Blurred Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: typeof window !== 'undefined' && window.location.pathname.startsWith('/BinMujeeb')
            ? "url('/BinMujeeb/ocean-frieght-forwarding.png')"
            : "url('/ocean-frieght-forwarding.png')",
          filter: "blur(8px)",
          transform: "scale(1.1)",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 mb-8">
          {/* Company Logo and Tagline */}
          <div className="md:col-span-1">
            <Image
              src="/logo.jpg"
              alt="Bin Mujeeb Logistics"
              width={250}
              height={90}
              className="h-20 md:h-24 w-auto object-contain mb-4 opacity-60 mix-blend-screen"
            />
            <p className="text-white/90 italic text-sm md:text-base mb-4">
              Providing you with a new experience beyond Logistic Services.
            </p>
            <div className="mt-4">
              <Image
                src="/bni-logo.png"
                alt="BNI Member"
                width={120}
                height={60}
                className="h-12 w-auto object-contain opacity-80"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1 relative">
            <h4 className="text-lg font-bold mb-4 uppercase tracking-wide text-white">QUICK LINKS</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white hover:text-white/80 transition text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white hover:text-white/80 transition text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white hover:text-white/80 transition text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-white hover:text-white/80 transition text-sm">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-white hover:text-white/80 transition text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:text-white/80 transition text-sm">
                  Contact
                </Link>
              </li>
            </ul>
            {/* Vertical separator */}
            <div className="hidden md:block absolute top-0 -right-6 h-full w-px border-l border-dotted border-white/30"></div>
          </div>

          {/* Contact Us */}
          <div className="md:col-span-1 relative">
            <h4 className="text-lg font-bold mb-4 uppercase tracking-wide text-white">CONTACT US</h4>
            <ul className="space-y-3 text-white text-sm">
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                <span>| P.O BOX No. [Your Box Number], Muscat, Sultanate of Oman</span>
              </li>
              <li className="flex items-start">
                <Phone size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                <span>| Phone: (+968) [Your Phone Number]</span>
              </li>
              <li className="flex items-start">
                <Mail size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                <span>| Email: info@binmujeeb.com</span>
              </li>
            </ul>
            {/* Vertical separator */}
            <div className="hidden md:block absolute top-0 -right-6 h-full w-px border-l border-dotted border-white/30"></div>
          </div>

          {/* Follow Us */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-bold mb-4 uppercase tracking-wide text-white">FOLLOW US</h4>
            <div className="space-y-2">
              <a href="#" className="text-white hover:text-white/80 transition flex items-center space-x-2 text-sm">
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
              <a href="#" className="text-white hover:text-white/80 transition flex items-center space-x-2 text-sm">
                <Instagram size={18} />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/80 text-sm">
            Copyright © 2025 BIN MUJEEB Logistics LLC. All rights reserved.
          </p>
        </div>
      </div>

      {/* Circular Buttons on the Right */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-3">
        {/* WhatsApp Button */}
        <button
          onClick={openWhatsApp}
          className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white flex items-center justify-center shadow-lg transition-all hover:scale-110"
          aria-label="Contact us on WhatsApp"
          title="Chat with us on WhatsApp"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
              fill="currentColor"
            />
          </svg>
        </button>

        {/* Scroll to Top */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center shadow-lg transition-all hover:scale-110"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        )}
      </div>
    </footer>
  );
}





