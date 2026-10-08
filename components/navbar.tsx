"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "motion/react";
import { useSite } from "@/lib/context";
import { Button } from "@/components/ui/button";
import { LogoMark, MenuIcon, CloseIcon } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { EASE_OUT } from "@/components/motion/easing";
import { cn } from "@/lib/cn";

const LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#paquetes", label: "Paquetes" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const { requestQuote } = useSite();

  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 12));

  // Resalta el enlace de la seccion visible.
  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(
      (n): n is Element => !!n
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const pill = hovered ?? active;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled || open
          ? "border-line bg-canvas/85 backdrop-blur-md"
          : "border-transparent bg-canvas/0"
      )}
    >
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between px-5 transition-[height] duration-300",
          scrolled ? "h-14" : "h-[4.25rem]"
        )}
      >
        <a href="#top" className="group flex items-center gap-2.5 font-medium">
          <LogoMark className="h-7 w-7 text-ink transition-transform duration-700 ease-out group-hover:rotate-[120deg]" />
          <span className="font-display text-lg font-semibold tracking-tight">
            Engran<span className="text-accent">a</span>
          </span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center" onMouseLeave={() => setHovered(null)}>
            {LINKS.map((l) => (
              <li key={l.href} className="relative">
                <a
                  href={l.href}
                  onMouseEnter={() => setHovered(l.href)}
                  className={cn(
                    "relative z-10 block px-3.5 py-1.5 text-sm transition-colors",
                    pill === l.href ? "text-ink" : "text-muted"
                  )}
                >
                  {l.label}
                </a>
                {pill === l.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-surface-2"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <Button size="sm" onClick={() => requestQuote([])}>
            Solicitar consulta
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md"
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* progreso de lectura */}
      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className="absolute inset-x-0 -bottom-px h-px origin-left bg-accent"
      />

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE_OUT }}
            className="overflow-hidden border-t border-line bg-canvas md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, ease: EASE_OUT, delay: 0.05 + i * 0.05 }}
                  className="rounded-md px-2 py-3 font-display text-2xl tracking-tight text-ink hover:bg-surface-2"
                >
                  {l.label}
                </motion.a>
              ))}
              <Button
                className="mt-3 w-full"
                onClick={() => {
                  setOpen(false);
                  requestQuote([]);
                }}
              >
                Solicitar consulta
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
