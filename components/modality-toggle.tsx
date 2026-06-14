"use client";

import { useSite } from "@/lib/context";
import { MODALITIES, Modality } from "@/lib/data";
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
        "inline-flex items-center rounded-md border border-line bg-surface-2 p-1",
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
              "rounded-[5px] font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink",
              size === "sm" ? "px-3 py-1 text-[13px]" : "px-4 py-1.5 text-sm",
              active
                ? "bg-surface text-ink shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
                : "text-muted hover:text-ink"
            )}
          >
            {MODALITIES[id].label}
          </button>
        );
      })}
    </div>
  );
}
