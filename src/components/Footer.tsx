import React from "react";
import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { BUSINESS_INFO, getWhatsAppUrl } from "@/lib/contact";
import { SERVICES } from "@/data/services";

const QUICK_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "Our Services", href: "/#services" },
  { label: "All 14 Services", href: "/services" },
  { label: "Why Choose Us", href: "/#why-choose-us" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Contact Us", href: "/#contact" },
  { label: "About Us", href: "/#about" },
];

export function Footer() {
  const firstHalfServices = SERVICES.slice(0, 7);
  const secondHalfServices = SERVICES.slice(7);

  return (
    <footer className="bg-[#102A56] text-white border-t border-[#0866D9]/25">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Brand & Contact */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/#home" className="inline-block">
              <BrandLogo variant="dark" />
            </Link>
            <p className="text-xs font-bold tracking-[0.14em] uppercase text-[#E4F3FF]">
              {BUSINESS_INFO.taglineTitleCase}
            </p>
            <p className="text-sm text-[#E4F3FF]/85 leading-relaxed max-w-sm">
              A professional website development and digital solutions brand helping individuals,
              entrepreneurs, businesses, educational institutions and organisations establish a
              strong, modern online presence.
            </p>

            <div className="pt-2 space-y-2.5">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-white hover:text-[#E4F3FF] transition-colors group"
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 text-[#E4F3FF] group-hover:bg-[#0866D9] group-hover:text-white transition-colors">
                  <WhatsAppIcon className="w-4 h-4" />
                </span>
                <span>WhatsApp: {BUSINESS_INFO.whatsappDisplay}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#E4F3FF]/70" />
              </a>

              <a
                href={BUSINESS_INFO.emailHref}
                className="flex items-center gap-2.5 text-sm text-white hover:text-[#E4F3FF] transition-colors group"
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 text-[#E4F3FF] group-hover:bg-[#0866D9] group-hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </span>
                <span className="break-all">{BUSINESS_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#E4F3FF]/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 & 4: All 14 Services */}
          <div className="md:col-span-2 lg:col-span-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              All 14 Website Development Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
              <ul className="space-y-2.5">
                {firstHalfServices.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-sm text-[#E4F3FF]/80 hover:text-white transition-colors inline-flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0866D9] shrink-0" />
                      <span>{service.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2.5">
                {secondHalfServices.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-sm text-[#E4F3FF]/80 hover:text-white transition-colors inline-flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0866D9] shrink-0" />
                      <span>{service.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-12 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E4F3FF]/75">
          <p>&copy; 2026 {BUSINESS_INFO.name}. All Rights Reserved.</p>
          <p className="text-center sm:text-right">
            Website previews shown on this site are illustrative demonstrations of the solutions we build.
          </p>
        </div>
      </div>
    </footer>
  );
}

