import React from "react";
import "./Hero.css";

/**
 * @component InfoCard
 * @description A reusable card component to display information with a title, description, and a link.
 * @param {object} props The props for the component.
 * @param {string} props.title The title of the card.
 * @param {string} props.description The description content of the card.
 * @param {string} props.link The URL for the link.
 * @param {string} props.linkText The text for the link.
 * @param {string} [props.titleVar] Potentially unused prop for title color variable.
 * @param {string} [props.linkVar] Potentially unused prop for link color variable.
 */
const InfoCard = ({ title, description, link, linkText }) => {
  // Note: titleVar and linkVar props are passed but not currently used in this component.
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

/**
 * @component TwoColumns
 * @description A component that displays two InfoCard components side-by-side.
 * It's used within the Hero section to present different program options.
 */
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

/**
 * @component Hero
 * @description The main hero section of the page. It includes a headline,
 * the TwoColumns component to display program options, and an embedded video.
 */
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
