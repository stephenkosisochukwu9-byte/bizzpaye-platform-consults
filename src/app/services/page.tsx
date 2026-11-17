import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Layers } from "lucide-react";
import { SERVICES } from "@/data/services";
import { ServiceCard } from "@/components/ServiceCard";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { BUSINESS_INFO, getWhatsAppUrl } from "@/lib/contact";

export const metadata: Metadata = {
  title: `All 14 Website Development Services | ${BUSINESS_INFO.name}`,
  description:
    "Explore all 14 website development services and digital systems built by BIZZPAYE PLATFORM CONSULTS — from personal portfolios and corporate sites to e-commerce, school, booking, inventory and invoicing platforms.",
  openGraph: {
    title: `All Our Website Development Services | ${BUSINESS_INFO.name}`,
    description:
      "Find the right website or digital platform for your business, idea or organisation.",
    type: "website",
  },
};

export default function AllServicesPage() {
  return (
    <div className="bg-[#FAFBF8]">
      {/* Page Header Banner */}
      <section className="bg-gradient-to-b from-[#E4F3FF]/85 to-[#FAFBF8] border-b border-[#DCE8F3] pt-10 pb-12 sm:pt-14 sm:pb-14">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-white hover:bg-[#E4F3FF] border border-[#DCE8F3] px-4 py-2 text-xs sm:text-sm font-bold text-[#102A56] transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 text-[#0866D9]" aria-hidden="true" />
            <span>Back to Home</span>
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-[#DCE8F3] px-3.5 py-1.5 mb-4">
              <Layers className="w-4 h-4 text-[#0866D9]" aria-hidden="true" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#102A56]">
                Complete 14-Service Catalogue
              </span>
            </div>

            <h1 className="text-[30px] sm:text-[42px] lg:text-[46px] font-extrabold text-[#102A56] tracking-[-0.02em] leading-tight">
              All Our Website Development Services
            </h1>
            <p className="mt-3 text-[15.5px] sm:text-[17px] text-[#536477] leading-relaxed">
              Find the right website or digital platform for your business, idea
              or organisation. Every preview below is an illustrative
              demonstration of what {BUSINESS_INFO.name} can build for you.
            </p>
          </div>
        </div>
      </section>

      {/* Complete 14-Service Visual Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 min-[520px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

          {/* Bottom Custom Project CTA Panel */}
          <div className="mt-14 rounded-[22px] bg-[#102A56] text-white p-7 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-[0_14px_34px_rgba(16,42,86,0.16)]">
            <div className="max-w-2xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#E4F3FF] mb-2">
                NEED A CUSTOM COMBINATION?
              </p>
              <h2 className="text-[22px] sm:text-[28px] font-extrabold leading-snug">
                Not sure which website solution fits your goals best?
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#E4F3FF]/85 leading-relaxed">
                Chat directly with {BUSINESS_INFO.name} on WhatsApp and tell us
                what you have in mind. We will help you choose and plan the right
                digital platform.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#0866D9] hover:bg-white text-white hover:text-[#102A56] text-sm font-bold px-6 py-3.5 transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/25 text-sm font-bold px-6 py-3.5 transition-colors"
              >
                Use Enquiry Form
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

