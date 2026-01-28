'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const choice = localStorage.getItem('cookiesChoice')
    if (!choice) {
      setVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookiesChoice', 'accepted')
    setVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem('cookiesChoice', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 w-full z-[999] bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">

        <p className="text-sm opacity-80 max-w-4xl">
          Мы используем cookies для корректной работы сайта и улучшения пользовательского опыта.
          Пользуясь сайтом, вы соглашаетесь с{' '}
          <Link
            href="/privacy-policy"
            className="underline hover:opacity-100 opacity-90 transition"
          >
            Политикой конфиденциальности
          </Link>{' '}
          и даёте{' '}
          <Link
            href="/personal-data-consent"
            className="underline hover:opacity-100 opacity-90 transition"
          >
            согласие на обработку персональных данных
          </Link>.
        </p>

        <div className="flex gap-3 flex-shrink-0">
          {/* Decline */}
          <button
            onClick={declineCookies}
            className="
              text-sm px-5 py-2 rounded-full
              border border-white/30
              opacity-70 hover:opacity-100
              transition cursor-pointer
            "
          >
            Отказаться
          </button>

          {/* Accept */}
          <button
            onClick={acceptCookies}
            className="
              bg-green-400 text-black
              text-sm font-semibold
              px-6 py-2 rounded-full
              hover:scale-105 transition
              cursor-pointer
            "
          >
            Принять
          </button>
        </div>

      </div>
    </div>
  )
}
