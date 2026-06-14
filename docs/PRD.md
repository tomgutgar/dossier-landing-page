# PRD — Landing page de servicios de automatizacion y digitalizacion

**Version:** 2.0
**Fecha:** Junio 2025
**Tipo de documento:** Product Requirements Document
**Destinatario:** Equipo de desarrollo e implementacion

---

## 1. Contexto y objetivo

### 1.1 Descripcion del producto

Landing page publica orientada a captacion de clientes empresariales interesados en servicios de automatizacion, digitalizacion e integracion de IA. Actua como primer punto de contacto del funnel comercial: informa, genera confianza y convierte la visita en una solicitud de consulta cualificada.

La pagina expone un catalogo de 13 servicios organizados en 4 areas, tres paquetes de precio cerrado por volumen de modulos, y un configurador interactivo que permite al visitante estimar el coste segun los servicios que seleccione y la modalidad de infraestructura elegida.

### 1.2 Objetivo principal

Convertir visitas organicas y trafico de referidos en solicitudes de consulta cualificadas (leads), con un formulario de contacto como unica llamada a la accion principal.

### 1.3 Objetivos secundarios

- Posicionar la oferta como moderna, fiable y orientada a resultados sin tecnicismos.
- Explicar el modelo de dos modalidades de infraestructura (instalacion en empresa vs servicio en la nube) de forma comprensible para cualquier perfil de cliente.
- Dar suficiente informacion sobre cada servicio para que el cliente llegue cualificado a la consulta inicial.
- Facilitar la estimacion de precio antes de contactar, reduciendo la friccion en el proceso de decision.

---

## 2. Audiencia objetivo

### 2.1 Perfil primario

**Gerente o director de operaciones de PYME espanola (10-200 empleados)**

- No es tecnico pero toma decisiones de compra tecnologica.
- Tiene problemas concretos: tiempo perdido en tareas manuales, documentacion desorganizada, falta de visibilidad sobre los datos del negocio.
- Desconfia de promesas vagas de "IA para todo". Busca resultados concretos, precio claro y proveedor de confianza.
- Necesita entender el ROI antes de contratar.

### 2.2 Perfil secundario

**Responsable de administracion o de area** que investiga opciones por iniciativa propia antes de elevar la decision a gerencia. Necesita argumentos claros para presentar internamente la propuesta.

---

## 3. Catalogo de servicios

El catalogo incluye 13 servicios agrupados en 4 areas. Todos los servicios se presentan en la landing con descripcion orientada a beneficio de negocio, sin lenguaje tecnico, y con precio en dos modalidades.

### Area 1: Inteligencia y Conocimiento

1. Base de conocimiento por departamentos
2. Transcripcion y resumen automatico de reuniones
3. Asistente virtual corporativo (Telegram)
4. Panel de asistentes de IA para empleados

### Area 2: Digitalizacion de Documentacion

5. Extraccion automatica de facturas
6. Extraccion de texto de documentos (OCR de uso general)

### Area 3: Automatizacion de Procesos

7. Automatizacion de flujos de trabajo (n8n)
8. Generador automatico de presupuestos y propuestas comerciales
9. Monitor de reputacion online

### Area 4: Atencion al Cliente y Presencia Digital

10. Chatbot de atencion al cliente para web
11. Analitica de negocio en lenguaje natural
12. Agente de incorporacion de empleados (onboarding)
13. Landing page corporativa

---

## 4. Modalidades de infraestructura

Cada servicio tiene precio diferenciado segun la modalidad elegida. La landing explica ambas opciones en lenguaje no tecnico y permite al usuario seleccionar su preferencia antes de ver los precios.

| | Instalacion en empresa | Servicio en la nube |
|---|---|---|
| Donde se ejecuta | En las instalaciones del cliente | En servidores externos auditados |
| Datos | Nunca salen de la empresa | Procesados por proveedores certificados |
| Coste recurrente | Sin coste por uso tras la implantacion | Variable segun volumen real de uso |
| Puesta en marcha | 2-4 semanas | Dias |
| Recomendado para | Datos sensibles o alto volumen | Arranque rapido o empresas en crecimiento |

---

## 5. Paquetes de precio por volumen

Ademas de la contratacion individual de cada servicio, la landing presenta tres paquetes cerrados:

### Paquete Arranque
Primeros pasos en automatizacion.
- Asistente virtual corporativo
- Extraccion de texto de documentos
- Automatizacion de flujos de trabajo (pack basico)

Precio: 1.800 - 3.000 EUR (instalacion en empresa) / 1.100 - 2.000 EUR (nube)

### Paquete Operaciones
Digitalizacion y automatizacion del nucleo del negocio.
- Base de conocimiento por departamentos
- Extraccion automatica de facturas
- Automatizacion de flujos de trabajo
- Generador de presupuestos y propuestas

Precio: 5.500 - 9.500 EUR (instalacion) / 3.500 - 6.200 EUR (nube)

### Paquete Inteligencia
Suite completa de IA aplicada al negocio.
- Todo el paquete Operaciones
- Transcripcion y resumen de reuniones
- Panel de asistentes de IA para empleados
- Analitica de negocio en lenguaje natural
- Monitor de reputacion online

Precio: 9.500 - 16.000 EUR (instalacion) / 6.500 - 11.000 EUR (nube)

---

## 6. Estructura de la pagina (secciones)

### 6.1 Navbar
- Logo a la izquierda
- Links: Servicios, Paquetes, Como funciona, Contacto
- CTA sticky: boton "Solicitar consulta" visible en todo momento al hacer scroll
- En movil: menu hamburguesa

### 6.2 Hero
Proposicion de valor principal en una frase directa. Sin tecnicismos.
Copy de referencia: "Automatiza los procesos que te quitan tiempo. Sin cambiar todo lo que ya tienes."
- H1: proposicion de valor en 8-12 palabras
- Subheadline: ampliacion en 2-3 lineas sobre el enfoque modular y sin friccion
- CTA principal: "Solicitar consulta gratuita" que ancla al formulario
- CTA secundario: "Ver servicios" que hace scroll a la seccion de servicios
- Elemento visual: composicion geometrica abstracta o diagrama de flujo limpio. Sin stock photos de personas.

### 6.3 Propuesta de valor (3 pilares)
1. Modular — Cada servicio funciona de forma independiente. Empieza por lo que mas necesitas.
2. Sin friccion — Nos integramos con lo que ya usas. Sin cambiar tu operativa.
3. Tu eliges como — Instalacion en tu empresa o servicio en la nube. Mismos resultados.

### 6.4 Modalidades de infraestructura
Dos tarjetas comparativas. Toggle global de modalidad: "Instalacion en empresa" / "Servicio en la nube". Persistente y afecta a precios de servicios, paquetes y configurador.

### 6.5 Paquetes
Tres tarjetas (Arranque, Operaciones, Inteligencia). Cada una: nombre y descripcion, modulos incluidos, precio segun toggle, CTA "Solicitar este paquete" que pre-rellena el formulario. Operaciones se destaca como recomendada.

### 6.6 Catalogo de servicios
Grid de tarjetas por servicio agrupadas por area. Cada tarjeta: nombre, tagline, descripcion 3-4 lineas, beneficio destacado, tiempo de implementacion, precio segun modalidad. Tarjetas expandibles.

### 6.7 Configurador de precio
Lista de los 13 servicios con checkbox, toggle de modalidad sincronizado, total acumulado en tiempo real, nota informativa y CTA "Solicitar presupuesto con estos servicios". Sin registro.

### 6.8 Como funciona (proceso)
Timeline de 4 pasos: Consulta inicial, Propuesta a medida, Implementacion, Soporte y evolucion.

### 6.9 Por que elegirnos
Cuatro puntos: presupuesto cerrado, sin permanencia, integracion con lo que ya usas, soporte en espanol y equipo local.

### 6.10 Formulario de contacto
Campos: nombre (req), empresa (req), email (req), telefono (opt), servicios de interes (multi, prefill), modalidad preferida (radio: empresa/nube/no lo tengo claro), empleados (select), mensaje (opt), checkbox privacidad (req), boton "Enviar solicitud". Post-envio: confirmacion en pantalla, webhook al equipo, email de confirmacion al lead con dossier PDF.

### 6.11 Footer
Logo, links legales (privacidad, aviso legal, cookies), email directo, LinkedIn.

---

## 7. Requisitos tecnicos

### 7.1 Stack
- Framework: Next.js 14+ con App Router
- Estilos: Tailwind CSS
- Hosting: Vercel o VPS del cliente
- Dominio y SSL: Cloudflare
- Analytics: Plausible o GA4
- Formulario: endpoint propio (FastAPI o webhook n8n). Sin servicios de formulario de terceros.
- Email transaccional: Resend o SMTP propio
- Estado del configurador y del toggle: React Context o Zustand (sin persistencia en servidor)

### 7.2 Rendimiento
- Core Web Vitals en verde: LCP < 2.5s, CLS < 0.1, FID < 100ms
- Imagenes WebP/AVIF, fuentes con font-display swap, sin JS pesado en cliente.

### 7.3 SEO
- Meta title/description, Open Graph, Schema.org (LocalBusiness/ProfessionalService), sitemap.xml, robots.txt.

### 7.4 Accesibilidad
- WCAG 2.1 AA, contraste adecuado, navegacion por teclado, aria-label en iconos decorativos, labels asociados.

---

## 8. Comportamiento del toggle global de modalidad

- Por defecto "Servicio en la nube".
- Persiste durante la sesion (sessionStorage).
- Actualiza de forma sincrona todos los precios (paquetes, servicios, configurador).
- Transicion suave (200ms) al cambiar valores numericos.
- Sincroniza con el campo de modalidad del formulario sin bloquear su edicion manual.

---

## 9. Logica del configurador de precio

- Cada servicio tiene precio minimo y maximo por modalidad.
- El total es el rango acumulado (suma de minimos y suma de maximos).
- Si la seleccion cubre un paquete completo: aviso "Estos servicios forman el paquete [nombre]. Contratandolos juntos obtienes un precio mas favorable."
- El CTA pasa la seleccion al formulario por estado (no por URL).

---

## 10. Contenido a preparar antes del desarrollo

- [ ] Textos finales de todas las secciones (copy en espanol)
- [ ] Logo en SVG
- [ ] Elemento visual para el hero
- [ ] Dossier PDF final para adjuntar al email de confirmacion
- [ ] Textos legales: politica de privacidad, aviso legal, cookies (RGPD y LOPDGDD)
- [ ] Email de origen para notificaciones y confirmaciones
- [ ] URL definitiva del dominio

---

## 11. Fuera de alcance (v1)

Blog, area privada de clientes, pasarela de pago, chat en vivo, multiidioma, integracion directa con CRM, comparador avanzado de servicios.

---

## 12. Criterios de aceptacion

- Carga en < 2s en 4G simulada.
- El toggle actualiza todos los precios de forma sincrona y sin recarga.
- El configurador calcula y muestra el rango correctamente para cualquier combinacion.
- El formulario valida en tiempo real, muestra errores inline y envia correctamente.
- El email de confirmacion llega en < 2 min con el PDF adjunto.
- Funcional en Chrome, Safari, Firefox y Edge actuales.
- Usable en movil desde 375px.
- Imagenes con alt descriptivo.
- Sin errores en consola en produccion.

---

## 13. Timeline estimado

| Fase | Contenido | Duracion |
|------|-----------|----------|
| 1. Diseno | Wireframes incluyendo configurador | 4-5 dias |
| 2. Desarrollo base | Hero, pilares, infraestructura, proceso, footer | 3-4 dias |
| 3. Catalogo y paquetes | Grid con toggle global de precios | 2-3 dias |
| 4. Configurador | Seleccion, calculo de rango, deteccion de paquetes | 2-3 dias |
| 5. Formulario | Validacion, envio, webhook, email con PDF | 1-2 dias |
| 6. Contenido y ajustes | Textos finales, imagenes y PDF | 1-2 dias |
| 7. Testing y despliegue | QA funcional, rendimiento, dominio | 1-2 dias |

**Total estimado: 2,5 - 3 semanas desde textos y assets entregados**
