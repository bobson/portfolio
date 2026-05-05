"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-space text-xl font-bold gradient-text">
          yourname.dev
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={clsx(
                  "text-sm font-medium transition-colors duration-200 hover:text-violet-400",
                  pathname === link.href
                    ? "text-violet-400"
                    : "text-neutral-400",
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden relative w-8 h-8 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={clsx(
              "absolute transition-all duration-300",
              menuOpen
                ? "opacity-100 rotate-0 scale-100"
                : "opacity-0 rotate-90 scale-50",
            )}
          >
            <X size={24} />
          </span>
          <span
            className={clsx(
              "absolute transition-all duration-300",
              menuOpen
                ? "opacity-0 -rotate-90 scale-50"
                : "opacity-100 rotate-0 scale-100",
            )}
          >
            <Menu size={24} />
          </span>
        </button>
      </div>

      {/* Mobile Dropdown — slides down below navbar */}
      <div
        className={clsx(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          menuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="border-t border-white/10 bg-neutral-950 px-6 py-4 flex flex-col">
          {links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ transitionDelay: menuOpen ? `${i * 60}ms` : "0ms" }}
              className={clsx(
                "py-3 text-base font-medium border-b border-white/5 last:border-none",
                "transition-all duration-300",
                menuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2",
                pathname === link.href
                  ? "text-violet-400"
                  : "text-neutral-300 hover:text-violet-400",
              )}
            >
              {pathname === link.href && (
                <span className="mr-2 text-violet-500">▹</span>
              )}
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
