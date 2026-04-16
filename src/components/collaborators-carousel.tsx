"use client";

import Image from "next/image";

type Item = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type Props = {
  items: Item[];
  speedSeconds?: number;
  repeatsPerHalf?: number;
};

export default function CollaboratorsCarousel({
  items,
  speedSeconds = 22,
  repeatsPerHalf = 7,
}: Props) {
  const safeRepeats = Math.max(1, Math.floor(repeatsPerHalf));
  const halfItems = Array.from({ length: safeRepeats }).flatMap(() => items);
  const trackItems = [...halfItems, ...halfItems];

  return (
    <div
      className="relative overflow-hidden rounded-xl border border-[#c0c3c8] bg-[#f2f2f2] px-6 py-5"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0, black 48px, black calc(100% - 48px), transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0, black 48px, black calc(100% - 48px), transparent 100%)",
      }}
      aria-label="Collaborators carousel"
    >
      <div className="relative w-full overflow-hidden">
        <div
          className="flex min-w-full will-change-transform"
          style={{
            animation: `vtx-marquee ${speedSeconds}s linear infinite`,
          }}
        >
          {trackItems.map((item, idx) => (
            <div
              key={`${item.src}-${idx}`}
              className="flex h-24 min-w-[140px] flex-shrink-0 items-center justify-center px-4"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className="h-12 w-auto object-contain md:h-20"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes vtx-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
