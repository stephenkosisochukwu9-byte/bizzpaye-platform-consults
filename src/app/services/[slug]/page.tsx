import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  Users,
  Sparkles,
  Mail,
  Info,
  ArrowRight,
  Smartphone,
  Layers,
  ShieldCheck,
} from "lucide-react";
import { SERVICES, getServiceBySlug } from "@/data/services";
import { BUSINESS_INFO, getServiceWhatsAppUrl } from "@/lib/contact";
import { ServiceIcon } from "@/components/ServiceIcon";
import { FeatureIcon } from "@/components/FeatureIcon";
import { WebsitePreview } from "@/components/WebsitePreview";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: `Service Not Found | ${BUSINESS_INFO.name}`,
    };
  }

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    alternates: {
      canonical: `https://bizzpayeconsults.online/services/${slug}`,
    },
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      url: `https://bizzpayeconsults.online/services/${slug}`,
      type: "website",
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const currentIndex = SERVICES.findIndex((s) => s.slug === service.slug);
  const relatedServices = [
    SERVICES[(currentIndex + 1) % SERVICES.length],
    SERVICES[(currentIndex + 2) % SERVICES.length],
    SERVICES[(currentIndex + 3) % SERVICES.length],
    SERVICES[(currentIndex + 4) % SERVICES.length],
  ];

  const whatsappHref = getServiceWhatsAppUrl(service.singularLabel);

  return (
    <div className="bg-[#FAFBF8]">
      {/* A & B. Back Bar + Service Introduction Hero */}
      <section className="bg-gradient-to-b from-[#E4F3FF]/90 via-[#E4F3FF]/45 to-[#FAFBF8] border-b border-[#DCE8F3] pt-5 pb-8 sm:pt-10 sm:pb-12">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Navigation Bar Row */}
          <div className="flex flex-wrap items-center justify-between gap-2.5 mb-5 sm:mb-7">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-white hover:bg-[#E4F3FF] border border-[#DCE8F3] px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-bold text-[#102A56] shadow-[0_2px_6px_rgba(16,42,86,0.04)] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0866D9]" aria-hidden="true" />
              <span>Back to All Services</span>
            </Link>

            <span className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-white border border-[#DCE8F3] px-3 sm:px-3.5 py-1.5 text-[11.5px] sm:text-xs font-extrabold text-[#0866D9]">
              <ServiceIcon name={service.icon} className="w-3.5 h-3.5" />
              <span>{service.category}</span>
            </span>
          </div>

          {/* Service Introduction */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 sm:gap-6">
            <div className="max-w-3xl space-y-2.5 sm:space-y-3">
              <h1 className="text-[26px] min-[375px]:text-[30px] sm:text-[40px] lg:text-[46px] font-extrabold text-[#102A56] tracking-[-0.02em] leading-[1.12]">
                {service.title}
              </h1>
              <p className="text-[14.5px] sm:text-[17px] text-[#26364A] leading-[1.65]">
                {service.detailedExplanation}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 shrink-0 pt-1 lg:pt-0">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#102A56] hover:bg-[#0866D9] text-white text-[13.5px] sm:text-[15px] font-bold px-6 py-3.5 shadow-[0_8px_20px_rgba(16,42,86,0.18)] transition-colors whitespace-nowrap"
              >
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#0866D9] text-white shrink-0">
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                </span>
                <span>Get This Website on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* C. Website Demonstration Section */}
      <section className="py-7 sm:py-12">
        <div className="max-w-[1280px] mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <p className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.16em] text-[#0866D9]">
                WEBSITE DEMONSTRATION
              </p>
              <h2 className="text-[20px] sm:text-[26px] font-extrabold text-[#102A56] leading-snug">
                Interactive Layout Preview
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#536477]">
              Customized to your brand identity, colours and business content.
            </p>
          </div>

          <div className="rounded-[20px] sm:rounded-[24px] bg-[#E4F3FF]/75 border border-[#DCE8F3] p-3 sm:p-6 lg:p-8 shadow-[0_8px_28px_rgba(16,42,86,0.06)]">
            <WebsitePreview service={service} size="detail" />

            {/* Clear Illustrative Demonstration Disclaimer */}
            <div className="mt-4 sm:mt-5 flex items-start gap-2.5 rounded-xl bg-white/95 border border-[#DCE8F3] px-3.5 sm:px-4 py-3 text-[11.5px] sm:text-[13px] text-[#536477]">
              <Info
                className="w-4 h-4 text-[#0866D9] shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <p>
                <strong className="font-bold text-[#102A56]">
                  Illustrative Preview:
                </strong>{" "}
                The layout displayed above is an illustrative demonstration of
                the structure, sections and visual experience{" "}
                {BUSINESS_INFO.name} builds for {service.title.toLowerCase()}.
                Every client project is tailored to your exact brand and
                requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* D. What This Website Offers (6 Service-Specific Feature Cards) */}
      <section className="py-10 sm:py-14 bg-white border-y border-[#DCE8F3]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-7 sm:mb-10">
            <p className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.16em] text-[#0866D9] mb-1.5">
              KEY FEATURES INCLUDED
            </p>
            <h2 className="text-[22px] sm:text-[30px] font-extrabold text-[#102A56] leading-tight">
              What This Website Offers
            </h2>
            <p className="mt-2 text-[14px] sm:text-[15.5px] text-[#536477] leading-relaxed">
              Practical modules and structured pages designed specifically for{" "}
              {service.title.toLowerCase()}.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {service.featureCards.map((card) => (
              <div
                key={card.title}
                className="rounded-[18px] bg-[#FAFBF8] hover:bg-white border border-[#DCE8F3] hover:border-[#0866D9]/45 p-5 sm:p-6 shadow-[0_3px_14px_rgba(16,42,86,0.04)] transition-all duration-200 flex flex-col"
              >
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#E4F3FF] text-[#0866D9] mb-4 shrink-0">
                  <FeatureIcon name={card.icon} className="w-5 h-5" />
                </span>
                <h3 className="text-[16px] sm:text-[17px] font-extrabold text-[#102A56] leading-snug mb-1.5">
                  {card.title}
                </h3>
                <p className="text-[13.5px] sm:text-[14px] text-[#536477] leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Complete Core Checklist Strip */}
          <div className="mt-7 sm:mt-9 rounded-2xl bg-[#E4F3FF]/50 border border-[#DCE8F3] p-4 sm:p-5">
            <p className="text-xs font-extrabold uppercase tracking-wider text-[#102A56] mb-3">
              Core Sections &amp; Capabilities Covered
            </p>
            <ul className="flex flex-wrap gap-2">
              {service.features.map((feature) => (
                <li
                  key={feature}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white border border-[#DCE8F3] px-3 py-1.5 text-xs sm:text-[13px] font-semibold text-[#102A56]"
                >
                  <CheckCircle2
                    className="w-3.5 h-3.5 text-[#0866D9] shrink-0"
                    aria-hidden="true"
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* E. Additional Service Information: Who It's For, Benefits, Mobile, Integrations & Security */}
      <section className="py-10 sm:py-14 bg-[#FAFBF8]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
            {/* Who This Website Is For */}
            <div className="lg:col-span-5 rounded-[20px] bg-white border border-[#DCE8F3] p-5 sm:p-7 shadow-[0_4px_16px_rgba(16,42,86,0.04)] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#E4F3FF] text-[#0866D9] shrink-0">
                    <Users className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <h2 className="text-[19px] sm:text-[21px] font-extrabold text-[#102A56]">
                    Who Needs This Website
                  </h2>
                </div>
                <p className="text-[13.5px] sm:text-[14.5px] text-[#536477] leading-relaxed mb-4">
                  Tailored for individuals, teams and organisations looking for a
                  dependable, modern digital presence in this space:
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.idealFor.map((audience) => (
                    <span
                      key={audience}
                      className="inline-flex items-center rounded-full bg-[#E4F3FF] border border-[#DCE8F3] px-3.5 py-1.5 text-xs sm:text-[13px] font-bold text-[#102A56]"
                    >
                      {audience}
                    </span>
                  ))}
                </div>
              </div>

              {/* Mobile Responsiveness Highlight */}
              <div className="mt-6 pt-5 border-t border-[#DCE8F3]">
                <div className="flex items-center gap-2 mb-2">
                  <Smartphone className="w-4 h-4 text-[#0866D9] shrink-0" aria-hidden="true" />
                  <h3 className="text-[14.5px] font-extrabold text-[#102A56]">
                    Mobile Responsiveness
                  </h3>
                </div>
                <p className="text-[13px] sm:text-[14px] text-[#536477] leading-relaxed">
                  {service.mobileHighlight}
                </p>
              </div>
            </div>

            {/* Key Benefits to the Customer */}
            <div className="lg:col-span-7 rounded-[20px] bg-white border border-[#DCE8F3] p-5 sm:p-7 shadow-[0_4px_16px_rgba(16,42,86,0.04)]">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#E4F3FF] text-[#0866D9] shrink-0">
                  <Sparkles className="w-5 h-5" aria-hidden="true" />
                </span>
                <h2 className="text-[19px] sm:text-[21px] font-extrabold text-[#102A56]">
                  Benefits for Your Brand or Organisation
                </h2>
              </div>

              <ul className="space-y-3 sm:space-y-3.5">
                {service.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-3 rounded-xl bg-[#FAFBF8] border border-[#DCE8F3] px-4 py-3 text-[13.5px] sm:text-[14.5px] text-[#26364A] leading-relaxed"
                  >
                    <CheckCircle2
                      className="w-4 h-4 text-[#0866D9] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Integrations & Security / Usability Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {/* Available Integrations */}
            <div className="rounded-[20px] bg-white border border-[#DCE8F3] p-5 sm:p-7 shadow-[0_4px_16px_rgba(16,42,86,0.04)]">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#E4F3FF] text-[#0866D9] shrink-0">
                  <Layers className="w-5 h-5" aria-hidden="true" />
                </span>
                <h2 className="text-[18px] sm:text-[20px] font-extrabold text-[#102A56]">
                  Available Integrations
                </h2>
              </div>
              <ul className="space-y-2.5">
                {service.integrations.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[13.5px] sm:text-[14.5px] text-[#26364A]"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0866D9] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Security & Usability Features */}
            <div className="rounded-[20px] bg-white border border-[#DCE8F3] p-5 sm:p-7 shadow-[0_4px_16px_rgba(16,42,86,0.04)]">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#E4F3FF] text-[#0866D9] shrink-0">
                  <ShieldCheck className="w-5 h-5" aria-hidden="true" />
                </span>
                <h2 className="text-[18px] sm:text-[20px] font-extrabold text-[#102A56]">
                  Security &amp; Usability
                </h2>
              </div>
              <ul className="space-y-2.5">
                {service.securityUsability.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[13.5px] sm:text-[14.5px] text-[#26364A]"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0866D9] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* F. Final Call to Action Banner */}
      <section className="pb-12 sm:pb-16 bg-[#FAFBF8]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[22px] sm:rounded-[26px] bg-[#102A56] text-white p-6 sm:p-10 lg:p-12 shadow-[0_16px_38px_rgba(16,42,86,0.18)] relative overflow-hidden">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-20 -right-20 w-56 h-56 rounded-full bg-[#0866D9]/25"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -left-16 w-60 h-60 rounded-full bg-[#0866D9]/18"
            />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="max-w-2xl space-y-2.5">
                <p className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.16em] text-[#E4F3FF]">
                  START YOUR PROJECT WITH {BUSINESS_INFO.name}
                </p>
                <h2 className="text-[22px] sm:text-[30px] font-extrabold leading-tight">
                  {service.ctaLabel}
                </h2>
                <p className="text-[13.5px] sm:text-[15.5px] text-[#E4F3FF]/85 leading-relaxed">
                  Message us directly on WhatsApp to discuss your preferred
                  layout, required features and timeline for{" "}
                  {service.singularLabel.toLowerCase()}.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#0866D9] hover:bg-white text-white hover:text-[#102A56] text-sm font-bold px-6 py-3.5 transition-colors whitespace-nowrap"
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0" />
                  <span>{service.ctaLabel}</span>
                </a>

                <a
                  href={`${BUSINESS_INFO.emailHref}?subject=${encodeURIComponent(
                    `Enquiry: ${service.title}`
                  )}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/25 text-sm font-bold px-5 py-3.5 transition-colors whitespace-nowrap"
                >
                  <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Email Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore More Website Services (2-col mobile, 4-col desktop) */}
      <section className="py-10 sm:py-12 bg-white border-t border-[#DCE8F3]">
        <div className="max-w-[1280px] mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <p className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.16em] text-[#0866D9]">
                MORE SOLUTIONS
              </p>
              <h2 className="text-[20px] sm:text-[26px] font-extrabold text-[#102A56]">
                Explore Other Website Services
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0866D9] hover:text-[#102A56] transition-colors"
            >
              <span>View All 14 Services</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {relatedServices.map((rel) => (
              <Link
                key={rel.slug}
                href={`/services/${rel.slug}`}
                className="group rounded-[16px] sm:rounded-[18px] bg-[#FAFBF8] hover:bg-[#E4F3FF]/50 border border-[#DCE8F3] hover:border-[#0866D9]/45 p-3.5 sm:p-5 transition-all flex flex-col"
              >
                <span className="inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#E4F3FF] text-[#0866D9] mb-2.5 shrink-0">
                  <ServiceIcon name={rel.icon} className="w-4 h-4" />
                </span>
                <h3 className="text-[13px] sm:text-[15.5px] font-extrabold text-[#102A56] group-hover:text-[#0866D9] transition-colors leading-snug mb-1.5">
                  {rel.title}
                </h3>
                <p className="text-[11.5px] sm:text-[13px] text-[#536477] leading-relaxed line-clamp-2 flex-1">
                  {rel.cardDescription}
                </p>
                <span className="mt-2.5 inline-flex items-center gap-1 text-[11.5px] sm:text-xs font-bold text-[#0866D9]">
                  <span>Learn More</span>
                  <ArrowRight className="w-3 h-3" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
