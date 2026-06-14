# Engrana — Landing de automatizacion y digitalizacion

Landing page de captacion de leads para servicios de automatizacion, digitalizacion e
integracion de IA dirigidos a PYMEs. Implementa el [PRD v2.0](docs/PRD.md).

## Stack

- **Next.js 16** (App Router) + **React 19**
- **Tailwind CSS v4**
- Componentes propios estilo shadcn (sin dependencias de UI externas)
- Estado global con **React Context** (toggle de modalidad + configurador), persistido en `sessionStorage`
- Tipografias via `next/font` (Hanken Grotesk, Newsreader, JetBrains Mono)

## Puesta en marcha

> Las dependencias **no estan instaladas** en este repo. Instalalas antes de arrancar.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produccion
```

## Estructura

```
app/
  layout.tsx          metadata, OG, JSON-LD (schema.org), fuentes, provider
  page.tsx            composicion de todas las secciones
  api/contact/route.ts  endpoint propio del formulario (stub validado)
  sitemap.ts | robots.ts
  privacidad | aviso-legal | cookies   paginas legales (placeholder)
components/            navbar, hero, pilares, infraestructura, paquetes,
                       servicios, configurador, proceso, why-us, formulario, footer
lib/
  data.ts             areas, 13 servicios, 3 paquetes, modalidades, precios
  pricing.ts          calculo del configurador y deteccion de paquetes
  context.tsx         SiteProvider (modalidad, seleccion, prefill del formulario)
docs/PRD.md           documento de requisitos
```

## Pendientes / placeholders

Estos puntos quedan marcados en el codigo para completar antes de produccion:

- **Precios por servicio** (`lib/data.ts`): son PLACEHOLDERS coherentes con los precios
  cerrados de los paquetes (que si son los del PRD). Sustituir por importes reales.
- **Backend del formulario** (`app/api/contact/route.ts`): el endpoint valida y responde
  OK. Quedan `TODO` para enchufar el webhook al equipo (n8n) y el email de confirmacion
  con dossier PDF (Resend o SMTP).
- **Textos legales** (`/privacidad`, `/aviso-legal`, `/cookies`): redaccion RGPD/LOPDGDD
  definitiva pendiente.
- **Assets**: logo definitivo en SVG, visual del hero y dossier PDF.
- **Dominio y analytics**: ajustar `SITE.url` en `lib/data.ts` y conectar Plausible/GA4.

## Funcionalidad clave

- **Toggle global de modalidad** (nube / en empresa): por defecto "nube", persistente en
  sesion, sincroniza precios en paquetes, servicios y configurador, y el radio del formulario.
- **Configurador**: seleccion de servicios con calculo de rango en tiempo real y aviso de
  paquete cuando la seleccion cubre un pack completo. CTA prefilla el formulario en memoria.
- **Catalogo**: 13 tarjetas expandibles agrupadas en 4 areas.
