import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Política de privacidad" };

export default function Privacidad() {
  return (
    <LegalPage title="Política de privacidad">
      <p>
        Texto pendiente de redacción definitiva conforme al RGPD y la LOPDGDD.
        Aquí se detallarán el responsable del tratamiento, las finalidades, la
        base jurídica, los plazos de conservación y los derechos del interesado.
      </p>
      <p>
        Los datos enviados a través del formulario de contacto se utilizan
        únicamente para responder a la solicitud de consulta.
      </p>
    </LegalPage>
  );
}
