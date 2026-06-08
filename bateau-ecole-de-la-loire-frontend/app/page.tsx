import Hero from "@/components/home/Hero";
import AutonomieCallout from "@/components/home/AutonomieCallout";
import OffresSection from "@/components/home/OffresSection";
import CadeauCallout from "@/components/home/CadeauCallout";

export default function Home() {
  return (
    <main>
      <Hero />
      <OffresSection />
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y divide-blue-950 lg:divide-y-0 lg:divide-x">
        <AutonomieCallout />
        <CadeauCallout />
      </div>
    </main>
  );
}
