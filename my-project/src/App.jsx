import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import TestimonialPage from "./components/TestimonialPage";
import Footer from "./components/Footer";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div id="home">
          <Home />
        </div>

        <div id="services">
          <Services/>
        </div>

        <div id="about">
          <AboutUs/>
        </div>

        <div id="portfolio">
          <Portfolio/>
        </div>

        <div id="testimonials">
          <TestimonialPage />
        </div>

        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default App;
