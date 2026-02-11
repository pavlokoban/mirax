'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const steps = [
  'Анализ ниши и ИИ-выдачи',
  'Проектирование структуры сайта',
  'Создание экспертных разделов',
  'Разработка на WordPress',
  'Внедрение микроразметки',
  'Подготовка к продвижению в ИИ',
]

const benefits = [
  'Специализация именно на ИИ-оптимизации',
  'Глубокое понимание WordPress',
  'Опыт SEO + AI-подход',
  'Не используем «чёрные» методы',
  'Думаем стратегически, а не шаблонно',
]

const seoText = `
Мы разрабатываем и оптимизируем сайты под ИИ-поиск в Москве с учётом алгоритмов Яндекса и голосового ассистента Алиса.
Наш подход сочетает SEO-оптимизацию под Яндекс и AIO (AI Optimization) — подготовку сайта к рекомендациям в ИИ-системах.

При разработке сайтов под ИИ в Москве мы учитываем региональные факторы Яндекса, коммерческие и поведенческие сигналы,
структуру ответов Алисы и требования к экспертности контента.

Оптимизация под Яндекс и Алису включает работу со структурой страниц, семантикой, микроразметкой,
локальными факторами и контентом, ориентированным на реальные запросы пользователей в Москве.
`

export default function OneSpoilerProcess() {
  const [open, setOpen] = useState(false)
  const [typedText, setTypedText] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!open) return

    if (index < seoText.length) {
      const t = setTimeout(() => {
        setTypedText((prev) => prev + seoText[index])
        setIndex((prev) => prev + 1)
      }, 14)

      return () => clearTimeout(t)
    }
  }, [open, index])

  return (
    <section className="w-full pt-3 pb-6">
      <div className="max-w-5xl mx-auto px-6">

        {/* SPOILER TOGGLE */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="font-bold underline underline-offset-8"
        >
          {open
            ? 'Скрыть процесс работы и подход'
            : 'Как мы работаем и почему нам доверяют'}
        </button>

        {/* SPOILER CONTENT */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.4 }}
              className="mt-16 space-y-24"
            >

              {/* HOW WE WORK */}
              <div className="max-w-3xl">
                <h2 className="text-3xl font-semibold mb-6">
                  Как мы работаем?
                </h2>

                <p className="text-lg mb-8">
                  Как мы создаём сайты под ИИ
                </p>

                <ol className="list-decimal list-inside space-y-3">
                  {steps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>

                <p className="mt-8 font-medium">
                  Мы думаем не только о дизайне, но и о том, как ИИ будет читать ваш сайт.
                </p>
              </div>

              {/* WHY US */}
              <div className="max-w-3xl">
                <h2 className="text-3xl font-semibold mb-8">
                  Преимущества работы с нами
                </h2>

                <ul className="space-y-3">
                  {benefits.map((item, i) => (
                    <li key={i}>— {item}</li>
                  ))}
                </ul>
              </div>

              {/* SEO / AIO TEXT */}
              <div className="max-w-4xl rounded-xl border border-black/10 bg-neutral-50 p-6">
                <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed">
                  {typedText}
                </pre>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}
