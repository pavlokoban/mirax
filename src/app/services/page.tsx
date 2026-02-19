'use client'

import { motion } from 'framer-motion'

const services = [
  {
    title: 'Разработка сайтов, под требования ИИ',
    description:
      'Клиентские сайты, лендинги и корпоративные проекты на WordPress, готовые к AI-поиску.',
      price: 'от 180 тыс. рус.',
    href: '/razrabotka-saitov-pod-ii-moskva',
  },
  {
    title: 'Интернет-магазины UI/UX + ИИ',
    description:
      'Opencart / WooCommerce с правильной структурой категорий, товаров и экспертного контента.',
      price: 'от 350 тыс. рус.',
    href: '/ii-internet-magaziny-moskva',
  },
  {
    title: 'Раскрутка, продвижение и адаптация сайтов под ИИ',
    description:
      'Анализ, переработка структуры, контента и семантики под Алиса, ChatGPT и Gemini, а также настройка рекламы.',
      price: 'от 60 тыс. рус.',
    href: '/seo-aio-yandex-alisa-moskva',
  },
  {
    title: 'Создание дизайнов сайтов под ИИ',
    description:
      'Создание дизайна сайтов, учитывающих структуру и UI/UX под требования Алиса, ChatGPT и Gemini.',
      price: 'от 90 тыс. рус.',
    href: '/ai-web-design-moskva',
  },
]

export default function Services() {
  return (
  <section className="w-full bg-[#1af287] py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-5xl font-bold mt-8 mb-16">
          Наши услуги
        </h2>
<div className="flex flex-col divide-y divide-black/20">

          {services.map((service, index) => (
            <motion.a
              key={index}
              href={service.href}
              whileHover={{ x: 6 }}
              transition={{ duration: 0.2 }}
              className="group flex items-center justify-between py-10"
            >
              <div className="max-w-4xl">
                <h3 className="text-3xl font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-base opacity-80">
                  {service.description}
                </p>
                 <p className="text-base mt-4 font-semibold">
                  {service.price}
                </p>
              </div>

              {/* Arrow */}
              {/* <div className="ml-8 flex h-12 w-12 items-center justify-center rounded-full border border-black/20 transition group-hover:bg-black group-hover:text-white">
                →
              </div> */}
              <div className="
  ml-4
  flex-shrink-0
  w-12 h-12
  flex items-center justify-center
  rounded-full
  border border-black
  transition-all duration-300
  group-hover:bg-black
  group-hover:border-[#1af287]
">
  <span className="
    text-lg
    transition-colors duration-300
    group-hover:text-[#1af287]
  ">
    →
  </span>
</div>

            </motion.a>
          ))}
        </div>
      </div>
</section>
  )
}
