import React from "react";
import './IntroPlanes.css';

/**
 * @component IntroPlanes
 * @description This component displays an introductory section for the plans page,
 * including a title, descriptive text, and an embedded video.
 * It does not receive any props.
 */
const IntroPlanes = () => {
  return (
    <section className="intro-planes">
      <div className="intro-content">
        <div className="texto">
          <h1>Sea cual sea tu nivel, tenemos un camino para ti</h1>
          <p>
            Contamos con tres niveles en función de tu experiencia y
            conocimientos. Podrás empezar desde lo más básico y evolucionar tu
            progreso al nivel de los mejores.
          </p>
        </div>
        <div className="video">
          <iframe
            width="100%"
            height="315"
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

export default IntroPlanes;
