import { WHY_US } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { CheckIcon } from "@/components/icons";

export function WhyUs() {
  return (
    <section className="border-y border-line bg-surface-2">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:py-28">
        <SectionHeading eyebrow="Por qué elegirnos" title="Sin letra pequeña" />

        <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-2">
          {WHY_US.map((point, i) => (
            <Reveal key={i} delay={(i % 2) * 80}>
              <div className="flex h-full items-start gap-4 rounded-card border border-line bg-surface p-6 card-lift">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-pale-green text-pale-green-ink">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <p className="text-sm leading-relaxed text-ink">{point}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
