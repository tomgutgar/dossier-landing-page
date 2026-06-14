"use client";

import { useState } from "react";
import { AREAS, SERVICES, Service } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { PriceText } from "@/components/price-text";
import { PlusIcon, MinusIcon } from "@/components/icons";
import { cn } from "@/lib/cn";

export function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-6xl px-5 py-24 sm:py-28">
      <SectionHeading
        eyebrow="Catalogo"
        title="13 servicios, una sola operativa"
        description="Cada servicio resuelve un problema concreto y funciona por separado. Pulsa en una tarjeta para ver el detalle. Los precios siguen la modalidad seleccionada."
      />

      <div className="mt-14 space-y-16">
        {AREAS.map((area) => {
          const items = SERVICES.filter((s) => s.area === area.id);
          return (
            <div key={area.id}>
              <Reveal className="mb-6 flex items-baseline gap-3">
                <h3 className="font-serif text-2xl tracking-tight text-ink">
                  {area.name}
                </h3>
                <span className="font-mono text-xs text-muted">
                  {String(items.length).padStart(2, "0")}
                </span>
              </Reveal>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((service, i) => (
                  <Reveal key={service.id} delay={(i % 3) * 80}>
                    <ServiceCard service={service} />
                  </Reveal>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const [open, setOpen] = useState(false);
  const regionId = `service-detail-${service.id}`;

  return (
    <article className="group flex h-full flex-col rounded-card border border-line bg-surface transition-shadow duration-200 hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={regionId}
        className="flex w-full flex-col gap-3 rounded-card p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
      >
        <div className="flex items-start justify-between gap-3">
          <h4 className="text-base font-medium leading-snug text-ink">
            {service.name}
          </h4>
          <span className="mt-0.5 shrink-0 text-muted transition-colors group-hover:text-ink">
            {open ? (
              <MinusIcon className="h-5 w-5" />
            ) : (
              <PlusIcon className="h-5 w-5" />
            )}
          </span>
        </div>
        <p className="text-sm text-muted">{service.tagline}</p>
        <p className="mt-1 text-lg font-medium text-ink">
          <PriceText price={service.price} />
        </p>
      </button>

      <div
        id={regionId}
        hidden={!open}
        className={cn("px-6 pb-6", open && "border-t border-line pt-5")}
      >
        <p className="text-sm leading-relaxed text-muted">
          {service.description}
        </p>
        <p className="mt-4 text-sm font-semibold text-ink">{service.benefit}</p>
        <p className="mt-4 font-mono text-xs uppercase tracking-[0.1em] text-muted">
          Implementacion: {service.duration}
        </p>
      </div>
    </article>
  );
}
