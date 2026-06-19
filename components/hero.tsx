"use client";

import { useEffect, useRef } from "react";
import { useSite } from "@/lib/context";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/icons";

export function Hero() {
  const { requestQuote } = useSite();

  return (
    <section id="top" className="relative overflow-hidden">
      <HeroBackground />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:py-32">
        <div>
          <p className="flex items-center gap-2.5 font-mono text-xs font-medium uppercase tracking-[0.16em] text-accent">
            <span aria-hidden className="h-px w-6 bg-accent" />
            Automatización · Digitalización · IA
          </p>
          <h1 className="mt-5 font-display text-4xl leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
            Automatiza los procesos que te quitan tiempo. Sin cambiar todo lo
            que ya tienes.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Servicios modulares de automatización e inteligencia artificial para
            tu empresa. Empieza por lo que más te urge, intégralo con lo que ya
            usas y elige dónde se ejecuta. Con precio cerrado antes de empezar.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" onClick={() => requestQuote([])}>
              Solicitar consulta gratuita
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
            <a
              href="#servicios"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              Ver servicios
            </a>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

// Fondo de la seccion: manchas de color (acentos de marca) que flotan en
// bucle (animacion CSS en el blob interior) y se desplazan con el scroll a
// distinta velocidad (paralaje JS en la capa exterior). Cada capa separa las
// dos transformaciones para que no compitan. Se desactiva con reduced-motion.
function HeroBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const layers = ref.current?.querySelectorAll<HTMLElement>("[data-speed]");
    if (!layers) return;

    let raf = 0;
    const update = () => {
      const y = window.scrollY;
      layers.forEach((el) => {
        const speed = parseFloat(el.dataset.speed || "0");
        el.style.transform = `translate3d(0, ${y * speed}px, 0)`;
      });
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div
        data-speed="0.16"
        className="absolute -right-24 -top-28 will-change-transform"
      >
        <div className="blob-float h-[28rem] w-[28rem] rounded-full bg-accent/12 blur-3xl" />
      </div>
      <div
        data-speed="0.30"
        className="absolute -bottom-32 -left-24 will-change-transform"
      >
        <div
          className="blob-float h-[24rem] w-[24rem] rounded-full bg-accent-3/10 blur-3xl"
          style={{ animationDelay: "-5s", animationDuration: "19s" }}
        />
      </div>
      <div
        data-speed="-0.18"
        className="absolute right-1/3 top-1/2 will-change-transform"
      >
        <div
          className="blob-float h-72 w-72 rounded-full bg-accent-2/10 blur-3xl"
          style={{ animationDelay: "-9s", animationDuration: "16s" }}
        />
      </div>
    </div>
  );
}

// Composicion geometrica: tres procesos convergen en el motor de Engrana
// (el isotipo, que gira) y salen ya automatizados. Colores via tokens del
// tema para que la pieza responda a modo claro/oscuro. Animaciones (giro y
// flujo de las flechas) definidas en globals.css y respetando reduced-motion.
function HeroVisual() {
  return (
    <div className="relative">
      <div className="rounded-card border border-line bg-surface p-6">
        <svg
          viewBox="0 0 360 300"
          className="h-auto w-full"
          role="img"
          aria-label="Tres procesos se conectan al motor de automatización de Engrana, que los procesa y devuelve resueltos"
        >
          <defs>
            <pattern
              id="dots"
              width="18"
              height="18"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1.5" cy="1.5" r="1.2" fill="var(--color-line)" />
            </pattern>
            {/* Punta de flecha tipo chevron; hereda el color del trazo */}
            <marker
              id="flow-arrow"
              viewBox="0 0 10 10"
              refX="7"
              refY="5"
              markerWidth="7"
              markerHeight="7"
              orient="auto"
            >
              <path
                d="M1 1.5 L8 5 L1 8.5"
                fill="none"
                stroke="context-stroke"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </marker>
          </defs>
          <rect width="360" height="300" fill="url(#dots)" />

          {/* conexiones con flujo animado: 3 entradas hacia el engranaje */}
          <g
            className="flow-paths"
            fill="none"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            <path
              d="M74 70 L140 120"
              stroke="var(--color-accent)"
              markerEnd="url(#flow-arrow)"
            />
            <path
              d="M74 150 H132"
              stroke="var(--color-accent)"
              markerEnd="url(#flow-arrow)"
            />
            <path
              d="M74 230 L140 180"
              stroke="var(--color-accent)"
              markerEnd="url(#flow-arrow)"
            />
            {/* salida ya automatizada */}
            <path
              d="M234 150 H300"
              stroke="var(--color-accent-3)"
              markerEnd="url(#flow-arrow)"
            />
          </g>

          {/* nodos de entrada */}
          <g>
            <rect x="34" y="52" width="40" height="36" rx="8" fill="var(--color-accent-soft)" />
            <rect x="34" y="132" width="40" height="36" rx="8" fill="var(--color-accent-3-soft)" />
            <rect x="34" y="212" width="40" height="36" rx="8" fill="var(--color-accent-2-soft)" />
          </g>

          {/* motor central: el isotipo Engrana girando */}
          <g transform="translate(132 102)">
            <g className="gear-spin">
              <g fill="var(--color-accent)">
                <rect x="41" y="6" width="14" height="24" rx="4" />
                <rect x="41" y="6" width="14" height="24" rx="4" transform="rotate(60 48 48)" />
                <rect x="41" y="6" width="14" height="24" rx="4" transform="rotate(120 48 48)" />
                <rect x="41" y="6" width="14" height="24" rx="4" transform="rotate(180 48 48)" />
                <rect x="41" y="6" width="14" height="24" rx="4" transform="rotate(240 48 48)" />
                <rect x="41" y="6" width="14" height="24" rx="4" transform="rotate(300 48 48)" />
                <circle cx="48" cy="48" r="22" />
              </g>
              <rect
                x="35"
                y="35"
                width="26"
                height="26"
                rx="6"
                transform="rotate(45 48 48)"
                fill="var(--color-surface)"
              />
            </g>
          </g>

          {/* nodo de salida con check */}
          <g>
            <rect x="300" y="130" width="40" height="40" rx="10" fill="var(--color-accent-3-soft)" />
            <path
              d="M311 150l6 6 11-12"
              stroke="var(--color-accent-3)"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
