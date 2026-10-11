"use client";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { Divider } from "./Ornaments";

export default function Blessing() {
  return (
    <section id="blessing" className="section text-center">
      <Reveal>
        <p className="eyebrow">Seven Steps, One Lifetime</p>
        <h2 className="heading mt-2">A Sacred Beginning</h2>
        <Divider className="mt-4" />
      </Reveal>
      <Reveal delay={0.15} className="mx-auto mt-10 max-w-xl">
        <motion.div whileHover={{ scale: 1.02, rotate: -0.5 }} className="overflow-hidden rounded-3xl border-4 border-white shadow-2xl ring-4 ring-saffron/70">
          <img src="/images/couple-saptapadi.png" alt="Bride and groom taking the sacred steps around the holy fire"
            loading="lazy" className="w-full" />
        </motion.div>
      </Reveal>
      <Reveal delay={0.3}>
        <p className="mx-auto mt-6 max-w-md font-script text-3xl text-maroon sm:text-4xl">
          With the blessings of elders, two hearts become one.
        </p>
      </Reveal>
    </section>
  );
}
