"use client";

import { useEffect, useState } from "react";

const DESIGN_WIDTH = 1920;

interface DesignCanvasProps {
  children: React.ReactNode;
  height: number;
}

export function DesignCanvas({ children, height }: DesignCanvasProps) {
  const [scale, setScale] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateScale = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (mobile) {
        setScale(1);
      } else {
        setScale(Math.min(1, window.innerWidth / DESIGN_WIDTH));
      }
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return <div className="w-full overflow-x-hidden opacity-0">{children}</div>;
  }

  if (isMobile) {
    return <div className="w-full overflow-x-hidden bg-catalyst-dark">{children}</div>;
  }

  const scaledHeight = height * scale;

  return (
    <div className="w-full overflow-x-hidden" style={{ height: scaledHeight }}>
      <div
        className="flex justify-center"
        style={{ width: "100%", height: scaledHeight }}
      >
        <div
          style={{
            width: DESIGN_WIDTH,
            height,
            transform: `scale(${scale})`,
            transformOrigin: "top center",
            flexShrink: 0,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
