'use client'

import { motion } from 'framer-motion'
import MagicBentoDesign from '../magicbento/MagicBentoDesign'


export default function WhatIsAIDesign() {
  return (
   <section className="w-full py-28 bg-black bg-gradient-to-br from-[#060010] via-[#060010] to-[#1a0b2e]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold mb-10 max-w-4xl text-white tracking-tight">
          Принципы AI-дизайна, которые мы используем?
        </h2>
        {/* Intro text */}
        <p className="max-w-3xl text-lg opacity-80 mb-14 text-white">
            Это не шаблон и не плагин. Это подход к разработке сайта на этапе проектирования.
          </p>
                {/* Principles */}

<MagicBentoDesign 
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
