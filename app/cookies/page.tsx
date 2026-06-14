import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Politica de cookies" };

export default function Cookies() {
  return (
    <LegalPage title="Politica de cookies">
      <p>
        Texto pendiente de redaccion definitiva. Detallara las cookies
        utilizadas, su finalidad y la forma de gestionarlas. La analitica
        prevista es de tipo privacy-first y sin cookies de seguimiento de
        terceros.
      </p>
    </LegalPage>
  );
}
