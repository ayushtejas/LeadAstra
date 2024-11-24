import React from 'react';
import { FaCogs, FaLinkedinIn } from 'react-icons/fa';
import { MdAutoGraph, MdEmail } from "react-icons/md";
import { IoCalendarOutline, IoCall, IoPeople } from "react-icons/io5";

const services = [
  {
    icon: <FaLinkedinIn className="text-4xl text-indigo-500" />,
    title: "Linkedin Lead Generation",
    description: "We'll assist you in harnessing the potential of LinkedIn to attract new, highly qualified leads and build valuable connections.",
  },
  {
    icon: <MdEmail className="text-4xl text-indigo-500" />,
    title: "Cold Email",
    description: "Our experienced and talented copywriters have a proven history of creating cold email copy that delivers results.",
  },
  {
    icon: <MdAutoGraph className="text-4xl text-indigo-500" />,
    title: "B2B Lead Generation",
    description: "We'll consistently populate your sales funnel with a steady flow of qualified leads to keep your sales team engaged and productive!",
  },
  {
    icon: <IoCall className="text-4xl text-indigo-500" />,
    title: "Cold Calling",
    description: "Forget the script! Our team focuses on cultivating authentic, meaningful relationships through targeted cold calling.",
  },
  {
    icon: <IoPeople className="text-4xl text-indigo-500" />,
    title: "Lead Gen Outsourcing",
    description: "We'll collaborate seamlessly with your sales team to handle the lead generation process, allowing them to focus on closing conversions.",
  },
  {
    icon: <IoCalendarOutline className="text-4xl text-indigo-500" />,
    title: "Appointment Setting",
    description: "Our appointment setters will arrange calls with qualified key decision-makers in your target market.",
  },
];

const ServicesSection = () => {
  return (
    <div className="py-12 px-6 md:px-16 my-4 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-600 my-4">
          Supercharge Your Business Growth with Our Proven Lead Generation Solutions
        </h2>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-600 my-6 mb-12">
          Our innovative solutions and proven strategies are designed to accelerate your growth and drive success.
        </p>

        {/* Services List or Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-md rounded-lg text-center transition-transform duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-indigo-50"
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 text-justify px-4">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
