import Image from "next/image";
import { Section } from "./Section";

const accreditations = [
  { src: "/images/accreditation-1.png", alt: "Accreditation partner 1" },
  { src: "/images/accreditation-2.png", alt: "Accreditation partner 2" },
  { src: "/images/accreditation-3.png", alt: "Accreditation partner 3" },
];

export function AboutSection() {
  return (
    <Section id="about" className="bg-catalyst-light" bgVector="/images/bg-vector-accredited.svg" bgVectorOpacity={0.5}>
      <div className="mx-auto flex max-w-7xl flex-col items-center">
        <h2 className="section-title text-catalyst-dark">About Us</h2>
        <div className="mt-10 space-y-6 text-center text-lg font-medium leading-relaxed tracking-tight text-catalyst-dark/90 sm:text-xl md:mt-14 md:text-2xl lg:text-3xl">
          <p>At Catalyst, we bring people together to create a cleaner, smarter, and more responsible society. Through cleanliness initiatives, data-driven monitoring, and community engagement, we encourage individuals to take meaningful action and contribute to lasting positive change.</p>
          <p>Our three-stage reward system recognizes participation and performance, promoting accountability, collaboration, and continuous improvement. Together, we empower communities to build a more sustainable and impactful future.</p>
        </div>

        <div className="mt-20 flex flex-col items-center gap-8 lg:mt-24">
          <h3 className="text-center text-3xl font-semibold tracking-tight text-catalyst-dark sm:text-5xl">Accredited by</h3>
          <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-6" aria-label="Accreditation partners">
            {accreditations.map((item) => (
              <li key={item.src} className="overflow-hidden rounded-full border-4 border-catalyst-green shadow-lg transition-transform hover:scale-105">
                <Image src={item.src} alt={item.alt} width={100} height={100} sizes="(min-width: 640px) 100px, 72px" className="size-18 object-cover sm:size-24" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
