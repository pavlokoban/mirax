import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Mirax
            </h3>
            <p className="text-sm text-white/70 max-w-xs">
              Агентство по разработке сайтов на WordPress,
              оптимизированных под ИИ-поиск, ChatGPT, Яндекс Алису и Gemini.
              Работаем с проектами в Москве и по всему миру.
            </p>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Услуги
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <Link href="/services/ai-websites" className="hover:text-white">
                  Разработка сайтов под ИИ
                </Link>
              </li>
              <li>
                <Link href="/services/ai-ecommerce" className="hover:text-white">
                  ИИ-оптимизированные интернет-магазины
                </Link>
              </li>
              <li>
                <Link href="/services/ai-promotion" className="hover:text-white">
                  Продвижение и AIO
                </Link>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Компания
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <Link href="/about" className="hover:text-white">
                  О компании
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="hover:text-white">
                  Контакты
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACTS / LEGAL */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Контакты
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <a
                  href="mailto:hello@mirax.ru"
                  className="hover:text-white"
                >
                  hello@mirax.ru
                </a>
              </li>
              <li>
                Москва, Россия
              </li>
            </ul>

            <div className="mt-6">
              <Link
                href="/privacy-policy"
                className="text-xs text-white/50 hover:text-white"
              >
                Политика конфиденциальности
              </Link>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-20 border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center text-xs text-white/50 gap-4">
          <span>
            © {new Date().getFullYear()} Mirax. Все права защищены.
          </span>
          <span>
            Веб-сайты, оптимизированные для ИИ, и стратегия «все в одном»
          </span>
        </div>

      </div>
    </footer>
  )
}
