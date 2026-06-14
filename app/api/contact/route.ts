import { NextResponse } from "next/server";

// Endpoint propio del formulario (PRD 7.1: sin servicios de formulario de terceros).
// STUB: valida los campos requeridos y responde OK. La integracion real
// (webhook al equipo + email de confirmacion con dossier PDF) se enchufa aqui.

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  nombre?: string;
  empresa?: string;
  email?: string;
  telefono?: string;
  servicios?: string[];
  modalidad?: string;
  empleados?: string;
  mensaje?: string;
};

export async function POST(request: Request) {
  let data: ContactPayload;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "JSON invalido" },
      { status: 400 }
    );
  }

  const errors: Record<string, string> = {};
  if (!data.nombre?.trim()) errors.nombre = "requerido";
  if (!data.empresa?.trim()) errors.empresa = "requerido";
  if (!data.email?.trim() || !emailRe.test(data.email)) {
    errors.email = "invalido";
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  // TODO(integracion): notificar al equipo via webhook (n8n o endpoint propio).
  //   await fetch(process.env.CONTACT_WEBHOOK_URL!, { method: "POST", body: JSON.stringify(data) });
  // TODO(integracion): enviar email de confirmacion al lead con el dossier PDF (Resend o SMTP).
  //   await resend.emails.send({ to: data.email, attachments: [dossierPdf], ... });

  console.log("[contacto] nueva solicitud:", {
    empresa: data.empresa,
    email: data.email,
    servicios: data.servicios,
    modalidad: data.modalidad,
  });

  return NextResponse.json({ ok: true });
}
