import Image from "next/image";

interface LogoProps { variant?: "header" | "footer"; }

export function Logo({ variant = "header" }: LogoProps) {
  return (
    <span className="flex shrink-0 items-center gap-2">
      <Image src="/images/logo-icon.svg" alt="" width={40} height={40} priority className="size-8 shrink-0 sm:size-10" />
      <Image src="/images/logo-text.svg" alt="CATALYST" width={176} height={25} priority className={`h-auto w-28 shrink-0 sm:w-36 ${variant === "footer" ? "brightness-0" : ""}`} />
    </span>
  );
}
