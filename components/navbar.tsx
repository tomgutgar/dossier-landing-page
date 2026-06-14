"use client";

import { useState } from "react";
import { SITE } from "@/lib/data";
import { useSite } from "@/lib/context";
import { Button } from "@/components/ui/button";
import { LogoMark, MenuIcon, CloseIcon } from "@/components/icons";

const LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#paquetes", label: "Paquetes" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { requestQuote } = useSite();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-2 font-medium">
          <LogoMark className="h-6 w-6 text-ink" />
          <span className="text-lg tracking-tight">{SITE.name}</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <Button size="sm" onClick={() => requestQuote([])}>
            Solicitar consulta
          </Button>
        </div>

        <button
          className="md:hidden"
          aria-label={open ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <CloseIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-canvas md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm text-muted hover:bg-surface-2 hover:text-ink"
              >
                {l.label}
              </a>
            ))}
            <Button
              className="mt-2 w-full"
              onClick={() => {
                setOpen(false);
                requestQuote([]);
              }}
            >
              Solicitar consulta
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
