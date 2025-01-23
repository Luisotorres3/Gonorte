import AOS from "aos";
import "aos/dist/aos.css";
import "./css/style.css";

import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";

import "./App.css";
import Footer from "./components/Footer/Footer";
import Info from "./components/Info/Info";
import FAQs from "./components/Faqs/FAQs";
import HeroVideo from "./components/Hero/HeroVideo";
import AboutCareer from "./components/About/AboutCareer";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Header />
      <Hero />
      <About />
      <AboutCareer />
      <Services />
      <Info />
      <FAQs />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
