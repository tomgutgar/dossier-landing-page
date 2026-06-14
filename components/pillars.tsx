import { PILLARS } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { ModularIcon, PlugIcon, SlidersIcon } from "@/components/icons";

const ICONS = [ModularIcon, PlugIcon, SlidersIcon];
const TONES = [
  "bg-pale-blue text-pale-blue-ink",
  "bg-pale-green text-pale-green-ink",
  "bg-pale-yellow text-pale-yellow-ink",
];

export function Pillars() {
  return (
    <section className="border-y border-line bg-surface-2">
      <div className="mx-auto grid max-w-6xl gap-px overflow-hidden border-x border-line bg-line sm:grid-cols-3">
        {PILLARS.map((pillar, i) => {
          const Icon = ICONS[i];
          return (
            <Reveal
              key={pillar.title}
              delay={i * 80}
              className="bg-canvas p-8 sm:p-10"
            >
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
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
