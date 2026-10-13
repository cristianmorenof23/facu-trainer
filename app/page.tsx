import Link from "next/link";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi2";
import { Reveal, TrainerPhoto } from "./site-components";

export default function Home() {
  return <main>
    <section className="hero" id="inicio"><div className="hero-grid" aria-hidden="true"/><div className="hero-copy"><Reveal><div className="eyebrow"><span/> Facundo Oliva · Entrenador personal</div><h1>EL LÍMITE<br/>LO PONÉS <em>VOS.</em></h1><p>Entrenamientos personalizados para que alcances tus objetivos con un plan pensado para vos.</p><div className="hero-actions"><Link className="button primary" href="/contacto">Quiero empezar <FaArrowRight/></Link><Link className="button ghost" href="/entrenamientos"><FaPlay/> Ver entrenamientos</Link></div></Reveal></div><TrainerPhoto/><Link className="scroll-hint" href="#propuesta">Descubrí más <HiArrowDown/></Link></section>
    <section className="home-intro section" id="propuesta"><div className="section-label">El límite lo ponés vos</div><div className="about-layout"><Reveal><p className="eyebrow"><span/> Una propuesta personalizada</p><h2>ENTRENÁ CON<br/><em>UN PROPÓSITO.</em></h2></Reveal><Reveal delay={.12}><p className="lead">Soy Facu, técnico superior en actividad física y preparador físico.</p><p className="body-copy">Te acompaño a desarrollar tus capacidades y construir hábitos con una planificación responsable, basada en tu experiencia y tus objetivos.</p><Link className="text-link" href="/sobre-mi">Conocé mi historia <FaArrowRight/></Link></Reveal></div></section>
    <section className="home-paths section"><Reveal><p className="eyebrow"><span/> Explorá la propuesta</p><h2>TODO LO QUE<br/><em>NECESITÁS.</em></h2></Reveal><Reveal><div className="path-grid">{[["01","Sobre mí","Conocé quién soy y cómo entiendo el entrenamiento.","/sobre-mi"],["02","Entrenamientos","Descubrí las distintas formas de trabajar juntos.","/entrenamientos"],["03","Resultados","El espacio para historias y procesos reales.","/resultados"]].map(([n,t,d,h])=><Link href={h} className="path-card" key={t}><span>{n}</span><h3>{t}</h3><p>{d}</p><FaArrowRight/></Link>)}</div></Reveal></section>
    <section className="home-cta section"><Reveal><p className="eyebrow"><span/> El primer paso depende de vos</p><h2>¿EMPEZAMOS<br/><em>JUNTOS?</em></h2><Link className="button primary" href="/contacto">Hablemos de tu objetivo <FaArrowRight/></Link></Reveal></section>
  </main>;
}
