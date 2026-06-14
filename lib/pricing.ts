import { Modality, PriceRange, SERVICES, PACKAGES, Package } from "./data";

export function formatEur(value: number): string {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

// Precio "desde": se muestra el minimo como punto de entrada, sin rango.
export function formatPrice(range: PriceRange): string {
  return `Desde ${formatEur(range.min)}`;
}

// Suma de minimos y suma de maximos de los servicios seleccionados (PRD seccion 9).
export function sumSelected(
  selectedIds: string[],
  modality: Modality
): PriceRange {
  return selectedIds.reduce<PriceRange>(
    (acc, id) => {
      const service = SERVICES.find((s) => s.id === id);
      if (!service) return acc;
      return {
        min: acc.min + service.price[modality].min,
        max: acc.max + service.price[modality].max,
      };
    },
    { min: 0, max: 0 }
  );
}

// Detecta si la seleccion contiene todos los modulos de algun paquete (PRD seccion 9).
export function matchedPackages(selectedIds: string[]): Package[] {
  const set = new Set(selectedIds);
  return PACKAGES.filter((pkg) => pkg.serviceIds.every((id) => set.has(id)));
}
