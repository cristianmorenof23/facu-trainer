import Link from "next/link";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import { Reveal } from "../site-components";
import { TestimonialGallery } from "./testimonial-gallery";

export const metadata = { title: "Resultados | Facundo Oliva" };

export default function ResultsPage() {
  return <main className="inner-page">
    <section className="page-hero light" id="inicio"><div className="hero-grid"/><Reveal>
      <p className="eyebrow"><span/> Historias reales</p>
      <h1>EL PROCESO SE<br/><em>VE Y SE SIENTE.</em></h1>
      <p>Personas reales, objetivos propios y el camino que construimos con entrenamiento y constancia.</p>
    </Reveal></section>
    <section className="results section"><div className="section-heading">
      <Reveal><h2>CADA AVANCE<br/><em>CUENTA.</em></h2></Reveal>
      <Reveal><p>Conocé algunas experiencias de quienes ya empezaron su proceso de entrenamiento.</p></Reveal>
    </div>
    <TestimonialGallery/>
    <div className="results-note"><Reveal><h3>¿Querés ser parte de la próxima historia?</h3><p>Contame qué objetivo tenés y vemos juntos qué plan se adapta mejor a vos.</p><div className="results-actions"><Link className="button primary" href="/entrenamientos">Ver entrenamientos <FaArrowRight/></Link><Link className="button whatsapp-button" href="https://wa.me/5493516542098?text=Hola%20Facu%2C%20quiero%20consultarte%20por%20un%20plan%20de%20entrenamiento." target="_blank" rel="noreferrer"><FaWhatsapp/> Escribirte por WhatsApp</Link></div></Reveal></div>
    </section>
  </main>;
}
