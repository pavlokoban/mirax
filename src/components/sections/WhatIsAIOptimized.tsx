'use client'

import { motion } from 'framer-motion'
import MagicBento from '../magicbento/MagicBento'



const items = [
  {
    title: 'Экспертная структура страниц',
    text: 'ИИ понимает, кто вы и чем занимаетесь',
  },
  {
    title: 'Контент под вопросы пользователей',
    text: 'Сайты «отвечают», а не продают в лоб',
  },
  {
    title: 'Микроразметка и сущности',
    text: 'ИИ легко извлекает факты',
  },
  {
    title: 'E-E-A-T',
    text: 'Опыт, экспертиза, авторство, доверие',
  },
  {
    title: 'Чистый код сайта',
    text: 'Без мусора и конфликтов',
  },
    {
    title: 'UI/UX сайта',
    text: 'Структура интерфейса, созданная для удобства человека',
  },
]

export default function WhatIsAIOptimized() {
  return (
   <section className="w-full py-28 bg-black bg-gradient-to-br from-[#060010] via-[#060010] to-[#1a0b2e]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-bold mb-10 max-w-4xl text-white tracking-tight">
          Что значит «сайт, оптимизированный под ИИ»
        </h2>
        {/* Intro text */}
        <p className="text-white">
            Это не шаблон и не плагин. Это подход к разработке сайта на этапе проектирования.
          </p>
                {/* Principles */}

<MagicBento 
  textAutoHide={true}
  enableStars
  enableSpotlight
  enableBorderGlow={true}
  enableTilt
  enableMagnetism
  clickEffect
  spotlightRadius={720}
  particleCount={12}
  glowColor="132, 0, 255"
  disableAnimations={false}
/>

      </div>
    </section>
  )
}
