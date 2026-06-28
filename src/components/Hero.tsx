"use client";

import { useState } from "react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Section 
      className="bg-catalyst-dark flex items-center lg:block min-h-screen lg:min-h-0" 
      bgVector="/images/bg-vector-hero.svg" 
      bgVectorTop={710} 
      bgVectorLeft={710} 
      bgVectorOpacity={0.1}
    >
      <header className="fixed lg:absolute top-0 lg:top-[30px] left-0 lg:left-[250px] flex w-full lg:w-[1420px] items-center justify-between z-50 px-6 py-4 lg:p-0 bg-catalyst-dark/80 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none">
        <div className="flex items-center lg:gap-[178px] justify-between w-full lg:w-auto">
          <Logo scale={1.2} />
          
          <button 
            className="lg:hidden text-catalyst-green p-2 transition-transform active:scale-90"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              {isMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 12h16M4 6h16M4 18h16" />
              )}
            </svg>
          </button>

          <nav className="hidden lg:flex items-center rounded-2xl border border-catalyst-light/20 bg-catalyst-dark/50 backdrop-blur-md p-[10px]">
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
          className="hidden lg:block rounded-2xl bg-catalyst-green px-6 py-5 text-[20px] leading-[0.9] font-semibold text-catalyst-dark transition-transform hover:scale-105"
        >
          Register
        </a>

        {/* Mobile Nav Overlay */}
        <div 
          className={`fixed inset-0 z-40 bg-catalyst-dark/98 backdrop-blur-2xl lg:hidden flex flex-col items-center justify-center gap-8 transition-all duration-500 ease-in-out ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          }`}
        >
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`text-4xl font-semibold text-catalyst-light hover:text-catalyst-green transition-all duration-300 transform ${
                isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#register"
            onClick={() => setIsMenuOpen(false)}
            className={`mt-8 rounded-2xl bg-catalyst-green px-12 py-6 text-2xl font-bold text-catalyst-dark transition-all duration-300 transform ${
              isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: `${navItems.length * 50}ms` }}
          >
            Register
          </a>
        </div>
      </header>

      <div className="lg:absolute lg:top-[296px] lg:left-[331px] flex w-full lg:w-[1258px] flex-col gap-8 lg:gap-[70px] text-center z-10 px-6 mt-12 lg:mt-0">
        <h1 className="text-5xl md:text-7xl lg:text-[120px] leading-none font-extrabold tracking-[-0.05em] text-catalyst-green uppercase animate-in fade-in slide-in-from-bottom-4 duration-1000">
          CATALYST
        </h1>
        <p className="text-3xl md:text-5xl lg:text-[90px] leading-[1.1] font-semibold text-catalyst-light text-pretty animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          Portal for Waste Management{"\n"}& Societal Benefits
        </p>
      </div>
      
      {/* Decorative Blur Effect */}
      <div className="absolute bottom-[-100px] lg:top-[710px] left-1/2 lg:left-[710px] -translate-x-1/2 lg:translate-x-0 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] rounded-full bg-radial-green opacity-20 blur-[80px] lg:blur-[120px] pointer-events-none" />
    </Section>
  );
}
