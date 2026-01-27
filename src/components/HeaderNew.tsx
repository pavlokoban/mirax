"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";


export default function HeaderNew() {
  const [open, setOpen] = useState(false);

  const { scrollY } = useScroll();
const menuWidth = useTransform(
  scrollY,
  [0, 160],
  [620, 560] // ← 560 вверху, 420 при скролле
);

const springWidth = useSpring(menuWidth, {
  stiffness: 170,
  damping: 16,
  mass: 0.9,
});

// ширина: вверху шире → вниз норм
const menuScaleX = useTransform(scrollY, [0, 160], [1.25, 1]);
const springScaleX = useSpring(menuScaleX, {
  damping: 12,
stiffness: 160,
mass: 0.9,
});


const [openDev, setOpenDev] = useState(false)
const [openPromo, setOpenPromo] = useState(false)

const MenuDropdown = ({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) => {
  return (
    <div className="relative group">
      <span className="cursor-pointer select-none">
        {label}
      </span>

      {/* Hover bridge */}
      <div className="absolute left-0 top-full h-6 w-full" />

      <div
        className="
          absolute top-[calc(100%+1.5rem)] left-1/2 -translate-x-1/2
          hidden group-hover:block
          bg-white/80 backdrop-blur-2xl
          rounded-2xl shadow-xl
          px-6 py-4
          min-w-[280px]
          text-black
          pointer-events-auto
        "
      >
        <div className="flex flex-col gap-3">
          {children}
        </div>
      </div>
    </div>
  )
}


  return (
   <header className="fixed top-6 left-1/2 -translate-x-1/2 z-[200] w-full pointer-events-none">

 {/* Header content */}
  <div
    className="
      container mx-auto px-4
      flex items-center justify-between
      h-[78px] w-full
      pointer-events-auto
    "
  >

  {/* Logo */}
 <Link
  href="/"
  className="
    flex items-center gap-3
    h-[44px] px-4
    rounded-full
    glass-ios
    text-black
    font-display text-sm font-bold
  "
>

      <span className="w-7 h-7 rounded-full  bg-green-400 shadow-[0_0_14px_rgba(0,255,150,0.45)]" />
      Миракс
    </Link>

 {/* CENTRAL MENU */}
<div
  className="
    relative hidden md:flex items-center justify-center h-[48px]
    isolate
  "
>
  <motion.div
    style={{ width: springWidth }}
    className="
      absolute
      left-1/2 -translate-x-1/2
      h-full
      rounded-full
      glass-ios
      z-0
    "
  />

<nav
  className="
    relative z-10
    flex items-center gap-8 px-10 h-full
    mix-blend-difference
    text-neutral-500
  "
>
  {/* Разработка */}
  <MenuDropdown label="Разработка ▾">
    <Link href="/razrabotka-saitov-pod-ii-moskva">Разработка сайтов под ИИ</Link>
    <Link href="/ii-internet-magaziny-moskva">ИИ-интернет-магазины</Link>
    <Link href="/ai-web-design-moskva">AI-дизайн сайтов</Link>
  </MenuDropdown>

  {/* Продвижение */}
  <MenuDropdown label="Продвижение ▾">
    <Link href="/seo-aio-yandex-alisa-moskva">SEO / AIO Яндекс и Алиса</Link>
    {/* <Link href="/reklama-v-ii-chatgpt-gemini-alisa">Реклама в ИИ</Link> */}
  </MenuDropdown>

  <Link href="/about">О компании</Link>
  <Link href="/kontakt">Контакты</Link>
</nav>

</div>


          {/* CTA */}
    <div className="hidden md:block">
      <Link
        href="/contact"
        className="
          bg-gradient-to-r from-[#8a4bff] to-[#5a2eff]
          text-white font-semibold
          px-8 py-4 rounded-full
          shadow-[0_4px_20px_rgba(120,50,255,0.5)]
        "
      >
        Обсудить проект
      </Link>
    </div>


        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-black"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile dropdown */}
{open && (
  <div
    className="
      md:hidden mt-4 mx-auto max-w-7xl
      bg-white/75 backdrop-blur-3xl
      rounded-[32px] shadow-xl
      p-6 space-y-6
      pointer-events-auto   // 👈 ВАЖНО
      relative z-[300]
    "
  >
{/* <div className="fixed inset-0 z-[250] bg-black/20 backdrop-blur-sm" /> */}

    {/* Разработка */}
    <div>
      <button
        onClick={() => setOpenDev(!openDev)}
        className="w-full text-left text-lg font-medium"
      >
        Разработка ▾
      </button>

      {openDev && (
        <div className="mt-4 pl-4 space-y-3">
          <Link href="/razrabotka-saitov-pod-ii-moskva">Разработка сайтов под ИИ</Link>
          <br/>
          <Link href="/ii-internet-magaziny-moskva">ИИ-интернет-магазины</Link>
          <br/>
          <Link href="/ai-web-design-moskva">AI-дизайн сайтов</Link>
        </div>
      )}
    </div>

    {/* Продвижение */}
    <div>
      <button
        onClick={() => setOpenPromo(!openPromo)}
        className="w-full text-left text-lg font-medium"
      >
        Продвижение ▾
      </button>

      {openPromo && (
        <div className="mt-4 pl-4 space-y-3">
          <Link href="/seo-aio-yandex-alisa-moskva">SEO / AIO Яндекс и Алиса</Link>
          <br/>
          {/* <Link href="/reklama-v-ii-chatgpt-gemini-alisa">Реклама в ИИ</Link> */}
        </div>
      )}
    </div>

    <Link href="/about" className="block text-lg">О компании</Link>
    <Link href="/contact" className="block text-lg">Контакты</Link>

    <Link
      href="/contact"
      className="
        block w-full text-center
        bg-gradient-to-r from-[#8a4bff] to-[#5a2eff]
        text-white font-semibold py-3 rounded-full
      "
    >
      Получить консультацию
    </Link>
  </div>
)}

    </header>
  );
}
