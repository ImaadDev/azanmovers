"use client";

import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID,
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
    <section className="p-8 bg-white/70 backdrop-blur-xl border border-white/20 transition-all duration-300 hover:border-red-100">
      <h2 className="text-2xl lg:text-4xl font-bold mb-6" style={{ color: "#374151" }}>
        Send Us a Message
      </h2>
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 border border-gray-300 focus:ring-red-500 focus:border-red-500 transition duration-200 text-sm md:text-base"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-gray-300 focus:ring-red-500 focus:border-red-500 transition duration-200 text-sm md:text-base"
            placeholder="your@example.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows="5"
            className="w-full px-4 py-3 border border-gray-300 focus:ring-red-500 focus:border-red-500 transition duration-200 text-sm md:text-base"
            placeholder="Your message or inquiry"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="group relative inline-flex items-center px-8 py-4 text-base md:text-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-200"
          style={{ backgroundColor: "#ED3F27" }}
        >
          <span className="relative z-10">{isSubmitting ? "Sending..." : "Send Message"}</span>
        </button>
        {submitStatus === "success" && (
          <p className="text-center text-green-600 font-semibold mt-4">
            Your message has been sent successfully!
          </p>
        )}
        {submitStatus === "error" && (
          <p className="text-center text-red-600 font-semibold mt-4">
            There was an error sending your message. Please try again.
          </p>
        )}
      </form>
    </section>
  );
}