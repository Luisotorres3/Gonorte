import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="wim bg-light pb-5 about" id="about">
      <div className="container pt-5">
        <div className="row align-items-center">
          <div className="col-12 col-md-6" data-aos="fade-right">
            <div className="section-heading text-center text-sm-center text-md-left mb-5">
              <h2>Quién soy</h2>
              <h1>CARMEN M. GONZÁLEZ</h1>
            </div>
            <p> Especialista en Biomecánica Deportiva</p>
            <p>
              Soy una profesional recientemente graduada en el Máster de
              Tecnología Humana en el Deporte y la Medicina, por la prestigiosa
              Universidad Deportiva Alemana de Colonia. Mi sólida formación en
              entrenamiento y rendimiento Deportivo, me brindan un enfoque
              interdisciplinario para integrar elementos de mecánica, anatomía y
              fisiología durante el entrenamiento.
            </p>
            <div className="flex justify-center col-12 text-center text-md-left p-0">
              <a className="btn mt-4 mb-4" href="#">
                Mi Portfolio
              </a>
            </div>
          </div>
          <div className="col-12 col-md-5 ml-auto" data-aos="flip-left">
            <img
              className="img-fluid about-profile-image"
              src={require("../../assets/img/perfil.webp")}
              alt="imagen perfil"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
