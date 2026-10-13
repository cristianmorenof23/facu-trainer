import Link from "next/link";
import { FaArrowRight, FaQuoteLeft } from "react-icons/fa";
import { Reveal } from "../site-components";

export const metadata = { title: "Sobre mí | Facundo Oliva" };

export default function AboutPage() {
  return <main className="inner-page">
    <section className="page-hero" id="inicio"><div className="hero-grid"/><Reveal>
      <p className="eyebrow"><span/> Conocé a tu entrenador</p>
      <h1>EL LÍMITE<br/>LO PONÉS <em>VOS.</em></h1>
      <p>Soy Facu, técnico superior en actividad física y preparador físico, creador de esta propuesta de entrenamiento personalizado.</p>
    </Reveal></section>
    <section className="about section"><div className="section-label">01 / Un poco sobre mí</div><div className="about-layout">
      <Reveal><h2>ENTRENAR PARA<br/><em>VIVIR MEJOR.</em></h2></Reveal>
      <Reveal className="about-copy" delay={.12}><FaQuoteLeft className="quote-icon"/><p className="lead">Soy Facu, tengo 28 años y el entrenamiento y la actividad física me apasionan.</p>
        <p>Me formé como técnico superior en actividad física y entrenamiento de musculación, y como preparador físico. También me capacité en Cross Training y entrenamiento funcional.</p>
        <p>Entreno y desarrollo habilidades desde la adolescencia, con experiencia en fuerza, estética corporal, musculación y atletismo. Hoy quiero usar ese recorrido para influir positivamente en tus hábitos, tu físico y tu estilo de vida.</p>
        <p>Te acompaño para que puedas alcanzar los objetivos que te propongas, con un plan responsable, constancia y una orientación profesional.</p>
        <div className="signature"><span>Facundo Oliva</span><small>Técnico superior en actividad física</small><small>Preparador físico</small></div>
      </Reveal>
    </div><div className="values-row">{["Movimiento","Fuerza","Hábitos","Bienestar"].map((v,i)=><div key={v}><span>0{i+1}</span>{v}</div>)}</div></section>
    <Reveal><section className="philosophy section"><Reveal><p className="eyebrow"><span/> Mi misión y visión</p><h2>ENTRENAR CON<br/><em>RESPONSABILIDAD.</em></h2></Reveal>
      <div className="philosophy-grid">
        {[["Misión","Influir positivamente en la vida de las personas, promoviendo un cambio de hábitos y un bienestar integral mediante el entrenamiento y la actividad física."],["Visión","Formar una comunidad de personas que amen entrenar, incorporen buenos hábitos y busquen un bienestar integral."],["Mi compromiso","Seguir formándome para ofrecer un acompañamiento profesional, responsable y alejado de las modas sin fundamento."]].map(([t,p],i)=><Reveal className="philosophy-card" delay={i*.1} key={t}><span>0{i+1}</span><h3>{t}</h3><p>{p}</p></Reveal>)}
      </div><Link className="button primary" href="/contacto">Quiero empezar <FaArrowRight/></Link>
    </section></Reveal>
  </main>;
}
