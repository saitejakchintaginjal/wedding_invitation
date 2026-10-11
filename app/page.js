import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Welcome from "@/components/Welcome";
import Venue from "@/components/Venue";
import Schedule from "@/components/Schedule";
import Countdown from "@/components/Countdown";
import Blessing from "@/components/Blessing";
import Effects from "@/components/Effects";

export default function Page() {
  return (
    <main className="pt-12">
      <Effects />
      <Hero />
      <div className="bg-white/70 border-y-4 border-double border-sky/40"><Gallery /></div>
      <div className="bg-gradient-to-b from-saffron/25 to-transparent"><Welcome /></div>
      <div className="bg-white/60"><Blessing /></div>
      <div className="bg-sky/10 border-y-4 border-double border-leaf/40"><Venue /></div>
      <div className="bg-white/70"><Schedule /></div>
      <Countdown />
    </main>
  );
}
