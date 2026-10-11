import { wedding as w } from "@/lib/config";
import Reveal from "./Reveal";
import { BananaLeaf, Divider } from "./Ornaments";
import RangoliLamp from "./RangoliLamp";

export default function Welcome() {
  return (
    <section id="welcome" className="section">
      <BananaLeaf className="pointer-events-none absolute right-0 top-10 hidden h-64 w-28 opacity-30 md:block" />
      <div className="grid items-center gap-10 md:grid-cols-[auto,1fr]">
        <Reveal x={-30} y={0} className="flex justify-center">
          <RangoliLamp className="w-60 drop-shadow-lg sm:w-72 md:w-80" />
        </Reveal>
        <Reveal className="text-center md:text-left">
          <p className="eyebrow">With Blessings</p>
          <h2 className="heading mt-2">Welcome Dear Friends &amp; Family</h2>
          <Divider className="mt-4 md:justify-start" />
          <p className="mt-6 max-w-xl text-base leading-8 text-ink/85 sm:text-lg">{w.welcome}</p>
          <p className="mt-6 font-script text-3xl text-gold">{w.groom} &amp; {w.bride}</p>
          <img src="/images/couple-sofa.png" alt="Bride and groom seated together" loading="lazy"
            className="floaty mx-auto mt-6 w-full max-w-sm drop-shadow-xl md:mx-0" />
        </Reveal>
      </div>
    </section>
  );
}
