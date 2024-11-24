import React from 'react';

const Banner = () => {
  return (
    <div className="hidden sm:block bg-indigo-400 text-white text-sm py-5 fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <span className="font-bold text-lg">
          📞 Contact us: <a href="tel:+1234567890" className="font-bold underline">+1 234 567 890</a>
        </span>
        <span className="font-bold text-lg">
          📧 Email: <a href="mailto:info@leadastra.com" className="font-bold underline">info@leadastra.com</a>
        </span>
      </div>
    </div>
  );
};

export default Banner;
