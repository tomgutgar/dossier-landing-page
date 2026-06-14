import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Politica de privacidad" };

export default function Privacidad() {
  return (
    <LegalPage title="Politica de privacidad">
      <p>
        Texto pendiente de redaccion definitiva conforme al RGPD y la LOPDGDD.
        Aqui se detallaran el responsable del tratamiento, las finalidades, la
        base juridica, los plazos de conservacion y los derechos del interesado.
      </p>
      <p>
        Los datos enviados a traves del formulario de contacto se utilizan
        unicamente para responder a la solicitud de consulta.
      </p>
    </LegalPage>
  );
}
