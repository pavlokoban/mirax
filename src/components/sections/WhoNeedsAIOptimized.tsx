'use client'

import { motion } from 'framer-motion'

const audiences = [
  {
    title: 'Бизнесы и компании',
    text: 'Которые хотят получать заявки не только из Google, но и из ИИ-ассистентов.',
  },
  {
    title: 'Эксперты и агентства',
    text: 'Которым важно, чтобы их рекомендовали как источник знаний и опыта.',
  },
  {
    title: 'Интернет-магазины',
    text: 'Где важна правильная структура товаров, категорий и экспертного контента.',
  },
  {
    title: 'Стартапы и SaaS',
    text: 'Которым нужно быстро занять нишу и стать заметными для ИИ-поиска.',
  },
  {
    title: 'Компании, ориентированные на будущее',
    text: 'Которые понимают, что классического SEO скоро будет недостаточно.',
  },
]

export default function WhoNeedsAIOptimized() {
  return (
    <section className="w-full py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Кому подходят сайты, оптимизированные под ИИ
          </h2>
          <p className="text-lg opacity-80">
            Это решение не для всех. Но если вы узнаёте себя — ИИ-оптимизация даст вам конкурентное преимущество.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {audiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-xl border border-black/10 p-8"
            >
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-base opacity-80">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
