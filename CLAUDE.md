# CLAUDE.md

Guia para trabajar en este repositorio.

## Que es

Landing page de captacion de leads (Next.js 16 + Tailwind v4) para servicios de
automatizacion/digitalizacion/IA. Una sola CTA principal: el formulario de contacto.
Requisitos en `docs/PRD.md`.

## Convenciones

- **Datos antes que markup**: servicios, paquetes, precios y copy viven en `lib/data.ts`.
  No hardcodear contenido en los componentes.
- **Precios**: el unico control de precio global es el toggle de modalidad (`useSite`).
  Para mostrar precios usar `<PriceText>` o `formatPrice` de `lib/pricing.ts`
  (formato "Desde X EUR", sin rangos).
- **Estado global** via `lib/context.tsx` (`useSite`): modalidad, seleccion del
  configurador y `requestQuote()` para prefilar el formulario. No usar URL para el prefill.
- **Diseno**: monocromo calido + pasteles apagados, bordes de 1px (`border-line`), flat,
  sin gradientes ni sombras pesadas, sin librerias de iconos (SVG propios en `components/icons.tsx`).
- **Componentes UI** estilo shadcn escritos a mano en `components/ui/`.
- **Animacion** con `motion/react` (primitivas en `components/motion/`). `MotionProvider` aplica
  `reducedMotion="user"`; las animaciones CSS de `globals.css` se anulan con `prefers-reduced-motion`.

## Comandos

```bash
npm install && npm run dev
npm run build
```

## Commits

Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`...).

## Cuidado con

- Cambiar `SITE` en `lib/data.ts` afecta a metadata, sitemap, footer y schema.org.
- Los precios por servicio son placeholders (ver README).
