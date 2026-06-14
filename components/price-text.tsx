"use client";

import { useSite } from "@/lib/context";
import { PriceRange, Modality } from "@/lib/data";
import { formatRange } from "@/lib/pricing";
import { cn } from "@/lib/cn";

// Muestra un rango de precio segun la modalidad global, con transicion suave
// de 200ms al cambiar el valor (PRD seccion 8). El `key` fuerza el reflujo.
export function PriceText({
  price,
  className,
}: {
  price: Record<Modality, PriceRange>;
  className?: string;
}) {
  const { modality } = useSite();
  return (
    <span key={modality} className={cn("price-shift tabular-nums", className)}>
      {formatRange(price[modality])}
    </span>
  );
}
