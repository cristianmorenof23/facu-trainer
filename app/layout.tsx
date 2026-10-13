import type { Metadata } from "next";
import { Anton, Manrope } from "next/font/google";
import "./globals.css";
import { Footer, Header, SmoothScroll } from "./site-components";

const display = Anton({ variable: "--font-display", weight: "400", subsets: ["latin"] });
const body = Manrope({ variable: "--font-body", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "El límite lo ponés vos | Facundo Oliva",
  description: "Entrenamientos personalizados de fuerza, hipertrofia, recomposición corporal y preparación física con Facundo Oliva.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="es" className={`${display.variable} ${body.variable}`}><body><SmoothScroll/><Header/>{children}<Footer/></body></html>;
}
