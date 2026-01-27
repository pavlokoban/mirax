import type { Metadata } from 'next'
import Link from 'next/link'
import ContactFormRus from "@/components/contact-form/ContactFormRus";
import CountUp from 'react-countup'; 
import Script from 'next/script'
import StageSliderDevRu from '@/components/stages/StageSliderDevRu';


export const metadata: Metadata = {
  title:
    'AI-дизайн сайтов в Москве — UX/UI, понятный ИИ и пользователям',
  description:
    'AI-дизайн сайтов в Москве. Проектируем UX/UI, который понимают пользователи, Яндекс Алиса, ChatGPT и другие ИИ-системы.',
  alternates: {
    canonical: '/ai-web-design-moskva',
  },
}

const faqItems = [
  {
    question: 'Что такое AI-дизайн сайтов простыми словами?',
    answer:
      'AI-дизайн — это проектирование интерфейсов с учётом того, как сайт воспринимают пользователи и ИИ-системы: через структуру, логику и смыслы.',
  },
  {
    question: 'Чем AI-дизайн отличается от обычного UX/UI?',
    answer:
      'Обычный UX/UI ориентирован только на пользователя, а AI-дизайн учитывает также восприятие сайта ИИ, что усиливает доверие и рекомендации.',
  },
  {
    question: 'Можно ли применить AI-дизайн к существующему сайту?',
    answer:
      'Да. Мы анализируем текущий дизайн и структуру сайта и адаптируем их под принципы AI-дизайна без полной переработки.',
  },
  {
    question: 'Работает ли AI-дизайн для интернет-магазинов?',
    answer:
      'Да. AI-дизайн особенно эффективен для e-commerce, так как улучшает понимание каталога, карточек товаров и пользовательских сценариев.',
  },
  {
    question: 'Нужна ли разработка после AI-дизайна?',
    answer:
      'Да. AI-дизайн — это фундамент, который затем реализуется в коде для максимального эффекта.',
  },
  {
    question: 'Влияет ли AI-дизайн на SEO и продвижение?',
    answer:
      'Да. Чёткая структура, логика интерфейсов и читаемость усиливают SEO и повышают вероятность рекомендаций ИИ.',
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
      AI-дизайн сайтов в Москве
    </h1>

    {/* Description */}
    <p className="max-w-4xl mx-auto text-center text-lg md:text-xl opacity-80 leading-relaxed mb-20">
      Мы создаём дизайн сайтов, который понятен не только людям,
      но и ИИ-системам: Яндекс Алисе, ChatGPT и Gemini.
      AI-дизайн — это не просто визуал, а логика интерфейсов,
      структуры и смыслов, которые усиливают доверие,
      конверсию и рекомендации.
      <br />
      <span className="opacity-60">
        UX/UI, Figma, дизайн-системы, accessibility, mobile-first.
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
          от 120 000 ₽
        </div>
      </div>

      {/* Time */}
      <div className="border-t border-black/10 pt-6">
        <div className="text-sm uppercase tracking-wide opacity-60 mb-2">
          Сроки
        </div>
        <div className="text-2xl md:text-3xl font-semibold">
          от 2–4 недель
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
        Обсудить<br />дизайн →
      </Link>
    </div>

  </div>
</section>


{/* DIFFERENCE */}
<section id="difference" className="py-32">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl md:text-5xl font-bold mb-20">
      Чем AI-дизайн отличается от обычного UX/UI
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl">

      {/* Обычный UX/UI */}
      <div>
        <h3 className="text-2xl font-semibold mb-8">
          Обычный UX/UI-дизайн
        </h3>
        <ul className="space-y-5 text-sm opacity-80">
          <li>Фокус на визуальной эстетике</li>
          <li>Дизайн ориентирован только на пользователя</li>
          <li>UI часто перегружен декоративными элементами</li>
          <li>Структура не всегда очевидна</li>
          <li>Конверсия зависит от рекламы и трафика</li>
        </ul>
      </div>

      {/* AI-дизайн */}
      <div>
        <h3 className="text-2xl font-semibold mb-8">
          AI-дизайн сайтов
        </h3>
        <ul className="space-y-5 text-sm opacity-80">
          <li>Фокус на смыслах и логике интерфейса</li>
          <li>Дизайн понятен пользователям и ИИ</li>
          <li>Чёткая иерархия блоков и контента</li>
          <li>Интерфейс легко «читается» ИИ-системами</li>
          <li>Конверсия усиливается рекомендациями ИИ</li>
        </ul>
      </div>

    </div>

  </div>
</section>
      {/* CASES */}

{/* PRINCIPLES */}
<section id="principles" className="py-32 bg-neutral-50">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl md:text-5xl font-bold mb-16">
      Принципы AI-дизайна, которые мы используем
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl">

      <div>
        <h3 className="text-lg font-semibold mb-3">
          Смысловая иерархия
        </h3>
        <p className="text-sm opacity-80">
          Каждый блок дизайна несёт понятную функцию и смысл,
          который легко интерпретируется ИИ.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">
          UX под реальные сценарии
        </h3>
        <p className="text-sm opacity-80">
          Мы проектируем интерфейсы под реальные действия пользователей,
          а не под абстрактные «красивые экраны».
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">
          Читаемость для ИИ
        </h3>
        <p className="text-sm opacity-80">
          Простая структура, логичные заголовки и предсказуемые паттерны
          помогают ИИ понимать сайт.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">
          Accessibility
        </h3>
        <p className="text-sm opacity-80">
          Доступный дизайн повышает доверие, UX и качество восприятия
          как людьми, так и алгоритмами.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">
          Mobile-first
        </h3>
        <p className="text-sm opacity-80">
          AI-дизайн всегда начинается с мобильной логики —
          именно она доминирует в ИИ-поиске.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">
          Связь дизайна и контента
        </h3>
        <p className="text-sm opacity-80">
          Дизайн усиливает контент, а не отвлекает от него,
          формируя доверие и экспертность.
        </p>
      </div>

    </div>

  </div>
</section>

{/* FAQ */}
<section id="faq" className="py-32">
  <div className="max-w-5xl mx-auto px-6">

    <h2 className="text-4xl md:text-5xl font-bold mb-16">
      Часто задаваемые вопросы об AI-дизайне сайтов
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
    id="faq-schema-ai-design"
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
