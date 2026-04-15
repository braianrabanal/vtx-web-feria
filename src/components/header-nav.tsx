"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";

type Props = {
  locale: Locale;
  labels: {
    inicio: string;
    producto: string;
    chroma: string;
    quality: string;
    contacto: string;
  };
};

export default function HeaderNav({ locale, labels }: Props) {
  const pathname = usePathname();
  const navLinks = [
    { href: `/${locale}`, label: labels.inicio },
    { href: `/${locale}/producto`, label: labels.producto },
    { href: `/${locale}/producto/chroma`, label: labels.chroma },
    { href: `/${locale}/producto/quality`, label: labels.quality },
    { href: `/${locale}/contacto`, label: labels.contacto },
  ];

  return (
    <nav
      className="flex w-full items-center gap-4 overflow-x-auto whitespace-nowrap pb-1 md:w-auto md:gap-9 md:overflow-visible md:pb-0"
      style={{
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
        fontWeight: 500,
        fontSize: "20px",
        color: "#707070",
      }}
    >
      {navLinks.map((link) => {
        const isActive =
          link.href === `/${locale}`
            ? pathname === `/${locale}`
            : pathname === link.href || pathname.startsWith(`${link.href}/`);

        return (
          <Link
            key={link.href}
            href={link.href}
            className="uppercase hover:text-[#1b2130] text-[16px] md:text-[20px]"
            style={
              isActive
                ? {
                    fontWeight: 700,
                    fontStyle: "italic",
                    color: "#707070",
                  }
                : undefined
            }
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
