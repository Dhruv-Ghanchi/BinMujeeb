import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import AnimatedServicesCarousel from "@/components/AnimatedServicesCarousel";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative text-white py-32 min-h-[600px] flex items-end overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1605745341112-85968b19335b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')"
          }}
        >
          {/* Overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/80 via-blue-500/80 to-blue-600/80"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 w-full">
          <div className="text-center mb-12">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-yellow-300 drop-shadow-lg">
              INNOVATIVE • RELIABLE • SOLUTIONS
            </h1>
            <p className="text-xl md:text-2xl text-white drop-shadow-md">
              PROVIDING YOU WITH A NEW EXPERIENCE BEYOND LOGISTIC SERVICES
            </p>
          </div>
          
          {/* Four Feature Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            <div className="bg-black bg-opacity-60 p-6 rounded backdrop-blur-sm">
              <p className="text-white font-semibold text-center">COST MINIMIZING</p>
            </div>
            <div className="bg-black bg-opacity-60 p-6 rounded backdrop-blur-sm">
              <p className="text-white font-semibold text-center">ON SCHEDULE DELIVERY</p>
            </div>
            <div className="bg-black bg-opacity-60 p-6 rounded backdrop-blur-sm">
              <p className="text-white font-semibold text-center">REAL-TIME TRACKING</p>
            </div>
            <div className="bg-black bg-opacity-60 p-6 rounded backdrop-blur-sm">
              <p className="text-white font-semibold text-center">CARGO HANDLING</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">ABOUT US</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            {/* Left Side - Image */}
            <div className="relative rounded-lg overflow-hidden w-full aspect-auto">
              <Image
                src="/about-page-image.png"
                alt="Bin Mujeeb Logistics - Transportation and Logistics Services"
                width={800}
                height={600}
                className="w-full h-auto object-contain rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            {/* Right Side - Text Content */}
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Bin Mujeeb Logistics is an Oman-based company that specializes in providing innovative 
                and efficient logistics solutions to meet the needs of our clients. Our team of experienced 
                professionals is dedicated to delivering top-notch services that exceed expectations.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Bin Mujeeb is a comprehensive logistics services provider in the Middle East. With our 
                extensive network and cutting-edge technology, we ensure smooth and efficient transportation 
                and custom clearance for businesses of all sizes.
              </p>
              <Link 
                href="/about" 
                className="inline-flex items-center text-green-600 font-semibold hover:text-green-700"
              >
                Learn More About Us
                <ArrowRight className="ml-2 text-green-600" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Animated Carousel */}
      <AnimatedServicesCarousel />

      {/* Locations Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">OUR LOCATIONS</h2>
          <div className="max-w-7xl mx-auto bg-gray-50 rounded-lg p-8 border-2 border-gray-200">
            {/* Google Maps Embed */}
            <div className="relative w-full rounded-lg overflow-hidden shadow-lg bg-white">
              <div className="relative w-full" style={{ paddingBottom: '60%' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719999.5!2d56.5!3d21.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xde622f4b634b49b!2sOman!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title="Bin Mujeeb Logistics Locations - Muscat and Sohar, Oman"
                ></iframe>
              </div>
            </div>
            
            {/* Location Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-green-600 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 rounded-full bg-green-600 mr-3"></div>
                  <h3 className="text-xl font-bold text-gray-900">Muscat Office</h3>
                </div>
                <p className="text-gray-600 text-sm mb-1">P.O BOX No. [Your Box Number]</p>
                <p className="text-gray-600 text-sm">Muscat, Sultanate of Oman</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-green-600 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 rounded-full bg-green-600 mr-3"></div>
                  <h3 className="text-xl font-bold text-gray-900">Sohar Office</h3>
                </div>
                <p className="text-gray-600 text-sm mb-1">P.O BOX No. [Your Box Number]</p>
                <p className="text-gray-600 text-sm">Sohar, Sultanate of Oman</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
