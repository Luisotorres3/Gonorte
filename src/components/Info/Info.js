import React, { useState } from "react";
const Info = () => {
  const [flippedCards, setFlippedCards] = useState({}); // Guarda el estado de cada tarjeta (si está volteada)

  const cards = [
    {
      id: 1,
      icon: "fas fa-dumbbell mb-3",
      title: "Aumento masa muscular",
      subtitle: "Fuerza & hipertrofia",
      image: require("../../assets/img/aumento.jpg"),
      description: "Programa diseñado para ganar fuerza y masa muscular.",
      descriptionBack:
        "El proceso de envejecimiento lleva consigo la pérdida de masa muscular o sarcopenia. Además, el músculo es el mayor depósito de combustible de todo nuestro cuerpo. Si no lo ejercitas,  acaba por debilitarse, incluso si eres joven. MAS MUSCULO, MAS VIDA",
    },
    {
      id: 2,
      icon: "fas fa-apple-alt mb-3",
      title: "Pérdida de grasa",
      subtitle: "Segura & progresiva",
      image: require("../../assets/img/perdida.jpg"),
      description: "¡A través del balance energético de la calculadora!",
      descriptionBack:
        "Saber qué comes es muy importante... pero saber CUÁNTO comes es más aún. Te enseño a tener una mejor relación con la comida para sentirte mejor y estar más san@ no solo físicamente si no MENTALMENTE",
    },
    {
      id: 3,
      icon: "fas fa-hammer mb-3",
      title: "Rehabilitación",
      subtitle: "Muscular & articular",
      image: require("../../assets/img/rehabilitacion.jpg"),
      description:
        "Recupera el funcionamiento de tu organismo a través de la terapia del movimiento.",
      descriptionBack:
        "Mi deber es ayudarte a restaurar el tejido roto, la articulación en sobre uso o cualquier otra patología que haya surgido de bien de malos hábitos o de un incidente, a su correcto funcionamiento, EN EL MENOR TIEMPO POSIBLE",
    },
    {
      id: 4,
      icon: "fas fa-chart-line mb-3",
      title: "Aumentar rendimiento",
      subtitle: "Élite & no-élite",
      image: require("../../assets/img/rendimiento.jpg"),
      description:
        "Optimización del rendimiento físico y técnico para los más disciplinados.",
      descriptionBack:
        "El uso de tecnologías de última generación junto con mis destrezas en física, motor control y planificación del rendimiento serán claves para conseguir potenciar la capacidad que el atleta desee explotar. POTENCIA, FUERZA, RESISTENCIA...",
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
              style={{ cursor: "pointer" }}
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
                    <i className={card.icon}></i>
                    <h3>{card.title}</h3>
                    <h4>{card.subtitle}</h4>
                    <p className="mt-4">{card.description}</p>
                  </div>
                  <div></div>
                </div>
                <div className="card-back">
                  <div className="card-inner">
                    <h3>{card.descriptionBack}</h3>
                  </div>
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
