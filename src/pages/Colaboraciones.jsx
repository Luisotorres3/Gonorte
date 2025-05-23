import React from "react";
import "./styles/Colaboraciones.css";

import bgHero from "../assets/img/bg-hero.webp";

const alumnos = [
  { nombre: "Ana López", imagen: "../assets/img/bg-hero.webp" },
  { nombre: "Carlos Ruiz", imagen: "../assets/img/bg-hero.webp" },
  { nombre: "Laura Sánchez", imagen: "../assets/img/bg-hero.webp" },
  { nombre: "David Gómez", imagen: "../assets/img/bg-hero.webp" },
  { nombre: "Sofía Martínez", imagen: "../assets/img/bg-hero.webp" },
];

const Colaboraciones = () => {
  return (
    <section className="colaboraciones-section">
      <div className="overlay"></div>
      <div className="colaboraciones-intro">
        <h1>🌟 ¿Quién soy?</h1>
        <p>
          Soy Carmen, fundadora de Gonorte Biomechanics. Graduada en Ciencias de
          la Actividad Física y el Deporte por la Universidad de Granada en
          2022, y titulada con un Máster de Tecnología Humana y Medicina
          Deportiva por la Universidad Alemana de Colonia en 2025.
        </p>
        <p>
          Mi misión es optimizar el movimiento de las personas a través de
          evaluaciones objetivas, programas personalizados y un enfoque
          científico y actualizado.
        </p>
        <p>
          Realizo análisis posturales avanzados en 3D mediante técnicas de
          biomecánica aplicada, detectando desequilibrios musculares,
          alteraciones articulares y patrones de movimiento que pueden afectar
          al rendimiento, la recuperación o la calidad de vida.
        </p>

        <h2>🎯 ¿Cómo podemos trabajar juntos?</h2>
        <ul>
          <li>
            Mejorar la recuperación de tus pacientes mediante datos objetivos de
            movimiento.
          </li>
          <li>
            Complementar tus tratamientos con programas de intervención
            adaptados.
          </li>
          <li>
            Añadir un servicio innovador que diferencie tu clínica en el
            mercado.
          </li>
        </ul>

        <h2>💬 ¿Por qué colaborar conmigo?</h2>
        <ul>
          <li>
            ✔️ Formación internacional de excelencia en biomecánica y tecnología
            aplicada.
          </li>
          <li>
            ✔️ Evaluaciones posturales avanzadas y análisis funcional objetivo.
          </li>
          <li>
            ✔️ Intervenciones correctivas personalizadas según necesidades
            reales del paciente.
          </li>
          <li>
            ✔️ Experiencia en proyectos de investigación y su respectiva
            aparatología.
          </li>
          <li>
            ✔️ Diferenciación y posicionamiento innovador para tu clínica.
          </li>
        </ul>

        <div className="btn-container">
          <a href="/Gonorte/contacto" className="btn-colaborar">
            Quiero colaborar
          </a>
        </div>
      </div>

      <div className="content">
        <h2 className="alumnos-title">👥 Alumnos Entrenando Actualmente</h2>
        <div className="carrusel">
          <div className="carrusel-track">
            {[...alumnos, ...alumnos].map((alumno, index) => (
              <div className="alumno-card" key={index}>
                <img src={bgHero} alt={alumno.nombre} />
                <p>{alumno.nombre}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Colaboraciones;
