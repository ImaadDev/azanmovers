"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "+966593694941"; // replace with your WhatsApp number
  const message = "Hello! I am interested in requesting a moving estimate from Azan Packers & Movers. Please provide the details.";

  return (
    <a
      href={`https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-transform transform hover:scale-110"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
