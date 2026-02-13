"use client";

import { useState } from "react";
import CountUp from "react-countup";

type Props = {
  from?: number;
  to?: number;
  currency?: string;
};

export default function PriceCounter({ from = 120000, to = 180000, currency = "₽" }: Props) {
  const [overshootDone, setOvershootDone] = useState(false);

  const overshoot = Math.round(to * 1.03); // +3% "перелет"

  return (
    <span>
      от{" "}
      {!overshootDone ? (
        <CountUp
          start={from}
          end={overshoot}
          duration={1.2}
          separator=" "
          enableScrollSpy
          scrollSpyOnce
          onEnd={() => setOvershootDone(true)}
        />
      ) : (
        <CountUp start={overshoot} end={to} duration={0.6} separator=" " />
      )}{" "}
      {currency}
    </span>
  );
}
