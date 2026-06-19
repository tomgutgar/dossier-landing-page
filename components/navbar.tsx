"use client";

import { useState } from "react";
import { SITE } from "@/lib/data";
import { useSite } from "@/lib/context";
import { Button } from "@/components/ui/button";
import { LogoMark, MenuIcon, CloseIcon } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";

const LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#paquetes", label: "Paquetes" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { requestQuote } = useSite();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-2.5 font-medium">
          <LogoMark className="h-7 w-7 text-ink" />
          <span className="font-display text-lg font-semibold tracking-tight">
            Engran<span className="text-accent">a</span>
          </span>
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
          <ThemeToggle />
          <Button size="sm" onClick={() => requestQuote([])}>
            Solicitar consulta
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
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
        </div>
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
