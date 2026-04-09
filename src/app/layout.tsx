import type { Metadata } from "next";
import localFont from "next/font/local";
import HeaderLogo from "@/components/header-logo";
import HeaderNav from "@/components/header-nav";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${glorida.variable} ${performa.variable} bg-[#f3f3f4] text-[#1b2130] antialiased`}
      >
        <div className="vtx-viewport">
          <div className="vtx-canvas">
          <header className="z-40 bg-[#f3f3f4]">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-6 md:px-8">
              <HeaderLogo />
              <HeaderNav />
            </div>
          </header>

          <main className="mx-auto flex-1 max-w-7xl px-5 pb-10 pt-6 md:px-8 md:pt-8">
            {children}
          </main>

          <footer className="bg-[#171d31]">
            <div className="mx-auto flex max-w-7xl items-center justify-center px-5 py-4 md:px-8">
              <p
                style={{
                  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                  fontWeight: 500,
                  fontSize: "20px",
                  color: "#f1f2f4",
                }}
              >
                VISIORTEX® | VTX Analytics S.L
              </p>
            </div>
          </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
