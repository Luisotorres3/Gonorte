import React, { useState } from "react";
import "./styles/Contacto.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTiktok,
  faFacebookF,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("message", formData.message);

    try {
      const response = await fetch("", {
        method: "POST",
        body: form,
      });

      const result = await response.json();
      if (result.success) {
        setEnviado(true);
      }
    } catch (error) {
      console.error("❌ Error:", error);
      alert("Error al enviar el formulario");
    }
  };

  return (
    <section className="contacto-section">
      <div className="contacto-overlay">
        <div className="contacto-container">
          <h1 className="contacto-titulo">Contacto</h1>
          <p className="contacto-descripcion">
            ¿Tienes dudas? ¿Quieres empezar tu proceso conmigo? Rellena el
            formulario o contáctame por redes sociales.
          </p>
          {enviado ? (
            <p className="contacto-descripcion">
              ✅ Tu mensaje ha sido enviado correctamente.
            </p>
          ) : (
            <form className="contacto-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input
                  name="name"
                  type="text"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Correo electrónico</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Tu email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                  name="message"
                  placeholder="Tu mensaje"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
            </form>
          )}

          <div className="redes-sociales">
            <a
              href="https://www.instagram.com/gonorte.biomechanics"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.tiktok.com/@gonorte.biomechanics"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTiktok} />
            </a>
            <a
              href="https://wa.me/34644001599"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61572526556682"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
