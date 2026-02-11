'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import styles from './ServiceLink.module.css'

export default function ServiceLink({
  title,
  description,
  href,
  isLast
}: {
  title: string
  description: string
  href: string
  isLast?: boolean
}) {
  return (
    <motion.div
      whileHover={{ x: 6 }}
      transition={{ duration: 0.2 }}
      className={`{styles.serviceLink} flex items-center justify-between py-12 ${
        !isLast ? 'border-b border-black/30' : ''
      }`}
    >
      {/* Левая колонка */}
      <div className="w-1/4">
        <h3 className="text-3xl font-bold">
          {title}
        </h3>
      </div>

      {/* Центральная колонка */}
      <div className="w-2/4 pr-10">
        <p className="text-base leading-relaxed">
          {description}
        </p>
      </div>

      {/* Правая стрелка */}
      <div className="w-1/4 flex justify-end">
        <Link
          href={href}
          className="flex items-center justify-center h-16 w-16 rounded-full border border-black transition hover:bg-black hover:text-white"
        >
          →
        </Link>
      </div>
    </motion.div>
  )
}
