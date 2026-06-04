import Hero from "@/components/home/Hero";
import AutonomieCallout from "@/components/home/AutonomieCallout";
import OffresSection from "@/components/home/OffresSection";
import CadeauCallout from "@/components/home/CadeauCallout";

export default function Home() {
  return (
    <main>
      <Hero />
      <AutonomieCallout />
      <OffresSection />
      <CadeauCallout />
    </main>
  );
}
