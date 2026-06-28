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
      <div className="lg:absolute lg:top-[50px] lg:left-[250px] flex w-full lg:w-[1420px] flex-col gap-10 lg:gap-[57px] z-10 px-6 lg:px-0">
        <h2 className="text-center text-5xl md:text-7xl lg:text-[90px] leading-none font-semibold text-catalyst-dark">
          About Us
        </h2>
        <div className="flex flex-col gap-6 lg:gap-[45px] max-w-[1400px] mx-auto">
          <p className="text-center text-lg md:text-2xl lg:text-[38px] leading-[1.6] font-medium text-catalyst-dark/90 text-pretty tracking-tight">
            At Catalyst, we bring people together to create a cleaner, smarter, and more responsible society. Through cleanliness initiatives, data-driven monitoring, and community engagement, we encourage individuals to take meaningful action and contribute to lasting positive change.
          </p>
          <p className="text-center text-lg md:text-2xl lg:text-[38px] leading-[1.6] font-medium text-catalyst-dark/90 text-pretty tracking-tight">
            Our three-stage reward system recognizes participation and performance, promoting accountability, collaboration, and continuous improvement. Together, we empower communities to build a more sustainable and impactful future.
          </p>
        </div>
      </div>

      <div className="lg:absolute lg:top-[750px] lg:left-[727px] flex w-full lg:w-[466px] flex-col items-center gap-8 lg:gap-[40px] z-10 mt-20 lg:mt-0 px-6 lg:px-0">
        <h3 className="text-center text-3xl md:text-5xl lg:text-[75px] leading-none font-semibold tracking-[-0.05em] text-catalyst-dark">
          Accredited by
        </h3>
        <div className="flex w-full items-center justify-center gap-4 lg:gap-[25px]">
          {accreditations.map((item, index) => (
            <div key={item.src} className="flex items-center gap-3 lg:gap-[25px]">
              <div
                className="overflow-hidden rounded-full border-[3px] lg:border-[6px] border-catalyst-green shadow-lg transition-transform hover:scale-110 w-16 h-16 md:w-24 md:h-24 lg:w-[100px] lg:h-[100px]"
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
                <span className="text-lg lg:text-[28px] leading-none font-bold text-catalyst-dark/40">
                  ✕
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Blob */}
      <div className="absolute top-[710px] left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-[710px] w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] rounded-full bg-radial-green opacity-20 blur-[80px] lg:blur-[120px] pointer-events-none" />
    </Section>
  );
}
