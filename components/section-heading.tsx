"use client";

import { motion } from "motion/react";
import { EASE_OUT } from "@/components/motion/easing";

// Encabezado de seccion: las palabras del titulo suben en cascada al entrar
// en pantalla; eyebrow y descripcion aparecen con un ligero retardo.
export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  const words = title.split(" ");

  return (
    <motion.div
      className="mx-auto max-w-3xl text-center"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -15% 0px" }}
    >
      <motion.p
        variants={{
          hidden: { opacity: 0, y: 8 },
          show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
        }}
        className="flex items-center justify-center gap-2.5 font-mono text-xs font-medium uppercase tracking-[0.16em] text-accent"
      >
        <motion.span
          aria-hidden
          className="h-px w-6 origin-left bg-accent"
          variants={{
            hidden: { scaleX: 0 },
            show: { scaleX: 1, transition: { duration: 0.6, ease: EASE_OUT, delay: 0.1 } },
          }}
        />
        {eyebrow}
      </motion.p>
      <h2 className="mt-4 font-display text-[2rem] font-medium leading-[1.08] tracking-[-0.03em] text-ink sm:text-5xl">
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
            <motion.span
              className="inline-block"
              variants={{
                hidden: { y: "105%" },
                show: {
                  y: 0,
                  transition: { duration: 0.75, ease: EASE_OUT, delay: 0.08 + i * 0.05 },
                },
              }}
            >
              {word}
            </motion.span>
            {i < words.length - 1 && " "}
          </span>
        ))}
      </h2>
      {description && (
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 10 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, ease: EASE_OUT, delay: 0.25 + words.length * 0.04 },
            },
          }}
          className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
