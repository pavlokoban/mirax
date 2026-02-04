"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function DesktopMenu({ open, onClose }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="desktop-menu"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* CLOSE (крестик) */}
          <button
            className="menu-close"
            onClick={onClose}
            aria-label="Close menu"
          >
            ×
          </button>
            {/* TOP BAR */}
  <div className="desktop-menu-top">
    <img src="/logo.svg" alt="Mirax Digital" className="menu-logo" />
    {/* <button className="menu-close" onClick={onClose}>×</button> */}
 </div>

          {/* COLUMNS */}
          <div className="desktop-menu-inner">
          <div className="menu-columns">
           <motion.div
  className="menu-col"
  initial={{ y: 40, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
>
              <h2>Услуги</h2>
              <Link href="/razrabotka">Разработка сайтов</Link>
              <Link href="/shop">Разработка интернет-магазинов</Link>
              <Link href="/promotion">Продвижение / SEO</Link>
              <Link href="/aio">Продвижение в ИИ / AIO</Link>
             </motion.div>

           <motion.div
  className="menu-col"
  initial={{ y: 40, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ delay: 0.25, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
>
              <h2>Компания</h2>
              <Link href="/about">Компания</Link>
              <Link href="/contacts">Контакты</Link>
         </motion.div>
</div>
          {/* FOOTER */}
          <div className="menu-footer">
            <Link href="/contacts#form" className="header-cta">
              Обсудить проект
            </Link>

            <div className="menu-contacts">
              <p>Москва, Пресненская набережная, 12</p>
              <a href="tel:+74951234567">+7 (495) 123-45-67</a>
              <a href="mailto:hello@mirax.ru">hello@mirax.ru</a>
            </div>
          </div>
              </div>   
        </motion.div>
        
      )}
      
    </AnimatePresence>
  );
}
