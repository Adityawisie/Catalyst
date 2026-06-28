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
      className={`relative h-[960px] w-[1920px] overflow-hidden ${className}`}
    >
      {bgVector && (
        <Image
          src={bgVector}
          alt=""
          width={500}
          height={500}
          aria-hidden
          className="pointer-events-none absolute"
          style={{ 
            top: bgVectorTop, 
            left: bgVectorLeft, 
            opacity: bgVectorOpacity 
          }}
        />
      )}
      {children}
    </section>
  );
}
