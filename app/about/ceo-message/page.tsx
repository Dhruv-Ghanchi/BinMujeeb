import type { Metadata } from "next";
import Image from "next/image";
import AboutSidebar from "@/components/AboutSidebar";

export const metadata: Metadata = {
  title: "CEO Message - Bin Mujeeb Logistics",
  description: "Message from the CEO of Bin Mujeeb Logistics.",
};

export default function CEOMessagePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex">
        <AboutSidebar />
        
        <main className="flex-1 py-12 px-8 pr-12">
          <div className="w-full">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">CEO MESSAGE</h1>
            
            <div className="relative max-w-7xl">
              <div className="bg-white rounded-lg shadow-lg p-8 pr-80 mb-8">
                <div className="text-6xl text-green-900 font-serif mb-4 leading-none">"</div>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                    As the <strong>founder and Chief Executive of Bin Mujeeb Logistics</strong>, I am proud 
                    to lead a company that has been at the forefront of logistics services in Oman and the GCC 
                    region for over two decades.
                  </p>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                    Since our establishment in 2000, <strong>Bin Mujeeb</strong> has grown from a small 
                    logistics operation to a comprehensive logistics solutions provider. Our journey has been 
                    marked by continuous innovation, strategic expansion, and an unwavering commitment to 
                    delivering exceptional service.
                  </p>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                    Our success is built on the foundation of trust, integrity, and a deep understanding of 
                    the unique logistics challenges faced by businesses in our region. We have consistently 
                    invested in modern infrastructure, cutting-edge technology, and most importantly, our people.
                  </p>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                    At <strong>Bin Mujeeb</strong>, we believe that every client deserves personalized attention 
                    and customized solutions. Our team of experienced professionals works tirelessly to ensure 
                    that we not only meet but exceed our clients' expectations. Whether it's container transport, 
                    customs clearance, freight forwarding, or comprehensive 4PL services, we approach each 
                    project with dedication and expertise.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed text-lg">
                    As we look to the future, we remain committed to innovation, excellence, and building 
                    lasting partnerships. Thank you for choosing <strong>Bin Mujeeb Logistics</strong> as your 
                    trusted logistics partner.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-200 flex items-center gap-4">
                  <span className="text-sm text-gray-600 font-medium">Proud Member of:</span>
                  <Image
                    src="/bni-logo.png"
                    alt="BNI Member"
                    width={150}
                    height={75}
                    className="h-16 w-auto object-contain"
                  />
                </div>
              </div>
              
              {/* CEO Image with Organic Green Background */}
              <div className="absolute right-0 top-0 w-80 h-96">
                <div className="absolute inset-0 bg-green-500 rounded-tl-[100px] rounded-br-[80px] rounded-tr-[40px] rounded-bl-[60px] transform rotate-[-5deg]"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-gray-300 w-48 h-64 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500 text-sm">CEO Photo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

