import { AboutSection } from "@/components/AboutSection";
import { Benefits } from "@/components/Benefits";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { Rankings } from "@/components/Rankings";
import { Surveys } from "@/components/Surveys";

export default function Home() {
  return (
    <main className="min-w-0 overflow-x-clip">
      <Hero />
      <AboutSection />
      <Process />
      <Benefits />
      <Surveys />
      <Rankings />
    </main>
  );
}
