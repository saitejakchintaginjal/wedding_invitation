"use client";
import { motion } from "framer-motion";
import { wedding as w } from "@/lib/config";
import { Garland, Diya } from "./Ornaments";

export default function Hero() {
  const details = [
    ["Date", w.dateLabel, "border-sky/60 bg-sky/10 hover:bg-sky/25"],
    ["Day", w.day, "border-leaf/60 bg-leaf/10 hover:bg-leaf/25"],
    ["Time", w.time, "border-saffron bg-saffron/20 hover:bg-saffron/40"],
  ];
  return (
    <section id="home" className="relative overflow-hidden">
      <Garland />
      <div className="mx-auto flex max-w-3xl flex-col items-center px-5 pb-20 pt-6 text-center sm:pt-10">
        <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="font-script text-4xl text-gold sm:text-5xl">Save the Date</motion.p>

        <motion.h1 initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }}
          className="text-shimmer mt-4 font-serif text-5xl leading-tight sm:text-7xl md:text-8xl">
          {w.groom}
          <span className="mx-3 inline-block font-script text-4xl text-marigold sm:text-6xl">&amp;</span>
          {w.bride}
        </motion.h1>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }}
          className="mt-8 flex items-end gap-6">
          <Diya className="hidden h-14 w-14 sm:block" />
          <motion.img src="/images/couple-standing-v2.png" alt="Bride and groom in traditional wedding attire"
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="floaty w-72 mix-blend-multiply drop-shadow-xl sm:w-[26rem]" />
          <Diya className="hidden h-14 w-14 sm:block" />
        </motion.div>

        <motion.dl initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-10 grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
          {details.map(([k, v, c]) => (
            <div key={k} className={`rounded-xl border-2 px-4 py-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:rotate-1 hover:shadow-lg ${c}`}>
              <dt className="eyebrow">{k}</dt>
              <dd className="mt-1 font-serif text-lg text-maroon">{v}</dd>
            </div>
          ))}
        </motion.dl>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
          className="mt-6 font-serif text-xl italic text-ink/80">{w.venueName}</motion.p>
      </div>
    </section>
  );
}
