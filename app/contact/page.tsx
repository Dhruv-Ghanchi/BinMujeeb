"use client";

import Image from "next/image";
import { MapPin, Phone, Mail, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! Your enquiry has been sent successfully. We'll get back to you soon.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to send enquiry. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const locations = [
    {
      name: "BIN MUJEEB LOGISTICS LLC",
      location: "Muscat",
      flag: "🇴🇲",
      color: "green",
      address: "P.O BOX No. [Your Box Number], Muscat, Sultanate of Oman",
      phone: "(+968) [Your Phone Number]",
      email: "info@binmujeeb.com",
    },
    {
      name: "BIN MUJEEB LOGISTICS LLC",
      location: "Sohar",
      flag: "🇴🇲",
      color: "green",
      address: "P.O BOX No. [Your Box Number], Sohar, Sultanate of Oman",
      phone: "(+968) [Your Phone Number]",
      email: "sohar@binmujeeb.com",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-green-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 text-center">CONTACT BIN MUJEEB LOGISTICS</h1>
          <p className="text-xl text-center text-green-100">
            Get in touch with our offices in Muscat and Sohar for logistics solutions tailored to your needs.
          </p>
        </div>
      </section>

      {/* Enquiry Form and Contact Cards Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Left Side - Enquiry Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Send Us an Enquiry
                </h2>
                <p className="text-lg text-gray-600">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="bg-gray-50 rounded-lg shadow-lg p-8 border-t-4 border-green-600"
              >
                <div className="grid grid-cols-1 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition"
                      placeholder="+968 XXXX XXXX"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition"
                      placeholder="What is your enquiry about?"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition resize-none"
                    placeholder="Please provide details about your enquiry..."
                  />
                </div>

                {submitStatus.type && (
                  <div
                    className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${
                      submitStatus.type === "success"
                        ? "bg-green-50 text-green-800 border border-green-200"
                        : "bg-red-50 text-red-800 border border-red-200"
                    }`}
                  >
                    {submitStatus.type === "success" ? (
                      <CheckCircle className="mt-0.5 flex-shrink-0" size={20} />
                    ) : (
                      <AlertCircle className="mt-0.5 flex-shrink-0" size={20} />
                    )}
                    <p className="text-sm">{submitStatus.message}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Enquiry</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Right Side - Contact Cards */}
            <div className="space-y-6">
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Our Locations
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Visit us at our offices in Muscat and Sohar.
                </p>
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 flex items-center gap-4">
                  <span className="text-sm text-gray-700 font-medium">Proud Member of:</span>
                  <Image
                    src="/bni-logo.png"
                    alt="BNI Member"
                    width={150}
                    height={75}
                    className="h-14 w-auto object-contain"
                  />
                </div>
              </div>

              {locations.map((location, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-green-600">
                  <div className="flex items-center mb-6">
                    <span className="text-4xl mr-4">{location.flag}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {location.name.split(" ").map((word, i) => {
                          // Color the "O" in "LOGISTICS" or find "O" in company name
                          if (word === "LOGISTICS" || word.includes("O")) {
                            return (
                              <span key={i}>
                                {word.split("").map((char, charIndex) => {
                                  if (char === "O" || char === "o") {
                                    return (
                                      <span key={charIndex} className="text-green-600">
                                        {char}
                                      </span>
                                    );
                                  }
                                  return char;
                                })}{" "}
                              </span>
                            );
                          }
                          return <span key={i}>{word} </span>;
                        })}
                      </h3>
                      <p className="text-gray-600 text-lg font-semibold">{location.location}</p>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6 space-y-4">
                    <div className="flex items-start">
                      <MapPin className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700">{location.address}</span>
                    </div>
                    <div className="flex items-start">
                      <Phone className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700">{location.phone}</span>
                    </div>
                    <div className="flex items-start">
                      <Mail className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700">{location.email}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
