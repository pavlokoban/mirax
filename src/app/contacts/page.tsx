import ContactFormRus from '@/components/contact-form/ContactFormRus'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Контакты — Миракс',
  description:
    'Контакты агентства Миракс. Свяжитесь с нами для обсуждения разработки, продвижения и AI-оптимизации сайтов.',
  alternates: {
    canonical: '/contacts',
  },
}

export default function ContactPage() {
  return (
        <main className="relative">
    <section className="py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* H1 */}
        <h1 className="text-4xl md:text-5xl font-bold mb-10">
          Контакты
        </h1>

        {/* Intro */}
        <p className="max-w-3xl text-lg opacity-80 leading-relaxed mb-16">
          Мы на связи и открыты к диалогу. Напишите или позвоните нам —
          обсудим ваш проект, подскажем оптимальное решение и честно
          оценим задачи.
        </p>

        {/* Main contacts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">

          {/* Company contacts */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">
              Контакты компании
            </h2>

            <ul className="space-y-4 text-base opacity-90">
              <li>
                <strong>Адрес:</strong><br />
                г. Москва, Пресненская набережная, 12
              </li>

              <li>
                <strong>Телефон:</strong><br />
                <a
                  href="tel:+74951234567"
                  className="hover:underline"
                >
                  +7 (495) 123-45-67
                </a>
              </li>

              <li>
                <strong>Email:</strong><br />
                <a
                  href="mailto:hello@mirax.ru"
                  className="hover:underline"
                >
                  hello@mirax.ru
                </a>
              </li>

              <li className="pt-4">
                <strong>Карьера:</strong><br />
                Присоединиться к команде —  
                <a
                  href="mailto:hr@mirax.ru"
                  className="hover:underline"
                >
                   hr@mirax.ru
                </a>
              </li>
            </ul>
          </div>

          {/* Sales person */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">
              Контактное лицо
            </h2>

            <div className="flex items-center gap-6">

              {/* Photo */}
              <div className="w-24 h-24 rounded-full overflow-hidden bg-neutral-200 flex-shrink-0">
                <Image
                  src="/person-placeholder.jpg"
                  alt="Алексей — руководитель отдела продаж"
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Info */}
              <div>
                <div className="text-lg font-semibold">
                  Алексей Сашилин
                </div>
                <div className="text-sm opacity-70 mb-2">
                  Руководитель студии
                </div>

                <div className="text-sm space-y-1">
                  <div>
                    <a
                      href="tel:+74959876543"
                      className="hover:underline"
                    >
                      +7 (495) 987-65-43
                    </a>
                  </div>
                  <div>
                    <a
                      href="mailto:alexey@mirax.ru"
                      className="hover:underline"
                    >
                      alexey@mirax.ru
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

      <section id="form" className="py-32">
        <ContactFormRus />
      </section>
      </main>
  )
}