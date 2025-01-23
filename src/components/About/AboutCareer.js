import React from "react";
import "./About.css";

const AboutCareer = () => {
  return (
    <section className="wim bg-light pb-5 about" id="about">
      <div class="container pt-5">
        <div class="row align-items-center">
          <div
            class="col-12 col-md-5 mr-auto video-container-career"
            data-aos="flip-right"
          >
            <video
              src={require("../../assets/video/video.mp4")} // Ruta al video
              autoPlay
              loop
              muted
              playsInline
              className="video-element"
            />
          </div>
          <div class="col-12 col-md-6" data-aos="fade-right">
            <div class="section-heading text-center text-sm-center text-md-left mb-5">
              <h2>MI CARRERA</h2>
              <h1>DEPORTIVA</h1>
            </div>
            <p> Especialista en Biomecánica Deportiva</p>
            <p>
              <strong>- Gimnasta Acrobática:</strong> Club Acrobalia Jaén
              (2012-2016)
              <br />
              <strong>- Instructora de Pilates Suelo:</strong> Arcadia Fitness
              Jaén (2017)
              <br />
              <strong>- Graduada en Ciencias del Deporte:</strong> Universidad
              de Granada (2018-2022)
              <br />
              <strong>- Cinturón Marrón de Judo:</strong> Campeonato Nacional
              Universitario Alemán (2023)
              <br />
              <strong>- 1° Puesto en Lucha de Equipo:</strong> Constanza,
              Alemania (2023)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCareer;
