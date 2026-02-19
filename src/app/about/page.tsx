import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'О компании — Миракс',
  description:
    'Миракс — агентство по разработке сайтов для людей и ИИ. UI/UX, SEO нового поколения, AIO и сайты, понятные Яндексу, Алисе и ChatGPT.',
  alternates: {
    canonical: '/about',
  },
}

export default function AboutPage() {
  return (
    <section className="py-32">
      <div className="max-w-5xl mx-auto px-6">

        {/* H1 */}
        <h1 className="text-4xl md:text-5xl font-bold mb-10">
          О компании Миракс
        </h1>

        {/* Intro */}
        <p className="text-lg opacity-80 leading-relaxed mb-16">
          Mirax Digital — это команда специалистов, которая разрабатывает стильные сайты для людей с продуманным UI/UX и одновременно учитывает требования современных ИИ-систем: Яндекс Алисы, Gemini и других.
          <br /><br />
          Мы создаём сайты, которые работают не по устаревшим SEO-шаблонам, а ориентируются на реальные запросы пользователей и логику машинного понимания контента.
        </p>

        {/* Who we are */}
        <h2 className="text-3xl font-semibold mb-6">
          Кто мы
        </h2>
        <p className="text-base opacity-80 leading-relaxed mb-12">
          Мы — digital-агентство, специализирующееся на разработке и
          развитии сайтов нового поколения.
          Наша экспертиза объединяет UI/UX-дизайн, веб-разработку,
          SEO и AIO (AI-оптимизацию).
          <br /><br />
          Мы не делаем сайты «для галочки» или только ради поисковых
          алгоритмов. Для нас сайт — это продукт, который должен быть
          понятен человеку и логично интерпретируем ИИ.
        </p>

        {/* Approach */}
        <h2 className="text-3xl font-semibold mb-6">
          Наш подход
        </h2>
        <ul className="list-disc pl-6 space-y-4 text-base opacity-80 mb-16">
          <li>
            Проектируем структуру сайта под реальные вопросы пользователей,
            а не под формальные ключевые слова
          </li>
          <li>
            Создаём интерфейсы, которые легко читаются и людьми, и ИИ
          </li>
          <li>
            Используем SEO как фундамент, но развиваем сайт под AIO и
            AI-поиск
          </li>
          <li>
            Внедряем микроразметку, сущности и экспертный контент уже
            на этапе разработки
          </li>
        </ul>

        {/* Experience */}
        <h2 className="text-3xl font-semibold mb-6">
          Экспертиза команды
        </h2>
        <p className="text-base opacity-80 leading-relaxed mb-12">
          Средний опыт специалистов нашей команды — более 10 лет
          в веб-разработке, дизайне и поисковом продвижении.
          Мы работали с корпоративными сайтами, интернет-магазинами,
          сервисами и контентными проектами.
          <br /><br />
          Этот опыт позволяет нам понимать не только техническую сторону,
          но и бизнес-цели клиентов, а также изменения в логике
          поисковых систем и ИИ-ассистентов.
        </p>

        {/* Why trust */}
        <h2 className="text-3xl font-semibold mb-6">
          Почему нам доверяют
        </h2>
        <ul className="list-disc pl-6 space-y-4 text-base opacity-80 mb-20">
          <li>Думаем стратегически, а не шаблонно</li>
          <li>Работаем на результат, а не на отчёты</li>
          <li>Не используем «чёрные» методы SEO</li>
          <li>Следим за развитием ИИ-поиска и адаптируем сайты под него</li>
          <li>Объясняем клиенту, что и зачем мы делаем</li>
        </ul>

        {/* CTA */}
        <div className="flex justify-center">
          <Link
            href="/contacts"
            className="
              inline-flex items-center justify-center
              w-[200px] h-[200px]
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
  )
}
