"use client";

import { useEffect, useRef } from "react";

type Blob = {
  size: string;
  background: string;
  position: React.CSSProperties;
};

const BLOBS: Blob[] = [
  {
    size: "55%",
    background:
      "radial-gradient(circle, #1E45C2 0%, #0B1740 60%, transparent 100%)",
    position: { top: "20%", left: "10%" },
  },
  {
    size: "60%",
    background:
      "radial-gradient(circle, #3B6EF6 0%, #15287A 55%, transparent 100%)",
    position: { top: "10%", right: "10%" },
  },
  {
    size: "50%",
    background:
      "radial-gradient(circle, #7AA8FF 0%, #1E3A8A 55%, transparent 100%)",
    position: { bottom: "15%", right: "15%" },
  },
  {
    size: "48%",
    background:
      "radial-gradient(circle, #8BBCFF 0%, #2451D6 55%, transparent 100%)",
    position: { top: "45%", left: "20%" },
  },
  {
    size: "45%",
    background:
      "radial-gradient(circle, #5B8FFF 0%, #12205E 55%, transparent 100%)",
    position: { bottom: "20%", left: "5%" },
  },
];

const SPEEDS = [1400, 1800, 1100, 2000, 1500];

/**
 * The blob shapes drift on randomised timings, so the motion is driven from JS
 * rather than CSS keyframes. Honours prefers-reduced-motion by staying static.
 */
export function HeroVisual({ label }: { label: string }) {
  const blobRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const rand = (min: number, max: number) =>
      min + Math.random() * (max - min);
    const axis = () => Math.round(rand(15, 85));
    const borderRadius = () =>
      `${axis()}% ${axis()}% ${axis()}% ${axis()}% / ${axis()}% ${axis()}% ${axis()}% ${axis()}%`;

    const timers: ReturnType<typeof setTimeout>[] = [];

    blobRefs.current.forEach((blob, index) => {
      if (!blob) return;

      blob.style.borderRadius = borderRadius();
      if (reduceMotion) return;

      const base = SPEEDS[index % SPEEDS.length];

      const step = () => {
        const scale = rand(0.7, 1.35);
        const duration = base + rand(-base * 0.15, base * 0.15);

        blob.style.transition = `transform ${duration}ms ease-in-out, border-radius ${duration}ms ease-in-out`;
        blob.style.transform = `translate(${rand(-35, 35)}%, ${rand(-35, 35)}%) rotate(${rand(-90, 90)}deg) scale(${scale}, ${scale * rand(0.8, 1.2)})`;
        blob.style.borderRadius = borderRadius();

        timers.push(setTimeout(step, duration));
      };

      timers.push(setTimeout(step, rand(0, 400)));
    });

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="bg-starkom-panel relative aspect-[4/3] overflow-hidden rounded-[22px] md:aspect-[1/1.02]">
      <div className="absolute -inset-1/4 z-0">
        {BLOBS.map((blob, index) => (
          <div
            key={index}
            ref={(el) => {
              blobRefs.current[index] = el;
            }}
            className="absolute opacity-90 mix-blend-screen blur-[38px] will-change-transform"
            style={{
              width: blob.size,
              height: blob.size,
              background: blob.background,
              ...blob.position,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 z-10 bg-white/60 backdrop-blur-[24px] backdrop-saturate-150" />

      <div className="absolute inset-0 z-20 flex items-center justify-center p-6">
        <span className="font-display text-starkom-panel-ink text-[clamp(3rem,6.5vw,4.6rem)] tracking-[-0.02em]">
          {label}
        </span>
      </div>
    </div>
  );
}
