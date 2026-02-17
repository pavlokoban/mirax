"use client";

import { motion } from "framer-motion";
const titleRowLeft = "Классическое SEO";
const titleRowRight = "SEO + AIO";
const rows = [
  {
    left: "Работа с ключевыми словами",
    right: "Работа с вопросами и намерениями пользователей",
  },
  {
    left: "Оптимизация отдельных страниц",
    right: "Оптимизация структуры и смыслов сайта",
  },
  {
    left: "Рост позиций и трафика",
    right: "Попадание в ответы Алисы и ИИ",
  },
  {
    left: "Зависимость от выдачи",
    right: "Долгосрочный устойчивый эффект",
  },
];

export default function DifferenceSectionSEOAIO() {
  return (
    <section id="difference" className="w-full py-28 bg-[#1af287]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Заголовок */}
        <h2 className="text-4xl md:text-6xl font-bold mb-20 max-w-7xl tracking-tight">
          Чем продвижение сайтов SEO+AIO отличается от классического SEO?
        </h2>

        {/* Таблица эволюции */}
        <div className="max-w-7xl space-y-6">
          <div className="group flex flex-col md:flex-row md:items-center justify-between border-b border-black/20 pb-6">
 <div className="font-bold md:w-1/2 text-black text-base md:text-lg"> {titleRowLeft}</div>
   <div className="hidden md:block px-6 text-2xl opacity-50 group-hover:opacity-100 transition">
                →
              </div>
  <div className="font-bold md:w-1/2 font-semibold text-base md:text-lg">{titleRowRight}</div>
        </div>
</div>

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