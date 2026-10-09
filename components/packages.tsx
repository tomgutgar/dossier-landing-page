"use client";

import { PACKAGES, SERVICES } from "@/lib/data";
import { useSite } from "@/lib/context";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { PriceText } from "@/components/price-text";
import { CheckIcon } from "@/components/icons";
import { cn } from "@/lib/cn";

function serviceName(id: string) {
  return SERVICES.find((s) => s.id === id)?.name ?? id;
}

export function Packages() {
  const { requestQuote } = useSite();

  return (
    <section id="paquetes" className="border-y border-line bg-surface-2">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:py-28">
        <SectionHeading
          eyebrow="Paquetes"
          title="Empieza con un pack cerrado"
          description="Combinaciones pensadas por objetivo, con precio más favorable que contratar los servicios por separado. El precio se ajusta a la modalidad que elijas."
        />

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
          {PACKAGES.map((pkg, i) => (
            <Reveal key={pkg.id} delay={i * 80}>
              <article
                className={cn(
                  "relative flex h-full flex-col rounded-[20px] border p-8 card-lift",
                  pkg.featured
                    ? "border-night bg-night text-on-night lg:-mt-6 lg:pb-12"
                    : "border-line bg-surface text-ink"
                )}
              >
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={cn(
                      "font-mono text-xs",
                      pkg.featured ? "text-on-night/60" : "text-muted"
                    )}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {pkg.featured && <Badge tone="lime">Recomendado</Badge>}
                </div>
                <h3 className="mt-6 font-display text-3xl font-medium tracking-tight">
                  {pkg.name}
                </h3>
                <p
                  className={cn(
                    "mt-2 text-sm",
                    pkg.featured ? "text-on-night/70" : "text-muted"
                  )}
                >
                  {pkg.description}
                </p>

                <p className="mt-8 font-display text-3xl font-medium tracking-tight">
                  <PriceText price={pkg.price} />
                </p>

                <ul
                  className={cn(
                    "mt-6 flex-1 space-y-3 border-t pt-6",
                    pkg.featured ? "border-on-night/15" : "border-line"
                  )}
                >
                  {pkg.serviceIds.map((id) => (
                    <li key={id} className="flex gap-3 text-sm">
                      <CheckIcon
                        className={cn(
                          "mt-0.5 h-4 w-4 shrink-0",
                          pkg.featured ? "text-accent-2" : "text-pale-green-ink"
                        )}
                      />
                      <span>{serviceName(id)}</span>
                    </li>
                  ))}
                </ul>

                {pkg.featured ? (
                  <Button
                    className="mt-8 w-full focus-visible:ring-offset-night"
                    onClick={() => requestQuote(pkg.serviceIds)}
                  >
                    Solicitar este paquete
                  </Button>
                ) : (
                  <button
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "mt-8 w-full"
                    )}
                    onClick={() => requestQuote(pkg.serviceIds)}
                  >
                    Solicitar este paquete
                  </button>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
