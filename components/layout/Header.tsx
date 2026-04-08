"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Accueil", href: "#" },
  { label: "À propos", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Outfit:wght@300;400;500;600&display=swap');
        .font-display { font-family: 'Cormorant Garamond', serif; }
        .font-body    { font-family: 'Outfit', sans-serif; }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes menuItemIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .nav-link::after {
          content: '';
          display: block;
          height: 1.5px;
          background: #f97316;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.25s ease;
          margin-top: 2px;
          border-radius: 2px;
        }
        .nav-link:hover::after { transform: scaleX(1); }
        .menu-item { animation: menuItemIn 0.4s ease both; }
      `}</style>

      {/* ── Main Header ── */}
      <header
        className={`font-body fixed left-0 right-0 top-0 z-[100] flex h-20 items-center justify-between transition-all duration-300 max-[480px]:h-16
          ${scrolled
            ? "bg-[#FAF8F4]/90 shadow-[0_1px_24px_rgba(0,0,0,0.07)] backdrop-blur-md"
            : "bg-[#FAF8F4]"
          }
          px-[clamp(24px,7vw,100px)]`}
        style={{ animation: "slideDown 0.6s ease both" }}
      >
        {/* Logo */}
        <Link href="#" className="flex items-center gap-3 no-underline" aria-label="Bouillon Baron">
          <div className="flex h-10 w-10 items-center justify-center">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
              <circle cx="24" cy="24" r="22" stroke="#f97316" strokeWidth="1.5" fill="none" opacity="0.25" />
              <line x1="16" y1="10" x2="16" y2="38" stroke="#f97316" strokeWidth="2.2" strokeLinecap="round" />
              <line x1="13" y1="10" x2="13" y2="18" stroke="#f97316" strokeWidth="2" strokeLinecap="round" />
              <line x1="19" y1="10" x2="19" y2="18" stroke="#f97316" strokeWidth="2" strokeLinecap="round" />
              <path d="M13 18 Q16 22 19 18" stroke="#f97316" strokeWidth="2" fill="none" strokeLinecap="round" />
              <line x1="32" y1="10" x2="30" y2="38" stroke="#f97316" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M32 10 L36 16 Q34 20 30 20" stroke="#f97316" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="20" y1="20" x2="28" y2="28" stroke="#f97316" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
              <line x1="28" y1="20" x2="20" y2="28" stroke="#f97316" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-[1.25rem] font-bold tracking-wide text-orange-500">
              Bouillon Baron
            </span>
            <span className="mt-[2px] text-[0.58rem] font-medium uppercase tracking-[0.14em] text-orange-400/70">
              Restaurant
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="flex items-center gap-8 max-[860px]:hidden">
          <ul className="flex list-none items-center gap-8 max-[1024px]:gap-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="nav-link text-[0.88rem] font-medium text-[#1A1208]/80 transition-colors duration-200 hover:text-orange-500"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div className="h-5 w-px bg-[#1A1208]/10" />

          <button
            type="button"
            className="group relative overflow-hidden rounded-lg border border-orange-500 px-6 py-2.5 text-[0.85rem] font-medium text-orange-500 transition-colors duration-200 hover:text-white"
          >
            <span className="absolute inset-0 -translate-x-full rounded-lg bg-orange-500 transition-transform duration-200 group-hover:translate-x-0" />
            <span className="relative">Commander en ligne</span>
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="hidden flex-col items-end gap-[5px] p-1 max-[860px]:flex"
          type="button"
          aria-label="Open menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(true)}
        >
          <span className="block h-[1.5px] w-6 rounded-full bg-[#1A1208] transition-all" />
          <span className="block h-[1.5px] w-4 rounded-full bg-[#1A1208] transition-all" />
          <span className="block h-[1.5px] w-6 rounded-full bg-[#1A1208] transition-all" />
        </button>
      </header>

      {/* ── Mobile Menu Overlay ── */}
      <div
        className={`font-body fixed inset-0 z-[200] flex flex-col bg-[#FAF8F4] transition-all duration-300 ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
      >
        {/* Top bar */}
        <div className="flex h-16 items-center justify-between px-6">
          <Link href="#" className="flex items-center gap-2.5 no-underline" onClick={() => setIsOpen(false)}>
            <div className="flex h-9 w-9 items-center justify-center">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                <circle cx="24" cy="24" r="22" stroke="#f97316" strokeWidth="1.5" fill="none" opacity="0.25" />
                <line x1="16" y1="10" x2="16" y2="38" stroke="#f97316" strokeWidth="2.2" strokeLinecap="round" />
                <line x1="13" y1="10" x2="13" y2="18" stroke="#f97316" strokeWidth="2" strokeLinecap="round" />
                <line x1="19" y1="10" x2="19" y2="18" stroke="#f97316" strokeWidth="2" strokeLinecap="round" />
                <path d="M13 18 Q16 22 19 18" stroke="#f97316" strokeWidth="2" fill="none" strokeLinecap="round" />
                <line x1="32" y1="10" x2="30" y2="38" stroke="#f97316" strokeWidth="2.2" strokeLinecap="round" />
                <path d="M32 10 L36 16 Q34 20 30 20" stroke="#f97316" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="font-display text-[1.1rem] font-bold text-orange-500">Bouillon Baron</span>
          </Link>

          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1A1208]/5 text-[#1A1208] transition-colors hover:bg-orange-500/10 hover:text-orange-500"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-4 w-4">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Separator */}
        <div className="mx-6 h-px bg-[#1A1208]/06" />

        {/* Nav Links */}
        <div className="flex flex-1 flex-col justify-center px-8 pb-16">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`menu-item group flex items-center justify-between rounded-xl px-4 py-4 text-[1.35rem] font-semibold text-[#1A1208]/80 transition-colors duration-200 hover:bg-orange-500/06 hover:text-orange-500 ${isOpen ? "" : "opacity-0"}`}
                style={{ animationDelay: isOpen ? `${i * 0.06}s` : "0s" }}
              >
                <span className="font-display italic">{link.label}</span>
                <span className="text-base opacity-0 transition-opacity group-hover:opacity-100">→</span>
              </Link>
            ))}
          </nav>

          {/* Mobile CTA */}
          <div
            className={`menu-item mt-8 ${isOpen ? "" : "opacity-0"}`}
            style={{ animationDelay: isOpen ? `${navLinks.length * 0.06 + 0.05}s` : "0s" }}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-full rounded-xl bg-orange-500 py-4 text-[0.95rem] font-semibold text-white shadow-[0_8px_20px_rgba(249,115,22,0.28)] transition-all hover:bg-orange-600"
            >
              Commander en ligne
            </button>
          </div>

          {/* Footer detail */}
          <p
            className={`menu-item mt-8 text-center text-[0.72rem] font-light tracking-wider text-[#1A1208]/30 uppercase ${isOpen ? "" : "opacity-0"}`}
            style={{ animationDelay: isOpen ? `${navLinks.length * 0.06 + 0.12}s` : "0s" }}
          >
            Cuisine raffinée · Depuis 2012
          </p>
        </div>
      </div>
    </>
  );
}
