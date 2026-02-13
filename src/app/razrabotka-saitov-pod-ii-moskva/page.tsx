import type { Metadata } from 'next'
import Link from 'next/link'
import ContactFormRus from "@/components/contact-form/ContactFormRus";
import PriceCounter from "@/components/PriceCounter";
import Script from 'next/script'
import StageSliderDevRu from '@/components/stages/StageSliderDevRu';
import WhatIsAIOptimized from "@/components/sections/WhatIsAIOptimized";
import Divider from "@/components/sections/Divider";
import DifferenceSection from '@/components/TypeAnimation';


// ===== SEO META =====
export const metadata: Metadata = {
  title: 'Разработка сайтов под ИИ в Москве — сайты для людей, Алисы, Яндекса и ChatGPT',
  description:
    'Разработка сайтов, оптимизированных под ИИ в Москве. Проектируем сайты для людей но с рекомендациями Яндекс Алисы, ChatGPT и Gemini.',
  alternates: {
    canonical: '/razrabotka-saitov-pod-ii-moskva',
  },
}

const plans = [
  {
    title: 'Одностраничник',
    time: 'от 2–3 недель',
    description:
      'Идеально для теста гипотез, запуска продукта или рекламы. Фокус на скорости, структуре и конверсии.',
    stack: ['Figma', 'WordPress', 'HTML/CSS', 'MySQL'],
    price: 'от 120 000 ₽',
  },
  {
    title: 'Простой сайт',
    time: 'от 3–5 недель',
    description:
      'Небольшой сайт с несколькими страницами, логикой ИИ-оптимизации и базовой SEO-структурой.',
    stack: ['Figma', 'WordPress', 'PHP', 'MySQL'],
    price: 'от 180 000 ₽',
  },
  {
    title: 'Корпоративный сайт',
    time: 'от 6–8 недель',
    description:
      'Полноценный сайт компании с экспертными разделами, архитектурой под ИИ и масштабированием.',
    stack: ['Figma', 'WordPress', 'Next.js', 'MySQL'],
    price: 'от 300 000 ₽',
  },
  {
    title: 'Интернет-магазин',
    time: 'от 8–12 недель',
    description:
      'Магазин с ИИ-оптимизированной структурой категорий, товаров и контента для роста продаж.',
    stack: ['Figma', 'WooCommerce', 'Next.js', 'Node.js', 'MySQL'],
    price: 'от 450 000 ₽',
  },
]

// const faqItems = [
//   {
//     q: 'Что такое сайт, оптимизированный под ИИ, и чем он отличается от SEO?',
//     a: 'Это сайт, спроектированный так, чтобы ИИ‑системы (ChatGPT, Яндекс Алиса, Gemini) легко извлекали знания и рекомендовали страницу как источник. В отличие от классического SEO, здесь важны структура, логика ответов, сущности и экспертность, а не только ключевые слова.',
//   },
//   {
//     q: 'Можно ли адаптировать существующий сайт под ИИ или нужен новый?',
//     a: 'Чаще всего можно адаптировать: перестроить архитектуру, улучшить контент, добавить микроразметку и экспертные блоки. Новый сайт нужен, если текущий технически или логически устарел.',
//   },
//   {
//     q: 'Как ИИ понимает, что сайт экспертный?',
//     a: 'ИИ оценивает глубину ответов, связность разделов, авторство, актуальность и отсутствие противоречий. Это соответствует принципам E‑E‑A‑T: опыт, экспертиза, авторитетность и доверие.',
//   },
//   {
//     q: 'Сколько времени занимает разработка сайта под ИИ?',
//     a: 'Срок зависит от объёма: лендинг — 2–3 недели, корпоративный сайт — 6–8 недель, магазин — 8–12 недель. Параллельно готовим структуру и контент под ИИ.',
//   },
//   {
//     q: 'Работает ли ИИ‑оптимизация для бизнеса в Москве?',
//     a: 'Да. Мы учитываем локальные факторы Яндекса, коммерческие сигналы и региональную семантику, что повышает видимость в Москве и вероятность рекомендаций в ИИ.',
//   },
//   {
//     q: 'Какие технологии подходят для ИИ‑оптимизации?',
//     a: 'Подойдут WordPress, Next.js, 1C‑Битрикс, OpenCart и другие платформы — при условии чистого кода, корректной структуры, скорости и разметки.',
//   },
// ]
const faqItems = [
  {
    question: 'Что значит сайт, оптимизированный под ИИ?',
    answer:
      'Это сайт, структура и контент которого изначально проектируются так, чтобы ИИ-системы (ChatGPT, Яндекс Алиса, Gemini) могли понимать тематику, экспертность и использовать сайт как источник ответов.',
  },
  {
    question: 'Работает ли разработка сайтов под ИИ в Москве?',
    answer:
      'Да. В Москве высокая конкуренция, и именно ИИ-оптимизация даёт преимущество. Яндекс, Алиса и ИИ-поиск всё чаще рекомендуют сайты с чёткой структурой, экспертным контентом и доверием.',
  },
  {
    question: 'Чем это отличается от обычного SEO?',
    answer:
      'SEO работает с ключевыми словами и страницами, а ИИ-оптимизация — с вопросами, смыслами и экспертностью. Мы совмещаем SEO и AIO, чтобы сайт был виден и поисковым системам, и ИИ.',
  },
  {
    question: 'Можно ли адаптировать существующий сайт под ИИ?',
    answer:
      'Да. Мы анализируем текущий сайт, структуру, контент и при необходимости перерабатываем архитектуру, тексты и микроразметку под требования ИИ-систем.',
  },
  {
    question: 'Через сколько времени сайт начинает работать для ИИ?',
    answer:
      'Первые сигналы появляются после индексации и переобхода сайта. Обычно это от нескольких недель до 2–3 месяцев в зависимости от ниши и конкуренции.',
  },
  {
    question: 'Какие сайты чаще всего рекомендуют ChatGPT и Алиса?',
    answer:
      'ИИ чаще рекомендуют сайты с экспертным контентом, понятной структурой, авторством, микроразметкой и реальными ответами на вопросы пользователей.',
  },
  {
    question: 'Подходит ли WordPress для разработки сайтов под ИИ?',
    answer:
      'Да. При правильной архитектуре и чистом коде WordPress отлично подходит для ИИ-оптимизации и позволяет гибко масштабировать проект.',
  },
  {
    question: 'Можно ли продвигаться в ИИ без рекламы?',
    answer:
      'Да. Основная ценность ИИ-продвижения — органические рекомендации. Реклама может дополнять стратегию, но не является обязательной.',
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
          Разработка сайтов, оптимизированных под ИИ в Москве
        </h1>

        {/* Description */}
        <p className="mx-auto text-center text-lg md:text-xl opacity-80 leading-relaxed mb-8">
          Создаём сайты для людей, которые понимают и рекомендуют Яндекс Алиса, ChatGPT и другие ИИ-системы. Мы проектируем сайты с учётом логики ИИ-поиска:
структура, экспертный контент, микроразметка и доверие — ещё на этапе разработки, а не после запуска.
          <br />
           </p>
            <p className="mx-auto text-center text-lg md:text-xl opacity-80 leading-relaxed mb-8">
          <span className="px-4 py-2 rounded-full border border-black/15 text-sm">WordPress</span> <span className="px-4 py-2 rounded-full border border-black/15 text-sm">React</span> <span className="px-4 py-2 rounded-full border border-black/15 text-sm">Next.js</span> <span className="px-4 py-2 rounded-full border border-black/15 text-sm">OpenCart</span> <span className="px-4 py-2 rounded-full border border-black/15 text-sm">1C-Битрикс</span>
        </p>

        {/* Price & Timing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-20">

          {/* Price */}
          <div className="border-t border-black/10 pt-6">
            <div className="text-sm uppercase tracking-wide opacity-60 mb-2">
              Стоимость
            </div>
<div className="text-2xl md:text-3xl font-semibold">
   <PriceCounter from={120000} to={180000} />
</div>
          </div>

          {/* Time */}
          <div className="border-t border-black/10 pt-6">
            <div className="text-sm uppercase tracking-wide opacity-60 mb-2">
              Сроки
            </div>
            <div className="text-2xl md:text-3xl font-semibold">
              от 4–6 недель
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="flex justify-center">
          {/* <Link
            href="#cta"
           className="
  relative overflow-hidden
  inline-flex items-center justify-center
  w-[180px] h-[180px]
  rounded-full
  bg-green-400 text-black
  font-bold uppercase text-sm
  shadow-[0_0_52px_rgba(0,255,150,0.35)]
  transition-transform hover:scale-105
  main-cta-center
"
>
            Обсудить<br />проект →
          </Link> */}
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
          Мы подбираем стек и архитектуру сайта исходя из задач бизнеса,
          требований ИИ-поиска и перспектив масштабирования.
          Ниже — ориентиры по срокам и стоимости.
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



      {/* FOR WHO */}
      {/* <section id="for-who" className="py-32">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Кому подходит разработка сайтов под ИИ
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div>
            <h3 className="text-lg font-semibold mb-3">
              Бизнесу в Москве
            </h3>
            <p className="text-sm opacity-80">
              Компаниям, работающим в конкурентных нишах и рассчитывающим
              на рост через новые каналы привлечения клиентов.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">
              Экспертам и сервисам
            </h3>
            <p className="text-sm opacity-80">
              Тем, кого важно рекомендовать: ИИ, Яндекс Алиса и поисковые
              системы должны понимать вашу экспертизу.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">
              Стартапам и IT-проектам
            </h3>
            <p className="text-sm opacity-80">
              Для проектов, где важно масштабирование, правильная архитектура
              и готовность к росту трафика.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">
              Тем, кто думает на шаг вперёд
            </h3>
            <p className="text-sm opacity-80">
              Если сайт — не просто визитка, а актив, который должен
              приносить заявки и доверие.
            </p>
          </div>

        </div>

      </div>
    </section> */}

      {/* WHAT IS AI WEBSITE */}
        <WhatIsAIOptimized />


 {/* Stages */}
 <section id="stages" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-4xl md:text-6xl font-bold mb-10 max-w-4xl tracking-tight">
          Этапы разработки сайта
        </h2>
       
   <p className="max-w-3xl text-lg opacity-80 mb-14">
             Разрабатываем сайты и проектируем веб-интерфейсы для людей, имеем опыт и экспертизу в веб-дизайне, верстке и программировании на PHP, JS.
          </p>
        </div>


            <StageSliderDevRu />
                </section>

      {/* DIFFERENCE */}
 {/* <section id="difference" className="w-full py-28 bg-black bg-gradient-to-br from-[#060010] via-[#060010] to-[#1a0b2e]"> */}
  
<DifferenceSection />


    

{/* FAQ */}
<section id="faq" className="py-32">
  <div className="max-w-5xl mx-auto px-6">
    <h2 className="text-4xl md:text-6xl font-bold mb-10 max-w-4xl tracking-tight">
      Часто задаваемые вопросы
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

  {/* FAQ Schema.org */}
  <Script
    id="faq-schema"
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
