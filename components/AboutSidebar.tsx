"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function AboutSidebar() {
  const pathname = usePathname();
  const [indicatorPosition, setIndicatorPosition] = useState(0);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  
  const links = [
    { href: "/about", label: "Overview" },
    { href: "/about/history", label: "History" },
    { href: "/about/vision", label: "Vision" },
    { href: "/about/ceo-message", label: "CEO Message" },
  ];

  // Update indicator position when pathname changes
  useEffect(() => {
    const currentIndex = links.findIndex(
      (link) => pathname === link.href || (link.href === "/about" && pathname === "/about")
    );
    
    const index = currentIndex !== -1 ? currentIndex : 0;
    const activeItem = itemRefs.current[index];
    
    if (activeItem && indicatorRef.current) {
      // Calculate position relative to nav container
      const itemTop = activeItem.offsetTop;
      const itemHeight = activeItem.offsetHeight;
      const indicatorHeight = indicatorRef.current.offsetHeight;
      const newPosition = itemTop + itemHeight / 2 - indicatorHeight / 2;
      
      setIndicatorPosition(newPosition);
    }
  }, [pathname, links]);

  return (
    <aside className="w-64 bg-white min-h-screen py-8 pl-4">
      <nav ref={navRef} className="relative bg-gray-50 rounded-l-2xl py-6 h-full">
        {/* Vertical green line on the right edge */}
        <div className="absolute right-0 top-0 bottom-0 w-[1.5px] bg-green-300"></div>
        
        {/* Animated indicator dot - centered on the vertical line */}
        <div
          ref={indicatorRef}
          className="absolute right-0 w-2.5 h-2.5 bg-green-900 rounded-full z-20 transition-all duration-500 ease-in-out"
          style={{
            top: `${indicatorPosition}px`,
            transform: 'translateX(50%)',
          }}
        ></div>
        
        <ul className="space-y-1 px-6">
          {links.map((link, index) => {
            const isActive = pathname === link.href || 
              (link.href === "/about" && pathname === "/about");
            
            return (
              <li 
                key={link.href}
                ref={(el) => (itemRefs.current[index] = el)}
                className="relative"
              >
                <Link
                  href={link.href}
                  className={`block py-3 px-4 rounded-lg transition-all duration-500 ease-in-out ${
                    isActive
                      ? "bg-green-200 text-green-900 font-bold"
                      : "text-gray-500"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

