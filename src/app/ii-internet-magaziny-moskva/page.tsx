import type { Metadata } from 'next'
import Link from 'next/link'
import ContactFormRus from "@/components/contact-form/ContactFormRus";
import CountUp from 'react-countup'; 
import Script from 'next/script'
import StageSliderDevRu from '@/components/stages/StageSliderDevRu';


export const metadata: Metadata = {
  title:
    'ИИ-оптимизированные интернет-магазины в Москве — WooCommerce, OpenCart, ИИ-поиск',
  description:
    'Разработка интернет-магазинов, оптимизированных под ИИ в Москве. Проектируем магазины, которые рекомендуют Яндекс Алиса, ChatGPT и Gemini.',
  alternates: {
    canonical: '/ii-internet-magaziny-moskva',
  },
}

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
    <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">
      ИИ-оптимизированные интернет-магазины в Москве
    </h1>

    {/* Description */}
    <p className="max-w-4xl mx-auto text-center text-lg md:text-xl opacity-80 leading-relaxed mb-20">
      Разрабатываем интернет-магазины, которые понимают и рекомендуют
      Яндекс Алиса, ChatGPT и другие ИИ-системы.
      Мы проектируем структуру каталога, карточки товаров и контент
      так, чтобы ИИ мог использовать ваш магазин как источник ответов,
      а не просто как витрину товаров.
      <br />
      <span className="opacity-60">
        WooCommerce, OpenCart, 1C-Битрикс, Next.js, Laravel, MySQL.
      </span>
    </p>

    {/* Price & Timing */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-20">

      {/* Price */}
      <div className="border-t border-black/10 pt-6">
        <div className="text-sm uppercase tracking-wide opacity-60 mb-2">
          Стоимость
        </div>
        <div className="text-2xl md:text-3xl font-semibold">
          от 350 000 ₽
        </div>
      </div>

      {/* Time */}
      <div className="border-t border-black/10 pt-6">
        <div className="text-sm uppercase tracking-wide opacity-60 mb-2">
          Сроки
        </div>
        <div className="text-2xl md:text-3xl font-semibold">
          от 6–10 недель
        </div>
      </div>

    </div>

    {/* CTA */}
    <div className="flex justify-center">
      <Link
        href="/contact"
        className="
          inline-flex items-center justify-center
          w-[180px] h-[180px]
          rounded-full
          bg-green-400 text-black
          font-semibold uppercase text-sm
          shadow-[0_0_40px_rgba(0,255,150,0.35)]
          transition-transform hover:scale-105
        "
      >
        Обсудить<br />проект →
      </Link>
    </div>

  </div>
</section>

{/* TECHNOLOGY AND PRICE */}
<section id="technology" className="py-32 bg-black text-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-bold mb-6">
      Технологии и стоимость разработки
    </h2>

    <p className="max-w-3xl text-lg opacity-80 mb-20">
      Мы проектируем интернет-магазины с учётом логики ИИ:
      структуры каталога, карточек товаров, фильтрации и контента.
      Ниже — ориентиры по форматам, срокам и стоимости.
    </p>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

      {/* Card 1 */}
      <div className="border border-white/15 rounded-2xl p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-2">
            Каталог + витрина
          </h3>

          <div className="text-sm opacity-60 mb-4">
            Сроки: от 4–6 недель
          </div>

          <p className="text-sm opacity-80 mb-6">
            Небольшой интернет-магазин или каталог с ИИ-логикой категорий,
            оптимизированный под поиск и рекомендации.
          </p>

          <div className="text-sm opacity-70 mb-6">
            <span className="block mb-2 opacity-50">Стек:</span>
            Figma, WordPress, WooCommerce, MySQL
          </div>
        </div>

        <div className="pt-6 border-t border-white/10">
          <div className="text-lg font-semibold mb-4">
            от 350 000 ₽
          </div>

          <a
            href="#cta"
            className="text-sm underline underline-offset-4 opacity-80 hover:opacity-100"
          >
            Обсудить проект →
          </a>
        </div>
      </div>

      {/* Card 2 */}
      <div className="border border-white/15 rounded-2xl p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-2">
            Интернет-магазин
          </h3>

          <div className="text-sm opacity-60 mb-4">
            Сроки: от 6–8 недель
          </div>

          <p className="text-sm opacity-80 mb-6">
            Полноценный магазин с ИИ-оптимизированными карточками товаров,
            фильтрацией и базовой аналитикой.
          </p>

          <div className="text-sm opacity-70 mb-6">
            <span className="block mb-2 opacity-50">Стек:</span>
            Figma, WooCommerce, OpenCart, MySQL
          </div>
        </div>

        <div className="pt-6 border-t border-white/10">
          <div className="text-lg font-semibold mb-4">
            от 450 000 ₽
          </div>

          <a
            href="#cta"
            className="text-sm underline underline-offset-4 opacity-80 hover:opacity-100"
          >
            Обсудить проект →
          </a>
        </div>
      </div>

      {/* Card 3 */}
      <div className="border border-white/15 rounded-2xl p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-2">
            Магазин с интеграциями
          </h3>

          <div className="text-sm opacity-60 mb-4">
            Сроки: от 8–12 недель
          </div>

          <p className="text-sm opacity-80 mb-6">
            Интернет-магазин с CRM, оплатами, доставкой, 1С и
            архитектурой под рост ассортимента.
          </p>

          <div className="text-sm opacity-70 mb-6">
            <span className="block mb-2 opacity-50">Стек:</span>
            Figma, 1C-Битрикс, PHP, MySQL
          </div>
        </div>

        <div className="pt-6 border-t border-white/10">
          <div className="text-lg font-semibold mb-4">
            от 650 000 ₽
          </div>

          <a
            href="#cta"
            className="text-sm underline underline-offset-4 opacity-80 hover:opacity-100"
          >
            Обсудить проект →
          </a>
        </div>
      </div>

      {/* Card 4 */}
      <div className="border border-white/15 rounded-2xl p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-2">
            Масштабируемый eCommerce
          </h3>

          <div className="text-sm opacity-60 mb-4">
            Сроки: от 12–16 недель
          </div>

          <p className="text-sm opacity-80 mb-6">
            Высоконагруженный магазин или маркетплейс с ИИ-логикой,
            кастомной архитектурой и масштабированием.
          </p>

          <div className="text-sm opacity-70 mb-6">
            <span className="block mb-2 opacity-50">Стек:</span>
            Figma, Next.js, Node.js, PostgreSQL
          </div>
        </div>

        <div className="pt-6 border-t border-white/10">
          <div className="text-lg font-semibold mb-4">
            от 1 000 000 ₽
          </div>

          <a
            href="#cta"
            className="text-sm underline underline-offset-4 opacity-80 hover:opacity-100"
          >
            Обсудить проект →
          </a>
        </div>
      </div>

    </div>

  </div>
</section>


{/* FOR WHO */}
<section id="for-who" className="py-32">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-bold mb-16">
      Кому подходит разработка ИИ-оптимизированных интернет-магазинов
    </h2>

    {/* Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

      {/* Item 1 */}
      <div>
        <h3 className="text-lg font-semibold mb-3">
          Интернет-магазинам в Москве
        </h3>
        <p className="text-sm opacity-80">
          Бизнесам, работающим в конкурентных нишах, где важно выделяться
          не только рекламой, но и рекомендациями ИИ.
        </p>
      </div>

      {/* Item 2 */}
      <div>
        <h3 className="text-lg font-semibold mb-3">
          Брендам и производителям
        </h3>
        <p className="text-sm opacity-80">
          Компаниям с собственным ассортиментом, которым важно,
          чтобы ИИ корректно понимал продукты и их отличия.
        </p>
      </div>

      {/* Item 3 */}
      <div>
        <h3 className="text-lg font-semibold mb-3">
          D2C и B2C-проектам
        </h3>
        <p className="text-sm opacity-80">
          Проектам, ориентированным на прямые продажи клиентам
          и рост органического спроса.
        </p>
      </div>

      {/* Item 4 */}
      <div>
        <h3 className="text-lg font-semibold mb-3">
          Тем, кто масштабируется
        </h3>
        <p className="text-sm opacity-80">
          Интернет-магазинам с планами на рост каталога, трафика
          и интеграции с CRM, 1С и маркетплейсами.
        </p>
      </div>

    </div>

  </div>
</section>

{/* DIFFERENCE */}
<section id="difference" className="py-32">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-bold mb-20">
      Чем разработка интернет-магазинов под ИИ отличается от обычной
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl">

      {/* Обычная разработка */}
      <div>
        <h3 className="text-2xl font-semibold mb-8">
          Обычный интернет-магазин
        </h3>

        <ul className="space-y-5 text-sm opacity-80">
          <li>
            Каталог строится по принципу «как удобно администратору»
          </li>
          <li>
            Карточки товаров ориентированы только на покупку
          </li>
          <li>
            Фильтры и характеристики не структурированы
          </li>
          <li>
            SEO настраивается после запуска
          </li>
          <li>
            Продажи зависят от рекламы и маркетплейсов
          </li>
          <li>
            ИИ не понимает связи между товарами
          </li>
        </ul>
      </div>

      {/* Под ИИ */}
      <div>
        <h3 className="text-2xl font-semibold mb-8">
          ИИ-оптимизированный интернет-магазин
        </h3>

        <ul className="space-y-5 text-sm opacity-80">
          <li>
            Каталог проектируется с учётом логики ИИ и пользовательских вопросов
          </li>
          <li>
            Карточки товаров отвечают на вопросы и помогают выбирать
          </li>
          <li>
            Характеристики и фильтры структурированы как сущности
          </li>
          <li>
            ИИ-оптимизация закладывается на этапе разработки
          </li>
          <li>
            Продажи усиливаются органическими рекомендациями ИИ
          </li>
          <li>
            ИИ понимает, сравнивает и рекомендует товары
          </li>
        </ul>
      </div>

    </div>

  </div>
</section>


{/* PROCESS */}
  <section id="process" className="py-32">
    <StageSliderDevRu />     
  </section>


{/* FAQ */}
<section id="faq" className="py-32">
  <div className="max-w-5xl mx-auto px-6">

    <h2 className="text-4xl md:text-5xl font-bold mb-16">
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

      {/* CTA */}
      <section id="cta" className="py-32">
        <ContactFormRus />
      </section>


  </main>
  )
}
