"use client";

import { useSite } from "@/lib/context";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/icons";

export function Hero() {
  const { requestQuote } = useSite();

  return (
    <section id="top" className="relative overflow-hidden">
      {/* Foco de luz radial con el acento de marca a muy baja opacidad */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 70% 20%, rgba(75,43,232,0.07), transparent 70%)",
        }}
      />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:py-32">
        <div>
          <p className="flex items-center gap-2.5 font-mono text-xs font-medium uppercase tracking-[0.16em] text-accent">
            <span aria-hidden className="h-px w-6 bg-accent" />
            Automatizacion · Digitalizacion · IA
          </p>
          <h1 className="mt-5 font-display text-4xl leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
            Automatiza los procesos que te quitan tiempo. Sin cambiar todo lo
            que ya tienes.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Servicios modulares de automatizacion e inteligencia artificial para
            tu empresa. Empieza por lo que mas te urge, integralo con lo que ya
            usas y elige donde se ejecuta. Con precio cerrado antes de empezar.
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

// Composicion geometrica abstracta: diagrama de flujo limpio (sin fotos).
function HeroVisual() {
  return (
    <div className="relative">
      <div className="rounded-card border border-line bg-surface p-6">
        <svg
          viewBox="0 0 360 300"
          className="h-auto w-full"
          role="img"
          aria-label="Diagrama abstracto de procesos conectados que se automatizan"
        >
          <defs>
            <pattern
              id="dots"
              width="18"
              height="18"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1.5" cy="1.5" r="1.2" fill="#e2e6ec" />
            </pattern>
          </defs>
          <rect width="360" height="300" fill="url(#dots)" />

          {/* conexiones */}
          <path
            d="M70 70 H180 V150 H290"
            fill="none"
            stroke="#cdd3dc"
            strokeWidth="1.5"
          />
          <path
            d="M70 150 H180"
            fill="none"
            stroke="#cdd3dc"
            strokeWidth="1.5"
          />
          <path
            d="M70 230 H180 V150"
            fill="none"
            stroke="#cdd3dc"
            strokeWidth="1.5"
          />

          {/* nodos de entrada */}
          <g>
            <rect x="30" y="52" width="40" height="36" rx="8" fill="#ece8fd" />
            <rect x="30" y="132" width="40" height="36" rx="8" fill="#d6f6f4" />
            <rect x="30" y="212" width="40" height="36" rx="8" fill="#f2fbd6" />
          </g>

          {/* nodo central de proceso */}
          <rect
            x="150"
            y="120"
            width="60"
            height="60"
            rx="12"
            fill="#4b2be8"
          />
          <circle cx="180" cy="150" r="11" fill="none" stroke="#fff" strokeWidth="1.6" />
          <path
            d="M180 134v6M180 160v6M164 150h6M194 150h6"
            stroke="#fff"
            strokeWidth="1.6"
            strokeLinecap="round"
          />

          {/* salida */}
          <rect x="280" y="130" width="48" height="40" rx="10" fill="#dcf5ea" />
          <path
            d="M294 150l5 5 9-10"
            stroke="#0a7a52"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
}
