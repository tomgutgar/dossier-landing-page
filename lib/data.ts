// Datos de la landing.
// PRECIOS POR SERVICIO: rangos orientativos de mercado (Espana) para proyectos
// de implementacion de pago unico realizados por agencias/freelance de
// automatizacion e IA para PYMEs. La modalidad "empresa" (instalacion
// on-premise) es mas cara por el despliegue local; "nube" es mas economica.
// Quedan por encima de los precios cerrados de los paquetes (seccion 5 del PRD),
// de modo que contratar un pack siempre resulta mas favorable que la suma suelta.
// Ajustar a la tarifa real del proveedor antes de produccion.
// Los precios de los PAQUETES son los fijados en el PRD y no se calculan.

export type Modality = "nube" | "empresa";

export const SITE = {
  name: "Engrana",
  tagline: "Automatizacion y digitalizacion para PYMEs",
  email: "hola@engrana.es",
  linkedin: "https://www.linkedin.com/company/engrana",
  url: "https://engrana.es",
};

export const MODALITIES: Record<
  Modality,
  { id: Modality; label: string; short: string; description: string }
> = {
  nube: {
    id: "nube",
    label: "Servicio en la nube",
    short: "Nube",
    description:
      "Funciona en servidores externos auditados. Arranque en dias y coste variable segun tu uso real. Ideal para empezar rapido o si tu empresa esta creciendo.",
  },
  empresa: {
    id: "empresa",
    label: "Instalacion en empresa",
    short: "En empresa",
    description:
      "Todo se ejecuta en tus instalaciones y tus datos nunca salen de la empresa. Puesta en marcha de 2-4 semanas y sin coste por uso despues. Ideal para datos sensibles o alto volumen.",
  },
};

export type Area = {
  id: string;
  name: string;
};

export const AREAS: Area[] = [
  { id: "inteligencia", name: "Inteligencia y conocimiento" },
  { id: "documentacion", name: "Digitalizacion de documentacion" },
  { id: "procesos", name: "Automatizacion de procesos" },
  { id: "atencion", name: "Atencion al cliente y presencia digital" },
];

export type PriceRange = { min: number; max: number };

export type Service = {
  id: string;
  area: string;
  name: string;
  tagline: string;
  description: string;
  benefit: string;
  duration: string;
  price: Record<Modality, PriceRange>;
};

export const SERVICES: Service[] = [
  {
    id: "base-conocimiento",
    area: "inteligencia",
    name: "Base de conocimiento por departamentos",
    tagline: "Toda la informacion del equipo, encontrable al instante.",
    description:
      "Reune manuales, procedimientos y documentos de cada area en un unico buscador inteligente. Tu equipo pregunta en lenguaje natural y obtiene la respuesta correcta con la fuente, sin abrir diez carpetas distintas.",
    benefit: "Menos tiempo buscando, menos dependencia de quien lo sabe todo.",
    duration: "2-3 semanas",
    price: { empresa: { min: 3500, max: 6500 }, nube: { min: 2000, max: 4000 } },
  },
  {
    id: "transcripcion-reuniones",
    area: "inteligencia",
    name: "Transcripcion y resumen automatico de reuniones",
    tagline: "Cada reunion deja acta sola.",
    description:
      "Graba la reunion y recibe automaticamente la transcripcion, un resumen claro y la lista de tareas con responsables. Se acabo escribir el acta a mano o perder los acuerdos.",
    benefit: "Acuerdos y tareas por escrito sin esfuerzo despues de cada reunion.",
    duration: "1-2 semanas",
    price: { empresa: { min: 1500, max: 3000 }, nube: { min: 800, max: 1800 } },
  },
  {
    id: "asistente-telegram",
    area: "inteligencia",
    name: "Asistente virtual corporativo (Telegram)",
    tagline: "Resuelve dudas del dia a dia desde el movil.",
    description:
      "Un asistente en Telegram que responde sobre tus procesos, documentos y datos internos. El equipo consulta desde donde este, sin entrar a ningun sistema, y siempre con informacion de tu empresa.",
    benefit: "Respuestas internas al instante, sin saturar al resto del equipo.",
    duration: "1-2 semanas",
    price: { empresa: { min: 1200, max: 2500 }, nube: { min: 700, max: 1500 } },
  },
  {
    id: "panel-asistentes",
    area: "inteligencia",
    name: "Panel de asistentes de IA para empleados",
    tagline: "Asistentes a medida para cada tarea repetitiva.",
    description:
      "Un panel privado con asistentes preparados para las tareas habituales de tu empresa: redactar, resumir, traducir o consultar datos. Cada empleado usa el que necesita, con el contexto de su area ya cargado.",
    benefit: "Una herramienta de IA util desde el primer dia, sin curva de aprendizaje.",
    duration: "2-3 semanas",
    price: { empresa: { min: 2500, max: 5000 }, nube: { min: 1500, max: 3000 } },
  },
  {
    id: "extraccion-facturas",
    area: "documentacion",
    name: "Extraccion automatica de facturas",
    tagline: "De la factura a tu sistema, sin teclear.",
    description:
      "Lee facturas en PDF, papel o correo y extrae proveedor, importes, impuestos y fechas listos para tu contabilidad. Detecta errores y duplicados antes de que lleguen al cierre.",
    benefit: "Horas de tecleo manual eliminadas y menos errores en contabilidad.",
    duration: "2-3 semanas",
    price: { empresa: { min: 2500, max: 5500 }, nube: { min: 1500, max: 3500 } },
  },
  {
    id: "ocr-documentos",
    area: "documentacion",
    name: "Extraccion de texto de documentos",
    tagline: "Convierte cualquier papel en datos usables.",
    description:
      "Digitaliza contratos, albaranes, formularios y documentos escaneados, y los convierte en texto buscable y exportable. Funciona con documentos de cualquier formato, incluso manuscritos sencillos.",
    benefit: "El archivo en papel deja de ser un cuello de botella.",
    duration: "1-2 semanas",
    price: { empresa: { min: 1200, max: 2800 }, nube: { min: 700, max: 1600 } },
  },
  {
    id: "automatizacion-flujos",
    area: "procesos",
    name: "Automatizacion de flujos de trabajo",
    tagline: "Conecta tus herramientas y deja que trabajen solas.",
    description:
      "Automatizamos las tareas repetitivas que saltan entre aplicaciones: pasar datos de un sitio a otro, avisar al equipo, generar registros o lanzar acciones segun lo que ocurra. Tu operativa actual sigue igual, solo que sin pasos manuales.",
    benefit: "Procesos que antes ocupaban horas pasan a ocurrir solos.",
    duration: "2-4 semanas",
    price: { empresa: { min: 1500, max: 4000 }, nube: { min: 900, max: 2500 } },
  },
  {
    id: "generador-presupuestos",
    area: "procesos",
    name: "Generador de presupuestos y propuestas",
    tagline: "Propuestas comerciales en minutos, no en tardes.",
    description:
      "A partir de unos pocos datos, genera presupuestos y propuestas comerciales con tu formato, tus precios y un texto cuidado. Listos para revisar y enviar al cliente el mismo dia.",
    benefit: "Respondes antes que la competencia y cierras mas.",
    duration: "2-3 semanas",
    price: { empresa: { min: 2000, max: 4000 }, nube: { min: 1200, max: 2500 } },
  },
  {
    id: "monitor-reputacion",
    area: "procesos",
    name: "Monitor de reputacion online",
    tagline: "Entérate de lo que dicen de ti, cuando lo dicen.",
    description:
      "Vigila resenas, menciones y comentarios sobre tu empresa en los principales canales y te avisa de lo relevante. Resume el sentimiento general para que actues a tiempo.",
    benefit: "Reaccionas a una mala resena antes de que haga dano.",
    duration: "1-2 semanas",
    price: { empresa: { min: 1500, max: 3000 }, nube: { min: 900, max: 1800 } },
  },
  {
    id: "chatbot-web",
    area: "atencion",
    name: "Chatbot de atencion al cliente para web",
    tagline: "Atiende a tus visitantes a cualquier hora.",
    description:
      "Un asistente en tu web que responde las preguntas frecuentes, orienta al visitante y recoge los datos de los interesados. Conoce tus servicios y deriva al equipo cuando hace falta una persona.",
    benefit: "Mas consultas resueltas y mas contactos captados sin ampliar plantilla.",
    duration: "2-3 semanas",
    price: { empresa: { min: 2000, max: 4500 }, nube: { min: 1200, max: 2800 } },
  },
  {
    id: "analitica-nl",
    area: "atencion",
    name: "Analitica de negocio en lenguaje natural",
    tagline: "Pregunta a tus datos como hablarias con un analista.",
    description:
      "Conecta tus datos de ventas, clientes u operaciones y pregunta en espanol llano: cuanto facturamos el mes pasado, que producto crece mas, que cliente compra menos. Responde con cifras y graficos claros.",
    benefit: "Decisiones basadas en datos sin depender de informes a medida.",
    duration: "2-3 semanas",
    price: { empresa: { min: 3000, max: 6000 }, nube: { min: 1800, max: 3800 } },
  },
  {
    id: "onboarding-empleados",
    area: "atencion",
    name: "Agente de incorporacion de empleados",
    tagline: "Que cada nueva incorporacion arranque sola.",
    description:
      "Guia a los nuevos empleados durante sus primeros dias: les entrega la documentacion, resuelve sus dudas y comprueba que completan los pasos de su incorporacion. El equipo de personas se libera de lo repetitivo.",
    benefit: "Incorporaciones mas rapidas y homogeneas, sin sobrecargar a RRHH.",
    duration: "2-3 semanas",
    price: { empresa: { min: 1800, max: 3500 }, nube: { min: 1000, max: 2200 } },
  },
  {
    id: "landing-corporativa",
    area: "atencion",
    name: "Landing page corporativa",
    tagline: "Una pagina que presenta tu empresa y capta clientes.",
    description:
      "Disenamos y publicamos una pagina rapida, cuidada y orientada a convertir visitas en contactos. Optimizada para moviles, buscadores y velocidad de carga desde el primer dia.",
    benefit: "Presencia profesional que trabaja para captar clientes.",
    duration: "1-2 semanas",
    price: { empresa: { min: 1200, max: 3000 }, nube: { min: 900, max: 2200 } },
  },
];

export type Package = {
  id: string;
  name: string;
  description: string;
  serviceIds: string[];
  featured?: boolean;
  // Precios cerrados del PRD (no se calculan a partir de los servicios).
  price: Record<Modality, PriceRange>;
};

export const PACKAGES: Package[] = [
  {
    id: "arranque",
    name: "Arranque",
    description: "Primeros pasos en automatizacion.",
    serviceIds: ["asistente-telegram", "ocr-documentos", "automatizacion-flujos"],
    price: { empresa: { min: 1800, max: 3000 }, nube: { min: 1100, max: 2000 } },
  },
  {
    id: "operaciones",
    name: "Operaciones",
    description: "Digitalizacion y automatizacion del nucleo del negocio.",
    serviceIds: [
      "base-conocimiento",
      "extraccion-facturas",
      "automatizacion-flujos",
      "generador-presupuestos",
    ],
    featured: true,
    price: { empresa: { min: 5500, max: 9500 }, nube: { min: 3500, max: 6200 } },
  },
  {
    id: "inteligencia",
    name: "Inteligencia",
    description: "Suite completa de IA aplicada al negocio.",
    serviceIds: [
      "base-conocimiento",
      "extraccion-facturas",
      "automatizacion-flujos",
      "generador-presupuestos",
      "transcripcion-reuniones",
      "panel-asistentes",
      "analitica-nl",
      "monitor-reputacion",
    ],
    price: { empresa: { min: 9500, max: 16000 }, nube: { min: 6500, max: 11000 } },
  },
];

export const PILLARS = [
  {
    title: "Modular",
    description:
      "Cada servicio funciona de forma independiente. Empieza por lo que mas necesitas.",
  },
  {
    title: "Sin friccion",
    description: "Nos integramos con lo que ya usas. Sin cambiar tu operativa.",
  },
  {
    title: "Tu eliges como",
    description:
      "Instalacion en tu empresa o servicio en la nube. Mismos resultados.",
  },
];

export const PROCESS_STEPS = [
  {
    title: "Consulta inicial",
    description:
      "Analizamos tus procesos y detectamos donde la automatizacion tiene mas impacto, sin compromiso.",
  },
  {
    title: "Propuesta a medida",
    description: "Presupuesto cerrado y plazos concretos antes de empezar.",
  },
  {
    title: "Implementacion",
    description:
      "Desplegamos sin interrumpir tu operativa. Informes de progreso en cada fase.",
  },
  {
    title: "Soporte y evolucion",
    description:
      "Mantenimiento, formacion y ampliacion de servicios cuando los necesites.",
  },
];

export const WHY_US = [
  "Presupuesto cerrado antes de empezar. Sin sorpresas.",
  "Sin contratos de permanencia. Cada servicio tiene inicio y fin definidos.",
  "Integracion con lo que ya usas. Sin cambiar tus herramientas actuales.",
  "Soporte en espanol y equipo local. Respuesta rapida y conocimiento del contexto empresarial espanol.",
];

export const EMPLOYEE_RANGES = ["1-10", "11-50", "51-200", "Mas de 200"];
