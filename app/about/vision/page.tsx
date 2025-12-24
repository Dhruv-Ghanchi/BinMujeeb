import type { Metadata } from "next";
import AboutSidebar from "@/components/AboutSidebar";
import { Target, Eye, Rocket } from "lucide-react";

export const metadata: Metadata = {
  title: "Vision - Bin Mujeeb Logistics | Our Vision for the Future",
  description: "Learn about Bin Mujeeb's vision for the future of logistics in Oman and GCC.",
};

export default function VisionPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex">
        <AboutSidebar />
        
        <main className="flex-1 py-12 px-8 pr-12">
          <div className="w-full">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">VISION</h1>
            
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-4 rounded-lg mr-4">
                  <Eye className="text-green-900" size={32} />
                </div>
                <h2 className="text-2xl font-bold text-green-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To be the leading logistics solutions provider in Oman and the GCC region, recognized for 
                innovation, reliability, and exceptional service delivery. We envision a future where 
                Bin Mujeeb sets the standard for logistics excellence, driving business growth and 
                economic development across the region.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our vision extends beyond traditional logistics services. We aim to transform the 
                logistics landscape through cutting-edge technology, sustainable practices, and 
                customer-centric solutions that create lasting value for our clients and partners.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <Target className="text-green-900 mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Excellence</h3>
                <p className="text-gray-700">
                  Striving for excellence in every aspect of our operations
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <Rocket className="text-green-900 mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Innovation</h3>
                <p className="text-gray-700">
                  Embracing innovation to stay ahead of industry trends
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <Eye className="text-green-900 mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Leadership</h3>
                <p className="text-gray-700">
                  Leading the way in logistics solutions and services
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

