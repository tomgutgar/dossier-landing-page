"use client";

import { useEffect, useRef, useState } from "react";
import { useSite } from "@/lib/context";
import { SERVICES, EMPLOYEE_RANGES, Modality } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { cn } from "@/lib/cn";

type ModalityChoice = Modality | "indistinto";

const inputClass =
  "w-full rounded-md border border-line bg-surface px-3.5 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-muted hover:border-line-strong focus:border-accent focus:ring-4 focus:ring-accent/15";

const MODALITY_OPTIONS: { value: ModalityChoice; label: string }[] = [
  { value: "empresa", label: "Instalación en empresa" },
  { value: "nube", label: "Servicio en la nube" },
  { value: "indistinto", label: "No lo tengo claro todavía" },
];

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const { modality, prefill } = useSite();

  const [nombre, setNombre] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [servicios, setServicios] = useState<string[]>([]);
  const [modalidad, setModalidad] = useState<ModalityChoice>("nube");
  const [empleados, setEmpleados] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [privacidad, setPrivacidad] = useState(false);

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle"
  );

  // Sincroniza el radio con el toggle global sin bloquear la edicion manual
  // (PRD seccion 8): cada vez que cambia la modalidad global, refleja la eleccion.
  useEffect(() => {
    setModalidad(modality);
  }, [modality]);

  // Prefill de servicios desde el configurador o los CTAs de paquete (PRD 6.10 / 9).
  const lastNonce = useRef(0);
  useEffect(() => {
    if (prefill.nonce !== lastNonce.current) {
      lastNonce.current = prefill.nonce;
      if (prefill.serviceIds.length > 0) setServicios(prefill.serviceIds);
    }
  }, [prefill]);

  const errors = {
    nombre: nombre.trim() ? "" : "Indica tu nombre y apellidos.",
    empresa: empresa.trim() ? "" : "Indica el nombre de tu empresa.",
    email: !email.trim()
      ? "Indica un email de contacto."
      : emailRe.test(email)
        ? ""
        : "El email no parece válido.",
    privacidad: privacidad ? "" : "Debes aceptar la política de privacidad.",
  };
  const isValid = Object.values(errors).every((e) => !e);

  function show(field: keyof typeof errors) {
    return (touched[field] || submitted) && errors[field];
  }

  function toggleServicio(id: string) {
    setServicios((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    if (!isValid) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre,
          empresa,
          email,
          telefono,
          servicios,
          modalidad,
          empleados,
          mensaje,
        }),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("ok");
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <section id="contacto" className="mx-auto max-w-6xl px-5 py-24 sm:py-28">
        <Reveal className="mx-auto max-w-xl rounded-card border border-line bg-surface p-10 text-center">
          <motion.span
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 16 }}
            className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-pale-green text-pale-green-ink"
          >
            <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden>
              <motion.path
                d="M5 12.5l4.5 4.5L19 7.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
            </svg>
          </motion.span>
          <h2 className="mt-6 font-display text-2xl tracking-tight text-ink">
            Solicitud recibida
          </h2>
          <p className="mt-3 text-muted">
            Te contactamos en menos de 24 horas laborables.
          </p>
        </Reveal>
      </section>
    );
  }

  return (
    <section id="contacto" className="mx-auto max-w-6xl px-5 py-24 sm:py-28">
      <SectionHeading
        eyebrow="Contacto"
        title="Solicita tu consulta gratuita"
        description="Cuéntanos qué necesitas y te respondemos con los siguientes pasos. Sin compromiso."
      />

      <Reveal className="mx-auto mt-12 max-w-2xl">
        <form
          noValidate
          onSubmit={handleSubmit}
          className="rounded-[20px] border border-line bg-surface p-6 sm:p-10"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              label="Nombre y apellidos"
              required
              error={show("nombre")}
            >
              <input
                className={inputClass}
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                onBlur={() => setTouched((t) => ({ ...t, nombre: true }))}
                autoComplete="name"
              />
            </Field>

            <Field label="Empresa" required error={show("empresa")}>
              <input
                className={inputClass}
                value={empresa}
                onChange={(e) => setEmpresa(e.target.value)}
                onBlur={() => setTouched((t) => ({ ...t, empresa: true }))}
                autoComplete="organization"
              />
            </Field>

            <Field label="Email de contacto" required error={show("email")}>
              <input
                type="email"
                className={inputClass}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                autoComplete="email"
              />
            </Field>

            <Field label="Teléfono">
              <input
                type="tel"
                className={inputClass}
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                autoComplete="tel"
              />
            </Field>
          </div>

          {/* Servicios de interes (seleccion multiple, prefill desde configurador) */}
          <fieldset className="mt-6">
            <legend className="text-sm font-medium text-ink">
              Servicios de interés
            </legend>
            <p className="mt-1 text-xs text-muted">
              Selecciona los que quieras. Se rellenan solos desde el configurador
              y los paquetes.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {SERVICES.map((s) => {
                const on = servicios.includes(s.id);
                return (
                  <button
                    key={s.id}
                    type="button"
                    aria-pressed={on}
                    onClick={() => toggleServicio(s.id)}
                    className={cn(
                      "rounded-full border px-3 py-1.5 text-xs transition-[background-color,border-color,color,transform] duration-200 active:scale-95",
                      on
                        ? "border-accent bg-accent text-on-accent"
                        : "border-line bg-surface text-muted hover:border-accent hover:text-ink"
                    )}
                  >
                    {s.name}
                  </button>
                );
              })}
            </div>
          </fieldset>

          {/* Modalidad preferida */}
          <fieldset className="mt-6">
            <legend className="text-sm font-medium text-ink">
              Modalidad preferida
            </legend>
            <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:gap-6">
              {MODALITY_OPTIONS.map((opt) => (
                <label
                  key={opt.value}
                  className="flex cursor-pointer items-center gap-2 text-sm text-ink"
                >
                  <input
                    type="radio"
                    name="modalidad"
                    className="h-4 w-4 accent-[var(--color-accent)]"
                    checked={modalidad === opt.value}
                    onChange={() => setModalidad(opt.value)}
                  />
                  {opt.label}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="mt-6">
            <Field label="Número aproximado de empleados">
              <select
                className={inputClass}
                value={empleados}
                onChange={(e) => setEmpleados(e.target.value)}
              >
                <option value="">Selecciona un rango</option>
                {EMPLOYEE_RANGES.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <div className="mt-6">
            <Field label="Mensaje">
              <textarea
                rows={4}
                className={cn(inputClass, "resize-y")}
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                placeholder="Cuéntanos brevemente qué quieres resolver."
              />
            </Field>
          </div>

          <label className="mt-6 flex items-start gap-3 text-sm text-ink">
            <input
              type="checkbox"
              className="mt-0.5 h-4 w-4 accent-[var(--color-accent)]"
              checked={privacidad}
              onChange={(e) => setPrivacidad(e.target.checked)}
              onBlur={() => setTouched((t) => ({ ...t, privacidad: true }))}
            />
            <span>
              He leído y acepto la{" "}
              <a href="/privacidad" className="underline hover:text-muted">
                política de privacidad
              </a>
              .
            </span>
          </label>
          {show("privacidad") && (
            <p className="mt-1 text-xs text-pale-red-ink">
              {errors.privacidad}
            </p>
          )}

          {status === "error" && (
            <p className="mt-5 rounded-md bg-pale-red p-3 text-sm text-pale-red-ink">
              No hemos podido enviar la solicitud. Vuelve a intentarlo o
              escríbenos directamente.
            </p>
          )}

          <Button
            type="submit"
            size="lg"
            className="mt-7 w-full"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Enviando..." : "Enviar solicitud"}
          </Button>
        </form>
      </Reveal>
    </section>
  );
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string | false;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-ink">
        {label}
        {required && <span className="text-pale-red-ink"> *</span>}
      </span>
      <div className="mt-1.5">{children}</div>
      {error && <p className="mt-1 text-xs text-pale-red-ink">{error}</p>}
    </label>
  );
}
