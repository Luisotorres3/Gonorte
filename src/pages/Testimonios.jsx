import React, { useState } from "react";
import "./styles/Testimonios.css";

import alumno1 from "../assets/img/perdida.webp";
import alumno2 from "../assets/img/aumento.webp";

const testimonios = [
  {
    id: 1,
    nombre: "Lucía G.",
    antes: alumno2,
    despues: alumno1,
    video: "https://www.youtube.com/watch?v=video1",
    resumen: "Mejoró su movilidad y fuerza en solo 3 meses.",
    detalle:
      "Lucía llegó con dolores articulares leves. Tras la evaluación biomecánica y trabajo de fuerza, eliminó molestias y ahora entrena con constancia y alegría.",
  },
  {
    id: 2,
    nombre: "Carlos M.",
    antes: alumno2,
    despues: alumno1,
    video: "https://www.youtube.com/watch?v=video2",
    resumen: "Recuperación total post-lesión de rodilla.",
    detalle:
      "Carlos sufrió una rotura parcial del LCA. Tras 6 meses de intervención biomecánica y readaptación, volvió al fútbol sin dolor y con más estabilidad.",
  },
  {
    id: 3,
    nombre: "María S.",
    antes: alumno2,
    despues: alumno1,
    video: "https://www.youtube.com/watch?v=video3",
    resumen: "Logró un cambio físico y emocional.",
    detalle:
      "Tras años de inactividad, María comenzó a entrenar desde casa. Hoy se siente más fuerte, segura y feliz con su rutina activa.",
  },
];

const Testimonios = () => {
  const [activo, setActivo] = useState(null);

  const handleClick = (testimonio) => {
    setActivo(testimonio);
  };

  const cerrarDetalle = () => {
    setActivo(null);
  };

  return (
    <section className="testimonios-section">
      <h2 className="alumnos-title">🗣️ Testimonios de Alumnos</h2>

      {activo ? (
        <div className="detalle-activo">
          <button onClick={cerrarDetalle} className="volver-btn">
            ← Volver
          </button>
          <h3>{activo.nombre}</h3>
          <p>{activo.detalle}</p>
          <div className="imagenes-comparacion">
            <div>
              <h4>Antes</h4>
              <img src={activo.antes} alt="Antes" />
            </div>
            <div>
              <h4>Después</h4>
              <img src={activo.despues} alt="Después" />
            </div>
          </div>
          {activo.video && (
            <div className="video-container">
              <iframe
                width="40%"
                height="315"
                src={activo.video}
                title="Video Testimonio"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      ) : (
        <div className="carrusel-content">
          <div className="carrusel carrusel-testimonios">
            <div className="carrusel-track">
              {[...testimonios, ...testimonios].map((alumno, index) => (
                <div
                  className="alumno-card"
                  key={index}
                  onClick={() => handleClick(alumno)}
                >
                  <img src={alumno.despues} alt={alumno.nombre} />
                  <p className="nombre">{alumno.nombre}</p>
                  <p className="resumen">{alumno.resumen}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonios;
