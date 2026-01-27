import type { Metadata } from 'next'
import Link from 'next/link'
import ContactFormRus from "@/components/contact-form/ContactFormRus";
import CountUp from 'react-countup'; 
import Script from 'next/script'
import StageSliderSeoRu from '@/components/stages/StageSliderSeoRu';

export const metadata: Metadata = {
  title:
    'Продвижение в Яндекс и Алисе в Москве — SEO + AIO для ИИ-поиска',
  description:
    'Продвижение сайтов в Яндекс и Алисе в Москве. SEO + AIO: оптимизация под ИИ-поиск, рекомендации Алисы и ответы ChatGPT.',
  alternates: {
    canonical: '/seo-aio-yandex-alisa-moskva',
  },
}

const faqItems = [
  {
    question: 'Что такое SEO + AIO простыми словами?',
    answer:
      'SEO + AIO — это продвижение сайта не только в поисковой выдаче, но и в ответах ИИ, таких как Яндекс Алиса и другие интеллектуальные системы.',
  },
  {
    question: 'Работает ли SEO + AIO в Москве?',
    answer:
      'Да. В Москве высокая конкуренция, и SEO + AIO помогает получать трафик и заявки через новые каналы — ответы и рекомендации ИИ.',
  },
  {
    question: 'Нужно ли обычное SEO, если есть AIO?',
    answer:
      'Да. SEO остаётся фундаментом, а AIO дополняет его, адаптируя сайт под ИИ-поиск и голосовых помощников.',
  },
  {
    question: 'Можно ли продвигать старый сайт в Яндекс и Алисе?',
    answer:
      'Да. Мы анализируем текущий сайт и адаптируем его структуру и контент под требования SEO + AIO.',
  },
  {
    question: 'Через сколько появляются первые результаты?',
    answer:
      'Первые сигналы обычно видны через 1–3 месяца после внедрения изменений и индексации сайта.',
  },
  {
    question: 'Нужна ли реклама при SEO + AIO?',
    answer:
      'Реклама может усиливать эффект, но SEO + AIO позволяет получать органический трафик и рекомендации без постоянных рекламных затрат.',
  },
]

export default function AiWebsiteDesignPage() {
  return (
        <main className="relative">
{/* HERO */}
<section id="hero" className="py-32">
  <div className="max-w-7xl mx-auto px-6">

    {/* Title */}
    <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">
      Продвижение в Яндекс и Алисе (SEO + AIO) в Москве
    </h1>

    {/* Description */}
    <p className="max-w-4xl mx-auto text-center text-lg md:text-xl opacity-80 leading-relaxed mb-20">
      Мы занимаемся продвижением сайтов в Яндексе и голосовом помощнике Алиса
      с учётом новой реальности ИИ-поиска.
      SEO + AIO — это стратегия, при которой сайт не только
      ранжируется в поиске, но и используется ИИ для рекомендаций,
      ответов и подсказок пользователям.
      <br />
      <span className="opacity-60">
        Яндекс Поиск, Алиса, ИИ-выдача, SEO, AIO, структура и контент.
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
          от 60 000 ₽ / месяц
        </div>
      </div>

      {/* Time */}
      <div className="border-t border-black/10 pt-6">
        <div className="text-sm uppercase tracking-wide opacity-60 mb-2">
          Первые результаты
        </div>
        <div className="text-2xl md:text-3xl font-semibold">
          от 1–3 месяцев
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
        Обсудить<br />продвижение →
      </Link>
    </div>

  </div>
</section>

{/* WHAT IS SEO + AIO */}
<section id="what-is-seo-aio" className="py-32 bg-neutral-50">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl md:text-5xl font-bold mb-12">
      Что такое SEO + AIO и почему обычного SEO уже недостаточно
    </h2>

    <div className="max-w-4xl text-lg opacity-80 leading-relaxed mb-16">
      <p className="mb-6">
        Классическое SEO работает с позициями сайта в поисковой выдаче.
        Но сегодня Яндекс и ИИ-системы, включая Алису, всё чаще
        не просто показывают сайты, а формируют готовые ответы.
      </p>
      <p>
        SEO + AIO (AI Optimization) — это подход, при котором сайт
        оптимизируется не только под поисковые алгоритмы,
        но и под логику ИИ: вопросы пользователей, смыслы,
        сущности и экспертность.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl">

      <div>
        <h3 className="text-xl font-semibold mb-4">
          Классическое SEO
        </h3>
        <ul className="space-y-3 text-sm opacity-80">
          <li>Работа с ключевыми словами</li>
          <li>Оптимизация отдельных страниц</li>
          <li>Рост позиций и трафика</li>
          <li>Зависимость от выдачи</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">
          SEO + AIO
        </h3>
        <ul className="space-y-3 text-sm opacity-80">
          <li>Работа с вопросами и намерениями пользователей</li>
          <li>Оптимизация структуры и смыслов сайта</li>
          <li>Попадание в ответы Алисы и ИИ</li>
          <li>Долгосрочный устойчивый эффект</li>
        </ul>
      </div>

    </div>

  </div>
</section>


{/* PROCESS */}
<section id="process" className="py-32">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl md:text-5xl font-bold mb-20">
      Как мы продвигаем сайты в Яндекс и Алисе
    </h2>
    <StageSliderSeoRu />     
    <ol className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl list-decimal list-inside">

      <li className="text-sm opacity-80">
        <strong className="block text-base text-black mb-2">
          Анализ ниши и ИИ-выдачи
        </strong>
        Изучаем, как Яндекс и Алиса отвечают на запросы в вашей тематике
        и какие сайты они используют как источники.
      </li>

      <li className="text-sm opacity-80">
        <strong className="block text-base text-black mb-2">
          Аудит сайта и структуры
        </strong>
        Проверяем архитектуру сайта, контент, навигацию и
        готовность к ИИ-оптимизации.
      </li>

      <li className="text-sm opacity-80">
        <strong className="block text-base text-black mb-2">
          Переработка контента под вопросы
        </strong>
        Формируем контент, который отвечает на реальные вопросы
        пользователей, а не просто содержит ключевые слова.
      </li>

      <li className="text-sm opacity-80">
        <strong className="block text-base text-black mb-2">
          Внедрение микроразметки
        </strong>
        Используем schema.org и сущности, чтобы ИИ мог
        корректно извлекать факты с сайта.
      </li>

      <li className="text-sm opacity-80">
        <strong className="block text-base text-black mb-2">
          Усиление E-E-A-T
        </strong>
        Работаем с экспертностью, авторством, доверительными
        сигналами и прозрачностью сайта.
      </li>

      <li className="text-sm opacity-80">
        <strong className="block text-base text-black mb-2">
          Мониторинг и рост
        </strong>
        Отслеживаем появление сайта в ИИ-ответах,
        рекомендациях Алисы и органической выдаче.
      </li>

    </ol>

  </div>
</section>


{/* FAQ */}
<section id="faq" className="py-32">
  <div className="max-w-5xl mx-auto px-6">

    <h2 className="text-4xl md:text-5xl font-bold mb-16">
      Часто задаваемые вопросы о продвижении в Яндекс и Алисе
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
    id="faq-schema-seo-aio"
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