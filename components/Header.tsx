"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";

const NAV_LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#reviews", label: "Reviews" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

const PHONE_NUMBER = "416-371-0546";
const PHONE_HREF = "tel:+14163710546";

/** Site header with responsive navigation, logo, and phone CTA */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen, closeMenu]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full bg-black" role="banner">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <nav
          className="flex items-center justify-between h-18 sm:h-20"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a
            href="#hero"
            className="flex shrink-0 items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded"
            aria-label="NexGen Construction - Home"
          >
            <Image
              src="/images/logos/logo.png"
              alt="NexGen Construction logo"
              width={44}
              height={44}
              className="h-10 w-10 sm:h-11 sm:w-11 rounded object-cover"
            />
            <span className="font-oswald font-bold text-white text-xl sm:text-2xl uppercase tracking-wide">
              <span className="text-orange-500">NexGen</span> Construction
            </span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-10">
            <ul className="flex items-center gap-2" role="list">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="font-oswald font-medium uppercase text-sm tracking-widest text-gray-300 hover:text-orange-400 px-4 py-2 rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Phone CTA */}
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 font-oswald font-bold text-orange-400 hover:text-orange-300 whitespace-nowrap transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded min-h-[44px]"
              aria-label={`Call us at ${PHONE_NUMBER}`}
            >
              <svg
                className="h-5 w-5 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="text-base">{PHONE_NUMBER}</span>
            </a>
          </div>

          {/* Mobile: phone button + hamburger */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href={PHONE_HREF}
              className="flex items-center justify-center h-11 w-11 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
              aria-label={`Call us at ${PHONE_NUMBER}`}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </a>
            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="flex h-11 w-11 items-center justify-center rounded text-white hover:text-orange-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile slide-out menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 top-18 sm:top-20 z-40 lg:hidden transition-opacity duration-200 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isMenuOpen}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/60" onClick={closeMenu} aria-hidden="true" />

        {/* Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-full max-w-sm bg-black shadow-2xl transition-transform duration-200 ease-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col gap-1 px-6 pt-8" role="list">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={closeMenu}
                  className="flex items-center font-oswald font-medium text-lg uppercase tracking-widest text-gray-300 hover:text-orange-400 hover:bg-gray-800 px-4 py-4 rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-inset min-h-[44px]"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="border-t border-gray-700 mx-6 mt-4 pt-6">
            <a
              href={PHONE_HREF}
              onClick={closeMenu}
              className="flex items-center gap-3 font-oswald font-bold text-orange-400 hover:text-orange-300 text-lg min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded px-4"
            >
              <svg className="h-6 w-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
