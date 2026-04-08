"use client";

import { useEffect, useState } from "react";

export default function Fab() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 200);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      className={`fixed bottom-8 right-8 z-[99] flex h-12 w-12 items-center justify-center rounded-full bg-[var(--orange)] shadow-[0_4px_16px_rgba(255,90,31,0.4)] transition-all ${
        visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      } hover:-translate-y-0.5 hover:bg-[var(--orange-dark)]`}
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 stroke-white">
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
}
