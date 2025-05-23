// TODO: Review pricing data. Currently, prices are duplicated across 'mensual', 'semestral', and 'anual' subscription types.
// This might be a placeholder and needs to be updated with actual differentiated pricing for different subscription durations.
/**
 * @const {object} planesInfo
 * @description An object containing detailed information about the different training plans.
 * The data is structured hierarchically:
 * 1.  Top-level keys represent the subscription type (e.g., 'mensual', 'semestral', 'anual').
 * 2.  Each subscription type contains objects for different plan levels (e.g., 'basico', 'medio', 'pro').
 * 3.  Each plan level object has the following properties:
 *     @property {string} nombre - The name of the plan level (e.g., "Nivel Basic").
 *     @property {string} descripcion - A short description of the plan.
 *     @property {Array<string>} beneficios - A list of benefits included in the plan.
 *     @property {string} precioAnterior - The original price (often shown crossed out).
 *     @property {string} precio - The current or discounted price of the plan.
 */
export const planesInfo = {
  mensual: {
    basico: {
      nombre: "Nivel Basic",
      descripcion:
        "Método de iniciación estructurado con comunidad activa y soporte.",
      beneficios: [
        "3 entrenamientos/semana",
        "Guía de alimentación general",
        "Soporte vía email",
      ],
      precioAnterior: "30,25€",
      precio: "25,20€/mes",
    },
    medio: {
      nombre: "Nivel Pro",
      descripcion:
        "Rutinas personalizadas + seguimiento para objetivos avanzados.",
      beneficios: [
        "5 entrenamientos/semana",
        "Nutrición personalizada",
        "1 videollamada/mes",
        "Soporte WhatsApp",
      ],
      precioAnterior: "71,39€",
      precio: "59,48€/mes",
    },
    pro: {
      nombre: "Nivel Elite",
      descripcion:
        "Entrenamiento completo para alto rendimiento + acceso exclusivo.",
      beneficios: [
        "Entrenamiento diario",
        "Soporte 24/7",
        "Contenido exclusivo",
        "Asistencia 1:1",
      ],
      precioAnterior: "119,79€",
      precio: "99,82€/mes",
    },
  },
  semestral: {
    basico: {
      nombre: "Nivel Basic",
      descripcion:
        "Método de iniciación estructurado con comunidad activa y soporte.",
      beneficios: [
        "3 entrenamientos/semana",
        "Guía de alimentación general",
        "Soporte vía email",
      ],
      precioAnterior: "30,25€",
      precio: "25,20€/mes",
    },
    medio: {
      nombre: "Nivel Pro",
      descripcion:
        "Rutinas personalizadas + seguimiento para objetivos avanzados.",
      beneficios: [
        "5 entrenamientos/semana",
        "Nutrición personalizada",
        "1 videollamada/mes",
        "Soporte WhatsApp",
      ],
      precioAnterior: "71,39€",
      precio: "59,48€/mes",
    },
    pro: {
      nombre: "Nivel Elite",
      descripcion:
        "Entrenamiento completo para alto rendimiento + acceso exclusivo.",
      beneficios: [
        "Entrenamiento diario",
        "Soporte 24/7",
        "Contenido exclusivo",
        "Asistencia 1:1",
      ],
      precioAnterior: "119,79€",
      precio: "99,82€/mes",
    },
  },
  anual: {
    basico: {
      nombre: "Nivel Basic",
      descripcion:
        "Método de iniciación estructurado con comunidad activa y soporte.",
      beneficios: [
        "3 entrenamientos/semana",
        "Guía de alimentación general",
        "Soporte vía email",
      ],
      precioAnterior: "30,25€",
      precio: "25,20€/mes",
    },
    medio: {
      nombre: "Nivel Pro",
      descripcion:
        "Rutinas personalizadas + seguimiento para objetivos avanzados.",
      beneficios: [
        "5 entrenamientos/semana",
        "Nutrición personalizada",
        "1 videollamada/mes",
        "Soporte WhatsApp",
      ],
      precioAnterior: "71,39€",
      precio: "59,48€/mes",
    },
    pro: {
      nombre: "Nivel Elite",
      descripcion:
        "Entrenamiento completo para alto rendimiento + acceso exclusivo.",
      beneficios: [
        "Entrenamiento diario",
        "Soporte 24/7",
        "Contenido exclusivo",
        "Asistencia 1:1",
      ],
      precioAnterior: "119,79€",
      precio: "99,82€/mes",
    },
  },
};
