import React from 'react';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingIcons = () => {
  return (
    <div className="fixed bottom-8 left-4 z-50 space-y-4">
      {/* WhatsApp Icon */}
      <Link
        href="https://wa.me/+917654288972?text=Hi%20there!"
        target="_blank"
        aria-label="Chat with us on WhatsApp"
        className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-200"
      >
        <FaWhatsapp size={20}/>
      </Link>

      {/* Book Me Icon */}
      <Link
        href="/book"
        target="_blank"
        aria-label="Book a service"
        className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all duration-200 text-lg font-bold"
      >
        <span className="leading-none">📅</span>
      </Link>
    </div>
  );
};

export default FloatingIcons;
