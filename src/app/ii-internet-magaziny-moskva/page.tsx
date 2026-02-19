import type { Metadata } from 'next'
import Link from 'next/link'
import ContactFormRus from "@/components/contact-form/ContactFormRus";
import CountUp from 'react-countup'; 
import PriceCounter from "@/components/PriceCounter";
import Script from 'next/script'
import WhatIsAIOptimized from "@/components/sections/WhatIsAIOptimized";
import Divider from "@/components/sections/Divider";
import StageSliderDevRu from '@/components/stages/StageSliderDevRu';
import DifferenceSectionEcom from '@/components/TypeAnimationEcom';


export const metadata: Metadata = {
  title:
    'ИИ-оптимизированные интернет-магазины в Москве — WooCommerce, OpenCart, ИИ-поиск',
  description:
    'Разработка интернет-магазинов, оптимизированных под ИИ в Москве. Проектируем магазины, которые рекомендуют Яндекс Алиса, ChatGPT и Gemini.',
  alternates: {
    canonical: '/ii-internet-magaziny-moskva',
  },
}

const plans = [
  {
    title: ' Каталог + витрина',
    time: 'от 4–6 недель',
    description:
      'Небольшой интернет-магазин или каталог с ИИ-логикой категорий, оптимизированный под поиск и рекомендации.',
    stack: ['Figma', 'WordPress', 'WooCommerce', 'MySQL'],
    price: 'от 100 000 ₽',
  },
  {
    title: 'Интернет-магазин',
    time: 'от 6–8 недель',
    description:
      'Полноценный магазин с ИИ-оптимизированными карточками товаров, фильтрацией и базовой аналитикой.',
    stack: ['Figma', 'WordPress', 'PHP', 'MySQL'],
    price: 'от 200 000 ₽',
  },
  {
    title: 'Магазин с интеграциями',
    time: 'от 8–12 недель',
    description:
      'Интернет-магазин с CRM, оплатами, доставкой, 1С и архитектурой под рост ассортимента.',
    stack: ['Figma', 'WordPress', 'Next.js', 'MySQL'],
    price: 'от 300 000 ₽',
  },
  {
    title: 'Масштабируемый eCommerce',
    time: 'от 12–16 недель',
    description:
      'Высоконагруженный магазин или маркетплейс с ИИ-логикой, кастомной архитектурой и масштабированием.',
    stack: ['Figma', 'API', 'Next.js', 'Node.js', 'PostgreSQL'],
    price: 'от 700 000 ₽',
  },
]

const faqItems = [
  {
    question: 'Что такое ИИ-оптимизированный интернет-магазин?',
    answer:
      'Это интернет-магазин, структура которого спроектирована так, чтобы ИИ-системы могли понимать каталог, карточки товаров, характеристики и использовать сайт для рекомендаций и ответов пользователям.',
  },
  {
    question: 'Работают ли ИИ-интернет-магазины в Москве?',
    answer:
      'Да. В Москве высокая конкуренция, и ИИ-оптимизация помогает получать продажи не только через рекламу, но и через органические рекомендации ИИ и поиск Яндекса.',
  },
  {
    question: 'Чем ИИ-оптимизация магазина отличается от SEO?',
    answer:
      'SEO фокусируется на страницах и ключевых словах, а ИИ-оптимизация — на логике каталога, связях между товарами, характеристиках и ответах на вопросы покупателей.',
  },
  {
    question: 'Какие CMS подходят для разработки ИИ-магазинов?',
    answer:
      'Чаще всего мы используем WooCommerce, OpenCart и 1C-Битрикс. При сложных проектах применяем Next.js и кастомные backend-решения.',
  },
  {
    question: 'Можно ли адаптировать существующий интернет-магазин под ИИ?',
    answer:
      'Да. Мы анализируем текущую структуру каталога, карточки товаров и контент, после чего перерабатываем архитектуру под требования ИИ.',
  },
  {
    question: 'Через сколько времени ИИ начинает рекомендовать магазин?',
    answer:
      'Первые сигналы появляются после индексации и переобхода сайта. Обычно это занимает от нескольких недель до 2–3 месяцев.',
  },
  {
    question: 'Подходит ли ИИ-оптимизация для небольших магазинов?',
    answer:
      'Да. Даже небольшие магазины могут получить преимущество за счёт правильной структуры и экспертных карточек товаров.',
  },
  {
    question: 'Нужна ли реклама, если магазин оптимизирован под ИИ?',
    answer:
      'Реклама может усиливать эффект, но ИИ-оптимизация позволяет получать органический трафик и рекомендации без постоянных рекламных затрат.',
  },
]

export default function AiWebsiteDevelopmentPage() {
  return (
    <main className="relative">

{/* HERO */}
   <section id="hero" className="py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h1 className="text-3xl md:text-6xl font-bold text-center mb-8 mt-20">
      ИИ-оптимизированные интернет-магазины в Москве
    </h1>

    {/* Description */}
     <p className="mx-auto text-center text-lg md:text-xl opacity-80 leading-relaxed mb-8">
      Разрабатываем интернет-магазины, которые понимают и рекомендуют
      Яндекс Алиса, ChatGPT и другие ИИ-системы.
      Мы проектируем структуру каталога, карточки товаров и контент
      так, чтобы ИИ мог использовать ваш магазин как источник ответов,
      а не просто как витрину товаров.
    <br />
           </p>
            <p className="mx-auto text-center text-lg md:text-xl opacity-80 mb-8 leading-[2.5]">
               <span className="px-4 py-2 rounded-full border border-black/15 text-sm">OpenCart</span> <span className="px-4 py-2 rounded-full border border-black/15 text-sm">WooCommerce</span> <span className="px-4 py-2 rounded-full border border-black/15 text-sm">Next.js</span> <span className="px-4 py-2 rounded-full border border-black/15 text-sm">MySQL</span> <span className="px-4 py-2 rounded-full border border-black/15 text-sm">1C-Битрикс</span>
        </p>

         {/* Price & Timing */}
       <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-20">
 
          {/* Price */}
          <div className="border-t border-black/10 pt-6">
            <div className="text-sm uppercase tracking-wide opacity-60 mb-2">
               Стоимость
            </div>
<div className="text-2xl md:text-3xl font-semibold">
    <PriceCounter from={120000} to={350000} />
</div>
          </div>
         {/* Time */}
         <div className="border-t border-black/10 pt-6">
            <div className="text-sm uppercase tracking-wide opacity-60 mb-2">
              Сроки
            </div>
            <div className="text-2xl md:text-3xl font-semibold">
              от 6-10 недель
             </div>
          </div>

        </div>

        {/* CTA */}
        <div className="flex justify-center">
     <Link
            href="#cta"
         className="
relative overflow-hidden
inline-flex items-center justify-center
w-[180px] h-[180px]
rounded-full
bg-gradient-to-r from-[#8a4bff] to-[#5a2eff]
text-white
font-bold uppercase text-sm
shadow-[0_0_70px_rgba(106,58,255,0.5)]
hover:shadow-[0_0_100px_rgba(138,75,255,0.6)]
transition-transform duration-300
hover:scale-105
main-cta-center
"
>
            Обсудить<br />проект →
          </Link>
        </div>
      </div>
      </section>

   {/* TECHNOLOGY AND PRICE */}
<section
      id="technology"
      className="text-white py-32 bg-black bg-gradient-to-br from-[#060010] via-[#060010] to-[#1a0b2e]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold mb-10 max-w-4xl text-white tracking-tight">
          Технологии и цены
        </h2>

        <p className="max-w-3xl text-lg opacity-80 mb-20">
      Мы проектируем интернет-магазины с учётом логики ИИ:
      структуры каталога, карточек товаров, фильтрации и контента.
      Ниже — ориентиры по форматам, срокам и стоимости.
     </p>

              {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {plans.map((plan) => (
            <div
              key={plan.title}
              className="
                flex flex-col justify-between
                border border-white/15
                rounded-2xl p-6
                backdrop-blur-sm
                activeelement
              "
            >
              {/* Top */}
              <div>
                <div className='block min-h-18'>
                <h3 className="text-2xl font-semibold mb-3">
                  {plan.title}
                </h3>
                  </div>

                <div className="text-sm opacity-60 mb-4">
                  Сроки: {plan.time}
                </div>

                <p className="text-xs opacity-80 mb-6">
                  {plan.description}
                </p>

                <div className="text-sm opacity-70 mb-6 pt-6 border-t border-white/10">
                 
                <div className="flex flex-wrap gap-2">
    {plan.stack.map((item, index) => (
      <span key={index} className="stack-item">
        {item}
      </span>
    ))}
  </div>
                </div>
              </div>

              {/* Bottom */}
              <div className="pt-6 border-t border-white/10">
                <div className="text-lg font-semibold mb-4">
                  {plan.price}
                </div>

                <Link
                  href="#cta"
                  className="inline-block text-sm font-medium underline underline-offset-4 opacity-80 hover:opacity-100"
                >
                  Обсудить проект →
                </Link>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
   {/* Portfolio */}

{/* FOR WHO */}
  {/* Portfolio */}
      <section id="cases" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold mb-10 max-w-4xl tracking-tight">
            Кейсы, клиенты и отзывы
          </h2>

          <p className="max-w-3xl text-lg opacity-80 mb-14">
            Реальные проекты, с которыми мы усилили видимость бизнеса в поиске,
            улучшили структуру сайта и увеличили поток заявок.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="border border-black/10 rounded-2xl p-6">
              <div className="text-sm uppercase tracking-wide opacity-60 mb-3">
                Кейс 01
              </div>
              <h3 className="text-xl font-semibold mb-3">Юридическая фирма</h3>
              <p className="text-sm opacity-80 mb-4">
                Пересобрали структуру услуг, добавили экспертные страницы и
                усилили блоки ответов под ИИ-запросы.
              </p>
              <div className="text-sm font-medium">+46% заявок за 3 месяца</div>
            </article>

            <article className="border border-black/10 rounded-2xl p-6">
              <div className="text-sm uppercase tracking-wide opacity-60 mb-3">
                Кейс 02
              </div>
              <h3 className="text-xl font-semibold mb-3">B2B-интегратор</h3>
              <p className="text-sm opacity-80 mb-4">
                Запустили новый корпоративный сайт с контент-хабом и логикой
                страниц для органического роста.
              </p>
              <div className="text-sm font-medium">+71% органического трафика</div>
            </article>

            <article className="border border-black/10 rounded-2xl p-6">
              <div className="text-sm uppercase tracking-wide opacity-60 mb-3">
                Кейс 03
              </div>
              <h3 className="text-xl font-semibold mb-3">Медицинский центр</h3>
              <p className="text-sm opacity-80 mb-4">
                Подготовили сервисные страницы и FAQ-блоки, что повысило доверие
                пользователей и конверсию в запись.
              </p>
              <div className="text-sm font-medium">x2.1 рост конверсии</div>
            </article>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">
            <div>
              <h3 className="text-2xl font-semibold mb-5">Клиенты</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'FinTech Lab',
                  'MedPoint',
                  'SkillCraft',
                  'Urban Estate',
                  'Legal Group Msk',
                  'ProDent',
                  'TechnoSupply',
                  'Beauty Clinic One',
                ].map((client) => (
                  <span
                    key={client}
                    className="px-4 py-2 rounded-full border border-black/15 text-sm"
                  >
                    {client}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-5">Отзывы</h3>
              <div className="space-y-4">
                <blockquote className="border border-black/10 rounded-2xl p-5 text-sm opacity-90">
                  «Команда сразу заложила архитектуру под SEO и ИИ. После
                  запуска получили больше целевых обращений из органики.»
                </blockquote>
                <blockquote className="border border-black/10 rounded-2xl p-5 text-sm opacity-90">
                  «Понравился системный подход: не только дизайн, но и логика
                  контента, которая реально работает на продажи.»
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

        <WhatIsAIOptimized />

{/* PROCESS */}
 <section id="stages" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-4xl md:text-6xl font-bold mb-10 max-w-4xl tracking-tight">
          Этапы разработки интернет-магазинов
        </h2>
       
   <p className="max-w-3xl text-lg opacity-80 mb-14">
             Разрабатываем интернет-магазины и проектируем веб-интерфейсы для людей, имеем опыт и экспертизу в веб-дизайне, верстке и программировании на PHP, JS.
          </p>
        </div>


            <StageSliderDevRu />
                </section>

{/* DIFFERENCE */}
<DifferenceSectionEcom />


{/* FAQ */}
<section id="faq" className="py-32">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-5xl md:text-6xl font-bold mb-10 max-w-4xl tracking-tight">
  Часто задаваемые вопросы об ИИ-интернет-магазинах
    </h2>
    

    <div className="divide-y divide-black/10">
      {faqItems.map((item) => (
        <details key={item.question} className="py-6 group">
          <summary className="cursor-pointer list-none flex items-center justify-between text-left">
            <span className="text-lg font-medium max-w-4xl">
              {item.question}
            </span>
            <span className="text-2xl transition-transform duration-200 group-open:rotate-45">
              +
            </span>
          </summary>

          <div className="mt-4 text-base opacity-80 max-w-4xl">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  </div>

  {/* FAQ Schema */}
  <Script
    id="faq-schema-ecommerce-ai"
    type="application/ld+json"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      }),
    }}
  />
</section>

      <Divider />

      {/* CTA */}
      <section id="cta" className="py-32">
        <ContactFormRus />
      </section>


  </main>
  )
}
