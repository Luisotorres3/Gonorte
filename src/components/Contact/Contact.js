import React from "react";
import "./Contact.css";

/**
 * @component Contact
 * @description This component displays a contact form for users to send messages.
 * It includes fields for name, email, and message.
 */
const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Contacto</h2>
        <p>¿Tienes preguntas o necesitas más información? ¡Contáctame!</p>
        {/*
          NOTE: This contact form is currently non-functional.
          It does not have state handling for input fields or a submission mechanism.
          To make it functional, state management (e.g., useState) for form inputs
          and an onSubmit handler (e.g., to send data to a backend or email service)
          would need to be implemented.
        */}
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
