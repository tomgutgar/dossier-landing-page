"use client";

import { MotionConfig } from "motion/react";

// Respeta prefers-reduced-motion en todas las animaciones de `motion`:
// las transformaciones se omiten y solo quedan cambios de opacidad.
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
