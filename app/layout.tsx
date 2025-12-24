import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Bin Mujeeb - Leading Logistics Company in Oman & GCC | Container Transport, Customs Clearance, Freight Forwarding",
  description: "Trusted logistics partner in Oman & GCC since 2000. Expert container transport, customs clearance, freight forwarding, warehousing, and 4PL services. 20+ years of operational excellence.",
  keywords: "logistics company Oman, Muscat logistics services, container transport Sohar, GCC trucking services, customs clearance Oman, freight forwarding Muscat, warehouse services Oman, heavy equipment rental Oman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}


