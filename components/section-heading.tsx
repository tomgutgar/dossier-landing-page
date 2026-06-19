import { Reveal } from "@/components/reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <p className="flex items-center justify-center gap-2.5 font-mono text-xs font-medium uppercase tracking-[0.16em] text-accent">
        <span aria-hidden className="h-px w-6 bg-accent" />
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-muted">{description}</p>
      )}
    </Reveal>
  );
}
