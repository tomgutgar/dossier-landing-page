"use client";

import { useSite } from "@/lib/context";
import { MODALITIES } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { ModalityToggle } from "@/components/modality-toggle";
import { Reveal } from "@/components/reveal";
import { CloudIcon, BuildingIcon } from "@/components/icons";
import { cn } from "@/lib/cn";

const ROWS = [
  { label: "Dónde se ejecuta", nube: "En servidores externos auditados", empresa: "En un servidor dedicado a cargo de nuestro equipo" },
  { label: "Tus datos", nube: "Procesados por proveedores certificados", empresa: "En un entorno aislado y exclusivo, gestionado por nosotros" },
  { label: "Coste recurrente", nube: "Variable según el volumen real de uso", empresa: "Sin coste por uso tras la implantación" },
  { label: "Puesta en marcha", nube: "Días", empresa: "2-4 semanas" },
  { label: "Recomendado para", nube: "Arranque rápido o empresas en crecimiento", empresa: "Datos sensibles o alto volumen" },
];

const CARDS = [
  { id: "nube" as const, Icon: CloudIcon },
  { id: "empresa" as const, Icon: BuildingIcon },
];

export function Infrastructure() {
  const { modality } = useSite();

  return (
    <section className="mx-auto max-w-6xl px-5 py-24 sm:py-28">
      <SectionHeading
        eyebrow="Modalidades"
        title="Tú eliges dónde funciona"
        description="Dos formas de poner en marcha cada servicio, con los mismos resultados. Cambia la modalidad y verás los precios actualizarse en toda la página."
      />

      <Reveal className="mt-8 flex justify-center">
        <ModalityToggle />
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {CARDS.map(({ id, Icon }, i) => {
          const m = MODALITIES[id];
          const active = modality === id;
          return (
            <Reveal key={id} delay={i * 80}>
              <article
                className={cn(
                  "h-full rounded-card border bg-surface p-8 card-lift",
                  active ? "border-accent" : "border-line"
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-surface-2 text-ink">
                    <Icon className="h-5 w-5" />
                  </span>
                  {active && (
                    <span className="font-mono text-xs uppercase tracking-[0.12em] text-muted">
                      Seleccionada
                    </span>
                  )}
                </div>
                <h3 className="mt-5 font-display text-2xl tracking-tight text-ink">
                  {m.label}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {m.description}
                </p>

                <dl className="mt-6 divide-y divide-line border-t border-line">
                  {ROWS.map((row) => (
                    <div
                      key={row.label}
                      className="grid grid-cols-2 gap-4 py-3 text-sm"
                    >
                      <dt className="text-muted">{row.label}</dt>
                      <dd className="text-ink">{row[id]}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
