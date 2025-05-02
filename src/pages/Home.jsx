import React from "react";
import Hero from "../components/Hero/Hero";
import Info from "../components/Info/Info";
import Services from "../components/Services/Services";
import About from "../components/About/About";
import AboutCareer from "../components/About/AboutCareer";
import FAQs from "../components/Faqs/FAQs";
import Contact from "../components/Contact/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <Info />
      <Services />
      <About />
      <AboutCareer />
      <FAQs />
      <Contact />
    </>
  );
};

export default Home;
