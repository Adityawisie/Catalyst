"use client";

import { useRef, useState } from "react";
import { Section } from "./Section";

const surveyResponses = ["Waste is segregated properly", "Garbage is collected every day", "The corporation is helping our society", "Cleanliness should be our priority", "Residents are equally responsible"];

export function Surveys() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const playVideo = async () => { await videoRef.current?.play(); };

  return (
    <Section id="surveys" className="bg-catalyst-dark" bgVector="/images/bg-vector-surveys.svg" bgVectorOpacity={0.5}>
      <h2 className="section-title text-catalyst-light">Surveys</h2>
      <div className="mx-auto mt-16 grid max-w-6xl gap-16 lg:grid-cols-2 lg:gap-20">
        <div className="min-w-0">
          <div className="group relative aspect-video overflow-hidden rounded-3xl border-4 border-catalyst-light bg-black shadow-2xl">
            <video ref={videoRef} src="/video/Interview.mp4" poster="/images/interview.png" className="size-full object-cover" playsInline controls onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)} preload="metadata" />
            {!isPlaying && <button type="button" onClick={playVideo} aria-label="Play interview video" className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/45"><span className="flex size-20 items-center justify-center rounded-full bg-catalyst-green text-catalyst-dark shadow-[0_0_40px_rgba(30,215,96,0.5)] transition-transform group-hover:scale-105"><svg aria-hidden className="ml-1 size-10" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg></span></button>}
          </div>
          <div className="mt-8 text-center">
            <p className="text-lg font-medium text-catalyst-light/60">Interview with</p>
            <h3 className="mt-3 text-3xl font-bold tracking-tight text-catalyst-green sm:text-4xl">Sir Vijay H. Mistry</h3>
            <p className="mt-3 text-lg font-medium leading-relaxed text-catalyst-light/70">Director, Solid Waste Management<br />Ahmedabad Municipal Corporation</p>
          </div>
        </div>
        <div className="min-w-0 border-catalyst-green lg:border-l-4 lg:pl-20">
          <h3 className="text-center text-4xl font-bold leading-tight tracking-tight text-catalyst-green lg:text-left lg:text-5xl">Walk-in<br />Survey Responses</h3>
          <ul className="mt-10 space-y-6">{surveyResponses.map((response) => <li key={response} className="text-center text-xl font-semibold italic leading-relaxed tracking-wide text-catalyst-light/80 lg:text-left lg:text-2xl">“{response}”</li>)}</ul>
        </div>
      </div>
    </Section>
  );
}
