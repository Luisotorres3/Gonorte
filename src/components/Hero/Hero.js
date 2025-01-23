import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content flex" data-aos="fade-down">
        <h1>Biopoweriza tu fuerza</h1>
        <p>Conquista tu movimiento.</p>
        <a href="#about" className="btn btn-primary">
          Conóceme
        </a>
      </div>
    </section>
  );
};

export default Hero;
