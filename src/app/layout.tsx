import type { Metadata } from "next";
import localFont from "next/font/local";
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
  title: "VISIORTEX",
  description:
    "Computer vision for textile quality and color control.",
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
        {children}
      </body>
    </html>
  );
}
