import React from 'react';
import Image from 'next/image';
import { Button } from './button';

const TopSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 py-12">
      {/* Left Content */}
      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 mt-8">
        <span className="text-4xl md:text-5xl  text-blue-600 pb-5">
        We&apos;ll book you <span className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">20 meetings</span>  within <span className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">30 days</span>.
        </span>
        <p className="text-lg md:text-xl text-gray-600 my-10">
          Empowering your marketing journey with cutting-edge strategies and
          creative solutions. Let&apos;s take your brand to the next level.
        </p>
        <Button className="rounded-full text-lg font-bold bg-indigo-500 text-white py-8 px-12 hover:bg-blue-600">
  BOOK A CALL NOW!
</Button>

      </div>

      {/* Right Image */}
      <div className="md:w-1/2 flex justify-center items-center py-4">
        <Image
          src="/istockphoto-1289358286-612x612-removebg-preview.png" // Replace with your image path
          alt="Marketing strategy illustration"
          width={600}
          height={600}
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default TopSection;
