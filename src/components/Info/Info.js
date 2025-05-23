import React, { useState } from "react";
import "./Info.css";

const Info = () => {
  const [activeCard, setActiveCard] = useState(null);

  const cards = [
    {
      id: 1,
      icon: "fas fa-dumbbell mb-3",
      title: "Aumento masa muscular",
      subtitle: "Fuerza & hipertrofia",
      image: require("../../assets/img/aumento.webp"),
      description: "Programa diseñado para ganar fuerza y masa muscular.",
      chapters: [
        {
          title: "¿Por qué es importante?",
          content:
            "El proceso de envejecimiento lleva consigo la pérdida de masa muscular o sarcopenia. El músculo es el mayor depósito de combustible de nuestro cuerpo.",
        },
        {
          title: "¿Qué conseguirás?",
          content:
            "Aumento de fuerza, mejor composición corporal y mayor calidad de vida.",
        },
        {
          title: "Metodología",
          content:
            "Entrenamiento progresivo basado en evidencia científica y adaptado a tus necesidades.",
        },
      ],
    },
    {
      id: 2,
      icon: "fas fa-apple-alt mb-3",
      title: "Pérdida de grasa",
      subtitle: "Segura & progresiva",
      image: require("../../assets/img/perdida.webp"),
      description: "¡A través del balance energético de la calculadora!",
      chapters: [
        {
          title: "Enfoque saludable",
          content:
            "Saber qué comes es importante, pero saber CUÁNTO comes es aún más crucial para tu éxito.",
        },
        {
          title: "Salud mental",
          content:
            "Te enseño a tener una mejor relación con la comida para sentirte mejor física y mentalmente.",
        },
        {
          title: "Resultados duraderos",
          content:
            "Aprenderás hábitos sostenibles que podrás mantener a largo plazo.",
        },
      ],
    },
    {
      id: 3,
      icon: "fas fa-hammer mb-3",
      title: "Rehabilitación",
      subtitle: "Muscular & articular",
      image: require("../../assets/img/rehabilitacion.webp"),
      description:
        "Recupera el funcionamiento de tu organismo a través de la terapia del movimiento.",
      chapters: [
        {
          title: "Evaluación completa",
          content:
            "Análisis detallado de tu condición y necesidades específicas.",
        },
        {
          title: "Plan personalizado",
          content:
            "Programa de rehabilitación adaptado a tu patología y objetivos.",
        },
        {
          title: "Seguimiento continuo",
          content: "Ajustes y modificaciones según tu progreso y recuperación.",
        },
      ],
    },
    {
      id: 4,
      icon: "fas fa-chart-line mb-3",
      title: "Aumentar rendimiento",
      subtitle: "Élite & no-élite",
      image: require("../../assets/img/rendimiento.webp"),
      description:
        "Optimización del rendimiento físico y técnico para los más disciplinados.",
      chapters: [
        {
          title: "Tecnología avanzada",
          content:
            "Uso de tecnologías de última generación para análisis y seguimiento.",
        },
        {
          title: "Enfoque científico",
          content:
            "Aplicación de principios de física y control motor en tu entrenamiento.",
        },
        {
          title: "Resultados medibles",
          content:
            "Seguimiento detallado de tu progreso y adaptación continua del programa.",
        },
      ],
    },
  ];

  const handleCardClick = (id) => {
    setActiveCard(activeCard === id ? null : id);
  };

  return (
    <section className="training bg-light" id="objetivos">
      <div className="container">
        <div className="section-heading text-center mb-5" data-aos="fade-up">
          <h2>Trabajo contigo tus</h2>
          <h1>Objetivos</h1>
        </div>

        <div className="objectives-grid">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`book-card ${activeCard === card.id ? "active" : ""}`}
              onClick={() => handleCardClick(card.id)}
            >
              <div className="book-cover">
                <div className="book-content">
                  <i className={card.icon}></i>
                  <div className="title-container">
                    <h3>{card.title}</h3>
                    <h4>{card.subtitle}</h4>
                  </div>
                  <div className="image-container">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="img-fluid"
                    />
                  </div>
                  <p>{card.description}</p>
                </div>
              </div>

              <div className="book-pages">
                <button
                  className="close-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick(card.id);
                  }}
                >
                  ×
                </button>
                <h3 className="objectives-title">Objetivos del Programa</h3>
                {card.chapters.map((chapter, index) => (
                  <div key={index} className="book-page">
                    <h4>{chapter.title}</h4>
                    <p>{chapter.content}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Info;
