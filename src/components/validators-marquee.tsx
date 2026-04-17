"use client";

import Image from "next/image";

type Item = {
  src: string;
  alt: string;
  imageClassName?: string;
  wrapperClassName?: string;
};

type Props = {
  items: Item[];
  speedSeconds?: number;
};

export default function ValidatorsMarquee({ items, speedSeconds = 26 }: Props) {
  const trackItems = [...items, ...items];

  return (
    <div
      className="relative h-20 w-full overflow-hidden rounded-xl border border-[#c0c3c8] bg-[#f2f2f2] md:h-28"
      aria-label="Carrusel infinito de validadores tecnológicos"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0, black 56px, black calc(100% - 56px), transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0, black 56px, black calc(100% - 56px), transparent 100%)",
        }}
      />

      <div
        className="absolute left-0 top-0 flex h-full items-center"
        style={{
          animation: `vtx-marquee ${speedSeconds}s linear infinite`,
        }}
      >
        {trackItems.map((item, idx) => (
          <div
            key={`${item.src}-${idx}`}
            className={`relative mx-1 h-12 w-56 flex-none md:mx-2 md:h-24 md:w-96 ${item.wrapperClassName ?? ""}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className={`object-contain ${item.imageClassName ?? ""}`}
            />
          </div>
        ))}
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

