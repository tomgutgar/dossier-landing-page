import { PROCESS_STEPS } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="mx-auto max-w-6xl px-5 py-24 sm:py-28"
    >
      <SectionHeading
        eyebrow="Como funciona"
        title="De la primera llamada al servicio funcionando"
        description="Un proceso claro, con presupuesto cerrado y sin interrumpir tu operativa."
      />

      <ol className="mt-14 grid gap-px overflow-hidden rounded-card border border-line bg-line md:grid-cols-4">
        {PROCESS_STEPS.map((step, i) => (
          <Reveal
            key={step.title}
            as="li"
            delay={i * 80}
            className="bg-surface p-7"
          >
            <span className="font-mono text-sm text-muted">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 text-base font-medium text-ink">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {step.description}
            </p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
