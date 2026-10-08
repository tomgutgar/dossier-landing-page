"use client";

import { useState } from "react";
import { AREAS, SERVICES, Service } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { PriceText } from "@/components/price-text";
import { PlusIcon } from "@/components/icons";
import { AnimatePresence, motion } from "motion/react";
import { EASE_OUT } from "@/components/motion/easing";
import { cn } from "@/lib/cn";

export function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-6xl px-5 py-24 sm:py-28">
      <SectionHeading
        eyebrow="Catálogo"
        title="13 servicios, una sola operativa"
        description="Cada servicio resuelve un problema concreto y funciona por separado. Pulsa en una tarjeta para ver el detalle. Los precios siguen la modalidad seleccionada."
      />

      <div className="mt-14 space-y-16">
        {AREAS.map((area) => {
          const items = SERVICES.filter((s) => s.area === area.id);
          return (
            <div key={area.id}>
              <Reveal className="mb-6 flex items-baseline gap-3 border-b border-line pb-4">
                <h3 className="font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
                  {area.name}
                </h3>
                <span className="ml-auto font-mono text-xs text-muted">
                  {String(items.length).padStart(2, "0")} servicios
                </span>
              </Reveal>
              <div className="grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
    <article
      className={cn(
        "group flex h-full flex-col rounded-card border bg-surface card-lift",
        open ? "border-accent" : "border-line"
      )}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={open ? regionId : undefined}
        className="flex w-full flex-col gap-3 rounded-card p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        <div className="flex items-start justify-between gap-3">
          <h4 className="text-base font-medium leading-snug text-ink">
            {service.name}
          </h4>
          <span
            className={cn(
              "mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-[transform,background-color,border-color,color] duration-300",
              open
                ? "rotate-45 border-accent bg-accent text-on-accent"
                : "border-line text-muted group-hover:border-accent group-hover:text-accent"
            )}
          >
            <PlusIcon className="h-4 w-4" />
          </span>
        </div>
        <p className="text-sm text-muted">{service.tagline}</p>
        <p className="mt-1 text-lg font-medium text-ink">
          <PriceText price={service.price} />
        </p>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={regionId}
            key="detail"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE_OUT }}
            className="overflow-hidden"
          >
            <div className="mx-6 border-t border-line pb-6 pt-5">
              <p className="text-sm leading-relaxed text-muted">
                {service.description}
              </p>
              <p className="mt-4 border-l-2 border-accent-2 pl-3 text-sm font-semibold text-ink">
                {service.benefit}
              </p>
              <p className="mt-4 font-mono text-xs uppercase tracking-[0.1em] text-muted">
                Implementación: {service.duration}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}
