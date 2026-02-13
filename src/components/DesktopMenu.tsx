"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  open: boolean;
  onClose: () => void;
}
const MenuLink = ({
  href,
  children,
  onClose,
}: {
  href: string
  children: React.ReactNode
  onClose: () => void
}) => (
  <Link href={href} onClick={onClose}>
    {children}
  </Link>
)


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
              <MenuLink href="/razrabotka-saitov-pod-ii-moskva" onClose={onClose}>Разработка сайтов</MenuLink>
              <MenuLink href="/ii-internet-magaziny-moskva" onClose={onClose}>Разработка интернет-магазинов</MenuLink>
              <MenuLink href="/seo-aio-yandex-alisa-moskva" onClose={onClose}>Продвижение</MenuLink>
              <MenuLink href="/ai-web-design-moskva" onClose={onClose}>UI/UX дизайн с учетом ИИ</MenuLink>
             </motion.div>

           <motion.div
  className="menu-col"
  initial={{ y: 40, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ delay: 0.25, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
>
              <h2>Компания</h2>
              <MenuLink href="/about" onClose={onClose}>Компания</MenuLink>
              <MenuLink href="/contacts" onClose={onClose}>Контакты</MenuLink>
         </motion.div>
</div>
          {/* FOOTER */}
          <div className="menu-footer">
              <Link
            href="/contacts#cta"
           className="
relative overflow-hidden
inline-flex items-center justify-center
w-[180px] h-[180px]
rounded-full
bg-gradient-to-r from-[#8a4bff] to-[#5a2eff]
text-white
font-bold uppercase text-sm
shadow-[0_0_70px_rgba(106,58,255,0.5)]
hover:shadow-[0_0_100px_rgba(138,75,255,0.6)]
transition-transform duration-300
hover:scale-105
main-cta-center
"
>
            Обсудить<br />проект →
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
