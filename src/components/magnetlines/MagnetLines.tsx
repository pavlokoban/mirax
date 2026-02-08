"use client";

import React, { useEffect, useMemo, useRef } from "react";
import "./MagnetLines.css";

type MagnetLinesProps = {
  rows?: number;
  columns?: number;

  /** ширина контейнера (например "100%", "100vw", "80vmin") */
  width?: string;

  /** высота контейнера (например "360px", "50vh", "80vmin") */
  height?: string;

  lineColor?: string;
  lineWidth?: string;
  lineHeight?: string;
  baseAngle?: number;

  className?: string;
  style?: React.CSSProperties;
};

export default function MagnetLines({
  rows = 10,
  columns = 12,
  width = "100%",
  height = "52vh",
  lineColor = "#8a4bff",
  lineWidth = "2px",
  lineHeight = "30px",
  baseAngle = 0,
  className = "",
  style,
}: MagnetLinesProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // заранее создаём массив, чтобы не пересоздавать на каждый рендер
  const spans = useMemo(() => {
    const total = rows * columns;
    return Array.from({ length: total }, (_, i) => (
      <span
        key={i}
        className="magnetLines-line"
        style={
          {
            ["--rotate" as any]: `${baseAngle}deg`,
            backgroundColor: lineColor,
            width: lineWidth,
            height: lineHeight,
          } as React.CSSProperties
        }
      />
    ));
  }, [rows, columns, baseAngle, lineColor, lineWidth, lineHeight]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll<HTMLSpanElement>("span");

    let rafId: number | null = null;
    let lastX = 0;
    let lastY = 0;

    const apply = () => {
      rafId = null;

      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;

        const dx = lastX - cx;
        const dy = lastY - cy;
        const dist = Math.hypot(dx, dy) || 1;

        const angle =
          (Math.acos(dx / dist) * 180) / Math.PI * (lastY > cy ? 1 : -1);

        item.style.setProperty("--rotate", `${angle}deg`);
      });
    };

    const onPointerMove = (e: PointerEvent) => {
      lastX = e.clientX;
      lastY = e.clientY;

      if (rafId == null) {
        rafId = window.requestAnimationFrame(apply);
      }
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });

    // стартовая позиция — центр контейнера
    const cRect = container.getBoundingClientRect();
    lastX = cRect.left + cRect.width / 2;
    lastY = cRect.top + cRect.height / 2;
    apply();

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      if (rafId != null) window.cancelAnimationFrame(rafId);
    };
  }, [rows, columns]);

  return (
    <div
      ref={containerRef}
      className={`magnetLines-container ${className}`}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        width,
        height,
        ...style,
      }}
    >
      {spans}
    </div>
  );
}
