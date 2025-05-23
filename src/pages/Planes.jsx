import React, { useEffect, useState } from "react";
import "./styles/Planes.css";
import { planesInfo } from "../data/plansData";
import IntroPlanes from "../../components/Planes/IntroPlanes";

/**
 * @component Planes
 * @description This component is the main page for displaying training plans.
 * It includes an introductory section (IntroPlanes), a subscription type selector (mensual, semestral, anual),
 * and a grid displaying different plan levels (basico, medio, pro) based on the selected subscription type.
 */
const Planes = () => {
  /**
   * @state {string} suscripcion
   * @description Holds the currently selected subscription type (e.g., 'mensual', 'semestral', 'anual').
   * This state determines which set of plan details from `planesInfo` is displayed.
   * Defaults to 'mensual'.
   */
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
    </section>
  );
};

export default Planes;
