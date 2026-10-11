"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { wedding as w } from "@/lib/config";
import Reveal from "./Reveal";
import { Divider } from "./Ornaments";

// Replace `src` with real photos (put them in /public/photos). Without `src`, a placeholder is drawn.
const photos = [
  { src: "/images/moment-1.jpg", pos: "50% 50%", tint: ["#fde68a", "#f59e0b"], tilt: -5, drop: 0 },
  { src: "/images/moment-2.jpg", pos: "50% 25%", tint: ["#bae6fd", "#38a3d8"], tilt: 4, drop: 36 },
  { src: null, tint: ["#bbf7d0", "#2e8b57"], tilt: -3, drop: 8 },
  { src: null, tint: ["#fbcfe8", "#f472b6"], tilt: 5, drop: 42 },
];

function Photo({ p, i }) {
  if (p.src) return <img src={p.src} alt={`Moment ${i + 1}`} className="h-full w-full object-cover" style={{ objectPosition: p.pos }} />;
  return (
    <div className="flex h-full w-full items-center justify-center" style={{ background: `linear-gradient(135deg, ${p.tint[0]}, ${p.tint[1]})` }}>
      <span className="font-script text-4xl text-white/95 sm:text-5xl">Photo {i + 1}</span>
    </div>
  );
}

export default function Gallery() {
  const [open, setOpen] = useState(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((v) => (v + 1) % photos.length);
      if (e.key === "ArrowLeft") setOpen((v) => (v - 1 + photos.length) % photos.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <section id="gallery" className="section text-center">
      <Reveal>
        <p className="eyebrow">Memories</p>
        <h2 className="heading mt-2">Our Moments</h2>
        <Divider className="mt-4" />
        <p className="mt-3 text-sm text-ink/60">Tap a photo to open it</p>
      </Reveal>

      {/* Photos pinned to a string */}
      <div className="relative mt-14">
        <svg viewBox="0 0 1000 60" preserveAspectRatio="none" className="absolute inset-x-0 top-0 hidden h-10 w-full lg:block" aria-hidden="true">
          <path d="M0 8 Q 500 70 1000 8" stroke="#2e8b57" strokeWidth="3" fill="none" />
        </svg>
        <div className="grid grid-cols-2 gap-x-5 gap-y-12 lg:grid-cols-4 lg:gap-x-6 lg:pt-6">
          {photos.map((p, i) => (
            <motion.button
              key={i}
              type="button"
              onClick={() => setOpen(i)}
              initial={{ opacity: 0, y: -60, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: p.tilt }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ type: "spring", stiffness: 60, damping: 8, delay: i * 0.15 }}
              whileHover={{ rotate: -p.tilt, scale: 1.08, y: -6 }}
              whileTap={{ scale: 0.97 }}
              style={{ marginTop: p.drop, transformOrigin: "50% 0" }}
              className="relative mx-auto block w-full max-w-[9rem] bg-white p-2 pb-3 text-left shadow-[0_10px_24px_rgba(30,45,60,.28)] min-[420px]:max-w-[10.5rem] lg:max-w-[13rem]"
              aria-label={`Open photo ${i + 1}`}
            >
              <span className="absolute -top-3 left-1/2 h-6 w-3 -translate-x-1/2 rounded-sm bg-saffron shadow ring-1 ring-gold" aria-hidden="true" />
              <div className="aspect-square overflow-hidden"><Photo p={p} i={i} /></div>
              <p className="mt-2 px-1 font-script text-lg leading-tight text-maroon sm:text-xl">{w.quotes[i % w.quotes.length]}</p>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 p-4 backdrop-blur-sm"
            role="dialog" aria-modal="true"
          >
            <motion.figure
              key={open}
              initial={{ scale: 0.8, rotate: -6 }} animate={{ scale: 1, rotate: 0 }} exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-sm bg-white p-4 pb-6 shadow-2xl"
            >
              <div className="aspect-square overflow-hidden"><Photo p={photos[open]} i={open} /></div>
              <figcaption className="mt-5 px-2 text-center font-script text-3xl leading-snug text-maroon">
                {w.quotes[open % w.quotes.length]}
              </figcaption>
              <div className="mt-4 flex justify-between">
                <button onClick={() => setOpen((open - 1 + photos.length) % photos.length)} className="rounded-full bg-sky/20 px-4 py-1 text-maroon hover:bg-sky/40" aria-label="Previous">‹ Prev</button>
                <button onClick={() => setOpen(null)} className="rounded-full bg-saffron/40 px-4 py-1 hover:bg-saffron/70">Close</button>
                <button onClick={() => setOpen((open + 1) % photos.length)} className="rounded-full bg-sky/20 px-4 py-1 text-maroon hover:bg-sky/40" aria-label="Next">Next ›</button>
              </div>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
