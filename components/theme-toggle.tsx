"use client";

import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@/components/icons";

type Theme = "light" | "dark";

// Lee el tema ya aplicado por el script anti-FOUC en <html data-theme>.
function currentTheme(): Theme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTheme(currentTheme());
    setMounted(true);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // localStorage no disponible (modo privado); el tema dura la sesion.
    }
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Activar modo claro" : "Activar modo oscuro"}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-full border border-line-strong bg-surface text-ink transition-colors hover:border-accent hover:text-accent ${className ?? ""}`}
    >
      {/* Sin montar aun: icono neutro para no desajustar la hidratacion */}
      {mounted && isDark ? (
        <SunIcon className="h-[18px] w-[18px]" />
      ) : (
        <MoonIcon className="h-[18px] w-[18px]" />
      )}
    </button>
  );
}
