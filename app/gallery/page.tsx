"use client";

import type { Metadata } from "next";
import { useState } from "react";

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Projects", "Trucks"];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-green-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 text-center">OUR TRAILER FLEET</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  activeFilter === filter
                    ? "bg-green-900 text-white"
                    : "bg-white text-gray-700 border-2 border-green-900 hover:bg-green-50"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-200 rounded-lg p-8 flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <p className="text-gray-500 mb-4">Trailer Image 1</p>
                <p className="text-sm text-gray-400">Bin Mujeeb Logistics Services and Solutions</p>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg p-8 flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <p className="text-gray-500 mb-4">Truck Image 1</p>
                <p className="text-sm text-gray-400">Modern Fleet</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
