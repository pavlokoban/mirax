"use client";

import { useEffect, useState } from "react";
import { useScroll, motion, AnimatePresence } from "framer-motion";
import HeaderRow from "./HeaderRow";
import DesktopMenu from "./DesktopMenu";
import BurgerDots from "./BurgerDots";
import "./header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  // отслеживаем скролл (≈ 1vh)
  useEffect(() => {
    return scrollY.on("change", (y) => {
      setScrolled(y > 10);
    });
  }, [scrollY]);

  // блокируем scroll при открытом меню
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const onToggleMenu = () => {
    setMenuOpen((v) => !v);
  };

  return (
    <>
      <header className="header-root">
        <HeaderRow hidden={scrolled && !menuOpen} />

        {/* BURGER — всегда fixed */}
        <BurgerDots open={menuOpen} onClick={onToggleMenu} />
      </header>

      {/* MENU */}
      <DesktopMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}
