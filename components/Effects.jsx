"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const COLORS = ["#fbbf24", "#f59e0b", "#38a3d8", "#2e8b57", "#f472b6", "#ffffff"];
const LINKS = [
  ["home", "Home"],
  ["gallery", "Moments"],
  ["welcome", "Welcome"],
  ["venue", "Venue"],
  ["schedule", "Schedule"],
  ["countdown", "Countdown"],
];

function Petal({ p }) {
  return (
    <span
      className="pointer-events-none fixed top-0 z-30 block rounded-[60%_40%_60%_40%]"
      style={{
        left: `${p.left}%`, width: p.size, height: p.size * 1.3, background: p.color,
        "--dx": `${p.dx}vw`, animation: `fall ${p.dur}s linear ${p.delay}s forwards`,
      }}
    />
  );
}

export default function Effects() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  const [active, setActive] = useState("home");
  const [burst, setBurst] = useState([]);
  const [ambient, setAmbient] = useState([]);

  const make = (n, delayMax, durBase) =>
    Array.from({ length: n }, (_, i) => ({
      id: Math.random(), left: Math.random() * 100, size: 8 + Math.random() * 10,
      color: COLORS[i % COLORS.length], dx: (Math.random() - 0.5) * 30,
      dur: durBase + Math.random() * 6, delay: Math.random() * delayMax,
    }));

  useEffect(() => { setAmbient(make(window.innerWidth < 640 ? 7 : 14, 14, 14)); }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    LINKS.forEach(([id]) => { const el = document.getElementById(id); el && io.observe(el); });
    return () => io.disconnect();
  }, []);

  const celebrate = () => {
    const b = make(60, 1.2, 3);
    setBurst(b);
    setTimeout(() => setBurst([]), 9000);
  };

  return (
    <>
      <motion.div style={{ scaleX }} className="fixed inset-x-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-sky via-leaf to-saffron" />
      <nav className="fixed left-1/2 top-3 z-40 max-w-[calc(100vw-1rem)] -translate-x-1/2 overflow-x-auto rounded-full border border-saffron/70 bg-white/85 px-2 py-1 shadow-lg backdrop-blur">
        <ul className="flex gap-1 whitespace-nowrap">
          {LINKS.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`}
                className={`block rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition ${
                  active === id ? "bg-maroon text-white" : "text-ink/70 hover:bg-saffron/40"}`}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {ambient.map((p) => <Petal key={p.id} p={p} />)}
      {burst.map((p) => <Petal key={p.id} p={p} />)}
      <motion.button onClick={celebrate} whileHover={{ scale: 1.1, rotate: -4 }} whileTap={{ scale: 0.9 }}
        aria-label="Celebrate"
        className="fixed bottom-3 right-3 z-40 flex h-12 items-center gap-2 rounded-full bg-gradient-to-r from-saffron to-marigold px-4 text-sm font-bold text-ink shadow-xl ring-2 ring-white sm:bottom-4 sm:right-4">
        <span aria-hidden="true">🎉</span><span className="hidden sm:inline">Celebrate</span>
      </motion.button>
    </>
  );
}
