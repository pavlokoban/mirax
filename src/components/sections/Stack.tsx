'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

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
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  return (
    <section
      ref={ref}
      className="w-full py-10 border-t border-black/10 dark:border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="flex flex-wrap items-center justify-center gap-10"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.5,
                    ease: 'easeOut',
                  },
                },
              }}
              className="opacity-70 hover:opacity-100 transition"
            >
              <Image
                src={tech.src}
                alt={tech.name}
                width={48}
                height={48}
                className="h-10 w-auto"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
