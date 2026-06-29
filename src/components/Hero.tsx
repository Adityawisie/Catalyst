"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Section } from "./Section";

const navItems = [
  { label: "About", href: "#about" }, { label: "Process", href: "#process" },
  { label: "Benefits", href: "#benefits" }, { label: "Survey", href: "#surveys" },
  { label: "Rankings", href: "#rankings" },
];

export function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && setIsMenuOpen(false);
    window.addEventListener("keydown", closeOnEscape);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", closeOnEscape); };
  }, [isMenuOpen]);

  return (
    <Section className="flex min-h-svh items-center bg-catalyst-dark pt-28" bgVector="/images/bg-vector-hero.svg" bgVectorOpacity={0.5}>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-catalyst-light/10 bg-catalyst-dark/90 backdrop-blur-xl">
        <div className="section-container flex h-20 items-center justify-between">
          <a href="#top" aria-label="Catalyst home"><Logo /></a>
          <nav aria-label="Primary navigation" className="hidden items-center rounded-2xl border border-catalyst-light/20 bg-catalyst-dark/50 p-1.5 lg:flex">
            {navItems.map((item) => <a key={item.label} href={item.href} className="rounded-xl px-4 py-3 text-base text-catalyst-light transition-colors hover:bg-catalyst-light/5 hover:text-catalyst-green">{item.label}</a>)}
          </nav>
          <a href="#register" className="hidden min-h-11 items-center rounded-xl bg-catalyst-green px-5 font-semibold text-catalyst-dark transition-transform hover:scale-105 lg:flex">Register</a>
          <button type="button" aria-label={isMenuOpen ? "Close menu" : "Open menu"} aria-expanded={isMenuOpen} aria-controls="mobile-navigation" className="relative z-50 flex size-11 items-center justify-center rounded-lg text-catalyst-green lg:hidden" onClick={() => setIsMenuOpen((open) => !open)}>
            <svg className="size-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">{isMenuOpen ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}</svg>
          </button>
          <nav id="mobile-navigation" aria-label="Mobile navigation" aria-hidden={!isMenuOpen} className={`fixed inset-0 flex flex-col items-center justify-center gap-6 bg-catalyst-dark/98 px-6 backdrop-blur-2xl transition-opacity lg:hidden ${isMenuOpen ? "visible opacity-100" : "invisible pointer-events-none opacity-0"}`}>
            {navItems.map((item) => <a key={item.label} href={item.href} tabIndex={isMenuOpen ? 0 : -1} onClick={() => setIsMenuOpen(false)} className="text-3xl font-semibold text-catalyst-light transition-colors hover:text-catalyst-green">{item.label}</a>)}
            <a href="#register" tabIndex={isMenuOpen ? 0 : -1} onClick={() => setIsMenuOpen(false)} className="mt-4 rounded-xl bg-catalyst-green px-10 py-4 text-xl font-bold text-catalyst-dark">Register</a>
          </nav>
        </div>
      </header>

      <div id="top" className="mx-auto max-w-6xl text-center">
        <h1 className="hero-font text-[clamp(3.5rem,12vw,7.5rem)] leading-none tracking-[0.015em] text-catalyst-green">CATALYST</h1>
        <p className="mt-8 text-[clamp(2rem,7vw,5.5rem)] font-semibold leading-[1.08] tracking-tight text-catalyst-light sm:mt-12">Portal for Waste Management<br className="hidden sm:block" /> &amp; Societal Benefits</p>
      </div>
    </Section>
  );
}
