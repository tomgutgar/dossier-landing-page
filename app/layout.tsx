import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, Newsreader, JetBrains_Mono } from "next/font/google";
import { SiteProvider } from "@/lib/context";
import { SITE } from "@/lib/data";
import "./globals.css";

const sans = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hanken",
});

const serif = Newsreader({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  variable: "--font-newsreader",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
});

const description =
  "Automatizamos los procesos que te quitan tiempo, sin cambiar lo que ya usas. Servicios modulares de automatizacion, digitalizacion e IA para PYMEs, con precio cerrado.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Automatizacion y digitalizacion para PYMEs`,
    template: `%s — ${SITE.name}`,
  },
  description,
  keywords: [
    "automatizacion",
    "digitalizacion",
    "inteligencia artificial",
    "PYME",
    "automatizacion de procesos",
    "IA para empresas",
  ],
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — Automatizacion y digitalizacion para PYMEs`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Automatizacion y digitalizacion para PYMEs`,
    description,
  },
  alternates: { canonical: SITE.url },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#fbfbfa",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.name,
  description,
  url: SITE.url,
  email: SITE.email,
  areaServed: "ES",
  availableLanguage: "es",
  sameAs: [SITE.linkedin],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${sans.variable} ${serif.variable} ${mono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteProvider>{children}</SiteProvider>
      </body>
    </html>
  );
}
