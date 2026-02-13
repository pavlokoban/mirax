"use client";

import { motion } from "framer-motion";

const rows = [
  {
    left: "Фокус на визуале и функционале",
    right: "Фокус на логике, структуре и смыслах",
  },
  {
    left: "SEO и структура — после запуска",
    right: "ИИ-оптимизация на этапе проектирования",
  },
  {
    left: "Продвижение через рекламу",
    right: "Рост через рекомендации ИИ и органику",
  },
  {
    left: "Сайт как витрина",
    right: "Сайт как экспертный источник",
  },
];

export default function DifferenceSection() {
  return (
    <section id="difference" className="w-full py-28 bg-[#1af287]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Заголовок */}
        <h2 className="text-4xl md:text-6xl font-bold mb-20 max-w-7xl tracking-tight">
          Чем разработка сайтов под ИИ отличается от обычной?
        </h2>

        {/* Таблица эволюции */}
        <div className="max-w-7xl space-y-6">

          {rows.map((row, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group flex flex-col md:flex-row md:items-center justify-between border-b border-black/20 pb-6"
            >
              {/* Левая часть */}
              <div className="md:w-1/2 text-black/60 text-base md:text-lg transition group-hover:opacity-40">
                {row.left}
              </div>

              {/* Стрелка */}
              <div className="hidden md:block px-6 text-2xl opacity-50 group-hover:opacity-100 transition">
                →
              </div>

              {/* Правая часть */}
              <div className="md:w-1/2 font-semibold text-base md:text-lg transition group-hover:translate-x-1">
                {row.right}
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
