"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "@/data/navigation";
import { siteConfig } from "@/lib/site-config";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="dental-header fixed inset-x-0 top-0 z-30 bg-white/95 backdrop-blur-md">
        <div className="dental-nav">
          <Link href="/" className="dental-logo" aria-label={`${siteConfig.name} home`}>
            <span className="dental-logo-icon">
              <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
                <path d="M24 10C17 3 7 6 7 16c0 8 5 19 9 23 3 3 3-13 8-13s5 16 8 13c4-4 9-15 9-23C41 6 31 3 24 10Z" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span>{siteConfig.name}</span>
          </Link>
          <nav className="hidden lg:flex items-center gap-7 xl:gap-10" aria-label="Main navigation">
            {mainNav.map((item) => (
              <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined} className={`dental-nav-link ${pathname === item.href ? "is-active" : ""}`}>
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="/contact" className="nav-book hidden lg:inline-flex">Book Visit</Link>
          <button className="lg:hidden p-2 -mr-2" onClick={() => setMenuOpen(true)} aria-label="Open menu" aria-expanded={menuOpen}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
              <path strokeLinecap="round" d="M3 5h18M3 12h18M3 19h18" />
            </svg>
          </button>
        </div>
      </header>
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
