"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import { LocaleToggle } from "./locale-toggle";

const linkKeys = [
  { href: "/" as const, key: "home" as const },
  { href: "/projects" as const, key: "projects" as const },
  { href: "/blog" as const, key: "blog" as const },
  { href: "/contact" as const, key: "contact" as const },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations("nav");

  const triggerRipple = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const ripple = document.createElement("span");
    ripple.className = "ripple-effect";
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    el.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
  }, []);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Check if a path is active — handle locale prefix
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/" || /^\/(?:es|en)\/?$/.test(pathname);
    return pathname.endsWith(href);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-transparent bg-background/70 backdrop-blur-md transition-all duration-300",
        scrolled && "border-border/60 bg-background/85 shadow-[0_2px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_20px_rgba(0,0,0,0.3)]"
      )}
    >
      <nav role="navigation" aria-label="Main navigation" className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="bg-clip-text text-base font-bold tracking-tight text-transparent transition-opacity hover:opacity-80"
          style={{ backgroundImage: "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)" }}
        >
          Benjamín Serrano Ercoli
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {linkKeys.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={triggerRipple}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={cn(
                "relative overflow-hidden rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive(link.href)
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {t(link.key)}
              {isActive(link.href) && (
                <span className="absolute bottom-0.5 left-3 right-3 h-0.5 rounded-full bg-gradient-to-r from-primary to-secondary" />
              )}
            </Link>
          ))}
          <div className="ml-2 flex items-center gap-1.5">
            <LocaleToggle />
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-1.5 md:hidden">
          <LocaleToggle />
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {open ? (
                <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
              ) : (
                <><line x1="4" y1="8" x2="20" y2="8" /><line x1="4" y1="16" x2="20" y2="16" /></>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="border-t border-border/60 bg-background/90 backdrop-blur-md px-4 pb-4 pt-2 md:hidden">
          {linkKeys.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                isActive(link.href)
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              {isActive(link.href) && (
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
              )}
              {t(link.key)}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
