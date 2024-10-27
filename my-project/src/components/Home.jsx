import React from "react";
import Button from "../layouts/Button";
import HomeImage from "../assets/images/doublehomepage.jpg";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:flex-row lg:justify-between items-center lg:px-32 px-5 gap-10 bg-gradient-to-r from-[#0265C2] to-[#AB02C2] ">
      <div className=" w-full lg:w-2/4 space-y-4 mt-14 lg:mt-0">
        <h1 className="font-semibold text-5xl text-center lg:text-start leading-tight">
          Bringing Your Brand to Life Through Quality Printing & Branding
          Services
        </h1>
        <p>
          DoubleShasa Limited, Kakamega’s leading provider in high-quality
          printing and custom branding solutions for businesses and individuals.
        </p>

        <div className=" flex flex-row gap-6">
          <Button title="Explore Services" />
        </div>
      </div>

      <div className="relative">
        <img
          src={HomeImage}
          alt="HomeImage"
          className="w-80 h-80 rounded-full object-cover" // Adjust w-40 and h-40 for medium size
        />

        <div className="absolute bg-white px-8 py-2 top-5 right-0 rounded-full shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
          <h2 className="font-semibold">Printing</h2>
        </div>

        <div className="absolute bg-white px-8 py-2 bottom-0 -left-10 rounded-full">
          <h2 className="font-semibold">Branding</h2>
        </div>
      </div>

    
    </div>
  );
};

export default Home;
