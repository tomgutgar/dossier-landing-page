import { SITE } from "@/lib/data";
import { LogoMark, LinkedinIcon } from "@/components/icons";

const LEGAL = [
  { href: "/privacidad", label: "Política de privacidad" },
  { href: "/aviso-legal", label: "Aviso legal" },
  { href: "/cookies", label: "Cookies" },
];

export function Footer() {
  return (
    <footer className="overflow-hidden border-t border-line bg-canvas">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-14 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <a href="#top" className="group flex items-center gap-2.5 font-medium">
            <LogoMark className="h-7 w-7 text-ink transition-transform duration-700 ease-out group-hover:rotate-[120deg]" />
            <span className="font-display text-lg font-semibold tracking-tight">
              Engran<span className="text-accent">a</span>
            </span>
          </a>
          <p className="mt-3 max-w-xs text-sm text-muted">{SITE.tagline}.</p>
          <a
            href={`mailto:${SITE.email}`}
            className="mt-3 inline-block text-sm text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-accent"
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
            className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-accent hover:text-accent"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Marca a gran escala: el isotipo gira despacio junto al logotipo */}
      <div aria-hidden className="mx-auto flex max-w-6xl select-none items-end gap-[2vw] px-5 pb-[5vw] lg:pb-14">
        <span className="font-display text-[22vw] font-semibold leading-[0.78] tracking-[-0.06em] text-line lg:text-[15rem]">
          Engrana
        </span>
        <LogoMark className="gear-spin mb-[2vw] h-[11vw] w-[11vw] shrink-0 text-ink lg:mb-6 lg:h-36 lg:w-36" />
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
