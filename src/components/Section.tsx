import Image from "next/image";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bgVector?: string;
  bgVectorOpacity?: number;
  id?: string;
}

export function Section({
  children,
  className = "",
  bgVector,
  bgVectorOpacity = 0.1,
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative isolate w-full overflow-hidden py-20 sm:py-24 lg:py-32 ${className}`}
    >
      {bgVector && (
        <Image
          src={bgVector}
          alt=""
          width={640}
          height={640}
          aria-hidden
          className="pointer-events-none absolute bottom-[-12rem] left-1/2 z-0 h-auto w-[32rem] max-w-none -translate-x-1/2 lg:w-[40rem]"
          style={{
            opacity: bgVectorOpacity,
          }}
        />
      )}
      <div className="section-container relative z-10">
        {children}
      </div>
    </section>
  );
}
