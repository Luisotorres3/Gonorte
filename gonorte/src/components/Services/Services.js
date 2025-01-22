import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section className="services" id="services" data-aos="fade-left">
      <div className="container">
        <h2>Mis Servicios</h2>
        <div className="services-list">
          <div className="service">
            <i className="fas fa-dumbbell"></i>
            <h3>Entrenamiento Personalizado</h3>
            <p>Planes adaptados a tus necesidades individuales.</p>
          </div>
          <div className="service">
            <i className="fas fa-heartbeat"></i>
            <h3>Salud y Bienestar</h3>
            <p>Enfoque integral en tu bienestar físico y mental.</p>
          </div>
          <div className="service">
            <i className="fas fa-apple-alt"></i>
            <h3>Nutrición</h3>
            <p>Asesoramiento nutricional para maximizar resultados.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
