import type { Metadata } from 'next'
import Link from 'next/link'
import ContactFormRus from "@/components/contact-form/ContactFormRus";
import CountUp from 'react-countup'; 
import Script from 'next/script'
import StageSliderDevRu from '@/components/stages/StageSliderDevRu';
import PriceCounter from '@/components/PriceCounter';
import Divider from '@/components/sections/Divider';
import DifferenceSectionDesign from '@/components/TypeAnimationDesign';
import WhatIsAIDesign from '@/components/sections/WhatIsAIDesign';


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
        <h1 className="text-3xl md:text-6xl font-bold text-center mb-8 mt-20">
      AI-дизайн сайтов в Москве
    </h1>

    {/* Description */}
     <p className="mx-auto text-center text-lg md:text-xl opacity-80 leading-relaxed mb-8">
      Мы создаём дизайн сайтов, который понятен не только людям,
      но и ИИ-системам: Яндекс Алисе, ChatGPT и Gemini.
      AI-дизайн — это не просто визуал, а логика интерфейсов,
      структуры и смыслов, которые усиливают доверие,
      конверсию и рекомендации.
      <br />
           </p>
            <p className="mx-auto text-center text-lg md:text-xl opacity-80 leading-relaxed mb-8">
        <span className="px-4 py-2 rounded-full border border-black/15 text-sm">UX/UI</span>, <span className="px-4 py-2 rounded-full border border-black/15 text-sm">Figma</span>, <span className="px-4 py-2 rounded-full border border-black/15 text-sm">дизайн-системы</span>, <span className="px-4 py-2 rounded-full border border-black/15 text-sm">accessibility</span>, <span className="px-4 py-2 rounded-full border border-black/15 text-sm">mobile-first</span>.
    </p>

      {/* Price & Timing */}
       <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-20">
 
          {/* Price */}
          <div className="border-t border-black/10 pt-6">
            <div className="text-sm uppercase tracking-wide opacity-60 mb-2">
               Стоимость
            </div>
<div className="text-2xl md:text-3xl font-semibold">
            <PriceCounter from={60000} to={90000} />
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


      {/* CASES */}

{/* PRINCIPLES */}
<WhatIsAIDesign />


{/* DIFFERENCE */}
<DifferenceSectionDesign />

{/* FAQ */}
<section id="faq" className="py-32">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-5xl md:text-6xl font-bold mb-10 max-w-4xl tracking-tight">
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

   <Divider />

      {/* CTA */}
      <section id="cta" className="py-32">
        <ContactFormRus />
      </section>

  </main>
  )
}
