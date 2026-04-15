"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";

type Props = {
  locale: Locale;
  label: string;
  spanishLabel: string;
  englishLabel: string;
};

export default function LanguageSwitcher({
  locale,
  label,
  spanishLabel,
  englishLabel,
}: Props) {
  const pathname = usePathname();
  const cleanPath = pathname.startsWith(`/${locale}`)
    ? pathname.slice(locale.length + 1) || "/"
    : pathname;

  const getHref = (targetLocale: Locale) =>
    cleanPath === "/" ? `/${targetLocale}` : `/${targetLocale}${cleanPath}`;

  return (
    <div className="flex items-center gap-2 text-[14px] md:text-[16px]">
      <span className="text-[#707070]">{label}</span>
      <div className="rounded-full border border-[#b7bcc4] bg-[#efefef] p-1">
        <Link
          href={getHref("es")}
          className={`rounded-full px-3 py-1 transition ${
            locale === "es"
              ? "bg-[#1b2130] text-white"
              : "text-[#4f5560] hover:bg-[#e2e2e4]"
          }`}
        >
          {spanishLabel}
        </Link>
        <Link
          href={getHref("en")}
          className={`rounded-full px-3 py-1 transition ${
            locale === "en"
              ? "bg-[#1b2130] text-white"
              : "text-[#4f5560] hover:bg-[#e2e2e4]"
          }`}
        >
          {englishLabel}
        </Link>
      </div>
    </div>
  );
}
