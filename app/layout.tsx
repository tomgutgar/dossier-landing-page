import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { SiteProvider } from "@/lib/context";
import { MotionProvider } from "@/components/motion/provider";
import { SITE } from "@/lib/data";
import "./globals.css";

const sans = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hanken",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-space",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
});

const description =
  "Automatizamos los procesos que te quitan tiempo, sin cambiar lo que ya usas. Servicios modulares de automatización, digitalización e IA para PYMEs, con precio cerrado.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Automatización y digitalización para PYMEs`,
    template: `%s — ${SITE.name}`,
  },
  description,
  keywords: [
    "automatización",
    "digitalización",
    "inteligencia artificial",
    "PYME",
    "automatización de procesos",
    "IA para empresas",
  ],
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — Automatización y digitalización para PYMEs`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Automatización y digitalización para PYMEs`,
    description,
  },
  alternates: { canonical: SITE.url },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f6f7f9",
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
      className={`${sans.variable} ${display.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Aplica el tema guardado (o la preferencia del sistema) antes del
            primer paint para evitar un parpadeo de modo claro. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.dataset.theme='dark'}}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MotionProvider>
          <SiteProvider>{children}</SiteProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
