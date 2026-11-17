"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { getWhatsAppUrl } from "@/lib/contact";

const NAV_LINKS = [
  { label: "Home", href: "/#home", sectionId: "home" },
  { label: "Our Services", href: "/#services", sectionId: "services" },
  { label: "Why Choose Us", href: "/#why-choose-us", sectionId: "why-choose-us" },
  { label: "How It Works", href: "/#how-it-works", sectionId: "how-it-works" },
  { label: "Contact", href: "/#contact", sectionId: "contact" },
  { label: "About Us", href: "/#about", sectionId: "about" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [scrolled, setScrolled] = useState(false);

  const isHome = pathname === "/";
  const isServicesPage = pathname.startsWith("/services");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      if (!isHome) return;

      const scrollPos = window.scrollY + 140;
      let current = "home";
      for (const item of NAV_LINKS) {
        const el = document.getElementById(item.sectionId);
        if (el && el.offsetTop <= scrollPos) {
          current = item.sectionId;
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const isLinkActive = (sectionId: string) => {
    if (isServicesPage) {
      return sectionId === "services";
    }
    if (isHome) {
      return activeSection === sectionId;
    }
    return false;
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-200 ${
        scrolled
          ? "shadow-[0_4px_20px_rgba(16,42,86,0.08)] border-b border-[#DCE8F3]"
          : "border-b border-[#DCE8F3]/80"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px] sm:h-[78px] gap-4">
          {/* Left: Brand Logo */}
          <Link
            href="/#home"
            onClick={() => setMobileOpen(false)}
            className="focus-visible:outline-[#0866D9] rounded-md shrink-0"
            aria-label="BIZZPAYE PLATFORM CONSULTS Home"
          >
            <BrandLogo variant="light" />
          </Link>

          {/* Center: Desktop Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-7 xl:gap-8"
          >
            {NAV_LINKS.map((link) => {
              const active = isLinkActive(link.sectionId);
              return (
                <Link
                  key={link.sectionId}
                  href={link.href}
                  className={`relative py-2 text-[14.5px] font-semibold transition-colors duration-150 whitespace-nowrap ${
                    active
                      ? "text-[#102A56]"
                      : "text-[#26364A] hover:text-[#0866D9]"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute left-0 right-0 -bottom-0.5 h-[2.5px] rounded-full bg-[#0866D9] transition-all duration-200 ${
                      active ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right: Desktop CTA + Mobile Hamburger */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#102A56] hover:bg-[#0866D9] text-white text-[13.5px] font-semibold px-5 py-2.5 shadow-sm transition-colors duration-200 whitespace-nowrap"
            >
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#0866D9] text-white">
                <WhatsAppIcon className="w-3.5 h-3.5" />
              </span>
              <span>Get a Website</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation-menu"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-[#DCE8F3] text-[#102A56] hover:bg-[#E4F3FF] transition-colors"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Navigation Menu */}
      {mobileOpen && (
        <div
          id="mobile-navigation-menu"
          className="lg:hidden bg-white border-t border-[#DCE8F3] shadow-lg"
        >
          <nav
            aria-label="Mobile Navigation"
            className="max-w-[1280px] mx-auto px-4 sm:px-6 py-4 flex flex-col gap-1"
          >
            {NAV_LINKS.map((link) => {
              const active = isLinkActive(link.sectionId);
              return (
                <Link
                  key={link.sectionId}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-3.5 py-2.5 rounded-lg text-[15px] font-semibold transition-colors ${
                    active
                      ? "bg-[#E4F3FF] text-[#0866D9]"
                      : "text-[#102A56] hover:bg-[#FAFBF8] hover:text-[#0866D9]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="pt-3 mt-2 border-t border-[#DCE8F3]">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#102A56] hover:bg-[#0866D9] text-white text-[14.5px] font-semibold px-5 py-3 transition-colors"
              >
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#0866D9] text-white">
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                </span>
                <span>Get a Website on WhatsApp</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

