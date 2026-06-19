import { SITE } from "@/lib/data";
import { LogoMark, LinkedinIcon } from "@/components/icons";

const LEGAL = [
  { href: "/privacidad", label: "Politica de privacidad" },
  { href: "/aviso-legal", label: "Aviso legal" },
  { href: "/cookies", label: "Cookies" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-canvas">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <a href="#top" className="flex items-center gap-2.5 font-medium">
            <LogoMark className="h-7 w-7 text-ink" />
            <span className="font-display text-lg font-semibold tracking-tight">
              Engran<span className="text-accent">a</span>
            </span>
          </a>
          <p className="mt-3 max-w-xs text-sm text-muted">{SITE.tagline}.</p>
          <a
            href={`mailto:${SITE.email}`}
            className="mt-3 inline-block text-sm text-ink underline-offset-2 hover:underline"
          >
            {SITE.email}
          </a>
        </div>

        <div className="flex flex-col gap-3">
          {LEGAL.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-md border border-line text-ink transition-colors hover:bg-surface-2"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-5">
          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} {SITE.name}. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
