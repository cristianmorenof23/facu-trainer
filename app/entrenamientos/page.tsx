import { FaArrowRight, FaCheck, FaWhatsapp } from "react-icons/fa";
import { LuBicepsFlexed, LuChartNoAxesCombined, LuHeartPulse, LuZap, LuDumbbell } from "react-icons/lu";
import { Reveal } from "../site-components";

const services = [
  { icon: LuHeartPulse, n: "01", title: "Plan de iniciación", text: "Empezá a entrenar con una base sólida, incluso si nunca fuiste al gimnasio o todavía no entrenaste de forma planificada.", items: ["Aprendizaje de patrones de movimiento", "Técnica de los ejercicios", "Progresión paso a paso"] },
  { icon: LuBicepsFlexed, n: "02", title: "Hipertrofia", text: "Para quienes ya tienen experiencia y quieren desarrollar masa muscular, por estética o para alcanzar un objetivo específico.", items: ["Planificación de fuerza e hipertrofia", "Progresión adaptada a tu experiencia", "Seguimiento de tus avances"] },
  { icon: LuDumbbell, n: "03", title: "Entrenamiento de fuerza", text: "Mejorá tu capacidad de generar fuerza si ya entrenás y dominás los ejercicios básicos con barra.", items: ["Press de banca, sentadilla y peso muerto", "Trabajo de fuerza máxima", "Aplicación a objetivos deportivos o personales"] },
  { icon: LuChartNoAxesCombined, n: "04", title: "Recomposición corporal", text: "Buscá mejorar tu composición corporal combinando el entrenamiento de fuerza con la resistencia aeróbica.", items: ["Entrenamiento concurrente", "Fuerza y resistencia aeróbica", "Proceso adaptado a tu punto de partida"] },
  { icon: LuZap, n: "05", title: "Potencia y fuerza rápida", text: "Para deportistas con una base de fuerza que quieren desarrollar potencia y trasladarla a su actividad.", items: ["Desarrollo de fuerza rápida", "Transferencia al rendimiento deportivo", "Preparación según tu disciplina"] },
];

export const metadata = {
  title: "Entrenamientos personalizados",
  description: "Planes de iniciación, hipertrofia, fuerza, recomposición corporal y potencia adaptados a tus objetivos.",
  alternates: { canonical: "/entrenamientos" },
};

export default function TrainingPage() {
  return <main className="inner-page">
    <section className="page-hero" id="inicio"><div className="hero-grid"/><Reveal>
      <p className="eyebrow"><span/> Entrenamientos personalizados</p>
      <h1>UN PLAN PARA<br/><em>TU OBJETIVO.</em></h1>
      <p>Elegí el tipo de entrenamiento que se acerca a lo que buscás. La planificación se adapta a tu experiencia y a tu punto de partida.</p>
    </Reveal></section>
    <section className="services section"><div className="section-heading">
      <Reveal><h2>ELEGÍ TU<br/><em>ENTRENAMIENTO.</em></h2></Reveal>
      <Reveal><p>Cada propuesta tiene un propósito y un punto de partida distinto. Si no sabés cuál se ajusta a vos, escribime y lo conversamos.</p></Reveal>
    </div><div className="service-grid">{services.map((s,i)=>{const Icon=s.icon;return <Reveal className="service-card" delay={i*.06} key={s.title}>
      <div className="card-top"><Icon/><span>{s.n}</span></div><h3>{s.title}</h3><p>{s.text}</p>
      <ul>{s.items.map(x=><li key={x}><FaCheck/> {x}</li>)}</ul><a href={`https://wa.me/5493516542098?text=${encodeURIComponent(`Hola Facu, me interesa el plan de ${s.title}. Quiero que me cuentes cómo sería y qué necesitás para empezar.`)}`} target="_blank" rel="noreferrer">Consultar por WhatsApp <FaWhatsapp/></a>
    </Reveal>})}</div></section>
    <Reveal><section className="process section"><div className="section-label">Cómo empezamos</div><Reveal className="process-head"><h2>UN PLAN CLARO.<br/>UN PROCESO <em>PROPIO.</em></h2></Reveal>
      <div className="process-list">{[["01","Nos conocemos","Hablamos de tu experiencia, tu actividad y los objetivos que querés alcanzar."],["02","Elegimos el enfoque","Definimos qué tipo de entrenamiento se ajusta mejor a tu punto de partida."],["03","Planificamos y avanzamos","Entrenás con una planificación progresiva y revisamos el proceso para hacer ajustes."]].map(([n,t,p])=><Reveal className="process-item" key={n}><span>{n}</span><h3>{t}</h3><p>{p}</p><FaArrowRight/></Reveal>)}</div>
    </section></Reveal>
  </main>;
}
