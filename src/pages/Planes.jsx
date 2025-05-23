import React, { useEffect, useState } from "react";
import "./styles/Planes.css";
import FAQs from "../components/Faqs/FAQs";

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
        "Acceso a la comunidad privada",
        " 2 sesiones en directo por semana (Yoga, HIIT, Pilates, y muchos más)",
      ],
      precioAnterior: "29,99€",
      precio: "19,99€/mes",
    },
    medio: {
      nombre: "Nivel Pro",
      descripcion:
        "Rutinas personalizadas + seguimiento para objetivos avanzados.",
      beneficios: [
        "Todos los beneficios del Paquete BASIC",
        "Entrenamiento personalizado en la app",
        "Asesoría quincenal de feedback personalizado",
        "Acceso a vídeos exclusivos de ejercicios en YouTube",
        "Pack de bienvenida: camiseta + straps oficiales de Gonorte",
      ],
      precioAnterior: "104,99€",
      precio: "94,99€/mes",
    },
    pro: {
      nombre: "Nivel Elite",
      descripcion:
        "Entrenamiento completo para alto rendimiento + acceso exclusivo.",
      beneficios: [
        "Todos los beneficios del Paquete PRO",
        "Regalo: análisis postural 3D e informe exclusivo valorado en 100 euros",
        "Consejos sobre alimentación saludable y recetas",
      ],
      precioAnterior: "139,99€",
      precio: "129,99€/mes",
    },
  },
  semestral: {
    basico: {
      nombre: "Nivel Basic",
      descripcion:
        "Método de iniciación estructurado con comunidad activa y soporte.",
      beneficios: [
        "Acceso a la comunidad privada",
        " 2 sesiones en directo por semana (Yoga, HIIT, Pilates, y muchos más)",
      ],
      precioAnterior: "29,99€",
      precio: "14,99€/mes",
    },
    medio: {
      nombre: "Nivel Pro",
      descripcion:
        "Rutinas personalizadas + seguimiento para objetivos avanzados.",
      beneficios: [
        "Todos los beneficios del Paquete BASIC",
        "Entrenamiento personalizado en la app",
        "Asesoría quincenal de feedback personalizado",
        "Acceso a vídeos exclusivos de ejercicios en YouTube",
        "Pack de bienvenida: camiseta + straps oficiales de Gonorte",
      ],
      precioAnterior: "104,99€",
      precio: "81,99€/mes",
    },
    pro: {
      nombre: "Nivel Elite",
      descripcion:
        "Entrenamiento completo para alto rendimiento + acceso exclusivo.",
      beneficios: [
        "Todos los beneficios del Paquete PRO",
        "Regalo: análisis postural 3D e informe exclusivo valorado en 100 euros",
        "Consejos sobre alimentación saludable y recetas",
      ],
      precioAnterior: "139,99€",
      precio: "121,99€/mes",
    },
  },
  anual: {
    basico: {
      nombre: "Nivel Basic",
      descripcion:
        "Método de iniciación estructurado con comunidad activa y soporte.",
      beneficios: [
        "Acceso a la comunidad privada",
        " 2 sesiones en directo por semana (Yoga, HIIT, Pilates, y muchos más)",
      ],
      precioAnterior: "29,99€",
      precio: "9,99€/mes",
    },
    medio: {
      nombre: "Nivel Pro",
      descripcion:
        "Rutinas personalizadas + seguimiento para objetivos avanzados.",
      beneficios: [
        "Todos los beneficios del Paquete BASIC",
        "Entrenamiento personalizado en la app",
        "Asesoría quincenal de feedback personalizado",
        "Acceso a vídeos exclusivos de ejercicios en YouTube",
        "Pack de bienvenida: camiseta + straps oficiales de Gonorte",
      ],
      precioAnterior: "104,99€",
      precio: "69,99€/mes",
    },
    pro: {
      nombre: "Nivel Elite",
      descripcion:
        "Entrenamiento completo para alto rendimiento + acceso exclusivo.",
      beneficios: [
        "Todos los beneficios del Paquete PRO",
        "Regalo: análisis postural 3D e informe exclusivo valorado en 100 euros",
        "Consejos sobre alimentación saludable y recetas",
      ],
      precioAnterior: "139,99€",
      precio: "109,99€/mes",
    },
  },
};
const faqs = [
  {
    id: 1,
    question: "¿Qué diferencia hay entre los planes Basic, Pro y Premium?",
    answer:
      "El Paquete Basic te da acceso a las clases en directo y a la comunidad. El Pro incluye entrenamiento personalizado, asesorías, y un pack de bienvenida. El Premium te ofrece todo lo anterior más un análisis postural presencial 3D de regalo, además de un enfoque más completo en hábitos y bienestar integral.",
  },
  {
    id: 2,
    question: "¿Puedo cambiar de plan más adelante?",
    answer:
      "Sí. Puedes pasarte a un plan superior en cualquier momento. Solo tienes que contactarme y ajustamos tu acceso y condiciones.",
  },
  {
    id: 3,
    question: "¿El pago es mensual o único?",
    answer:
      "El precio indicado es mensual, pero el pago se realiza por el período completo (trimestral, semestral o anual) según el plan que elijas. Esto me permite darte acceso completo desde el primer día y mantener precios reducidos.",
  },
  {
    id: 4,
    question: "¿Qué pasa si me pierdo una sesión en directo?",
    answer:
      "No te preocupes. Las sesiones se graban y quedan disponibles en la plataforma para que entrenes cuando puedas.",
  },
  {
    id: 5,
    question: "¿Necesito experiencia previa para entrenar contigo?",
    answer:
      "No. Todos los planes se adaptan a tu nivel actual. Si eres principiante, empezarás con una base segura; si ya tienes experiencia, trabajaremos para llevar tu entrenamiento al siguiente nivel.",
  },
  {
    id: 6,
    question: "¿Necesito equipo o material especial?",
    answer:
      "No es obligatorio. Los entrenamientos pueden hacerse con peso corporal o con elementos simples como bandas, una colchoneta y una silla. Si decides entrenar en el gimnasio, entonces allí dispondrás de material suficiente para entrenar.",
  },
  {
    id: 7,
    question: "¿Puedo entrenar desde cualquier parte?",
    answer:
      "¡Sí! Todo es 100% online. Solo necesitas un espacio cómodo para moverte y conexión a internet.",
  },
  {
    id: 8,
    question: "¿Cómo accedo al contenido una vez que compro un plan?",
    answer:
      "Una vez te inscribas, recibirás un correo con tu acceso a la plataforma y, si aplica, los pasos para coordinar tu plan personalizado y el envío del pack de bienvenida.",
  },
  {
    id: 9,
    question: "¿Dónde se realiza el análisis postural 3D?",
    answer:
      "Normalmente realizo el análisis en Jaén, donde tengo la base de trabajo. Sin embargo, el sistema es portable, por lo que en ocasiones organizo desplazamientos a otras provincias cuando hay varias personas interesadas. Si vives fuera de Jaén y te gustaría acceder al análisis, contáctame: según tu ubicación y disponibilidad, valoramos la mejor opción para ti.",
  },
];

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
      <div style={{ width: "80%", marginTop: "2rem" }}>
        <FAQs faqs={faqs} />
      </div>
    </section>
  );
};

export default Planes;
