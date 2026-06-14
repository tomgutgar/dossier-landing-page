import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Aviso legal" };

export default function AvisoLegal() {
  return (
    <LegalPage title="Aviso legal">
      <p>
        Texto pendiente de redaccion definitiva. Incluira la identificacion del
        titular del sitio, los datos de contacto, las condiciones de uso y la
        informacion exigida por la LSSI-CE.
      </p>
    </LegalPage>
  );
}
