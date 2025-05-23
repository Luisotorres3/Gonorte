import React from "react";
import "./styles/Colaboraciones.css";

import bgHero from "../assets/img/bg-hero.webp";

const testimonios = [
  {
    nombre: "María García",
    edad: "28 años",
    imagen: "../assets/img/bg-hero.webp",
    texto:
      "Gracias a Carmen he mejorado mi postura y eliminado dolores crónicos. Su enfoque científico y personalizado marca la diferencia.",
    logro: "Recuperación de lesión de espalda",
  },
  {
    nombre: "Juan Pérez",
    edad: "35 años",
    imagen: "../assets/img/bg-hero.webp",
    texto:
      "El análisis biomecánico me ayudó a optimizar mi técnica de running. Ahora corro más eficientemente y sin molestias.",
    logro: "Mejora en rendimiento deportivo",
  },
  {
    nombre: "Laura Martín",
    edad: "42 años",
    imagen: "../assets/img/bg-hero.webp",
    texto:
      "La evaluación postural y el programa personalizado han sido clave para mi recuperación post-embarazo.",
    logro: "Rehabilitación post-parto",
  },
  {
    nombre: "Carlos Ruiz",
    edad: "31 años",
    imagen: "../assets/img/bg-hero.webp",
    texto:
      "El enfoque científico de Carmen en el entrenamiento ha transformado mi forma de ejercitarme. Resultados increíbles.",
    logro: "Optimización del entrenamiento",
  },
  {
    nombre: "Ana Sánchez",
    edad: "45 años",
    imagen: "../assets/img/bg-hero.webp",
    texto:
      "La combinación de tecnología y conocimiento experto ha sido fundamental para mejorar mi calidad de vida.",
    logro: "Mejora en calidad de vida",
  },
];

const servicios = [
  {
    titulo: "Análisis Biomecánico",
    descripcion: "Evaluación completa del movimiento en 3D",
    icono: "📊",
  },
  {
    titulo: "Rehabilitación",
    descripcion: "Programas personalizados de recuperación",
    icono: "🏥",
  },
  {
    titulo: "Entrenamiento Personal",
    descripcion: "Planes adaptados a tus objetivos",
    icono: "💪",
  },
  {
    titulo: "Evaluación Postural",
    descripcion: "Detección y corrección de desequilibrios",
    icono: "🔍",
  },
];

const Colaboraciones = () => {
  return (
    <section className="colaboraciones-section">
      <div className="overlay"></div>

      <div className="colaboraciones-intro">
        <h1>🌟 Transforma tu vida con ciencia y movimiento</h1>
        <p>
          Soy Carmen, fundadora de Gonorte Biomechanics. Mi formación
          internacional y experiencia en biomecánica me permiten ofrecerte un
          enfoque único y científico para mejorar tu movimiento y calidad de
          vida.
        </p>

        <h2>🎯 Servicios Especializados</h2>
        <div className="servicios-grid">
          {servicios.map((servicio, index) => (
            <div key={index} className="servicio-card">
              <span className="servicio-icono">{servicio.icono}</span>
              <h3>{servicio.titulo}</h3>
              <p>{servicio.descripcion}</p>
            </div>
          ))}
        </div>

        <h2>💫 ¿Por qué elegir Gonorte Biomechanics?</h2>
        <ul>
          <li>
            Evaluación biomecánica avanzada con tecnología de última generación
          </li>
          <li>Programas personalizados basados en datos objetivos</li>
          <li>Seguimiento continuo y ajustes según tu progreso</li>
          <li>Enfoque holístico que combina ciencia y práctica</li>
          <li>Resultados medibles y demostrables</li>
        </ul>

        <div className="btn-container">
          <a href="/Gonorte/contacto" className="btn-colaborar">
            Reserva tu evaluación
          </a>
        </div>
      </div>

      <div className="content">
        <h2>👥 Historias de Éxito</h2>
        <div className="carrusel">
          <div className="carrusel-track">
            {[...testimonios, ...testimonios].map((testimonio, index) => (
              <div className="alumno-card" key={index}>
                <img src={bgHero} alt={testimonio.nombre} />
                <div className="testimonio-content">
                  <h3>{testimonio.nombre}</h3>
                  <p className="edad">{testimonio.edad}</p>
                  <p className="logro">{testimonio.logro}</p>
                  <p className="testimonio-texto">"{testimonio.texto}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Colaboraciones;
