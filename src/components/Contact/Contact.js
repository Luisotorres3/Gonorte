import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Contacto</h2>
        <p>¿Tienes preguntas o necesitas más información? ¡Contáctame!</p>
        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="Tu nombre" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Tu correo" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Tu mensaje" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
