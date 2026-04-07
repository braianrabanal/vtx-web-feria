"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/producto", label: "Producto" },
  { href: "/producto/chroma", label: "Chroma" },
  { href: "/producto/quality", label: "Quality" },
  { href: "/contacto", label: "Contacto" },
];

export default function HeaderNav() {
  const pathname = usePathname();

  return (
    <nav
      className="hidden items-center gap-9 md:flex"
      style={{
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
        fontWeight: 500,
        fontSize: "20px",
        color: "#707070",
      }}
    >
      {navLinks.map((link) => {
        const isActive =
          link.href === "/"
            ? pathname === "/"
            : pathname === link.href || pathname.startsWith(`${link.href}/`);

        return (
          <Link
            key={link.href}
            href={link.href}
            className="uppercase hover:text-[#1b2130]"
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
