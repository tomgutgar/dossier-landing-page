import Link from "next/link";
import { SITE } from "@/lib/data";
import { ArrowRightIcon } from "@/components/icons";

// Plantilla para las paginas legales. Los textos definitivos (RGPD / LOPDGDD)
// son contenido a preparar segun el PRD (seccion 10): este es el marcador.
export function LegalPage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto max-w-3xl px-5 py-20">
      <Link
        href="/"
        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-muted hover:text-ink"
      >
        <ArrowRightIcon className="h-4 w-4 rotate-180" />
        Volver al inicio
      </Link>
      <h1 className="mt-8 font-serif text-4xl tracking-tight text-ink">
        {title}
      </h1>
      <div className="mt-6 space-y-4 text-muted leading-relaxed">{children}</div>
      <p className="mt-10 border-t border-line pt-6 text-sm text-muted">
        Para cualquier duda: {" "}
        <a href={`mailto:${SITE.email}`} className="text-ink hover:underline">
          {SITE.email}
        </a>
      </p>
    </main>
  );
}
