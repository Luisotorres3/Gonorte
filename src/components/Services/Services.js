import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container" data-aos="fade-left">
        <h2>Mis Servicios</h2>
        <div className="services-list">
          <div className="service">
            <i className="fas fa-dumbbell"></i>
            <h3>Entrenamiento Personalizado</h3>
            <p>
              Planificación online del entrenamiento con seguimientos semanales
              y consejos sobre alimentación.
            </p>
          </div>
          <div className="service">
            <i className="fas fa-heartbeat"></i>
            <h3> Recuperación ante una lesión</h3>
            <p>
              Propiocepción y movilización de la zona afectada adaptado a
              necesidades individuales.
            </p>
          </div>
          <div className="service">
            <i className="fas fa-apple-alt"></i>
            <h3>Mejora y Corrección Postural</h3>
            <p>
              Aprender a comer y a cuidar tu metabolismo intestinal mediante
              pautas personalizadas.
            </p>
          </div>
        </div>
        <div>
          <Link to="/planes" className="btn">
            Vamos a ello!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
