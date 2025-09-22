"use client";

import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function QuotePage() {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const services = [
    "Furniture Dismantling",
    "Furniture Assembly",
    "Packing Services",
    "Unpacking Services",
    "Loading Services",
    "Unloading Services",
    "Jeipsing Opening",
    "Jeipsing Closing",
    "Storage Solutions",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSubmitStatus("success");
          e.target.reset();
        },
        () => setSubmitStatus("error")
      )
      .finally(() => setIsSubmitting(false));
  };

  return (
    <main className="relative overflow-hidden" style={{ backgroundColor: "#FFFCFB" }}>
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-5 w-48 h-48 bg-gradient-to-br from-red-500/3 to-orange-500/3 animate-blob filter blur-xl" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-blue-500/3 to-purple-500/3 animate-blob filter blur-xl animation-delay-2000" />
        <div className="absolute top-1/3 left-1/3 w-24 h-24 bg-gradient-to-br from-green-500/3 to-teal-500/3 animate-blob filter blur-xl animation-delay-4000" />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 py-16 lg:py-24 text-center">
        {/* Header */}
        <header className="mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-orange-500" />
            <span
              className="text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 border"
              style={{
                color: "#ED3F27",
                borderColor: "#ED3F27",
                background: "rgba(237, 63, 39, 0.05)",
              }}
            >
              Request Your Free Estimate
            </span>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500" />
          </div>

          <h1 className="text-3xl lg:text-5xl font-black mb-8 leading-none tracking-tight" style={{ color: "#374151" }}>
            Get Your
            <span className="block bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
              Free Estimate
            </span>
          </h1>

          <p className="text-base lg:text-xl max-w-2xl mx-auto leading-relaxed font-light" style={{ color: "#6B7280" }}>
            Tell us about your moving needs, and we’ll provide a personalized, no-obligation estimate.
          </p>
        </header>

        {/* Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-white/80 md:backdrop-blur-xl md:border border-white/20 p-8 md:p-12 md:shadow-lg space-y-6 text-left"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all duration-300"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all duration-300"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-4 py-3 border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all duration-300"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                Service Required
              </label>
              <select
                id="service"
                name="service"
                required
                className="w-full px-4 py-3 border border-gray-300 bg-white focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all duration-300"
              >
                <option value="">Select a Service</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="moveDate" className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Move Date
            </label>
            <input
              type="date"
              id="moveDate"
              name="moveDate"
              className="w-full px-4 py-3 border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all duration-300"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Additional Details (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full px-4 py-3 border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all duration-300"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-200"
            style={{ backgroundColor: "#ED3F27" }}
          >
            {isSubmitting ? (
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              "Request Your Free Estimate"
            )}
          </button>

          {submitStatus === "success" && (
            <p className="text-center text-green-600 font-semibold mt-4">
              Your estimate request has been sent successfully!
            </p>
          )}
          {submitStatus === "error" && (
            <p className="text-center text-red-600 font-semibold mt-4">
              There was an error sending your request. Please try again.
            </p>
          )}
        </form>
      </div>
    </main>
  );
}
