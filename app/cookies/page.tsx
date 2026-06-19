import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Política de cookies" };

export default function Cookies() {
  return (
    <LegalPage title="Política de cookies">
      <p>
        Texto pendiente de redacción definitiva. Detallará las cookies
        utilizadas, su finalidad y la forma de gestionarlas. La analítica
        prevista es de tipo privacy-first y sin cookies de seguimiento de
        terceros.
      </p>
    </LegalPage>
  );
}
