"use client";

import { useSite } from "@/lib/context";
import { MODALITIES, Modality } from "@/lib/data";
import { motion } from "motion/react";
import { cn } from "@/lib/cn";

const ORDER: Modality[] = ["nube", "empresa"];

export function ModalityToggle({
  size = "md",
  className,
  idPrefix = "modality",
}: {
  size?: "sm" | "md";
  className?: string;
  idPrefix?: string;
}) {
  const { modality, setModality } = useSite();

  return (
    <div
      role="radiogroup"
      aria-label="Modalidad de infraestructura"
      className={cn(
        "inline-flex items-center rounded-full border border-line bg-surface p-1",
        className
      )}
    >
      {ORDER.map((id) => {
        const active = modality === id;
        return (
          <button
            key={id}
            role="radio"
            aria-checked={active}
            id={`${idPrefix}-${id}`}
            onClick={() => setModality(id)}
            className={cn(
              "relative rounded-full font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
              size === "sm" ? "px-3 py-1 text-[13px]" : "px-4 py-1.5 text-sm",
              active ? "text-on-accent" : "text-muted hover:text-ink"
            )}
          >
            {active && (
              <motion.span
                layoutId={`${idPrefix}-thumb`}
                className="absolute inset-0 rounded-full bg-accent"
                transition={{ type: "spring", stiffness: 420, damping: 34 }}
              />
            )}
            <span className="relative">{MODALITIES[id].label}</span>
          </button>
        );
      })}
    </div>
  );
}
