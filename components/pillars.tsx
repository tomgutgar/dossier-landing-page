import { PILLARS } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { ModularIcon, PlugIcon, SlidersIcon } from "@/components/icons";

const ICONS = [ModularIcon, PlugIcon, SlidersIcon];
const TONES = [
  "bg-accent-soft text-accent group-hover:bg-accent group-hover:text-on-accent",
  "bg-accent-3-soft text-accent-3 group-hover:bg-accent-3 group-hover:text-on-accent-3",
  "bg-accent-2-soft text-on-accent-2 group-hover:bg-accent-2 group-hover:text-[#15200a]",
];

export function Pillars() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <div className="grid gap-px overflow-hidden rounded-[20px] border border-line bg-line sm:grid-cols-3">
        {PILLARS.map((pillar, i) => {
          const Icon = ICONS[i];
          return (
            <Reveal key={pillar.title} delay={i * 90} className="bg-surface">
              <div className="group relative h-full p-8 sm:p-10">
                <div className="flex items-center justify-between">
                  <span
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-xl transition-[background-color,color,transform] duration-300 group-hover:-rotate-6 ${TONES[i]}`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-xs text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-8 font-display text-2xl font-medium tracking-tight text-ink">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {pillar.description}
                </p>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100"
                />
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
