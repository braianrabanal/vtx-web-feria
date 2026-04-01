"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderLogo() {
  const pathname = usePathname();

  let src = "/brand/visiortex/logos/visiortex-logo-white.png";
  let alt = "VISIORTEX®";

  if (pathname.startsWith("/producto/chroma")) {
    src = "/brand/visiortex/modules/chroma/visiortex-chroma-logo.png";
    alt = "VISIORTEX® Chroma";
  } else if (pathname.startsWith("/producto/quality")) {
    src = "/brand/visiortex/modules/quality/visiortex-quality-logo.png";
    alt = "VISIORTEX® Quality";
  }

  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="relative h-10 w-40 md:h-12 md:w-48">
        <Image src={src} alt={alt} fill className="object-contain" priority />
      </div>
      <span className="sr-only">
        VISIORTEX® · Visión artificial para el control de calidad textil
      </span>
    </Link>
  );
}
