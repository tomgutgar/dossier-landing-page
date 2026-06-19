import { PILLARS } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { ModularIcon, PlugIcon, SlidersIcon } from "@/components/icons";

const ICONS = [ModularIcon, PlugIcon, SlidersIcon];
const TONES = [
  "bg-accent-soft text-accent",
  "bg-accent-3-soft text-accent-3",
  "bg-accent-2-soft text-on-accent-2",
];

export function Pillars() {
  return (
    <section className="border-y border-line bg-surface-2">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-16 sm:grid-cols-3 sm:py-20">
        {PILLARS.map((pillar, i) => {
          const Icon = ICONS[i];
          return (
            <Reveal key={pillar.title} delay={i * 80}>
              <div className="group h-full rounded-card border border-line bg-surface p-8 transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-[0_12px_30px_-16px_rgba(15,18,23,0.18)]">
                <span
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-md ${TONES[i]}`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-medium text-ink">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {pillar.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
