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
} from "lucide-react";
import { SERVICES, getServiceBySlug } from "@/data/services";
import {
  BUSINESS_INFO,
  getServiceWhatsAppUrl,
} from "@/lib/contact";
import { ServiceIcon } from "@/components/ServiceIcon";
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
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
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
  ];

  const whatsappHref = getServiceWhatsAppUrl(service.singularLabel);

  return (
    <div className="bg-[#FAFBF8]">
      {/* Top Breadcrumb & Title Header */}
      <section className="bg-gradient-to-b from-[#E4F3FF]/90 to-[#FAFBF8] border-b border-[#DCE8F3] pt-8 pb-10 sm:pt-12 sm:pb-12">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full bg-white hover:bg-[#E4F3FF] border border-[#DCE8F3] px-4 py-2 text-xs sm:text-sm font-bold text-[#102A56] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-[#0866D9]" aria-hidden="true" />
              <span>Back to All Services</span>
            </Link>

            <span className="inline-flex items-center gap-2 rounded-full bg-white border border-[#DCE8F3] px-3.5 py-1.5 text-xs font-extrabold text-[#0866D9]">
              <ServiceIcon name={service.icon} className="w-3.5 h-3.5" />
              <span>{service.category}</span>
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <h1 className="text-[30px] sm:text-[40px] lg:text-[46px] font-extrabold text-[#102A56] tracking-[-0.02em] leading-tight">
                {service.title}
              </h1>
              <p className="mt-3 text-[15.5px] sm:text-[17px] text-[#26364A] leading-relaxed">
                {service.cardDescription}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#102A56] hover:bg-[#0866D9] text-white text-sm sm:text-[15px] font-bold px-6 py-3.5 shadow-[0_8px_20px_rgba(16,42,86,0.16)] transition-colors"
              >
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#0866D9] text-white">
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                </span>
                <span>{service.ctaLabel}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Large Illustrative Website Showcase */}
      <section className="py-10 sm:py-12">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[24px] bg-[#E4F3FF]/70 border border-[#DCE8F3] p-4 sm:p-6 lg:p-8">
            <WebsitePreview service={service} size="detail" />

            {/* Clear Illustrative Demonstration Disclaimer */}
            <div className="mt-5 flex items-start gap-2.5 rounded-xl bg-white/90 border border-[#DCE8F3] px-4 py-3 text-xs sm:text-[13px] text-[#536477]">
              <Info
                className="w-4 h-4 text-[#0866D9] shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <p>
                <strong className="font-bold text-[#102A56]">
                  Illustrative Preview:
                </strong>{" "}
                The desktop and mobile layouts displayed above are illustrative
                demonstrations of the structure, sections and features{" "}
                {BUSINESS_INFO.name} can design and build for your{" "}
                {service.title.toLowerCase()}. Every client website is customized
                to your exact branding and requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Service Overview, Features, Ideal For & Benefits */}
      <section className="pb-14 sm:pb-18">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Main Content (8 cols) */}
            <div className="lg:col-span-8 space-y-8">
              {/* What This Website Does */}
              <div className="rounded-[20px] bg-white border border-[#DCE8F3] p-6 sm:p-8 shadow-[0_4px_16px_rgba(16,42,86,0.04)]">
                <h2 className="text-[22px] sm:text-[24px] font-extrabold text-[#102A56] mb-3">
                  What This Website Does
                </h2>
                <p className="text-[15.5px] text-[#26364A] leading-[1.75]">
                  {service.detailedExplanation}
                </p>
              </div>

              {/* Key Features */}
              <div className="rounded-[20px] bg-white border border-[#DCE8F3] p-6 sm:p-8 shadow-[0_4px_16px_rgba(16,42,86,0.04)]">
                <div className="flex items-center gap-2.5 mb-5">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-[#E4F3FF] text-[#0866D9]">
                    <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <h2 className="text-[22px] sm:text-[24px] font-extrabold text-[#102A56]">
                    Key Features Included
                  </h2>
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 rounded-xl bg-[#FAFBF8] border border-[#DCE8F3] px-4 py-3 text-[14.5px] font-semibold text-[#102A56]"
                    >
                      <CheckCircle2
                        className="w-4 h-4 text-[#0866D9] shrink-0"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits of the Website */}
              <div className="rounded-[20px] bg-white border border-[#DCE8F3] p-6 sm:p-8 shadow-[0_4px_16px_rgba(16,42,86,0.04)]">
                <div className="flex items-center gap-2.5 mb-5">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-[#E4F3FF] text-[#0866D9]">
                    <Sparkles className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <h2 className="text-[22px] sm:text-[24px] font-extrabold text-[#102A56]">
                    Benefits for Your Brand or Organisation
                  </h2>
                </div>

                <ul className="space-y-3.5">
                  {service.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-3 text-[15px] text-[#26364A] leading-relaxed"
                    >
                      <span className="mt-2 w-2 h-2 rounded-full bg-[#0866D9] shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Sidebar (4 cols) */}
            <aside className="lg:col-span-4 space-y-6">
              {/* Who Needs This Website */}
              <div className="rounded-[20px] bg-white border border-[#DCE8F3] p-6 shadow-[0_4px_16px_rgba(16,42,86,0.04)]">
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-[#E4F3FF] text-[#0866D9]">
                    <Users className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <h2 className="text-[19px] font-extrabold text-[#102A56]">
                    Who Needs This Website
                  </h2>
                </div>

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

              {/* Sticky Request CTA Card */}
              <div className="rounded-[20px] bg-[#102A56] text-white p-6 sm:p-7 shadow-[0_14px_34px_rgba(16,42,86,0.16)] lg:sticky lg:top-24">
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#E4F3FF]">
                  READY TO GET STARTED?
                </p>
                <h2 className="mt-2 text-[21px] font-extrabold leading-snug">
                  {service.ctaLabel}
                </h2>
                <p className="mt-2 text-sm text-[#E4F3FF]/85 leading-relaxed">
                  Message {BUSINESS_INFO.name} directly on WhatsApp to discuss
                  your layout, required features and project timeline.
                </p>

                <div className="mt-6 space-y-3">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 rounded-full bg-[#0866D9] hover:bg-white text-white hover:text-[#102A56] text-sm font-bold px-5 py-3.5 transition-colors"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Get This Website</span>
                  </a>

                  <a
                    href={`${BUSINESS_INFO.emailHref}?subject=${encodeURIComponent(
                      `Enquiry: ${service.title}`
                    )}`}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/25 text-sm font-bold px-5 py-3 transition-colors"
                  >
                    <Mail className="w-4 h-4" aria-hidden="true" />
                    <span>Email Us Instead</span>
                  </a>

                  <Link
                    href="/services"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-transparent hover:bg-white/10 text-[#E4F3FF] text-xs font-bold px-4 py-2.5 transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Back to All Services</span>
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Explore More Services Strip */}
      <section className="py-12 bg-white border-t border-[#DCE8F3]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#0866D9]">
                MORE SOLUTIONS
              </p>
              <h2 className="text-[22px] sm:text-[26px] font-extrabold text-[#102A56]">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {relatedServices.map((rel) => (
              <Link
                key={rel.slug}
                href={`/services/${rel.slug}`}
                className="group rounded-[18px] bg-[#FAFBF8] hover:bg-[#E4F3FF]/50 border border-[#DCE8F3] hover:border-[#0866D9]/45 p-5 transition-all"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-[#E4F3FF] text-[#0866D9]">
                    <ServiceIcon name={rel.icon} className="w-4 h-4" />
                  </span>
                  <h3 className="text-[16px] font-extrabold text-[#102A56] group-hover:text-[#0866D9] transition-colors">
                    {rel.title}
                  </h3>
                </div>
                <p className="text-sm text-[#536477] leading-relaxed">
                  {rel.cardDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

