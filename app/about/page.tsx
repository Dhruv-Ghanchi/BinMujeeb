import type { Metadata } from "next";
import AboutSidebar from "@/components/AboutSidebar";

export const metadata: Metadata = {
  title: "About Bin Mujeeb - 20+ Years of Logistics Excellence in Oman & GCC",
  description: "Learn about Bin Mujeeb's 20+ years of trusted logistics services in Oman & GCC since 2000. Our director's expertise and BNI membership reflect our commitment to excellence.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex">
        {/* Left Sidebar */}
        <AboutSidebar />
        
        {/* Main Content */}
        <main className="flex-1 py-12 px-8 pr-12">
          <div className="w-full">
            <h1 className="text-4xl font-bold text-green-900 mb-8">
              Bin Mujeeb, CREATIVE LOGISTICS SOLUTION PROVIDER!
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                As a project-based logistics company in <strong>Oman and GCC</strong>, we have gained many years of experience 
                and know-how from it. In addition, by expanding our business area to its own transportation business, 
                it aims to be a <strong>total logistics service provider</strong>, not just forwarding, and based on this, 
                it aims to provide <strong>optimal logistics services</strong> to our customers.
              </p>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Bin Mujeeb Logistics specializes in <strong>customizing logistics services</strong> to meet the unique needs 
                of each client. With over <strong>20+ years of operational excellence</strong> since 2000, we have established 
                ourselves as a trusted partner for businesses across Oman and the GCC region.
              </p>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our expertise spans across various logistics domains including <strong>container transport</strong>, 
                <strong>customs clearance</strong>, <strong>freight forwarding</strong>, <strong>warehousing services</strong>, 
                and comprehensive <strong>4PL capabilities</strong>. We leverage our modern fleet, state-of-the-art 
                warehousing facilities, and extensive network to deliver solutions that go from <strong>good to the best</strong>.
              </p>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                At Bin Mujeeb, we understand that every business has unique logistics requirements. That's why we focus on 
                <strong>data-driven decision making</strong> and <strong>24/7 operational support</strong> to ensure seamless 
                supply chain management. Our team of experienced professionals is dedicated to delivering top-notch services 
                that exceed expectations.
              </p>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                With our <strong>BNI membership</strong> and director's extensive industry experience, we maintain the 
                highest standards of professionalism and ethical business practices. Our commitment to excellence, combined 
                with our regional expertise, positions us as a leader in the logistics industry.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Whether you need <strong>heavy equipment rental</strong>, <strong>project cargo transportation</strong>, 
                or end-to-end logistics solutions, Bin Mujeeb is your trusted partner for all your logistics needs in 
                <strong>Oman and GCC</strong>.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
