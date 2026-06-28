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

  // Sync state with native controls
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
      <h2 className="absolute top-[50px] left-[796px] w-[329px] text-center text-[90px] leading-none font-semibold text-catalyst-light">
        Surveys
      </h2>

      <div className="absolute top-[283px] left-[310px] flex w-[487px] flex-col gap-[50px] z-10">
        <div 
          className="group relative overflow-hidden rounded-[50px] border-[5px] border-catalyst-light shadow-2xl transition-all hover:scale-[1.01] cursor-pointer bg-black"
          onClick={togglePlay}
        >
          <video
            ref={videoRef}
            src="/video/Interview.mp4"
            poster="/images/interview.png"
            className="h-[365px] w-[487px] object-cover"
            playsInline
            controls={isPlaying}
          />
          
          {/* Play Button Overlay */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-all group-hover:bg-black/50">
              <div className="flex h-[90px] w-[90px] items-center justify-center rounded-full bg-catalyst-green shadow-[0_0_40px_rgba(30,215,96,0.5)] transition-all group-hover:scale-110 group-active:scale-95">
                <svg className="ml-1 h-12 w-10 text-catalyst-dark" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-[25px]">
          <p className="text-center text-[28px] leading-none font-medium text-catalyst-light/60">
            Interview with
          </p>
          <p className="text-center text-[48px] leading-tight font-bold text-catalyst-green tracking-tight">
            Sir Vijay H. Mistry
          </p>
          <p className="whitespace-pre-line text-center text-[26px] leading-snug font-medium text-catalyst-light/70">
            Director, Solid Waste Management{"\n"}Ahmedabad Municipal Corporation
          </p>
        </div>
      </div>

      <div className="absolute top-[283px] left-[960px] h-[578px] w-[5px] bg-catalyst-green shadow-[0_0_20px_rgba(30,215,96,0.4)]" />

      <h3 className="absolute top-[283px] left-[1070px] w-[530px] whitespace-pre-line text-center text-[55px] leading-tight font-bold text-catalyst-green tracking-tight z-10">
        Walk-in{"\n"}Survey Responses
      </h3>

      <div className="absolute top-[470px] right-[250px] flex flex-col items-end gap-[30px] z-10">
        {surveyResponses.map((item) => (
          <p
            key={item.text}
            className="text-[32px] leading-relaxed font-semibold text-catalyst-light/90 italic tracking-wide"
          >
            {item.text}
          </p>
        ))}
      </div>

      {/* Decorative Blob */}
      <div className="absolute top-[710px] left-[710px] w-[500px] h-[500px] rounded-full bg-radial-green opacity-20 blur-[120px] pointer-events-none" />
    </Section>
  );
}
