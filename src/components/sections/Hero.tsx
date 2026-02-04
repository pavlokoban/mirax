"use client";


import { motion, useScroll, useTransform } from "framer-motion";
import Container from "@/components/Container";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { AIButton } from "@/components/ui/ai-button";
// import ScrambledText from "@/components/ui/ScrambledText";
import ruFlag from "@/assets/flags/ru.svg";
import { gsap } from "gsap";


function useGraphPoints(basePoints: number) {
  const [points, setPoints] = useState(basePoints);

  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;

      if (w < 368) return setPoints(Math.max(20, Math.floor(basePoints / 3)));
      if (w < 768) return setPoints(Math.max(30, Math.floor(basePoints / 2)));

      setPoints(basePoints);
    };

    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, [basePoints]);

  return points;
}


function generateRealisticGraph(points: number) {
  const values: number[] = [];

  for (let i = 0; i < points; i++) {
    const t = i / (points - 1);

    // 1. Базовый экспоненциальный рост
    const base =
      Math.pow(t, 1.45) * 0.75;

    // 2. Волны, усиливающиеся к концу
    const volatility =
      (0.06 + t * 0.18) *
      (
        Math.sin(t * Math.PI * 3.2) +
        Math.sin(t * Math.PI * 7.5) * 0.6
      );

    // 3. Финальный буст (последняя треть)
    const lateBoost =
      t > 0.72
        ? Math.pow((t - 0.72) / 0.28, 1.4) * 0.35
        : 0;

    // 4. Микрошум (очень слабый)
    const noise = (Math.random() - 0.5) * 0.015;

    let value = base + volatility + lateBoost + noise;

    // ограничения
    value = Math.max(0.06, Math.min(value, 1));

    values.push(value);
  }

  return values;
}

// const GRAPH_POINTS = 150;

function AIIcon({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/80 backdrop-blur-md border border-black/10">
      <Image src={src} alt={alt} width={24} height={24} />
    </div>
  );
}

export default function Hero() {
const BASE_GRAPH_POINTS = 150;
const graphPoints = useGraphPoints(BASE_GRAPH_POINTS);
const GRAPH_HEIGHT = 260;
const titleRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (!titleRef.current) return;

    const lines = titleRef.current.querySelectorAll(".line");

    gsap.to(lines, {
      y: "0%",
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.08,
      delay: 0.15,
    });
  }, []);

  const { scrollYProgress } = useScroll();

  // параллакс точек
  const dotsY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  // генерация графика (один раз)
  const graph = useMemo(
    // () => generateRealisticGraph(GRAPH_POINTS),
    // []
    () => generateRealisticGraph(graphPoints),
  [graphPoints]
  );

  // задержка появления орбит
  const [showOrbit, setShowOrbit] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShowOrbit(true), 3100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative overflow-hidden hero-dots pt-32 pb-24 lg:min-h-screen flex items-center">

{/* PURPLE AMBIENT GLOW */}
<div
  className="
    pointer-events-none
    absolute bottom-[0px] left-1/2 -translate-x-1/2
    w-[160%] h-[60%]
    bg-[#8b7cff]/0
    blur-[200px]
    opacity-90
    z-[1]
  "
/>

      {/* DOTS PARALLAX */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: dotsY }}
      />

      {/* GRAPH */}
      {/* <svg
        viewBox="0 0 1200 300"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 w-full h-[45%]"
      > */}
<svg
  viewBox="0 0 100 100"
  preserveAspectRatio="none"
  className="
    absolute bottom-0
    left-0
    w-screen
    h-[45%]
    pointer-events-none
    z-[2]
  "
>

        <defs>
          <linearGradient id="fadeUp" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="white" />
            <stop offset="70%" stopColor="white" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
     {graph.map((v, i) => {
  const step = 100 / graph.length;
  const x = i * step;

  const jitter = 0.85 + Math.random() * 0.3;
  const yTop = 100 - v * 100 * jitter;

  return (
    <motion.line
      key={i}
      x1={x}
      x2={x}
      y1={100}
      y2={100}
      stroke="rgba(0,0,0,0.18)"
      strokeWidth="0.15"
      animate={{ y2: yTop }}
      transition={{
        delay: i * 0.015,
        duration: 1.1,
        ease: [0.22, 0.61, 0.36, 1],
      }}
    />
  );
})}
      </svg>

      <Container>
        <div className="grid gap-16 md:grid-cols-2 items-center relative z-10">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6 }}
          >
                           {/* <span className="inline-flex items-center rounded-full px-6 py-2 text-xs font-medium mb-4 border border-black text-brand">
               Веб-сайты, оптимизированные для ИИ поиск и SEO 🇷🇺  
            </span> */}

            <span className="inline-flex items-center gap-2 rounded-full py-2 text-xs font-medium mb-4 text-brand">
  Сайты, готовые к поиску будущего
<img src={ruFlag.src} alt="RU" className="w-4 h-4" />
</span>
           
<h1
 ref={titleRef}
  className="hero-title font-black leading-[1.05]"
  data-reveal
>
  {/* <span className="line-mask">
    <span className="line">Веб-разработка, </span>
  </span>
  <span className="line-mask">
    <span className="line">где ИИ и люди </span>
  </span>
    <span className="line-mask">
    <span className="line">говорят на одном языке</span>
  </span> */}
<span className="line-mask">
    <span className="line">Создаем сайты  </span>
  </span>
  <span className="line-mask">
    <span className="line">для людей </span>
      </span>
      <span className="line-mask">
    <span className="line">в эпоху ИИ </span>
  </span>


</h1>
<br></br>
            <p className="text-md mb-10 text-black">
              Мы создаём сайты, которые рекомендуют Алиса, Gemini и другие ИИ-системы — так же, как раньше это делал Яндекс SEO. <br />
Мы проектируем понятные сайты для людей с учётом логики ИИ-ранжирования: экспертный контент, правильная структура, микроразметка, E-E-A-T и семантика нового поколения.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact/#start-discussion">
                <AIButton style={{ background: "#00F176", color: "black" }}>
                  Получить консультацию
                </AIButton>
              </Link>
              <Link href="/#services">
                <AIButton variant="outline" style={{ background: "#ffffffff", color: "black", border: "none" }}>Наши услуги</AIButton>
              </Link>
            </div>

          </motion.div>

          {/* RIGHT — ORBITS */}
          {showOrbit && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative hidden md:block"
            >
              <div className="absolute -inset-8 bg-brand/20 blur-3xl rounded-full" />
  {/* <div className="absolute inset-0 rounded-full bg-[#00f176]/25 blur-[120px] opacity-80" /> */}
     
              <div className="relative h-[520px] w-[520px] mx-auto">
              


  {/* GREEN AI GLOW */}
  <div
    className="
      absolute inset-0 rounded-full
      bg-[#00f176]/25
      blur-[120px]
      opacity-70
    "
  />

  {/* PURPLE AMBIENT GLOW  */}
  <div
    className="
      absolute -bottom-24 left-1/2 -translate-x-1/2
      w-[140%] h-[60%]

      blur-[160px]
      opacity-80
      rounded-full
    "
  />

  {/* ORBIT CONTENT */}
  <div className="hidden lg:block relative z-10 h-full w-full">
    {/* CENTER */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-24 h-24 rounded-full border border-black/10" />
    </div>

    {/* ORBITS */}
    <OrbitingCircles radius={260} iconSize={36} duration={22}>
      <AIIcon src="/ai/alisa-yandex.svg" alt="Алиса Яндекс ИИ" />
      <AIIcon src="/ai/gemini.svg" alt="Gemini" />
      <AIIcon src="/ai/grok.svg" alt="Grok" />
      <AIIcon src="/ai/alisa-yandex.svg" alt="Алиса Яндекс ИИ" />
      <AIIcon src="/ai/chatgpt.svg" alt="ЧатДжипити ИИ" />
      <AIIcon src="/ai/grok.svg" alt="Grok" />
    </OrbitingCircles>

    <OrbitingCircles radius={120} reverse iconSize={30} duration={18}>
      <AIIcon src="/ai/alisa-yandex.svg" alt="Алиса Яндекс ИИ" />
      <AIIcon src="/ai/chatgpt.svg" alt="ChatGPT" />
      <AIIcon src="/ai/grok.svg" alt="Grok" />
      <AIIcon src="/ai/alisa-yandex.svg" alt="Алиса Яндекс ИИ" />
      <AIIcon src="/ai/gemini.svg" alt="Гугл" />

    </OrbitingCircles>
  </div>
</div>
            </motion.div>
          )}

        </div>
      </Container>
    </section>
  );
}
