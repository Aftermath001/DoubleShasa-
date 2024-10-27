import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0265C2] to-[#AB02C2] p-8 lg:px-32 text-white">
      <h1 className="text-4xl font-semibold text-center mt-10 mb-8">About Us</h1>

      <div className="bg-white text-gray-800 rounded-lg shadow-lg p-8 lg:flex lg:space-x-8 items-center">
        <img 
          src="https://via.placeholder.com/300" 
          alt="Team Photo" 
          className="rounded-lg lg:w-1/2 mb-8 lg:mb-0"
        />
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="mb-6">DoubleShasa is dedicated to delivering exceptional printing, branding, and design services to businesses in Kakamega and beyond. Our mission is to empower our clients with high-quality, creative, and impactful solutions that elevate their brands.</p>
          
          <h2 className="text-2xl font-bold mb-4">Our Values</h2>
          <ul className="list-disc ml-5">
            <li>Quality</li>
            <li>Customer Satisfaction</li>
            <li>Innovation</li>
            <li>Integrity</li>
          </ul>
        </div>
      </div>

      <div className="bg-white text-gray-800 rounded-lg shadow-lg p-8 mt-10">
        <h2 className="text-2xl font-bold mb-4">Our Story</h2>
        <p>DoubleShasa was founded in Kakamega with the goal of providing outstanding printing and branding solutions to local businesses. Over the years, we have grown and diversified our services to include everything from garment branding to graphic and web design, always staying committed to quality and customer satisfaction.</p>
      </div>
    </div>
  );
};

export default AboutUs;
