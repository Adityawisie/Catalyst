import { Logo } from "./Logo";
import { Section } from "./Section";

const navItems = [
  { label: "About", href: "#about", active: true },
  { label: "Process", href: "#process" },
  { label: "Benefits", href: "#benefits" },
  { label: "Survey", href: "#surveys" },
  { label: "Rankings", href: "#rankings" },
];

export function Hero() {
  return (
    <Section 
      className="bg-catalyst-dark" 
      bgVector="/images/bg-vector-hero.svg" 
      bgVectorTop={710} 
      bgVectorLeft={710} 
      bgVectorOpacity={0.1}
    >
      <header className="absolute top-[30px] left-[250px] flex w-[1420px] items-center justify-between z-10">
        <div className="flex items-center gap-[178px]">
          <Logo scale={1.75} />
          <nav className="flex items-center rounded-2xl border border-catalyst-light/20 bg-catalyst-dark/50 backdrop-blur-md p-[10px]">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`rounded-2xl px-5 py-4 text-center text-[20px] leading-[0.9] font-normal transition-all duration-300 ${
                  item.active
                    ? "border border-catalyst-green-80 bg-catalyst-green text-catalyst-dark"
                    : "text-catalyst-light hover:text-catalyst-green"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <a
          href="#register"
          className="rounded-2xl bg-catalyst-green px-6 py-5 text-[20px] leading-[0.9] font-semibold text-catalyst-dark transition-transform hover:scale-105"
        >
          Register
        </a>
      </header>

      <div className="absolute top-[296px] left-[331px] flex w-[1258px] flex-col gap-[70px] text-center z-10">
        <h1 className="text-[120px] leading-none font-extrabold tracking-[-0.05em] text-catalyst-green uppercase">
          CATALYST
        </h1>
        <p className="text-[90px] leading-[1.1] font-semibold whitespace-pre-line text-catalyst-light">
          Portal for Waste Management{"\n"}& Societal Benefits
        </p>
      </div>
      
      {/* Decorative Blur Effect */}
      <div className="absolute top-[710px] left-[710px] w-[500px] h-[500px] rounded-full bg-radial-green opacity-20 blur-[120px] pointer-events-none" />
    </Section>
  );
}
