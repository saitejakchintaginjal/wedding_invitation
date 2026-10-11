import { wedding as w } from "@/lib/config";
import Reveal from "./Reveal";
import { Divider } from "./Ornaments";
import { EventIcon } from "./Illustrations";
import EventArt from "./EventArt";

export default function Schedule() {
  return (
    <section id="schedule" className="section">
      <Reveal className="text-center">
        <p className="eyebrow">The Celebrations</p>
        <h2 className="heading mt-2">Wedding Schedule</h2>
        <Divider className="mt-4" />
      </Reveal>
      <ol className="relative mx-auto mt-14 max-w-2xl">
        <span className="absolute bottom-0 left-6 top-0 w-0.5 bg-gradient-to-b from-sky via-leaf to-saffron md:left-1/2" aria-hidden="true" />
        {w.schedule.map((e, i) => {
          const right = i % 2 === 1;
          const tone = ["bg-saffron/50 border-gold", "bg-leaf/20 border-leaf", "bg-sky/20 border-sky", "bg-blush/20 border-blush"][i % 4];
          return (
            <li key={e.title} className="relative mb-12 pl-16 last:mb-0 md:pl-0">
              <span className={`absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border-2 text-maroon shadow transition hover:scale-125 hover:rotate-12 md:left-1/2 md:-translate-x-1/2 ${tone}`}>
                <EventIcon name={e.icon} />
              </span>
              <Reveal x={right ? 30 : -30} y={0}
                className={`rounded-xl p-3 transition hover:bg-white/80 hover:shadow-lg md:w-[calc(50%-3rem)] ${right ? "md:ml-auto md:text-left" : "md:mr-auto md:text-right"}`}>
                <div className={`mb-2 flex ${right ? "md:justify-start" : "md:justify-end"}`}>
                  <EventArt name={e.icon} className="h-24 w-24 drop-shadow-md transition hover:scale-110 sm:h-28 sm:w-28" />
                </div>
                <p className="eyebrow">{e.time}</p>
                <h3 className="mt-1 font-serif text-2xl text-maroon">{e.title}</h3>
                <p className="mt-1 text-sm leading-6 text-ink/75">{e.note}</p>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
