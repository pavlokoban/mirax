import Link from 'next/link';
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black bg-gradient-to-br from-[#060010] via-[#060010] to-[#1a0b2e] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}
          <div>
       <Link href="/" className="block pb-4">
          <Image
            src="/logo-mirax-light.svg"
            alt="Mirax Digital"
            width={200}
            height={50}
            priority
          />
        </Link>
            <p className="text-sm text-white/70 max-w-xs" style={{lineHeight: '2'}}>
              Агентство по разработке сайтов для людей (UI/UX) на WordPress, и оптимизированных под ИИ-поиск (Яндекс Алису и Gemini).
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
                <Link href="/razrabotka-saitov-pod-ii-moskva" className="a-anim-footer hover:text-white">
                  Разработка сайтов под ИИ
                </Link>
              </li>
              <li>
                <Link href="/ii-internet-magaziny-moskva" className="a-anim-footer hover:text-white">
                  Интернет-магазины
                </Link>
              </li>
              <li>
                <Link href="/seo-aio-yandex-alisa-moskva" className="a-anim-footer hover:text-white">
                  Продвижение и AIO
                </Link>
                  </li>
                <li>
                 <Link href="/ai-web-design-moskva" className="a-anim-footer hover:text-white">
                 AI-дизайн сайтов
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
                <Link href="/about" className="a-anim-footer hover:text-white">
                  О компании
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="a-anim-footer a-anim-footer hover:text-white">
                  Контакты
                </Link>
              </li>
            </ul>
                        <div className="mt-6">
              <Link
                href="/privacy-policy"
                className="text-xs text-white/50 a-anim-footer hover:text-white"
              >
                Политика конфиденциальности
              </Link>
              <br />
              <Link
                href="/personal-data-consent"
                className="text-xs text-white/50 a-anim-footer hover:text-white"
              >
                Обработка персональных данных
              </Link>
            </div>
          </div>

          {/* CONTACTS / LEGAL */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Контакты
            </h4>
              {/* <Image
            src="/Moscow.svg"
            alt="Mirax Digital Офис Москва"
            width={64}
            height={64}
            priority
          />  */}
           <Image
            src="/office-moscow-2.png"
            alt="Mirax Digital Офис Москва"
            width={64}
            height={64}
            priority
          /> 
            <ul className="space-y-3 text-sm text-white/70 py-2">
              <li>
              Москва, Пресненская наб., 12
              </li>
            <li>
              <a
                  href="tel:+74959876543"
                  className="a-anim-footer hover:text-white"
                >Тел.: +7 (495) 987-65-43</a></li>
              <li> <a
                  href="mailto:hello@mirax.ru"
                  className="a-anim-footer hover:text-white"
                >
                  hello@mirax.ru
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-20 border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center text-xs text-white/50 gap-4">
          <span>
            © {new Date().getFullYear()} Mirax. Все права защищены.
          </span>
          <span>
            Веб-сайты, оптимизированные для ИИ, и стратегия «под ключ»
          </span>
        </div>

      </div>
    </footer>
  )
}