import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Monitor,
  ArrowRight,
  Layers,
  Smartphone,
  ShieldCheck,
} from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { getWhatsAppUrl } from "@/lib/contact";

const BUSINESS_HIGHLIGHTS = [
  {
    icon: Layers,
    title: "14+",
    subtitle: "Website Solutions",
    fullLabel: "14+ Website Solutions",
  },
  {
    icon: Smartphone,
    title: "Mobile-First",
    subtitle: "Development",
    fullLabel: "Mobile-First Development",
  },
  {
    icon: ShieldCheck,
    title: "Professional",
    subtitle: "Digital Solutions",
    fullLabel: "Professional Digital Solutions",
  },
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#FAFBF8] border-b border-[#DCE8F3]"
    >
      {/* Flowing decorative blue shapes matching the reference hero composition */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Soft upper-left ambient tint */}
        <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-[#E4F3FF]/65 blur-3xl" />

        {/* Sweeping curved light-blue & primary-blue wave behind right photo column on desktop */}
        <svg
          className="hidden lg:block absolute top-0 left-[49%] h-full w-[55%] text-[#E4F3FF]"
          viewBox="0 0 900 620"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M150 -20C35 120 18 395 165 640H900V-20H150Z"
            fill="#E4F3FF"
          />
          <path
            d="M115 160C42 230 34 360 112 435C165 485 210 470 225 405V195C210 140 162 115 115 160Z"
            fill="#0866D9"
          />
          <path
            d="M195 -20C105 95 95 270 155 430L235 410C185 255 190 95 275 -20H195Z"
            fill="#0866D9"
            fillOpacity="0.16"
          />
        </svg>
      </div>

      {/* Main Split Hero Grid */}
      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10 sm:pt-12 sm:pb-12 lg:pt-14 lg:pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* LEFT COLUMN: Agency Copy & CTAs */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6 z-10">
            {/* Small Rounded Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#E4F3FF] border border-[#DCE8F3] px-3.5 py-1.5 shadow-[0_1px_2px_rgba(16,42,86,0.04)]">
              <Monitor className="w-4 h-4 text-[#0866D9] shrink-0" aria-hidden="true" />
              <span className="text-[12.5px] sm:text-[13px] font-bold text-[#102A56] tracking-wide">
                Website Development Agency
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-[34px] sm:text-[44px] lg:text-[46px] xl:text-[50px] font-extrabold text-[#102A56] leading-[1.09] tracking-[-0.025em] max-w-[490px]">
              We Build Websites That Bring Your{" "}
              <span className="text-[#0866D9]">Ideas to Life.</span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-[15.5px] sm:text-[16.5px] text-[#26364A] leading-[1.68] max-w-[520px]">
              From personal portfolios to powerful business platforms, we design
              and develop modern, responsive and professional websites that help
              individuals and businesses establish their online presence.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 pt-1">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#102A56] hover:bg-[#0866D9] text-white text-[14px] font-semibold px-5.5 py-3.5 shadow-[0_8px_20px_rgba(16,42,86,0.18)] transition-all duration-200 whitespace-nowrap"
              >
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#0866D9] text-white shrink-0">
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                </span>
                <span>Get Started on WhatsApp</span>
              </a>

              <Link
                href="/#services"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white hover:bg-[#E4F3FF] text-[#102A56] border border-[#0866D9]/45 hover:border-[#0866D9] text-[14px] font-semibold px-5.5 py-3.5 transition-all duration-200 whitespace-nowrap"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 text-[#0866D9] shrink-0" aria-hidden="true" />
              </Link>
            </div>

            {/* Business Highlights Row directly beneath Hero CTAs on desktop/mobile */}
            <div className="pt-5 sm:pt-6 mt-2 border-t border-[#DCE8F3]">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0 sm:divide-x sm:divide-[#0866D9]/25">
                {BUSINESS_HIGHLIGHTS.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.fullLabel}
                      className={`flex items-center gap-2.5 ${
                        idx === 0
                          ? "sm:pr-3.5"
                          : idx === 1
                          ? "sm:px-3.5"
                          : "sm:pl-3.5"
                      }`}
                    >
                      <div className="w-9 h-9 rounded-xl bg-[#E4F3FF] border border-[#DCE8F3] flex items-center justify-center shrink-0">
                        <Icon className="w-[18px] h-[18px] text-[#0866D9]" aria-hidden="true" />
                      </div>
                      <div className="leading-tight min-w-0">
                        <p className="text-[13.5px] font-extrabold text-[#102A56] whitespace-nowrap">
                          {item.title}
                        </p>
                        <p className="text-[12px] font-medium text-[#536477] whitespace-nowrap">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Commercial Hero Photograph */}
          <div className="lg:col-span-6 relative z-10">
            <div className="relative mx-auto max-w-[680px] lg:max-w-none">
              {/* Accent curve framing behind image on mobile/tablet */}
              <div
                aria-hidden="true"
                className="lg:hidden absolute -inset-2 rounded-[26px] bg-gradient-to-tr from-[#0866D9]/20 via-[#E4F3FF] to-[#E4F3FF] -z-10"
              />

              {/* Primary Wide Landscape Hero Photo */}
              <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full overflow-hidden rounded-[22px] lg:rounded-[26px] border-4 border-white shadow-[0_18px_48px_rgba(16,42,86,0.14)] bg-[#E4F3FF]">
                <Image
                  src="/images/hero-developer.jpg"
                  alt="Professional young African male website developer smiling at a bright modern office desk with a desktop monitor, laptop and smartphone"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 56vw"
                  className="object-cover object-[55%_20%]"
                />
                {/* Subtle bottom-left gradient vignette for visual depth */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#102A56]/12 via-transparent to-transparent"
                />
              </div>

              {/* Clean HTML Brand Tag positioned subtly at bottom-left corner of the workspace frame */}
              <div className="hidden sm:flex items-center gap-3 absolute -bottom-4 left-5 rounded-2xl bg-white border border-[#DCE8F3] px-4 py-2.5 shadow-[0_10px_28px_rgba(16,42,86,0.12)]">
                <div className="w-9 h-9 rounded-xl bg-[#E4F3FF] flex items-center justify-center text-[#0866D9] shrink-0">
                  <Monitor className="w-5 h-5" aria-hidden="true" />
                </div>
                <div className="leading-tight">
                  <p className="text-[12.5px] font-bold text-[#102A56]">
                    Desktop &amp; Mobile Ready
                  </p>
                  <p className="text-[11px] font-medium text-[#536477]">
                    BIZZPAYE PLATFORM CONSULTS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
