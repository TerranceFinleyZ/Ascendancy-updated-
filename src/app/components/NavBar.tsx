"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "About", external: false },
  { href: "#story", label: "The Author", external: false },
  { href: "#characters", label: "Audio Teaser", external: false },
  { href: "#reviews", label: "Reviews", external: false },
  { href: "https://www.amazon.com/Ascendancy-Paradox-James-Fowler/dp/B0B8VJF774/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=", label: "Get the Book", external: true },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-8 py-4 transition-all duration-500"
        style={
          scrolled
            ? {
                background: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(20px) saturate(180%)",
                WebkitBackdropFilter: "blur(20px) saturate(180%)",
                borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
                boxShadow: "0 4px 32px 0 rgba(0, 200, 255, 0.08), inset 0 1px 0 rgba(255,255,255,0.15)",
              }
            : {
                background: "transparent",
                backdropFilter: "none",
                WebkitBackdropFilter: "none",
                borderBottom: "1px solid transparent",
                boxShadow: "none",
              }
        }
      >
        {/* Logo */}
        <span
          className="text-lg md:text-2xl font-black tracking-widest text-white drop-shadow-lg select-none"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          THE ASCENDANCY PARADOX
        </span>

        {/* Desktop links */}
        <div
          className="hidden md:flex gap-8 text-xs font-semibold tracking-[0.25em] text-white/80 uppercase"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="hover:text-cyan-400 transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger / X button */}
        <button
          className="md:hidden flex flex-col items-center justify-center w-10 h-10 gap-0 relative focus:outline-none"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {/* Bar 1 */}
          <span
            className={`block h-0.5 w-6 bg-white rounded-full transition-all duration-300 origin-center ${
              open ? "rotate-45 translate-y-[3px]" : "-translate-y-1"
            }`}
          />
          {/* Bar 2 */}
          <span
            className={`block h-0.5 w-6 bg-white rounded-full transition-all duration-300 ${
              open ? "opacity-0 scale-x-0" : "opacity-100"
            }`}
          />
          {/* Bar 3 */}
          <span
            className={`block h-0.5 w-6 bg-white rounded-full transition-all duration-300 origin-center ${
              open ? "-rotate-45 -translate-y-[3px]" : "translate-y-1"
            }`}
          />
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      <div
        className={`fixed top-0 left-0 w-full z-40 md:hidden transition-all duration-300 ease-in-out ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{
          paddingTop: "72px",
          background: "rgba(0, 10, 30, 0.75)",
          backdropFilter: "blur(24px) saturate(180%)",
          WebkitBackdropFilter: "blur(24px) saturate(180%)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 8px 32px rgba(0, 200, 255, 0.1)",
          transform: open ? "translateY(0)" : "translateY(-8px)",
        }}
      >
        <div
          className="flex flex-col items-center gap-0 py-4"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={closeMenu}
              {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="w-full text-center py-4 text-sm font-semibold tracking-[0.3em] uppercase text-white/80 hover:text-cyan-400 hover:bg-white/5 transition-all duration-200 border-b border-white/5 last:border-none"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>

      {/* Backdrop click to close */}
      {open && (
        <div
          className="fixed inset-0 z-30 md:hidden"
          onClick={closeMenu}
        />
      )}
    </>
  );
}
