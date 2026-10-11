"use client";
import { useEffect, useState } from "react";
import { wedding as w } from "@/lib/config";
import Reveal from "./Reveal";
import { Garland } from "./Ornaments";

const target = new Date(w.targetDate).getTime();

function diff() {
  const ms = Math.max(0, target - Date.now());
  return {
    Days: Math.floor(ms / 864e5),
    Hours: Math.floor(ms / 36e5) % 24,
    Minutes: Math.floor(ms / 6e4) % 60,
    Seconds: Math.floor(ms / 1e3) % 60,
    done: ms === 0,
  };
}

export default function Countdown() {
  const [t, setT] = useState(null); // null on first render avoids SSR/client mismatch
  useEffect(() => {
    setT(diff());
    const id = setInterval(() => setT(diff()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer id="countdown" className="relative overflow-hidden">
      <img src="/images/couple-lineart.png" alt="" aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-[120%] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain opacity-[0.09] mix-blend-multiply" />
      <div className="relative mx-auto max-w-3xl px-5 py-24 text-center">
        <Reveal>
          <p className="eyebrow">Counting the moments</p>
          <h2 className="heading mt-2">{t?.done ? "Today is the day!" : "Until We Say I Do"}</h2>
        </Reveal>
        <Reveal delay={0.15} className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[["Days", "bg-sky/20 border-sky"], ["Hours", "bg-leaf/20 border-leaf"], ["Minutes", "bg-saffron/40 border-gold"], ["Seconds", "bg-blush/20 border-blush"]].map(([k, c]) => (
            <div key={k} className={`rounded-2xl border-2 py-6 shadow-md transition duration-300 hover:-translate-y-2 hover:scale-105 ${c}`}>
              <div className="font-serif text-4xl tabular-nums text-maroon sm:text-5xl">
                {t ? String(t[k]).padStart(2, "0") : "--"}
              </div>
              <div className="eyebrow mt-2 !tracking-[0.25em]">{k}</div>
            </div>
          ))}
        </Reveal>
        <p className="mt-10 font-script text-3xl text-gold">{w.groom} &amp; {w.bride}</p>
      </div>
      <Garland flip />
      <p className="bg-maroon py-3 text-center text-xs tracking-widest text-cream/90">{w.credit}</p>
    </footer>
  );
}
