import { cn } from "@/lib/cn";

const tones = {
  neutral: "bg-surface-2 text-muted",
  red: "bg-pale-red text-pale-red-ink",
  blue: "bg-pale-blue text-pale-blue-ink",
  green: "bg-pale-green text-pale-green-ink",
  yellow: "bg-pale-yellow text-pale-yellow-ink",
} as const;

export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: React.ReactNode;
  tone?: keyof typeof tones;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium uppercase tracking-[0.05em]",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
