"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Modality } from "./data";

const STORAGE_KEY = "engrana:modality";

type PrefillRequest = {
  serviceIds: string[];
  // contador para que el formulario reaccione aunque se repita la misma seleccion
  nonce: number;
};

type SiteContextValue = {
  modality: Modality;
  setModality: (m: Modality) => void;

  // Seleccion del configurador
  selected: string[];
  toggleService: (id: string) => void;
  setSelected: (ids: string[]) => void;

  // Prefill del formulario (paso de estado en memoria, no por URL)
  prefill: PrefillRequest;
  requestQuote: (serviceIds: string[]) => void;
};

const SiteContext = createContext<SiteContextValue | null>(null);

export function SiteProvider({ children }: { children: React.ReactNode }) {
  // Por defecto "nube" (PRD seccion 8). sessionStorage se lee en un efecto
  // para evitar desajustes de hidratacion.
  const [modality, setModalityState] = useState<Modality>("nube");
  const [selected, setSelected] = useState<string[]>([]);
  const [prefill, setPrefill] = useState<PrefillRequest>({
    serviceIds: [],
    nonce: 0,
  });

  useEffect(() => {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored === "nube" || stored === "empresa") {
      setModalityState(stored);
    }
  }, []);

  const setModality = useCallback((m: Modality) => {
    setModalityState(m);
    sessionStorage.setItem(STORAGE_KEY, m);
  }, []);

  const toggleService = useCallback((id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  }, []);

  const requestQuote = useCallback((serviceIds: string[]) => {
    setPrefill((prev) => ({ serviceIds, nonce: prev.nonce + 1 }));
    if (typeof document !== "undefined") {
      document
        .getElementById("contacto")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const value = useMemo<SiteContextValue>(
    () => ({
      modality,
      setModality,
      selected,
      toggleService,
      setSelected,
      prefill,
      requestQuote,
    }),
    [modality, setModality, selected, toggleService, prefill, requestQuote]
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite debe usarse dentro de SiteProvider");
  return ctx;
}
