import React from 'react';
import img1 from '../assets/images/printing-253437_1280.jpg';
import img2 from '../assets/images/colored-pencils-374771_1920.jpg';
import img3 from '../assets/images/printing-1822374_1920.jpg';
import img4 from '../assets/images/notebook-5480085_1920.jpg';
import img5 from '../assets/images/digital-marketing-8907752_1920.jpg';
import img6 from '../assets/images/spiral-binding-610196_1920.jpg';
import MenuCard from '../layouts/MenuCard';

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-gradient-to-r from-[#0265C2] to-[#AB02C2]">
      <h1 className="font-semibold text-center text-4xl mt-24 mb-8 text-white">
        Our Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pb-8">
        <MenuCard img={img1} title="Offset Printing" />
        <MenuCard img={img2} title="Graphic Design" />
        <MenuCard img={img3} title="Screen Printing" />
        <MenuCard img={img4} title="Stationaries" />
        <MenuCard img={img5} title="Branding" />
        <MenuCard img={img6} title="Binding" />
      </div>
    </div>
  );
};

export default Services;
