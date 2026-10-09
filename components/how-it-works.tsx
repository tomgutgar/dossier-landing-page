"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { PROCESS_STEPS } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

// Linea de progreso ligada al scroll: se rellena a medida que el usuario
// recorre los pasos y cada nodo se activa al alcanzarlo.
export function HowItWorks() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 55%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

  return (
    <section
      id="como-funciona"
      className="mx-auto max-w-6xl px-5 py-24 sm:py-32"
    >
      <SectionHeading
        eyebrow="Cómo funciona"
        title="De la primera llamada al servicio funcionando"
        description="Un proceso claro, con presupuesto cerrado y sin interrumpir tu operativa."
      />

      <ol ref={ref} className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
        {/* carril + relleno (vertical en movil, horizontal en escritorio) */}
        <span aria-hidden className="absolute bottom-2 left-[15px] top-2 w-px bg-line md:bottom-auto md:left-4 md:right-4 md:top-[15px] md:h-px md:w-auto" />
        <motion.span
          aria-hidden
          style={{ scaleY: progress }}
          className="absolute bottom-2 left-[15px] top-2 w-px origin-top bg-accent md:hidden"
        />
        <motion.span
          aria-hidden
          style={{ scaleX: progress }}
          className="absolute left-4 right-4 top-[15px] hidden h-px origin-left bg-accent md:block"
        />

        {PROCESS_STEPS.map((step, i) => (
          <Step key={step.title} index={i} progress={progress} title={step.title} description={step.description} />
        ))}
      </ol>
    </section>
  );
}

function Step({
  index,
  progress,
  title,
  description,
}: {
  index: number;
  progress: ReturnType<typeof useSpring>;
  title: string;
  description: string;
}) {
  const at = index / (PROCESS_STEPS.length - 1);
  const lit = useTransform(progress, [Math.max(0, at - 0.06), at], [0, 1]);
  const scale = useTransform(lit, [0, 1], [0.85, 1]);

  return (
    <Reveal as="li" delay={index * 90} className="relative pl-12 md:pl-0 md:pr-4">
      <span className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-line-strong bg-canvas font-mono text-[11px] text-muted md:relative">
        <motion.span
          aria-hidden
          style={{ opacity: lit, scale }}
          className="absolute inset-0 flex items-center justify-center rounded-full bg-accent text-on-accent"
        >
          {String(index + 1).padStart(2, "0")}
        </motion.span>
        <span>{String(index + 1).padStart(2, "0")}</span>
      </span>
      <h3 className="font-display text-xl font-medium tracking-tight text-ink md:mt-7">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
    </Reveal>
  );
}
