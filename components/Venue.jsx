"use client";
import { QRCodeSVG } from "qrcode.react";
import { wedding as w } from "@/lib/config";
import Reveal from "./Reveal";
import { Divider } from "./Ornaments";

export default function Venue() {
  return (
    <section id="venue" className="section text-center">
      <Reveal>
        <p className="eyebrow">Join Us At</p>
        <h2 className="heading mt-2">Our Venue</h2>
        <Divider className="mt-4" />
      </Reveal>
      <div className="mt-12 grid items-center gap-10 md:grid-cols-2">
        <Reveal x={-30} y={0}>
          <div className="overflow-hidden rounded-sm border-4 border-white shadow-xl">
            <img src="/images/venue-mandapam.jpg" alt="Watercolor-style painting of the temple mandapam" loading="lazy" className="w-full transition duration-700 hover:scale-105" />
          </div>
        </Reveal>
        <Reveal x={30} y={0} delay={0.1}>
          <h3 className="font-serif text-2xl text-maroon sm:text-3xl">{w.venueName}</h3>
          <p className="mx-auto mt-3 max-w-sm leading-7 text-ink/80">{w.address}</p>
          <a href={w.mapsUrl} target="_blank" rel="noopener noreferrer"
            className="group mx-auto mt-8 flex w-fit flex-col items-center gap-3 rounded-sm border border-gold/60 bg-white p-4 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            aria-label="Open directions in Google Maps">
            <QRCodeSVG value={w.mapsUrl} size={132} fgColor="#1e5fa8" bgColor="#ffffff" />
            <span className="eyebrow group-hover:text-maroon">Scan or tap for directions</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
