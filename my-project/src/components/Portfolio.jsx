import React, { useState } from 'react';

const portfolioItems = [
  { id: 1, img: 'https://via.placeholder.com/300', title: 'Branding Project 1' },
  { id: 2, img: 'https://via.placeholder.com/300', title: 'Stationery Design' },
  { id: 3, img: 'https://via.placeholder.com/300', title: 'Garment Printing' },
  { id: 4, img: 'https://via.placeholder.com/300', title: 'Digital Printing' },
  { id: 5, img: 'https://via.placeholder.com/300', title: 'Digital Printing' },
  
  // Add more items as needed
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0265C2] to-[#AB02C2] p-8 lg:px-32 text-white">
      <h1 className="text-4xl font-semibold text-center mt-10 mb-8">Our Portfolio</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
        {portfolioItems.map((item) => (
          <div key={item.id} className="bg-white text-gray-800 p-5 rounded-lg shadow-lg relative group">
            <img 
              src={item.img} 
              alt={item.title} 
              className="w-full h-48 object-cover rounded-lg group-hover:opacity-80 transition duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <h3 className="text-white font-bold text-lg">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
