// app/components/CobeGlobeBg.tsx
"use client";

import createGlobe from "cobe";
import { useEffect, useRef } from "react";

type Props = {
  size?: number;
  className?: string;
  speed?: number;
};

export default function CobeGlobeBg({
  size = 900,
  className = "",
  speed = 0.002,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: size * 2,
      height: size * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [],
      onRender: (state) => {
        state.phi = phi;
        phi += speed;
      },
    });

    return () => globe.destroy();
  }, [size, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        width: size,
        height: size,
        maxWidth: "none",
        aspectRatio: 1,
        pointerEvents: "none",
        opacity: 0.5,
      }}
    />
  );
}
