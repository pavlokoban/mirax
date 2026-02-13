"use client";

import Link from "next/link";
import Image from "next/image";

interface Props {
  hidden: boolean;
}

export default function HeaderRow({ hidden }: Props) {
  return (
    <div className={`header-row ${hidden ? "header-row--hidden" : ""}`}>
      <div className="header-inner">
        {/* LOGO */}
        <Link href="/" className="header-logo">
          <Image
            src="/logo.svg"
            alt="Mirax Digital"
            width={140}
            height={32}
            priority
          />
        </Link>

        {/* DESKTOP MENU */}
        <nav className="header-menu">
          <Link href="/razrabotka-saitov-pod-ii-moskva" className="a-anim">
            <span>Разработка</span>
          </Link>
          <Link href="/seo-aio-yandex-alisa-moskva" className="a-anim">
            <span>Продвижение</span>
          </Link>
          <Link href="/about" className="a-anim">
            <span>О компании</span>
          </Link>
          <Link href="/contacts" className="a-anim">
            <span>Контакты</span>
          </Link>
        </nav>

        {/* CTA */}
        <Link href="/contacts#form" className="header-cta">
          Обсудить проект
        </Link>
      </div>

      {/* underline */}
      <div className="header-line" />
    </div>
  );
}
