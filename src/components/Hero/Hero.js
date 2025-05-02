import React from "react";
import "./Hero.css";

const InfoCard = ({ title, description, link, linkText }) => {
  return (
    <div className="info-card">
      <h3>{title}</h3>
      <div className="info-description">
        <p>{description}</p>
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {linkText}
      </a>
    </div>
  );
};

const TwoColumns = () => {
  return (
    <div className="two-columns">
      <InfoCard
        title="Tu postura"
        description="Programa correctivo para mejorar tu postura y tu movimiento y/o para salir de una lesión sin riesgos de recaída."
        link="https://tally.so/r/wgOve1"
        linkText="Saber más"
        titleVar="--primary-color"
        linkVar="--orange-color"
      />
      <InfoCard
        title="Tu entrenamiento"
        description="Programa para ganar fuerza a la vez que pierdes/ganas/mantienes tu peso ideal."
        link="https://tally.so/r/mVNlgg"
        linkText="Descubrir"
        titleVar="--orange-color"
        linkVar="--primary-color"
      />
    </div>
  );
};

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content flex" data-aos="fade-down">
        <h1>Biopoweriza tu fuerza</h1>
        <TwoColumns />
        <div className="hero-video">
          <iframe
            src="https://www.youtube.com/embed/kFLtEsp3rWg"
            title="¿Qué nivel elegir?"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Hero;
