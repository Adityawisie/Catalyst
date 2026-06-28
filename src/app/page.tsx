import { DesignCanvas } from "@/components/DesignCanvas";
import { AboutSection } from "@/components/AboutSection";
import { Benefits } from "@/components/Benefits";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { Rankings } from "@/components/Rankings";
import { Surveys } from "@/components/Surveys";

const PAGE_HEIGHT = 5760;

export default function Home() {
  return (
    <DesignCanvas height={PAGE_HEIGHT}>
      <main className="w-full lg:w-[1920px]">
        <Hero />
        <AboutSection />
        <Process />
        <Benefits />
        <Surveys />
        <Rankings />
      </main>
    </DesignCanvas>
  );
}
