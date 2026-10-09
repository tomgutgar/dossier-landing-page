"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

// Anima un numero hasta `value` y lo pinta con `format`. Escribe directamente
// en el nodo (sin re-render por frame).
export function CountUp({
  value,
  format,
  duration = 0.8,
  className,
}: {
  value: number;
  format: (n: number) => string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const from = useRef(0);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  // El formateador puede cambiar de identidad en cada render; no reinicia la animacion.
  const fmt = useRef(format);
  fmt.current = format;

  useEffect(() => {
    const node = ref.current;
    if (!node || !inView) return;
    if (reduce) {
      node.textContent = fmt.current(value);
      from.current = value;
      return;
    }
    const controls = animate(from.current, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (n) => {
        node.textContent = fmt.current(Math.round(n));
      },
    });
    from.current = value;
    return () => controls.stop();
  }, [value, inView, reduce, duration]);

  return (
    <span ref={ref} className={className}>
      {format(value)}
    </span>
  );
}
