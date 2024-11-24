import React from "react";
import Image from "next/image"; // Use Next.js Image component for optimized image loading
import { Button } from "./button";

const ContentSection = () => {
  return (
    <div className="py-12 px-6 md:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Image */}
        <div className="relative w-full h-64 lg:h-auto">
          <Image
            src="/Content-removebg-preview.png" // Change this to your image path
            alt="Description of Image"
            layout="responsive" // Make the image responsive
            width={600} // Set your desired width
            height={400} // Set your desired height
            className="object-cover rounded-lg"
          />
        </div>

        {/* Right Side: Content Section */}
        <div className="lg:text-left">
          <h2 className="text-3xl font-extrabold text-blue-600 mb-4">
            The Agency That Drives Business Growth by Delivering High-Quality Leads That Convert
          </h2>
          <div className="text-lg text-gray-600 space-y-4">
            <p>
              Lead generation can be a challenge, but we’ve mastered it. After perfecting the formula for efficient and impactful lead generation, we’re ready to help businesses who need it the most.
            </p>
            <p>
              <strong>Looking to expand your reach?</strong>
            </p>
            <p>
              <strong>Want to convert more prospects?</strong>
            </p>
            <p>
              <strong>Eager to drive growth?</strong>
            </p>
            <p>
              We’re the lead generation agency you need. Unlike other agencies in London, we take a unique approach. We focus on building meaningful relationships with your leads, offer a variety of services, and work with a team of experienced professionals who are not only experts in lead generation but also skilled digital marketers and sales mentors.
            </p>
            <Button className="rounded-full text-lg font-bold bg-indigo-500 text-white py-8 px-12 hover:bg-blue-600">
  BOOK A CALL NOW!
</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
