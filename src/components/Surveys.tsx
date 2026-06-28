"use client";

import { useState, useRef, useEffect } from "react";
import { Section } from "./Section";

const surveyResponses = [
  { text: '"Waste is segregated properly"', left: 1121 },
  { text: '"Garbage is daily collected everyday"', left: 1084 },
  { text: '"Corporation is helping well to our society"', left: 1045 },
  { text: '"Cleanliness should be our priority"', left: 1097 },
  { text: '"Residents are equally responsible"', left: 1095 },
];

export function Surveys() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
    };
  }, []);

  return (
    <Section
      id="surveys"
      className="bg-catalyst-dark"
      bgVector="/images/bg-vector-surveys.svg"
      bgVectorTop={710}
      bgVectorLeft={710}
      bgVectorOpacity={0.1}
    >
      <h2 className="lg:absolute lg:top-[50px] lg:left-[796px] w-full lg:w-[329px] text-center text-5xl md:text-7xl lg:text-[90px] leading-none font-semibold text-catalyst-light z-10">
        Surveys
      </h2>

      <div className="flex flex-col lg:block items-center lg:absolute lg:top-[283px] lg:left-[310px] w-full lg:w-[487px] gap-12 lg:gap-[50px] z-10 mt-16 lg:mt-0 px-6 lg:px-0">
        <div 
          className="group relative overflow-hidden rounded-[30px] lg:rounded-[50px] border-4 lg:border-[5px] border-catalyst-light shadow-2xl transition-all hover:scale-[1.02] cursor-pointer bg-black w-full aspect-video lg:aspect-auto lg:h-[365px]"
          onClick={togglePlay}
        >
          <video
            ref={videoRef}
            src="/video/Interview.mp4"
            poster="/images/interview.png"
            className="h-full w-full object-cover"
            playsInline
            controls={isPlaying}
          />
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-all group-hover:bg-black/50">
              <div className="flex h-20 w-20 md:h-24 md:w-24 lg:h-[90px] lg:w-[90px] items-center justify-center rounded-full bg-catalyst-green shadow-[0_0_40px_rgba(30,215,96,0.5)] transition-all group-hover:scale-110 group-active:scale-95">
                <svg className="ml-1 h-10 w-8 lg:h-12 lg:w-10 text-catalyst-dark" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          )}
        </div>
        
        <div className="flex flex-col gap-5 lg:gap-[25px]">
          <p className="text-center text-xl md:text-2xl lg:text-[28px] leading-none font-medium text-catalyst-light/60">
            Interview with
          </p>
          <p className="text-center text-4xl md:text-6xl lg:text-[48px] leading-tight font-bold text-catalyst-green tracking-tight">
            Sir Vijay H. Mistry
          </p>
          <p className="whitespace-pre-line text-center text-xl md:text-3xl lg:text-[26px] leading-snug font-medium text-catalyst-light/70 text-pretty">
            Director, Solid Waste Management{"\n"}Ahmedabad Municipal Corporation
          </p>
        </div>
      </div>

      {/* Vertical Divider - Hide on Mobile */}
      <div className="hidden lg:block absolute top-[283px] left-[960px] h-[578px] w-[5px] bg-catalyst-green shadow-[0_0_20px_rgba(30,215,96,0.4)]" />

      <div className="flex flex-col lg:block items-center lg:absolute lg:top-[283px] lg:left-[1070px] w-full lg:w-[530px] gap-12 lg:gap-0 mt-24 lg:mt-0 px-6 lg:px-0 z-10">
        <h3 className="whitespace-pre-line text-center text-4xl md:text-6xl lg:text-[55px] leading-tight font-bold text-catalyst-green tracking-tight">
          Walk-in{"\n"}Survey Responses
        </h3>

        <div className="flex flex-col items-center lg:items-end gap-8 lg:gap-[30px] lg:mt-[50px] w-full max-w-[600px] mx-auto">
          {surveyResponses.map((item) => (
            <p
              key={item.text}
              className="text-xl md:text-3xl lg:text-[32px] leading-relaxed font-semibold text-catalyst-light/90 italic tracking-wide text-center lg:text-right text-pretty"
            >
              {item.text}
            </p>
          ))}
        </div>
      </div>

      {/* Decorative Blob */}
      <div className="absolute top-[710px] left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-[710px] w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] rounded-full bg-radial-green opacity-20 blur-[80px] lg:blur-[120px] pointer-events-none" />
    </Section>
  );
}
