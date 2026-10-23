import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Anton, Manrope } from "next/font/google";
import "./globals.css";
import { Footer, Header, SmoothScroll } from "./site-components";

const display = Anton({ variable: "--font-display", weight: "400", subsets: ["latin"] });
const body = Manrope({ variable: "--font-body", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://facu-trainer.vercel.app"),
  title: {
    default: "El límite lo ponés vos | Facundo Oliva",
    template: "%s | Facundo Oliva",
  },
  description: "Entrenador personal en Córdoba, Argentina. Planes personalizados de fuerza, hipertrofia, recomposición corporal y preparación física.",
  applicationName: "Facundo Oliva Entrenamiento",
  authors: [{ name: "Facundo Oliva" }],
  creator: "Facundo Oliva",
  keywords: ["entrenador personal", "entrenamiento personalizado", "preparador físico", "hipertrofia", "fuerza", "recomposición corporal", "Córdoba", "Argentina"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://facu-trainer.vercel.app",
    siteName: "Facundo Oliva | El límite lo ponés vos",
    title: "El límite lo ponés vos | Facundo Oliva",
    description: "Entrenamientos personalizados y preparación física en Córdoba, Argentina.",
    images: [{ url: "/logo-mark.png", width: 512, height: 540, alt: "Logo de Facundo Oliva" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "El límite lo ponés vos | Facundo Oliva",
    description: "Entrenamientos personalizados y preparación física en Córdoba, Argentina.",
    images: ["/logo-mark.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="es" className={`${display.variable} ${body.variable}`}><body><SmoothScroll/><Header/>{children}<Footer/><Analytics/></body></html>;
}
