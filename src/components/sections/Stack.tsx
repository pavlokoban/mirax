'use client'

import { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Регистрируем плагины
gsap.registerPlugin(ScrollTrigger)

const techStack = [
  { name: 'TypeScript', src: '/stack/ts.svg' },
  { name: 'Next.js', src: '/stack/next.svg' },
  { name: 'React', src: '/stack/react.svg' },
  { name: 'Node.js', src: '/stack/node.svg' },
  { name: 'PostgreSQL', src: '/stack/postgres.svg' },
  { name: 'WordPress', src: '/stack/wordpress.svg' },
  { name: 'Opencart', src: '/stack/opencart.svg' },
  { name: 'Laravel', src: '/stack/laravel.svg' },
]

export default function Stack() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Анимация появления
    gsap.from(".stack-item", {
      x: -1200,             // Влет из глубокого лево
      opacity: 0,
      scaleX: 3,            // Растяжение по горизонтали (эффект скорости)
      skewX: 20,            // Наклон
      stagger: 0.05,        // Очередность
      duration: 1,
      ease: "power4.out",   // Резкое торможение
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",   // Запуск, когда секция внизу экрана
      }
    })
  }, { scope: container })

  return (
    <section
      ref={container}
      className="w-full py-12 bg-[#060010] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-4 md:grid-cols-8 gap-10 items-center justify-items-center">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="stack-item will-change-transform"
            >
              <Image
                src={tech.src}
                alt={tech.name}
                width={60}
                height={60}
                className="h-10 md:h-12 w-auto object-contain brightness-0 invert opacity-60"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}