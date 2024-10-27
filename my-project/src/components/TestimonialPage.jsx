import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from 'react-icons/fa';

// Example testimonial data
const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    title: 'CEO, ABC Corp',
    message: 'DoubleShasa provided top-notch branding services that transformed our image and increased client engagement!',
    img: 'https://via.placeholder.com/80', // Replace with real client image if available
  },
  {
    id: 2,
    name: 'Jane Smith',
    title: 'Marketing Head, XYZ Ltd',
    message: 'The printing quality and professionalism are unmatched. We’re thrilled with the results!',
    img: 'https://via.placeholder.com/80',
  },
  {
    id: 3,
    name: 'Michael Brown',
    title: 'Founder, StartUp Inc.',
    message: 'Fantastic service, quick delivery, and an amazing team! Highly recommend DoubleShasa for all branding needs.',
    img: 'https://via.placeholder.com/80',
  },
  // Add more testimonials as needed
];

const TestimonialPage = () => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-[#0265C2] to-[#AB02C2] p-5 lg:px-32">
      <h1 className="text-4xl font-semibold text-white my-10">What Our Clients Say</h1>
      
      <div className="relative flex items-center justify-center w-full lg:w-2/3">
        <button 
          onClick={handlePrev}
          className="absolute left-0 text-3xl text-white p-3 rounded-full bg-[#0265C2] hover:bg-[#AB02C2] transition duration-200"
        >
          <FaArrowLeft />
        </button>

        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-5 text-center flex flex-col items-center">
          <FaQuoteLeft className="text-[#AB6B2E] text-4xl mb-3" />
          <p className="text-gray-700 italic mb-6">"{testimonials[current].message}"</p>
          <img 
            src={testimonials[current].img} 
            alt={testimonials[current].name} 
            className="w-20 h-20 rounded-full mb-3"
          />
          <h3 className="text-lg font-bold">{testimonials[current].name}</h3>
          <p className="text-sm text-gray-500">{testimonials[current].title}</p>
        </div>

        <button 
          onClick={handleNext}
          className="absolute right-0 text-3xl text-white p-3 rounded-full bg-[#0265C2] hover:bg-[#AB02C2] transition duration-200"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default TestimonialPage;
