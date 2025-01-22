import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content flex" data-aos="fade-down">
        <h1>Transforma tu vida con un entrenador personal</h1>
        <p>Tu éxito comienza aquí.</p>
        <a href="#about" className="btn btn-primary">
          Conocer más
        </a>
      </div>
    </section>
  );
};

export default Hero;
