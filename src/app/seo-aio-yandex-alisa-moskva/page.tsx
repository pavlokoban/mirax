import type { Metadata } from 'next'
import Link from 'next/link'
import ContactFormRus from "@/components/contact-form/ContactFormRus";
import Script from 'next/script'
import StageSliderSEOAIO from '@/components/stages/StageSliderSEOAIO';
import PriceCounter from '@/components/PriceCounter';
import Divider from '@/components/sections/Divider';
import DifferenceSectionSEOAIO from '@/components/TypeAnimationSEOAIO';

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
        <h1 className="text-3xl md:text-6xl font-bold text-center mb-8 mt-20">
      Продвижение в Яндекс и Алисе (SEO + AIO) в Москве
    </h1>

  {/* Description */}
     <p className="mx-auto text-center text-lg md:text-xl opacity-80 leading-relaxed mb-8">
      Мы занимаемся продвижением сайтов в Яндексе и голосовом помощнике Алиса
      с учётом новой реальности ИИ-поиска.
      SEO + AIO — это стратегия, при которой сайт не только
      ранжируется в поиске, но и используется ИИ для рекомендаций,
      ответов и подсказок пользователям.
       <br />
           </p>
            <p className="mx-auto text-center text-lg md:text-xl opacity-80 leading-relaxed mb-8">
         <span className="px-4 py-2 rounded-full border border-black/15 text-sm">Яндекс Поиск</span>,  <span className="px-4 py-2 rounded-full border border-black/15 text-sm">Алиса</span>,  <span className="px-4 py-2 rounded-full border border-black/15 text-sm">ИИ-выдача</span>,  <span className="px-4 py-2 rounded-full border border-black/15 text-sm">SEO</span>,  <span className="px-4 py-2 rounded-full border border-black/15 text-sm">AIO,</span>  <span className="px-4 py-2 rounded-full border border-black/15 text-sm">структура и контент.
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
         <PriceCounter from={2000} to={60000} /> / месяц
        </div>
                  </div>

       {/* Time */}
         <div className="border-t border-black/10 pt-6">
            <div className="text-sm uppercase tracking-wide opacity-60 mb-2">
              Сроки
            </div>
            <div className="text-2xl md:text-3xl font-semibold">
              от 4-6 месяцев
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


{/* WHAT IS SEO + AIO */}

<section
      id="what-is-seo-aio"
      className="text-white py-32 bg-black bg-gradient-to-br from-[#060010] via-[#060010] to-[#1a0b2e]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold mb-10 max-w-4xl text-white tracking-tight">
      Что такое SEO + AIO и почему обычного SEO уже недостаточно
    </h2>

    <div className="max-w-4xl text-lg opacity-80 leading-relaxed mb-16">
      <p className="mb-6 text-white">
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
  </div>
</section>


{/* PROCESS */}
 <section id="stages" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-4xl md:text-6xl font-bold mb-10 max-w-4xl tracking-tight">
      Как мы продвигаем сайты в Яндекс и Алисе
    </h2>
    <StageSliderSEOAIO />     
  </div>
</section>

{/* DIFFERENCE */}
<DifferenceSectionSEOAIO />

{/* FAQ */}
<section id="faq" className="py-32">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-5xl md:text-6xl font-bold mb-10 max-w-5xl tracking-tight">
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


      <Divider />

      {/* CTA */}
      <section id="cta" className="py-32">
        <ContactFormRus />
      </section>
        </main>
         )
}