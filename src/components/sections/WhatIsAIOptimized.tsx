'use client'

import { motion } from 'framer-motion'

const items = [
  {
    title: 'Экспертная структура страниц',
    text: 'ИИ понимает, кто вы и чем занимаетесь',
  },
  {
    title: 'Контент под вопросы пользователей',
    text: 'Сайты «отвечают», а не продают в лоб',
  },
  {
    title: 'Микроразметка и сущности',
    text: 'ИИ легко извлекает факты',
  },
  {
    title: 'E-E-A-T',
    text: 'Опыт, экспертиза, авторство, доверие',
  },
  {
    title: 'Чистый код сайта',
    text: 'Без мусора и конфликтов',
  },
    {
    title: 'UI/UX сайта',
    text: 'Структура интерфейса, созданная для удобства человека',
  },
]

export default function WhatIsAIOptimized() {
  return (
    <section className="w-full py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-10 max-w-3xl">
          Что значит «сайт, оптимизированный под ИИ»
        </h2>

        {/* Intro text */}
        <div className="max-w-2xl text-lg mb-16 space-y-4">
          <p>
            Это не шаблон и не плагин.
          </p>
          <p className="font-medium">
            Это подход к разработке сайта на этапе проектирования.
          </p>
        </div>

        {/* Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-xl border border-black/10 bg-white p-6"
            >
              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-sm opacity-80">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
