import Image from "next/image";
import { Section } from "./Section";

const accreditations = [
  { src: "/images/accreditation-1.png", alt: "Accreditation partner 1", w: 100, h: 100 },
  { src: "/images/accreditation-2.png", alt: "Accreditation partner 2", w: 102, h: 100 },
  { src: "/images/accreditation-3.png", alt: "Accreditation partner 3", w: 100, h: 100 },
];

export function AboutSection() {
  return (
    <Section
      id="about"
      className="bg-catalyst-light"
      bgVector="/images/bg-vector-accredited.svg"
      bgVectorTop={710}
      bgVectorLeft={710}
      bgVectorOpacity={0.1}
    >
      <div className="absolute top-[50px] left-[250px] flex w-[1420px] flex-col gap-[57px] z-10">
        <h2 className="text-center text-[90px] leading-none font-semibold text-catalyst-dark">
          About Us
        </h2>
        <div className="flex flex-col gap-[45px] max-w-[1400px] mx-auto">
          <p className="text-center text-[38px] leading-[1.6] font-medium text-catalyst-dark/90 text-pretty tracking-tight">
            At Catalyst, we bring people together to create a cleaner, smarter, and more responsible society. Through cleanliness initiatives, data-driven monitoring, and community engagement, we encourage individuals to take meaningful action and contribute to lasting positive change.
          </p>
          <p className="text-center text-[38px] leading-[1.6] font-medium text-catalyst-dark/90 text-pretty tracking-tight">
            Our three-stage reward system recognizes participation and performance, promoting accountability, collaboration, and continuous improvement. Together, we empower communities to build a more sustainable and impactful future.
          </p>
        </div>
      </div>

      <div className="absolute top-[750px] left-[727px] flex w-[466px] flex-col items-center gap-[40px] z-10">
        <h3 className="text-center text-[75px] leading-none font-semibold tracking-[-0.05em] text-catalyst-dark">
          Accredited by
        </h3>
        <div className="flex w-full items-center justify-center gap-[25px]">
          {accreditations.map((item, index) => (
            <div key={item.src} className="flex items-center gap-[25px]">
              <div
                className="overflow-hidden rounded-full border-[6px] border-catalyst-green shadow-lg transition-transform hover:scale-105"
                style={{ width: item.w, height: item.h }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.w}
                  height={item.h}
                  className="h-full w-full object-cover"
                />
              </div>
              {index < accreditations.length - 1 && (
                <span className="text-[28px] leading-none font-semibold tracking-[-0.05em] text-catalyst-dark/60">
                  X
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Blob - Down at Bottom like Section 5 */}
      <div className="absolute top-[710px] left-[710px] w-[500px] h-[500px] rounded-full bg-radial-green opacity-20 blur-[120px] pointer-events-none" />
    </Section>
  );
}
