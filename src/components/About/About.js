import React from "react";
import "./About.css";
import perfilImg from '../../assets/img/perfil.webp';

/**
 * @component About
 * @description This component displays the "About Me" section, including a personal introduction,
 * qualifications, and a profile image. It also contains a link to a portfolio.
 */
const About = () => {
  return (
    <section className="wim bg-light pb-5 about" id="about">
      <div class="container pt-5">
        <div class="row align-items-center">
          <div class="col-12 col-md-6" data-aos="fade-right">
            <div class="section-heading text-center text-sm-center text-md-left mb-5">
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
            <div class="flex justify-center col-12 text-center text-md-left p-0">
              {/* Note: The "Mi Portfolio" link currently has a placeholder href="#" */}
              <a class="btn mt-4 mb-4" href="#">
                Mi Portfolio
              </a>
            </div>
          </div>
          <div class="col-12 col-md-5 ml-auto" data-aos="flip-left">
            <img
              class="img-fluid"
              src={perfilImg}
              alt="imagen perfil"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
