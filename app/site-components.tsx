"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";
import Lenis from "lenis";
import { FaArrowRight, FaArrowUp, FaBars, FaInstagram, FaTimes, FaWhatsapp } from "react-icons/fa";

const whatsappUrl = "https://wa.me/5493516542098";
const instagramUrl = "https://www.instagram.com/facu.otraining98/?hl=es";

const nav=[["Inicio","/"],["Sobre mí","/sobre-mi"],["Entrenamientos","/entrenamientos"],["Resultados","/resultados"],["Contacto","/contacto"]];

export function SmoothScroll(){const lenisRef=useRef<Lenis|null>(null);useEffect(()=>{const instance=new Lenis({autoRaf:true,smoothWheel:true});lenisRef.current=instance;return()=>{instance.destroy();lenisRef.current=null}},[]);const scrollToTop=()=>{const start=window.scrollY;const duration=1600;const startTime=performance.now();const ease=(t:number)=>1-Math.pow(1-t,4);const frame=(now:number)=>{const progress=Math.min((now-startTime)/duration,1);window.scrollTo(0,start*(1-ease(progress)));if(progress<1)requestAnimationFrame(frame)};requestAnimationFrame(frame)};return <button className="back-to-top" type="button" aria-label="Volver suavemente al inicio" onClick={scrollToTop}><FaArrowUp/></button>}

export function Reveal({children,className="",delay=0}:{children:React.ReactNode;className?:string;delay?:number}){const reduce=useReducedMotion();return <motion.div className={className} initial={{opacity:0,y:34,filter:"blur(5px)"}} whileInView={{opacity:1,y:0,filter:"blur(0px)"}} viewport={{once:true,amount:.12,margin:"0px 0px -5% 0px"}} transition={{duration:reduce?0:.75,delay:reduce?0:delay,ease:[.22,1,.36,1]}}>{children}</motion.div>}

export function Header(){const [open,setOpen]=useState(false);const pathname=usePathname();return <header className="topbar site-header"><Link className="brand" href="/" aria-label="Facundo Oliva, inicio"><Image className="brand-logo" src="/logo-mark.png" alt="" width={52} height={56} priority/><div>FACUNDO<small>OLIVA</small></div></Link><nav className={open?"nav open":"nav"} aria-label="Navegación principal">{nav.map(([label,href])=><Link className={pathname===href?"active":""} key={href} href={href} onClick={()=>setOpen(false)}>{label}</Link>)}</nav><Link className="header-cta" href="/entrenamientos">Empezá hoy <FaArrowRight/></Link><button className="menu-button" onClick={()=>setOpen(!open)} aria-label="Abrir menú" aria-expanded={open}>{open?<FaTimes/>:<FaBars/>}</button></header>}

export function Footer(){return <footer><div className="footer-main"><div className="footer-brand-block"><Link className="brand" href="/" aria-label="Facundo Oliva, inicio"><Image className="brand-logo" src="/logo-mark.png" alt="" width={60} height={64}/><div>FACUNDO<small>OLIVA</small></div></Link><p>Entrenamiento con propósito.<br/>El límite lo ponés vos.</p></div><div className="footer-nav-block"><span className="footer-kicker">Explorá</span><div className="footer-links">{nav.map(([label,href])=><Link href={href} key={href}>{label}</Link>)}</div></div><div className="footer-contact-block"><span className="footer-kicker">Hablemos de tu objetivo</span><Link className="footer-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer"><FaWhatsapp/> Escribime por WhatsApp</Link><Link className="social" href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram de Facundo"><FaInstagram/></Link></div></div><div className="footer-bottom"><span>© 2026 Facundo Oliva</span><span>Entrenador personal · Córdoba, Argentina</span></div></footer>}

export function TrainerPhoto(){return <motion.div className="hero-visual" initial={{opacity:0,scale:.94}} animate={{opacity:1,scale:1}} transition={{duration:.9,delay:.15}}><div className="photo-placeholder"><img className="trainer-photo ready" src="/facu_trainer.png" alt="Facundo Oliva, entrenador personal"/><Image className="photo-watermark" src="/logo-transparent.png" alt="" width={64} height={90}/></div><div className="photo-frame" aria-hidden="true"><svg viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M10 1H99V6M0 95V100H10M90 100H94V96"/></svg></div><div className="result-chip"><strong>01</strong><span>Objetivo claro<br/>Plan a medida</span></div></motion.div>}

export function ContactForm(){const submit=(event:FormEvent<HTMLFormElement>)=>{event.preventDefault();const data=new FormData(event.currentTarget);const message=`Hola Facundo, soy ${data.get("name")}. Mi objetivo es: ${data.get("goal")}.`;window.open(`${whatsappUrl}?text=${encodeURIComponent(message)}`,"_blank","noopener,noreferrer")};return <form onSubmit={submit}><label>Tu nombre<input required name="name" placeholder="¿Cómo te llamás?"/></label><label>Tu objetivo<textarea required name="goal" placeholder="Contame brevemente qué querés lograr" rows={5}/></label><button className="button primary" type="submit"><FaWhatsapp/> Hablar por WhatsApp <FaArrowRight/></button><small>Al enviar, se abrirá WhatsApp con tu mensaje listo.</small></form>}
