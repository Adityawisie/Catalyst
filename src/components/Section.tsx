import Image from "next/image";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bgVector?: string;
  bgVectorTop?: number;
  bgVectorLeft?: number;
  bgVectorOpacity?: number;
  id?: string;
}

export function Section({
  children,
  className = "",
  bgVector,
  bgVectorTop = 710,
  bgVectorLeft = 710,
  bgVectorOpacity = 0.1,
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative w-full overflow-hidden lg:h-[960px] lg:w-[1920px] py-16 lg:py-0 ${className}`}
    >
      {bgVector && (
        <Image
          src={bgVector}
          alt=""
          width={500}
          height={500}
          aria-hidden
          className="pointer-events-none absolute z-0 opacity-10 lg:opacity-[var(--bg-opacity)]"
          style={{ 
            top: bgVectorTop, 
            left: bgVectorLeft, 
            opacity: bgVectorOpacity,
            // @ts-ignore
            "--bg-opacity": bgVectorOpacity
          }}
        />
      )}
      <div className="relative z-10 w-full h-full px-6 lg:px-0">
        {children}
      </div>
    </section>
  );
}
