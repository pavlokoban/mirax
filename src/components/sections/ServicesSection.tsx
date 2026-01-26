'use client'

import { motion } from 'framer-motion'

const services = [
  {
    title: 'Разработка сайтов, оптимизированных под ИИ',
    description:
      'Клиентские сайты, лендинги и корпоративные проекты на WordPress, готовые к AI-поиску.',
    href: '/services/ai-websites',
  },
  {
    title: 'ИИ-оптимизированные интернет-магазины',
    description:
      'Opencart / WooCommerce с правильной структурой категорий, товаров и экспертного контента.',
    href: '/services/ai-ecommerce',
  },
  {
    title: 'Реклама, продвижение и адаптация сайтов под ИИ',
    description:
      'Анализ, переработка структуры, контента и семантики под Алиса, ChatGPT и Gemini, а также настройка рекламы.',
    href: '/services/ai-promotion',
  },
  {
    title: 'Создание дизайнов сайтов под ИИ',
    description:
      'Создание дизайна сайтов, учитывающих структуру и UI/UX под требования Алиса, ChatGPT и Gemini.',
    href: '/services/ai-design',
  },
]

export default function Services() {
  return (
    <section className="w-full py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-5xl font-bold mb-16">
          Наши услуги
        </h2>

        {/* Services list */}
        <div className="flex flex-col divide-y divide-black/10">
          {services.map((service, index) => (
            <motion.a
              key={index}
              href={service.href}
              whileHover={{ x: 6 }}
              transition={{ duration: 0.2 }}
              className="group flex items-center justify-between py-10"
            >
              <div className="max-w-3xl">
                <h3 className="text-2xl font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-base opacity-80">
                  {service.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="ml-8 flex h-12 w-12 items-center justify-center rounded-full border border-black/20 transition group-hover:bg-black group-hover:text-white">
                →
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
