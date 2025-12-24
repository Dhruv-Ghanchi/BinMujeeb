"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ProjectsPage() {
  // Company logos - you can replace these URLs with local images in /public/logos/ folder
  const clients = [
    { 
      name: "Samsung E&A", 
      logo: "https://logos-world.net/wp-content/uploads/2020/06/Samsung-Logo.png",
      fallback: "SAMSUNG E&A"
    },
    { 
      name: "Doosan Enerbility", 
      logo: "https://logos-world.net/wp-content/uploads/2021/02/Doosan-Logo.png",
      fallback: "DOOSAN"
    },
    { 
      name: "SeAH", 
      logo: "https://www.seah.co.kr/images/common/logo.png",
      fallback: "SeAH"
    },
    { 
      name: "Hyundai Engineering", 
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Hyundai-Logo.png",
      fallback: "HYUNDAI"
    },
    { 
      name: "Saudi Aramco", 
      logo: "https://logos-world.net/wp-content/uploads/2020/06/Saudi-Aramco-Logo.png",
      fallback: "SAUDI ARAMCO"
    },
    { 
      name: "KEPCO", 
      logo: "https://www.kepco.co.kr/images/common/logo.png",
      fallback: "KEPCO"
    },
    { 
      name: "Saudi Electricity", 
      logo: "https://www.se.com.sa/images/logo.png",
      fallback: "SEC"
    },
  ];

  const projects = [
    { 
      name: "FADHILI", 
      date: "2024 ~ PRESENT", 
      client: "SAMSUNG E&A",
      services: ["GENERAL/HEAVY CARGO TRANSPORT", "IMPORT CLEARANCE"],
      partner: "Saudi Aramco"
    },
    { 
      name: "JAFURAH COGEN", 
      date: "2023 ~ 2024", 
      client: "DOOSAN Enerbility",
      services: ["GENERAL/HEAVY CARGO TRANSPORT", "DUTY EXEMPTION & CONSULTING", "IMPORT CLEARANCE"],
      partner: "KEPCO"
    },
    { 
      name: "S-PROJECT", 
      date: "2023 ~ 2024", 
      client: "SeAH",
      services: ["GENERAL/HEAVY CARGO TRANSPORT", "DUTY EXEMPTION & CONSULTING", "IMPORT CLEARANCE"],
      partner: null
    },
    { 
      name: "SS8D", 
      date: "2022 ~ 2023", 
      client: "HYUNDAI ENGINEERING & CONSTRUCTION",
      services: ["GENERAL CARGO TRANSPORT", "IMPORT CLEARANCE"],
      partner: "Saudi Electricity Company"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-green-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 text-center">OUR PORTFOLIO</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.2)] transition-shadow duration-300 flex flex-col">
                {/* Dark Green Banner - Project Name */}
                <div className="bg-green-900 text-white p-4">
                  <h3 className="font-bold text-lg uppercase text-center">{project.name}</h3>
                </div>
                
                <div className="p-5 flex flex-col flex-grow">
                  {/* Dates */}
                  <p className="text-green-600 font-semibold text-sm mb-4 text-center">{project.date}</p>
                  
                  {/* Client Logo */}
                  <div className="mb-4 text-center">
                    <p className="font-bold text-xl text-blue-600">{project.client}</p>
                  </div>
                  
                  {/* Services as Rounded Rectangles */}
                  <div className="flex flex-col gap-2 mb-4">
                    {project.services.map((service, serviceIndex) => (
                      <div 
                        key={serviceIndex}
                        className="bg-gray-200 text-gray-800 px-3 py-2 rounded-lg text-xs font-medium text-center"
                      >
                        {service}
                      </div>
                    ))}
                  </div>
                  
                  {/* Partner Logo (if exists) */}
                  {project.partner && (
                    <div className="mb-4 text-center">
                      <p className="text-sm font-semibold text-gray-700">{project.partner}</p>
                    </div>
                  )}
                  
                  {/* View Details Button - At Bottom */}
                  <div className="mt-auto">
                    <Link 
                      href="#" 
                      className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors duration-300 w-full justify-center"
                    >
                      View Details
                      <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 mt-12 mb-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-green-800 to-green-600 rounded-2xl py-12 px-8">
            <h2 className="text-5xl font-bold text-center mb-8 text-white">OUR CLIENTS</h2>
          
          {/* Sliding Company Logos */}
          <div className="relative w-full overflow-hidden">
            <div className="flex slide-left">
              {/* First set of logos */}
              <div className="flex items-center gap-12 px-8 flex-shrink-0">
                {clients.map((client, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex-shrink-0 w-48 h-32 bg-white rounded-lg flex items-center justify-center p-4 shadow-lg hover:shadow-xl transition-shadow relative"
                  >
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      width={180}
                      height={120}
                      className="object-contain max-w-full max-h-full"
                      unoptimized
                    />
                    {/* Fallback text (hidden by default, shown if image fails) */}
                    <div className="fallback-text hidden text-gray-800 font-semibold text-xs text-center px-4">
                      {client.fallback}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex items-center gap-12 px-8 flex-shrink-0">
                {clients.map((client, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex-shrink-0 w-48 h-32 bg-white rounded-lg flex items-center justify-center p-4 shadow-lg hover:shadow-xl transition-shadow relative"
                  >
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      width={180}
                      height={120}
                      className="object-contain max-w-full max-h-full"
                      unoptimized
                    />
                    {/* Fallback text (hidden by default, shown if image fails) */}
                    <div className="fallback-text hidden text-gray-800 font-semibold text-xs text-center px-4">
                      {client.fallback}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}
