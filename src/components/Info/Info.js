import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Info = () => {
  const [flippedCards, setFlippedCards] = useState({}); // Guarda el estado de cada tarjeta (si está volteada)

  const cards = [
    {
      id: 1,
      title: "Aumento masa muscular",
      subtitle: "Funcional & musculação",
      image: require("../../assets/img/aumento.jpg"),
      description: "Programa diseñado para ganar fuerza y masa muscular.",
    },
    {
      id: 2,
      title: "Pérdida de grasa",
      subtitle: "Funcional & musculação",
      image: require("../../assets/img/perdida.jpg"),
      description: "Entrenamientos para quemar grasa y mejorar la salud.",
    },
    {
      id: 3,
      title: "Rehabilitación",
      subtitle: "Funcional & musculação",
      image: require("../../assets/img/rehabilitacion.jpg"),
      description:
        "Ejercicios enfocados en la recuperación muscular y articular.",
    },
    {
      id: 4,
      title: "Aumentar rendimiento",
      subtitle: "Funcional & musculação",
      image: require("../../assets/img/rendimiento.jpg"),
      description: "Optimización del rendimiento físico y técnico.",
    },
  ];

  const handleFlip = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id], // Alterna el estado de la tarjeta (volteada o no)
    }));
  };
  return (
    <section className="training bg-light" id="objetivos">
      <div className="container pt-5">
        <div className="row ">
          <div className="col-12">
            <div
              className="section-heading text-center text-sm-center mb-5"
              data-aos="fade-up"
            >
              <h2>Trabajo contigo tus </h2>
              <h1>Objetivos</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid pb-5">
        <div className="row no-gutters">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`col-12 col-lg-3 col-md-6 p-2 `}
              data-aos="zoom-in"
              onClick={() => handleFlip(card.id)}
            >
              <div
                className={`card-item shadow-sm  ${
                  flippedCards[card.id] ? "flipped" : ""
                }`}
              >
                <div className="block-classNamees card-front">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="img-fluid"
                  />
                  <div className="p-4">
                    <i className="fas fa-dumbbell mb-3"></i>
                    <h3>{card.title}</h3>
                    <h4>{card.subtitle}</h4>
                    <p className="mt-4">{card.description}</p>
                  </div>
                  <div></div>
                </div>
                <div className="card-back">
                  <p>Lorem Ipsum</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Info;
