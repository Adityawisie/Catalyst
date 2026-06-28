import Image from "next/image";

interface LogoProps {
  variant?: "header" | "footer";
  scale?: number;
}

export function Logo({ variant = "header", scale = 1.5 }: LogoProps) {
  const iconSize = Math.round(40 * scale);
  const textWidth = Math.round(176 * scale);
  const textHeight = Math.round(25 * scale);

  return (
    <div className="flex items-center gap-[10px]">
      <Image
        src="/images/logo-icon.svg"
        alt="Catalyst icon"
        width={iconSize}
        height={iconSize}
        priority
        className="shrink-0"
      />
      <Image
        src="/images/logo-text.svg"
        alt="CATALYST"
        width={textWidth}
        height={textHeight}
        className={variant === "footer" ? "brightness-0" : "shrink-0"}
        priority
      />
    </div>
  );
}
