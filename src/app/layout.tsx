import type { Metadata } from "next";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

const glorida = localFont({
  src: "../../public/fonts/GloridaRegular-pgOKa.ttf",
  variable: "--font-glorida",
  weight: "400",
  style: "normal",
  display: "swap",
});

const performa = localFont({
  src: "../../public/fonts/performa-ex-semibold.ttf",
  variable: "--font-performa",
  weight: "600",
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Visión artificial para el control de calidad textil, en tiempo real.",
  description:
    "VISIORTEX® convierte imagen y datos en decisiones objetivas para garantizar color y calidad en la producción textil.",
  icons: {
    icon: "/Visiortex-Icon-Gradient.ico",
  },
};

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/producto", label: "Producto" },
  { href: "/producto/chroma", label: "Chroma" },
  { href: "/producto/quality", label: "Quality" },
  { href: "/contacto", label: "Contacto" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${glorida.variable} ${performa.variable} bg-deep-frame text-clarity-white antialiased`}
      >
        <div className="flex min-h-screen flex-col bg-deep-frame text-clarity-white">
          <header className="sticky top-0 z-40 border-b border-clarity-white/10 bg-deep-frame/90 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3 md:px-8">
              <Link href="/" className="flex items-center gap-3">
                <div className="relative h-10 w-40 md:h-12 md:w-48">
                  <Image
                    src="/brand/visiortex/logos/visiortex-logo-white.png"
                    alt="VISIORTEX®"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <span className="sr-only">
                  VISIORTEX® · Visión artificial para el control de calidad textil
                </span>
              </Link>
              <nav className="hidden items-center gap-6 text-sm text-clarity-white/80 md:flex">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="hover:text-clarity-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </header>

          <main className="mx-auto flex-1 max-w-7xl px-5 pb-10 pt-6 md:px-8 md:pt-8">
            {children}
          </main>

          <footer className="border-t border-clarity-white/10 bg-deep-frame/95">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 px-5 py-5 text-center text-xs text-clarity-white/75 md:px-8">
              <div className="flex items-center justify-center gap-3">
                <div className="relative h-8 w-32">
                  <Image
                    src="/brand/visiortex/logos/visiortex-logo-white.png"
                    alt="VISIORTEX®"
                    fill
                    className="object-contain"
                  />
                </div>
                <span>VTX Analytics S.L.</span>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
