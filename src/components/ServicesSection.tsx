import React from "react";
import Link from "next/link";
import { Layers, ArrowRight } from "lucide-react";
import { FEATURED_SERVICES } from "@/data/services";
import { ServiceCard } from "./ServiceCard";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-10 sm:py-16 lg:py-20 bg-[#FAFBF8]"
    >
      <div className="max-w-[1280px] mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-7 sm:mb-12">
          <p className="text-[11px] sm:text-[13px] font-extrabold tracking-[0.18em] uppercase text-[#0866D9] mb-1.5 sm:mb-2">
            OUR WEBSITE DEVELOPMENT SERVICES
          </p>
          <h2 className="text-[24px] sm:text-[36px] lg:text-[40px] font-extrabold text-[#102A56] tracking-[-0.02em] leading-tight">
            Explore Our Website Solutions
          </h2>
          <p className="mt-2 sm:mt-3 text-[13.5px] sm:text-[16px] text-[#536477] leading-relaxed">
            Discover the different websites and digital platforms we build for
            individuals, businesses and organisations.
          </p>
        </div>

        {/* 8 Featured Services Grid: STRICT 2 columns on all mobile phones (320px+), 4 columns on desktop */}
        <div className="grid grid-cols-2 gap-2.5 min-[375px]:gap-3.5 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {FEATURED_SERVICES.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        {/* Wide Promotional Panel: AND 6 MORE WEBSITE SOLUTIONS */}
        <div className="mt-7 sm:mt-10 rounded-[20px] sm:rounded-[22px] bg-[#E4F3FF] border border-[#DCE8F3] px-5 py-6 sm:px-8 sm:py-8 lg:px-10 shadow-[0_6px_24px_rgba(16,42,86,0.06)]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 sm:gap-6">
            {/* Left Side: Stacked Layers Icon + Text */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3.5 sm:gap-5 flex-1">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white border border-[#DCE8F3] flex items-center justify-center text-[#0866D9] shadow-xs shrink-0">
                <Layers className="w-6 h-6 sm:w-8 sm:h-8" aria-hidden="true" />
              </div>

              <div>
                <h3 className="text-[18px] sm:text-[22px] font-extrabold text-[#102A56] leading-snug">
                  And 6 More Website Solutions
                </h3>
                <p className="mt-1 sm:mt-1.5 text-[13.5px] sm:text-[15px] text-[#26364A] leading-relaxed max-w-2xl">
                  Including Landing Pages, Event Websites, Appointment Booking,
                  Inventory Systems, Invoice &amp; Billing, and Blog &amp; News
                  Websites.
                </p>
              </div>
            </div>

            {/* Subtle Vertical Divider on Desktop */}
            <div
              aria-hidden="true"
              className="hidden lg:block w-px h-14 bg-[#0866D9]/25 mx-2"
            />

            {/* Right Side: View All 14 Services Button */}
            <div className="shrink-0">
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-[#102A56] hover:bg-[#0866D9] text-white text-[14px] sm:text-[15px] font-bold px-6 sm:px-7 py-3.5 sm:py-4 shadow-[0_8px_20px_rgba(16,42,86,0.16)] transition-colors duration-200"
              >
                <span>View All 14 Services</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
