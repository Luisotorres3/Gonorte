import React from "react";
import Hero from "../components/Hero/Hero";
import Info from "../components/Info/Info";
import Services from "../components/Services/Services";
import About from "../components/About/About";
import AboutCareer from "../components/About/AboutCareer";
import FAQs from "../components/Faqs/FAQs";
import Contact from "../components/Contact/Contact";

const Home = () => {
  const faqs = [
    {
      id: 1,
      question: "¿Qué es la Biomecánica?",
      answer:
        "Es una ciencia que estudia cómo el cuerpo humano se mueve. Es como si nuestras articulaciones fueran palancas, y se estudiase su funcionamiento con fórmulas y matemáticas.",
    },
    {
      id: 2,
      question: "¿Por qué elegir un entrenamiento basado en Biomecánica?",
      answer:
        "Por su caracter analitico, es decir, basado en que cada persona haga el movimiento correcto para su cuerpo, optimizando la relación entre mente y cuerpo.",
    },
    {
      id: 3,
      question: "¿Cuáles son los diferentes programas de entrenamiento?",
      answer:
        "Dependiendo del servicio que contrates. Para entrenamiento personal y nutrición, la inscripción es de 3 meses mínimo. Para sesiones de readaptación, el pack se organiza por sesiones individuales.",
    },
    {
      id: 4,
      question: "¿Cómo contratar tu servicio?",
      answer:
        "Simplemente, ponte en contacto conmigo por correo electrónico o teléfono, y evaluamos en una sesión que tipo de entrenamiento es adecuado para tus necesidades. Te guiaré en todo el proceso.",
    },
    {
      id: 5,
      question:
        "¿Cual es la diferencia entre entrenamiento presencial y online?",
      answer:
        "El entrenamiento online se organiza a través de mesociclos con revisiones semanales, en las que te doy pautas para mejorar los ejercicios. En el entrenamiento presencial, estoy contigo durante una sesión de 50', en las que trabajo mano a mano contigo.",
    },
  ];
  return (
    <>
      <Hero />
      <Info />
      <Services />
      <About />
      <AboutCareer />
      <FAQs faqs={faqs} />
      <Contact />
    </>
  );
};

export default Home;
