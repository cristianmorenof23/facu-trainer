"use client";

import { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { Reveal } from "../site-components";

const videos = [
  { src: "/video_1.mp4", title: "Testimonio 1", accent: "#00f58a", word: "EMPEZAR" },
  { src: "/video_2.mp4", title: "Testimonio 2", accent: "#b2ff4a", word: "AVANZAR" },
  { src: "/video_3.mp4", title: "Testimonio 3", accent: "#00d9ff", word: "SUPERARSE" },
  { src: "/video_4.mp4", title: "Testimonio 4", accent: "#ffb84a", word: "CONSTANCIA" },
  { src: "/video_5.mp4", title: "Testimonio 5", accent: "#c084fc", word: "CRECER" },
];

function TestimonialVideo({ video, index }: { video: typeof videos[number]; index: number }) {
  const cardRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [nearViewport, setNearViewport] = useState(false);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [aspectRatio, setAspectRatio] = useState("9 / 16");

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setNearViewport(true);
        observer.disconnect();
      }
    }, { rootMargin: "250px 0px" });
    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const stopOtherVideos = (event: Event) => {
      const activeVideo = (event as CustomEvent<HTMLVideoElement>).detail;
      if (activeVideo !== videoRef.current) {
        videoRef.current?.pause();
      }
    };
    window.addEventListener("testimonial:play", stopOtherVideos);
    return () => window.removeEventListener("testimonial:play", stopOtherVideos);
  }, []);

  const play = async () => {
    const element = videoRef.current;
    if (!element) return;
    if (!started) setStarted(true);
    window.dispatchEvent(new CustomEvent("testimonial:play", { detail: element }));
    try {
      await element.play();
    } catch {
      setPlaying(false);
    }
  };

  const accent = encodeURIComponent(video.accent);
  const poster = `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 960"><defs><linearGradient id="g" x2="1" y2="1"><stop stop-color="#171d19"/><stop offset="1" stop-color="#080a09"/></linearGradient><pattern id="p" width="54" height="54" patternUnits="userSpaceOnUse"><path d="M54 0H0V54" fill="none" stroke="#ffffff" stroke-opacity=".035"/></pattern></defs><rect width="720" height="960" fill="url(#g)"/><rect width="720" height="960" fill="url(#p)"/><circle cx="565" cy="190" r="230" fill="none" stroke="${accent}" stroke-opacity=".25" stroke-width="2"/><path d="M0 790 720 500v460H0Z" fill="${accent}" fill-opacity=".06"/><text x="56" y="92" fill="${accent}" font-family="Arial,sans-serif" font-size="20" font-weight="700" letter-spacing="5">FACUNDO OLIVA · HISTORIAS REALES</text><text x="54" y="625" fill="#f1f2ec" font-family="Arial,sans-serif" font-size="76" font-weight="900" letter-spacing="-3">${video.word}</text><text x="58" y="675" fill="#a9ada8" font-family="Arial,sans-serif" font-size="24" letter-spacing="4">CADA PROCESO CUENTA</text><path d="M54 720h${(index + 1) * 88}" stroke="${accent}" stroke-width="6"/></svg>`)}`;

  return <Reveal className="testimonial-video-reveal" delay={index * .07}>
    <article className={`testimonial-video-card${started ? " is-started" : ""}`} ref={cardRef} style={{ "--video-accent": video.accent } as React.CSSProperties}>
      {nearViewport && <video
        ref={videoRef}
        className="testimonial-video"
        controls={started}
        playsInline
        preload="none"
        poster={poster}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        onLoadedMetadata={(event) => {
          const { videoWidth, videoHeight } = event.currentTarget;
          if (videoWidth && videoHeight) setAspectRatio(`${videoWidth} / ${videoHeight}`);
        }}
        style={{ "--video-ratio": aspectRatio } as React.CSSProperties}
      ><source src={video.src} type="video/mp4"/>Tu navegador no puede reproducir este video.</video>}
      {!started && <button className="testimonial-play" type="button" onClick={play} aria-label={`Reproducir ${video.title}`}><FaPlay/></button>}
      {started && !playing && <button className="testimonial-play is-paused" type="button" onClick={play} aria-label={`Continuar ${video.title}`}><FaPlay/></button>}
      <span className="video-caption">{video.title}</span>
    </article>
  </Reveal>;
}

export function TestimonialGallery() {
  return <div className="testimonial-grid video-grid">{videos.map((video, index) => <TestimonialVideo video={video} index={index} key={video.src}/>)}</div>;
}
