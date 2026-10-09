"use client";

import { useSite } from "@/lib/context";
import { AREAS, SERVICES } from "@/lib/data";
import { sumSelected, matchedPackages, formatPrice, formatEur } from "@/lib/pricing";
import { SectionHeading } from "@/components/section-heading";
import { ModalityToggle } from "@/components/modality-toggle";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "motion/react";
import { CountUp } from "@/components/motion/count-up";
import { EASE_OUT } from "@/components/motion/easing";
import { cn } from "@/lib/cn";

export function Configurator() {
  const { modality, selected, toggleService, requestQuote } = useSite();
  const total = sumSelected(selected, modality);
  const packages = matchedPackages(selected);

  return (
    <section
      id="configurador"
      className="border-y border-line bg-surface-2"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 sm:py-28">
        <SectionHeading
          eyebrow="Configurador"
          title="Calcula tu presupuesto estimado"
          description="Marca los servicios que te interesan y verás el precio estimado al instante. Sin registro ni datos personales."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          {/* Lista de servicios con checkbox */}
          <Reveal>
            <fieldset className="rounded-card border border-line bg-surface">
              <legend className="sr-only">Servicios disponibles</legend>
              {AREAS.map((area) => (
                <div key={area.id} className="border-b border-line last:border-b-0">
                  <p className="px-6 pt-5 font-mono text-xs uppercase tracking-[0.12em] text-muted">
                    {area.name}
                  </p>
                  <ul>
                    {SERVICES.filter((s) => s.area === area.id).map((service) => {
                      const checked = selected.includes(service.id);
                      return (
                        <li key={service.id}>
                          <label
                            className={cn(
                              "flex cursor-pointer items-center justify-between gap-4 px-6 py-3 transition-colors hover:bg-surface-2",
                              checked && "bg-surface-2"
                            )}
                          >
                            <span className="flex items-center gap-3">
                              <span
                                className={cn(
                                  "flex h-5 w-5 items-center justify-center rounded-[6px] border transition-colors duration-200",
                                  checked
                                    ? "border-accent bg-accent text-on-accent"
                                    : "border-line-strong bg-surface"
                                )}
                              >
                                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden>
                                  <motion.path
                                    d="M5 12.5l4.5 4.5L19 7.5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    initial={false}
                                    animate={{ pathLength: checked ? 1 : 0, opacity: checked ? 1 : 0 }}
                                    transition={{ duration: 0.25, ease: EASE_OUT }}
                                  />
                                </svg>
                              </span>
                              <input
                                type="checkbox"
                                className="sr-only"
                                checked={checked}
                                onChange={() => toggleService(service.id)}
                              />
                              <span className="text-sm text-ink">
                                {service.name}
                              </span>
                            </span>
                            <span className="shrink-0 text-sm text-muted tabular-nums">
                              {formatPrice(service.price[modality])}
                            </span>
                          </label>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </fieldset>
          </Reveal>

          {/* Resumen */}
          <Reveal delay={80}>
            <div className="lg:sticky lg:top-24">
              <div className="rounded-[20px] border border-line bg-surface p-6 sm:p-7">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-medium text-ink">Modalidad</span>
                  <ModalityToggle size="sm" idPrefix="cfg" />
                </div>

                <div className="mt-6 border-t border-line pt-6">
                  <p className="text-sm text-muted">
                    {selected.length === 0
                      ? "Ningún servicio seleccionado"
                      : `${selected.length} servicio${selected.length > 1 ? "s" : ""} seleccionado${selected.length > 1 ? "s" : ""}`}
                  </p>
                  <p className="mt-2 font-display text-4xl font-medium tracking-tight text-ink tabular-nums">
                    <CountUp
                      value={total.min}
                      format={(n) =>
                        selected.length === 0
                          ? formatEur(0)
                          : formatPrice({ min: n, max: total.max })
                      }
                    />
                  </p>
                </div>

                <AnimatePresence initial={false}>
                  {packages.length > 0 && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: EASE_OUT }}
                      className="overflow-hidden"
                    >
                      <div className="mt-5 rounded-md bg-pale-green p-4 text-sm text-pale-green-ink">
                        {packages.map((pkg) => (
                          <p key={pkg.id}>
                            Estos servicios forman el paquete{" "}
                            <strong>{pkg.name}</strong>. Contratándolos juntos
                            obtienes un precio más favorable.
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <p className="mt-5 text-xs leading-relaxed text-muted">
                  Este es un precio de referencia. El presupuesto definitivo se
                  entrega tras la consulta inicial.
                </p>

                <Button
                  className="mt-6 w-full"
                  disabled={selected.length === 0}
                  onClick={() => requestQuote(selected)}
                >
                  Solicitar presupuesto con estos servicios
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
