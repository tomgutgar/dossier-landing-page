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
                  "relative flex h-full flex-col rounded-card border bg-surface p-8 transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-[0_12px_30px_-16px_rgba(15,18,23,0.18)]",
                  pkg.featured ? "border-accent lg:-mt-4 lg:pb-12" : "border-line"
                )}
              >
                {pkg.featured && (
                  <div className="absolute -top-3 left-8">
                    <Badge tone="yellow">Recomendado</Badge>
                  </div>
                )}
                <h3 className="font-display text-2xl tracking-tight text-ink">
                  {pkg.name}
                </h3>
                <p className="mt-2 text-sm text-muted">{pkg.description}</p>

                <p className="mt-6 text-2xl font-medium text-ink">
                  <PriceText price={pkg.price} />
                </p>

                <ul className="mt-6 flex-1 space-y-3 border-t border-line pt-6">
                  {pkg.serviceIds.map((id) => (
                    <li key={id} className="flex gap-3 text-sm text-ink">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-pale-green-ink" />
                      <span>{serviceName(id)}</span>
                    </li>
                  ))}
                </ul>

                {pkg.featured ? (
                  <Button
                    className="mt-8 w-full"
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
