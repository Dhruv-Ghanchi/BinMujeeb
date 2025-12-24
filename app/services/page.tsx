"use client";

import { 
  FileText, 
  Settings, 
  Truck, 
  CheckCircle,
  Plane,
  Ship,
  Package,
  Factory,
  Building2,
  FileCheck,
  Shield,
  Award
} from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {

  return (
    <div className="min-h-screen bg-white relative">
      {/* Hero Section - OUR SERVICES Banner */}
      <section className="pt-12 pb-0">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-green-800 to-green-600 rounded-t-2xl px-8 py-16 text-center">
            <h1 className="text-5xl font-bold text-white uppercase mb-4 tracking-tight">
              OUR SERVICES
            </h1>
            <p className="text-xl text-white">
              Comprehensive logistics solutions for your business needs
            </p>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 uppercase tracking-tight">
            HOW WE WORK
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: INITIAL CONSULTATION */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FileText className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-800 uppercase mb-3 tracking-wide">
                INITIAL CONSULTATION
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We assess your logistics needs and requirements
              </p>
            </div>

            {/* Card 2: CUSTOM SOLUTION */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Settings className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-800 uppercase mb-3 tracking-wide">
                CUSTOM SOLUTION
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our experts design a tailored logistics plan
              </p>
            </div>

            {/* Card 3: IMPLEMENTATION */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Truck className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-800 uppercase mb-3 tracking-wide">
                IMPLEMENTATION
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Execute the plan with precision and care
              </p>
            </div>

            {/* Card 4: DELIVERY & FOLLOW-UP */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-800 uppercase mb-3 tracking-wide">
                DELIVERY & FOLLOW-UP
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ensure successful completion and client satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES Section */}
      <section className="py-0 pb-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Banner */}
          <div className="bg-green-900 text-white py-8 mb-12">
            <h2 className="text-4xl font-bold text-center">CORE CAPABILITIES</h2>
          </div>
          
          {/* Three Column Layout - Matching Reference */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Custom Clearance Column */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <FileCheck className="text-green-900 mr-3" size={32} />
                <h3 className="text-xl font-bold text-green-900">CUSTOM CLEARANCE</h3>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-green-900">UNDERSTANDING OF CUSTOM CLEARANCE</h4>
                <p className="text-gray-700 text-sm mb-4">
                  Bin Mujeeb has its own broker license and experienced brokers. It is easy to troubleshoot during custom clearance for us with our extensive network.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-green-900">GOOD CONNECTION WITH OMANI AUTHORITIES</h4>
                <p className="text-gray-700 text-sm mb-3">
                  Bin Mujeeb has direct connections with Omani customs authorities at various levels.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Inspect Item</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Advise the HS Code</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Custom Clearance</span>
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-green-900">LICENSED BROKER</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Professional item inspection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Expert HS code consultation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Real-time status updates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Direct communication with authorities</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3 text-green-900">VALUE-ADDED SERVICES</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Pre-clearance consultation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Duty optimization strategies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Compliance monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>24/7 support for urgent clearances</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Duty Exemption Column */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Shield className="text-green-900 mr-3" size={32} />
                <h3 className="text-xl font-bold text-green-900">DUTY EXEMPTION</h3>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-green-900">OMAN DUTY SYSTEM SPECIALISTS</h4>
                <p className="text-gray-700 text-sm mb-4">
                  Our dedicated team processes duty exemptions daily, maintaining current knowledge of regulations and optimization opportunities in the Sultanate of Oman.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Daily processing of exemption applications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Real-time regulatory updates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Strategic duty optimization planning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Direct liaison with customs authorities</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3 text-green-900">OPTIMIZATION SERVICES</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Pre-shipment duty assessment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Documentation preparation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Exemption status tracking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Post-clearance duty reconciliation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Project Management Excellence Column */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Award className="text-green-900 mr-3" size={32} />
                <h3 className="text-xl font-bold text-green-900">PROJECT MANAGEMENT EXCELLENCE</h3>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-green-900">EXPERT PROJECT TEAM</h4>
                <p className="text-gray-700 text-sm mb-4">
                  Our project managers bring 15+ years of average experience in complex logistics projects across Oman and GCC, ensuring seamless execution from planning to delivery.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Comprehensive project planning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Resource optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Real-time project tracking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Milestone-based progress monitoring</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3 text-green-900">PROJECT CAPABILITIES</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Large-scale industrial projects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Time-sensitive installations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Multi-modal transportation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Complex customs requirements</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSPORTATION SOLUTIONS Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 uppercase tracking-tight">
            TRANSPORTATION SOLUTIONS
          </h2>
          
          {/* Global Air Freight Solutions */}
          <div className="mb-12 bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-4 rounded-lg mr-4">
                <Plane className="text-green-900" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-green-900">GLOBAL AIR FREIGHT SOLUTIONS</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mr-2 mt-1" size={20} />
                <span>Comprehensive air freight solutions</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mr-2 mt-1" size={20} />
                <span>Timely and cost-effective</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mr-2 mt-1" size={20} />
                <span>Clearance solutions</span>
              </li>
            </ul>
          </div>

          {/* Global Shipping Solutions */}
          <div className="mb-12 bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-4 rounded-lg mr-4">
                <Ship className="text-green-900" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-green-900">GLOBAL SHIPPING SOLUTIONS</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mr-2 mt-1" size={20} />
                <span>Comprehensive sea freight solutions</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mr-2 mt-1" size={20} />
                <span>Break-bulk and project cargo handling</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mr-2 mt-1" size={20} />
                <span>Dangerous goods transportation</span>
              </li>
            </ul>
          </div>

          {/* Modern Trailer Solutions */}
          <div className="mb-12 bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-4 rounded-lg mr-4">
                <Truck className="text-green-900" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-green-900">MODERN TRAILER SOLUTIONS</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mr-2 mt-1" size={20} />
                <span>Our newly acquired fleet of trailers</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mr-2 mt-1" size={20} />
                <span>Nationwide coverage</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mr-2 mt-1" size={20} />
                <span>Specialized equipment</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICE CATEGORIES Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 uppercase tracking-tight">
            SERVICE CATEGORIES
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Import Services */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-green-900 mb-6">IMPORT SERVICES</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-2 mt-1" size={20} />
                  <span>Documentation Management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-2 mt-1" size={20} />
                  <span>Customs Clearance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-2 mt-1" size={20} />
                  <span>Duty Calculation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-2 mt-1" size={20} />
                  <span>Warehousing</span>
                </li>
              </ul>
            </div>

            {/* Export Services */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-green-900 mb-6">EXPORT SERVICES</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-2 mt-1" size={20} />
                  <span>Customs Documentation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-2 mt-1" size={20} />
                  <span>Air/Sea Freight Booking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-2 mt-1" size={20} />
                  <span>Cargo Insurance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-2 mt-1" size={20} />
                  <span>Specialized Packing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRY-SPECIFIC SOLUTIONS Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 uppercase tracking-tight">
            INDUSTRY-SPECIFIC SOLUTIONS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Manufacturing */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-4 rounded-lg mr-4">
                  <Factory className="text-green-900" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-green-900">MANUFACTURING</h3>
              </div>
              <p className="text-gray-700">
                Specialized handling for industrial equipment and materials
              </p>
            </div>

            {/* Construction */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-4 rounded-lg mr-4">
                  <Building2 className="text-green-900" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-green-900">CONSTRUCTION</h3>
              </div>
              <p className="text-gray-700">
                Heavy equipment and building materials logistics
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* READY TO GET STARTED? Section */}
      <section className="py-0 pb-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-gradient-to-r from-green-800 to-green-600 rounded-b-2xl px-8 py-16">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-center md:text-left mb-6 md:mb-0">
                <h2 className="text-5xl font-bold text-white uppercase mb-4 tracking-tight">
                  READY TO GET STARTED?
                </h2>
                <p className="text-xl text-white">
                  Let us handle your logistics needs with expertise and precision.
                </p>
              </div>
              <Link 
                href="/contact" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 whitespace-nowrap"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
