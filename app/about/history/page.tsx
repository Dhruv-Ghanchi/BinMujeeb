import type { Metadata } from "next";
import AboutSidebar from "@/components/AboutSidebar";

export const metadata: Metadata = {
  title: "History - Bin Mujeeb Logistics | 20+ Years of Excellence",
  description: "Learn about Bin Mujeeb's history and journey since 2000 in Oman and GCC.",
};

export default function HistoryPage() {
  const timeline = [
    {
      year: "2024",
      events: [
        "October: Expanded operations across GCC region",
        "January: Launched 4PL capabilities",
        "January: Enhanced modern fleet with new trailers",
      ],
    },
    {
      year: "2023",
      events: [
        "Transition to comprehensive logistics services",
        "Established customs clearance division",
        "Bin Mujeeb for Logistics operations",
      ],
    },
    {
      year: "2022",
      events: [
        "Established Bin Mujeeb Logistics in Oman",
        "Expanded to container transport services",
      ],
    },
    {
      year: "2020",
      events: [
        "Established comprehensive warehousing facilities",
        "Obtained heavy equipment rental licenses",
      ],
    },
    {
      year: "2000",
      events: [
        "Founded Bin Mujeeb in Muscat, Oman",
        "Started as a small logistics operation",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="flex">
        <AboutSidebar />
        
        <main className="flex-1 py-12 px-8 pr-12">
          <div className="w-full">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">HISTORY OF BIN MUJEEB</h1>
            <h2 className="text-2xl font-bold text-gray-700 mb-8">
              INSIGHT TO NEXT GENERATION IS LEADING ON BIN MUJEEB
            </h2>
            
            <p className="text-gray-700 mb-12 leading-relaxed text-lg">
              As a project-based logistics company in Oman and GCC, we have gained many years of experience 
              and know-how from it. In addition, by expanding our business area to its own transportation business, 
              it aims to be a total logistics service provider, not just forwarding, and based on this, 
              it aims to provide optimal logistics services to our customers.
            </p>

            {/* Timeline */}
            <div className="relative bg-green-100 p-8 rounded-lg">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-600 transform -translate-x-1/2"></div>
              
              <div className="space-y-8">
                {timeline.map((item, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <div key={item.year} className="relative">
                      <div className="absolute left-1/2 w-3 h-3 bg-gray-700 rounded-full border-2 border-white z-10 transform -translate-x-1/2"></div>
                      
                      <div className={`${isEven ? 'ml-auto mr-[52%]' : 'mr-auto ml-[52%]'} w-[45%] bg-green-900 text-white p-6 rounded-lg shadow-lg`}>
                        <h3 className="text-2xl font-bold mb-4">{item.year}</h3>
                        <ul className="space-y-2">
                          {item.events.map((event, eventIndex) => (
                            <li key={eventIndex} className="text-white">
                              {event}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

