"use client";

import Container from "@/components/Container";
import { motion } from "framer-motion";
import ScrambledText from '@/components/ui/ScrambledText';

const features = [
  {
    title: "KI-freundliche Struktur",
    text: "Klare Informationsarchitektur, semantische Elemente und strukturierte Daten.",
  },
  {
    title: "Moderne Webentwicklung",
    text: "Sauberer Code, modulare Komponenten, skalierbar und performant.",
  },
  {
    title: "Technische SEO",
    text: "Core Web Vitals, Lighthouse, Crawling, interne Verlinkung und vieles mehr.",
  },
  {
    title: "Transparente Prozesse",
    text: "Klare Kommunikation. Verlässliche Planung. Messbare Ergebnisse.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-28 bg-gradient-to-b from-white to-slate-100 text-black relative overflow-hidden">
      <Container>
        {/* Заголовок */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl font-display font-semibold mb-6"
        >
          Warum Unternehmen mit uns arbeiten
        </motion.h2>

        {/* Подзаголовок */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-slate-600 max-w-2xl mb-16 text-lg"
        >
          Wir verbinden technisches Know-how, UX-Design und AI-Optimierung zu
          einer modernen, leistungsstarken Website-Struktur.
        </motion.p>

        {/* Карточки */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="
                p-6 rounded-xl2 border border-slate-200 
                bg-white/80 backdrop-blur-sm
                hover:border-brand hover:shadow-[0_0_20px_rgba(0,241,118,0.25)]
                transition cursor-default
              "
            >
              <h3 className="text-xl font-semibold mb-2 text-brand">
                {f.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {f.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

