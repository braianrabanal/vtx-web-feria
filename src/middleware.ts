import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, locales } from "@/i18n/config";

function hasLocale(pathname: string) {
  return locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (hasLocale(pathname)) {
    return NextResponse.next();
  }

  const localePath =
    pathname === "/"
      ? `/${defaultLocale}`
      : `/${defaultLocale}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;

  return NextResponse.redirect(new URL(localePath, request.url));
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
