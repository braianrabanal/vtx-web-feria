"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderLogo() {
  const pathname = usePathname();

  let src = "/brand/visiortex/logos/visiortex-logo-black.png";
  let alt = "VISIORTEX®";
  let fitClass = "scale-[1.02] translate-y-[0px]";

  if (pathname.startsWith("/producto/chroma")) {
    src = "/brand/visiortex/modules/chroma/visiortex-chroma-logoblack.png";
    alt = "VISIORTEX® Chroma";
    fitClass = "scale-[0.865] translate-y-[1px]";
  } else if (pathname.startsWith("/producto/quality")) {
    src = "/brand/visiortex/modules/quality/visiortex-quality-logoblack.png";
    alt = "VISIORTEX® Quality";
    fitClass = "scale-[0.865] translate-y-[3px]";
  }

  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="relative h-10 w-40 overflow-hidden md:h-12 md:w-48">
        <div
          className={`relative h-full w-full transform-gpu transition-transform duration-150 ${fitClass}`}
        >
          <Image src={src} alt={alt} fill className="object-contain" priority />
        </div>
      </div>
      <span className="sr-only">
        VISIORTEX® · Visión artificial para el control de calidad textil
      </span>
    </Link>
  );
}
