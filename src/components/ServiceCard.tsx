import React from "react";
import Link from "next/link";
import type { WebsiteService } from "@/data/services";
import { getServiceWhatsAppUrl } from "@/lib/contact";
import { ServiceIcon } from "./ServiceIcon";
import { WebsitePreview } from "./WebsitePreview";

interface ServiceCardProps {
  service: WebsiteService;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="group flex flex-col rounded-[20px] bg-white border border-[#DCE8F3] shadow-[0_4px_18px_rgba(16,42,86,0.05)] hover:shadow-[0_14px_32px_rgba(16,42,86,0.11)] hover:border-[#0866D9]/45 transition-all duration-200 overflow-hidden">
      {/* Upper Preview Stage in Light Blue matching reference design */}
      <Link
        href={`/services/${service.slug}`}
        className="flex items-center justify-center relative bg-[#E4F3FF] px-3.5 pt-4 pb-3.5 min-h-[188px] overflow-hidden focus-visible:outline-none"
        aria-label={`Preview ${service.title}`}
      >
        {/* Soft decorative radial highlight inside light-blue frame */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/50 blur-xl"
        />
        <div className="relative w-full transition-transform duration-300 group-hover:scale-[1.02]">
          <WebsitePreview service={service} size="card" />
        </div>
      </Link>

      {/* Card Body */}
      <div className="flex flex-col flex-1 p-4 sm:p-5 bg-white">
        {/* Icon + Title Row */}
        <div className="flex items-start gap-2.5 mb-2">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#E4F3FF] text-[#0866D9] shrink-0 mt-0.5">
            <ServiceIcon name={service.icon} className="w-[18px] h-[18px]" />
          </span>
          <h3 className="text-[15.5px] sm:text-[16px] font-extrabold text-[#102A56] leading-snug group-hover:text-[#0866D9] transition-colors">
            <Link href={`/services/${service.slug}`}>{service.title}</Link>
          </h3>
        </div>

        {/* Short Description */}
        <p className="text-[13.5px] text-[#536477] leading-[1.55] mb-4 flex-1">
          {service.cardDescription}
        </p>

        {/* Action Buttons Row */}
        <div className="flex items-center gap-2 pt-1">
          <Link
            href={`/services/${service.slug}`}
            className="inline-flex items-center justify-center flex-1 rounded-full bg-[#E4F3FF] hover:bg-[#0866D9] text-[#0866D9] hover:text-white text-[12.5px] font-bold px-3 py-2.5 transition-colors duration-150 whitespace-nowrap"
          >
            Learn More
          </Link>
          <a
            href={getServiceWhatsAppUrl(service.singularLabel)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center flex-[1.25] rounded-full bg-[#102A56] hover:bg-[#0866D9] text-white text-[12.5px] font-bold px-3.5 py-2.5 transition-colors duration-150 whitespace-nowrap"
          >
            Get This Website
          </a>
        </div>
      </div>
    </article>
  );
}
