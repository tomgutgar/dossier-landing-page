"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useSite } from "@/lib/context";
import { HERO_EVENTS, HERO_INPUTS, HERO_STATS } from "@/lib/data";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";
import { EASE_OUT } from "@/components/motion/easing";

// Titular dividido en palabras para la entrada escalonada. La palabra marcada
// recibe el subrayado que se dibuja al terminar la entrada.
const HEADLINE = [
  "Automatiza",
  "los",
  "procesos",
  "que",
  "te",
  "quitan",
  "*tiempo.",
  "Sin",
  "cambiar",
  "lo",
  "que",
  "ya",
  "usas.",
];

export function Hero() {
  const { requestQuote } = useSite();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Al salir del viewport el visual se aleja ligeramente (paralaje).
  const visualY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section id="top" ref={ref} className="relative overflow-hidden">
      <HeroGrid />
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-16 pt-16 sm:pt-20 lg:grid-cols-[1.08fr_0.92fr] lg:pb-20 lg:pt-20">
        <motion.div style={{ y: copyY }} className="min-w-0">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_OUT }}
            className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-3 opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-3" />
            </span>
            Automatización · Digitalización · IA
          </motion.p>

          <h1 className="mt-6 font-display text-[2.6rem] font-medium leading-[1.04] tracking-[-0.035em] text-ink sm:text-6xl lg:text-[3.7rem]">
            {HEADLINE.map((raw, i) => {
              const marked = raw.startsWith("*");
              const word = marked ? raw.slice(1) : raw;
              return (
                <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
                  <motion.span
                    className="relative inline-block"
                    initial={{ y: "105%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.8,
                      ease: EASE_OUT,
                      delay: 0.1 + i * 0.045,
                    }}
                  >
                    {marked ? <MarkedWord word={word} /> : word}
                  </motion.span>
                  {i < HEADLINE.length - 1 && " "}
                </span>
              );
            })}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.7 }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-muted"
          >
            Servicios modulares de automatización e inteligencia artificial para
            tu empresa. Empieza por lo que más te urge, intégralo con lo que ya
            usas y elige dónde se ejecuta. Con precio cerrado antes de empezar.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.82 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button size="lg" className="group" onClick={() => requestQuote([])}>
              Solicitar consulta gratuita
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <a
              href="#servicios"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              Ver servicios
            </a>
          </motion.div>

          <motion.dl
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08, delayChildren: 1 } },
            }}
            className="mt-12 grid max-w-lg grid-cols-3 divide-x divide-line border-y border-line"
          >
            {HERO_STATS.map((s) => (
              <motion.div
                key={s.label}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
                }}
                className="flex flex-col-reverse gap-1 px-4 py-4 first:pl-0"
              >
                <dt className="text-xs leading-snug text-muted">{s.label}</dt>
                <dd className="font-display text-2xl font-medium tracking-tight text-ink">
                  {s.value}
                </dd>
              </motion.div>
            ))}
          </motion.dl>
        </motion.div>

        <motion.div style={{ y: visualY }} className="min-w-0">
          <HeroEngine />
        </motion.div>
      </div>

    </section>
  );
}

// Palabra destacada: color de acento y un trazo a mano alzada que se dibuja
// debajo cuando el titular ya ha entrado.
function MarkedWord({ word }: { word: string }) {
  return (
    <span className="relative whitespace-nowrap text-accent">
      {word}
      <svg
        aria-hidden
        viewBox="0 0 200 16"
        preserveAspectRatio="none"
        className="absolute -bottom-[0.12em] left-0 h-[0.28em] w-[96%] overflow-visible"
      >
        <motion.path
          d="M3 11 C 50 4, 110 3, 197 8"
          fill="none"
          stroke="var(--color-accent-2)"
          strokeWidth="6"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.9, ease: EASE_OUT, delay: 0.95 }}
        />
      </svg>
    </span>
  );
}

// Fondo: reticula de puntos fina y una "luz" de acento que sigue al cursor
// dentro del hero. Plano, sin gradientes de color: solo la mascara de la rejilla.
function HeroGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node || reduce) return;
    const parent = node.parentElement;
    if (!parent) return;
    const onMove = (e: PointerEvent) => {
      const r = parent.getBoundingClientRect();
      node.style.setProperty("--mx", `${e.clientX - r.left}px`);
      node.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    parent.addEventListener("pointermove", onMove);
    return () => parent.removeEventListener("pointermove", onMove);
  }, [reduce]);

  return (
    <div
      ref={ref}
      aria-hidden
      className="hero-grid pointer-events-none absolute inset-0 -z-10"
    />
  );
}

// ---------------------------------------------------------------------------
// Motor animado: tres procesos entran, el isotipo gira, salen resueltos y un
// registro en vivo muestra los eventos. Paquetes de datos viajan por las
// conexiones (animateMotion). Todo con tokens del tema (claro/oscuro).
// ---------------------------------------------------------------------------

const INPUT_Y = [70, 150, 230];
const INPUT_PATHS = ["M86 70 C 118 70, 118 120, 146 128", "M86 150 H 140", "M86 230 C 118 230, 118 180, 146 172"];
const OUTPUT_PATH = "M236 150 H 292";
const INPUT_TONES = [
  { fill: "var(--color-accent-soft)", ink: "var(--color-accent)" },
  { fill: "var(--color-accent-3-soft)", ink: "var(--color-accent-3)" },
  { fill: "var(--color-accent-2-soft)", ink: "var(--color-on-accent-2)" },
];

function HeroEngine() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, ease: EASE_OUT, delay: 0.3 }}
      className="relative"
    >
      <div className="relative overflow-hidden rounded-[20px] border border-line bg-surface">
        {/* cabecera tipo ventana */}
        <div className="flex items-center justify-between border-b border-line px-5 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
            <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
            <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          </div>
          <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-3" />
            motor activo
          </span>
        </div>

        <svg
          viewBox="0 0 360 300"
          className="h-auto w-full"
          role="img"
          aria-label="Tres procesos (emails, facturas y pedidos) se conectan al motor de automatización de Engrana, que los procesa y devuelve resueltos"
        >
          <defs>
            <pattern id="engine-dots" width="18" height="18" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1" fill="var(--color-line-strong)" />
            </pattern>
          </defs>
          <rect width="360" height="300" fill="url(#engine-dots)" opacity="0.7" />

          {/* conexiones: se dibujan al entrar y despues fluyen */}
          <g fill="none" strokeWidth="1.6" strokeLinecap="round">
            {INPUT_PATHS.map((d, i) => (
              <motion.path
                key={d}
                d={d}
                stroke="var(--color-line-strong)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.7 + i * 0.12 }}
              />
            ))}
            <motion.path
              d={OUTPUT_PATH}
              stroke="var(--color-line-strong)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6, ease: EASE_OUT, delay: 1.2 }}
            />
          </g>

          {/* paquetes de datos viajando por las conexiones */}
          {!reduce && (
            <g>
              {INPUT_PATHS.map((d, i) => (
                <circle key={d} r="3.5" fill={INPUT_TONES[i].ink}>
                  <animateMotion
                    dur="2.4s"
                    begin={`${1.4 + i * 0.8}s`}
                    repeatCount="indefinite"
                    path={d}
                    keyPoints="0;1"
                    keyTimes="0;1"
                    calcMode="spline"
                    keySplines="0.65 0 0.35 1"
                  />
                </circle>
              ))}
              <circle r="4" fill="var(--color-accent-3)">
                <animateMotion
                  dur="0.8s"
                  begin="1.8s"
                  repeatCount="indefinite"
                  path={OUTPUT_PATH}
                />
              </circle>
            </g>
          )}

          {/* nodos de entrada con etiqueta */}
          {HERO_INPUTS.map((label, i) => (
            <motion.g
              key={label}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.5 + i * 0.1 }}
            >
              <rect x="18" y={INPUT_Y[i] - 16} width="68" height="32" rx="9" fill={INPUT_TONES[i].fill} />
              <text
                x="52"
                y={INPUT_Y[i] + 4}
                textAnchor="middle"
                fontSize="11"
                fontWeight="600"
                fill={INPUT_TONES[i].ink}
                fontFamily="var(--font-sans)"
              >
                {label}
              </text>
            </motion.g>
          ))}

          {/* motor central: anillo pulsante + isotipo girando */}
          <g transform="translate(144 102)">
            {!reduce && (
              <circle cx="48" cy="48" r="46" fill="none" stroke="var(--color-accent)" strokeWidth="1.2" className="engine-pulse" />
            )}
            <circle cx="48" cy="48" r="46" fill="var(--color-surface)" stroke="var(--color-line)" />
            <g className="gear-spin">
              <g fill="var(--color-accent)">
                {[0, 60, 120, 180, 240, 300].map((deg) => (
                  <rect key={deg} x="41" y="10" width="14" height="22" rx="4" transform={`rotate(${deg} 48 48)`} />
                ))}
                <circle cx="48" cy="48" r="20" />
              </g>
              <rect x="37" y="37" width="22" height="22" rx="5" transform="rotate(45 48 48)" fill="var(--color-surface)" />
            </g>
          </g>

          {/* salida resuelta */}
          <motion.g
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 18, delay: 1.4 }}
            style={{ transformOrigin: "314px 150px" }}
          >
            <rect x="292" y="128" width="44" height="44" rx="12" fill="var(--color-accent-3-soft)" />
            <path d="M304 150l7 7 13-14" stroke="var(--color-accent-3)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </motion.g>
        </svg>

        <EventLog />
      </div>

      {/* etiqueta flotante */}
      <motion.div
        initial={{ opacity: 0, y: 10, rotate: -4 }}
        animate={{ opacity: 1, y: 0, rotate: -4 }}
        transition={{ duration: 0.7, ease: EASE_OUT, delay: 1.6 }}
        className="absolute -left-3 -top-4 hidden rounded-full bg-accent-2 px-3.5 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#15200a] sm:block"
      >
        Precio cerrado
      </motion.div>
    </motion.div>
  );
}

// Registro en vivo: rota los eventos de ejemplo cada pocos segundos.
function EventLog() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % HERO_EVENTS.length),
      2600
    );
    return () => window.clearInterval(id);
  }, [reduce]);

  const visible = [0, 1].map((o) => HERO_EVENTS[(index + o) % HERO_EVENTS.length]);

  return (
    <div className="border-t border-line bg-surface-2/60 px-5 py-4" aria-hidden>
      <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
        Registro de actividad
      </p>
      <ul className="relative h-[92px] overflow-hidden">
        <AnimatePresence initial={false} mode="popLayout">
          {visible.map((ev, i) => (
            <motion.li
              key={`${ev.label}-${index + i}`}
              layout
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: i === 0 ? 1 : 0.5, y: 0 }}
              exit={{ opacity: 0, y: -28 }}
              transition={{ duration: 0.55, ease: EASE_OUT }}
              className="mb-2 flex items-center justify-between gap-3 rounded-xl border border-line bg-surface px-3.5 py-2.5"
            >
              <span className="flex min-w-0 items-center gap-2.5">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-pale-green text-pale-green-ink">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                <span className="truncate text-[13px] text-ink">{ev.label}</span>
              </span>
              <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.1em] text-muted">
                {ev.meta}
              </span>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}
