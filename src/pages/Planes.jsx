import React, { useEffect, useState } from "react";
import "./styles/Planes.css";

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

const planesInfo = {
  mensual: {
    basico: {
      nombre: "Nivel Basic",
      descripcion:
        "Método de iniciación estructurado con comunidad activa y soporte.",
      beneficios: [
        "3 entrenamientos/semana",
        "Guía de alimentación general",
        "Soporte vía email",
      ],
      precioAnterior: "30,25€",
      precio: "25,20€/mes",
    },
    medio: {
      nombre: "Nivel Pro",
      descripcion:
        "Rutinas personalizadas + seguimiento para objetivos avanzados.",
      beneficios: [
        "5 entrenamientos/semana",
        "Nutrición personalizada",
        "1 videollamada/mes",
        "Soporte WhatsApp",
      ],
      precioAnterior: "71,39€",
      precio: "59,48€/mes",
    },
    pro: {
      nombre: "Nivel Elite",
      descripcion:
        "Entrenamiento completo para alto rendimiento + acceso exclusivo.",
      beneficios: [
        "Entrenamiento diario",
        "Soporte 24/7",
        "Contenido exclusivo",
        "Asistencia 1:1",
      ],
      precioAnterior: "119,79€",
      precio: "99,82€/mes",
    },
  },
  semestral: {
    basico: {
      nombre: "Nivel Basic",
      descripcion:
        "Método de iniciación estructurado con comunidad activa y soporte.",
      beneficios: [
        "3 entrenamientos/semana",
        "Guía de alimentación general",
        "Soporte vía email",
      ],
      precioAnterior: "30,25€",
      precio: "25,20€/mes",
    },
    medio: {
      nombre: "Nivel Pro",
      descripcion:
        "Rutinas personalizadas + seguimiento para objetivos avanzados.",
      beneficios: [
        "5 entrenamientos/semana",
        "Nutrición personalizada",
        "1 videollamada/mes",
        "Soporte WhatsApp",
      ],
      precioAnterior: "71,39€",
      precio: "59,48€/mes",
    },
    pro: {
      nombre: "Nivel Elite",
      descripcion:
        "Entrenamiento completo para alto rendimiento + acceso exclusivo.",
      beneficios: [
        "Entrenamiento diario",
        "Soporte 24/7",
        "Contenido exclusivo",
        "Asistencia 1:1",
      ],
      precioAnterior: "119,79€",
      precio: "99,82€/mes",
    },
  },
  anual: {
    basico: {
      nombre: "Nivel Basic",
      descripcion:
        "Método de iniciación estructurado con comunidad activa y soporte.",
      beneficios: [
        "3 entrenamientos/semana",
        "Guía de alimentación general",
        "Soporte vía email",
      ],
      precioAnterior: "30,25€",
      precio: "25,20€/mes",
    },
    medio: {
      nombre: "Nivel Pro",
      descripcion:
        "Rutinas personalizadas + seguimiento para objetivos avanzados.",
      beneficios: [
        "5 entrenamientos/semana",
        "Nutrición personalizada",
        "1 videollamada/mes",
        "Soporte WhatsApp",
      ],
      precioAnterior: "71,39€",
      precio: "59,48€/mes",
    },
    pro: {
      nombre: "Nivel Elite",
      descripcion:
        "Entrenamiento completo para alto rendimiento + acceso exclusivo.",
      beneficios: [
        "Entrenamiento diario",
        "Soporte 24/7",
        "Contenido exclusivo",
        "Asistencia 1:1",
      ],
      precioAnterior: "119,79€",
      precio: "99,82€/mes",
    },
  },
};

const Planes = () => {
  const [suscripcion, setSuscripcion] = useState("mensual");

  const planesActuales = planesInfo[suscripcion];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <section className="planes-section">
      <IntroPlanes />
      <div className="planes-header">
        <h1>Planes de Entrenamiento</h1>
      </div>
      <div className="selector-suscripcion">
        {["mensual", "semestral", "anual"].map((tipo) => (
          <button
            key={tipo}
            className={suscripcion === tipo ? "activo" : ""}
            onClick={() => setSuscripcion(tipo)}
          >
            {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
          </button>
        ))}
      </div>
      <div className="planes-grid">
        {["basico", "medio", "pro"].map((nivel) => {
          const plan = planesActuales[nivel];
          return (
            <div className={`plan-detalle ${nivel}`} key={nivel}>
              <div className="precios">
                <span className="precio-anterior">{plan.precioAnterior}</span>
                <span className="precio-descuento">{plan.precio}</span>
              </div>
              <h2>{plan.nombre}</h2>
              <p className="descripcion">{plan.descripcion}</p>
              <ul className="beneficios">
                {plan.beneficios.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <div className="registro">
                <button className="btn">Registro</button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Planes;
