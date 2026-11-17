import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { WebsiteService } from "@/data/services";
import { getServiceWhatsAppUrl } from "@/lib/contact";
import { ServiceIcon } from "./ServiceIcon";
import { WebsitePreview } from "./WebsitePreview";

interface ServiceCardProps {
  service: WebsiteService;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="group h-full flex flex-col rounded-[16px] sm:rounded-[20px] bg-white border border-[#DCE8F3] shadow-[0_4px_16px_rgba(16,42,86,0.05)] hover:shadow-[0_14px_32px_rgba(16,42,86,0.11)] hover:border-[#0866D9]/45 transition-all duration-200 overflow-hidden">
      {/* Upper Preview Stage in Light Blue preserving exact original service image */}
      <Link
        href={`/services/${service.slug}`}
        className="flex items-center justify-center relative bg-[#E4F3FF] px-2 pt-2.5 pb-2 min-[375px]:px-2.5 sm:px-3.5 sm:pt-4 sm:pb-3.5 min-h-[106px] min-[375px]:min-h-[120px] sm:min-h-[188px] overflow-hidden focus-visible:outline-none"
        aria-label={`Preview ${service.title}`}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-10 -right-10 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white/50 blur-xl"
        />
        <div className="relative w-full transition-transform duration-300 group-hover:scale-[1.02]">
          <WebsitePreview service={service} size="card" />
        </div>
      </Link>

      {/* Card Body */}
      <div className="flex flex-col flex-1 p-2.5 min-[375px]:p-3 sm:p-4 lg:p-5 bg-white">
        {/* Icon + Title Row */}
        <div className="flex items-start gap-2 sm:gap-2.5 mb-1.5 sm:mb-2">
          <span className="inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-[#E4F3FF] text-[#0866D9] shrink-0 mt-0.5">
            <ServiceIcon
              name={service.icon}
              className="w-3.5 h-3.5 sm:w-[18px] sm:h-[18px]"
            />
          </span>
          <h3 className="text-[12.5px] min-[375px]:text-[13.5px] sm:text-[15.5px] lg:text-[16px] font-extrabold text-[#102A56] leading-[1.25] group-hover:text-[#0866D9] transition-colors">
            <Link href={`/services/${service.slug}`}>{service.title}</Link>
          </h3>
        </div>

        {/* Short Description (wrapped in flex-1 container so buttons stay aligned with zero clipped lines) */}
        <div className="flex-1 mb-3 sm:mb-4">
          <p className="text-[11px] min-[375px]:text-[11.5px] sm:text-[13.5px] text-[#536477] leading-[1.45] sm:leading-[1.55]">
            {service.cardDescription}
          </p>
        </div>

        {/* Action Buttons Row: stacked cleanly inside 2-column mobile cards, side-by-side on sm+ */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-1.5 sm:gap-2 pt-0.5">
          <Link
            href={`/services/${service.slug}`}
            className="inline-flex items-center justify-center gap-1 sm:flex-1 rounded-full bg-[#E4F3FF] hover:bg-[#0866D9] border border-[#0866D9]/25 sm:border-transparent text-[#0866D9] hover:text-white text-[11px] min-[375px]:text-[11.5px] sm:text-[12.5px] font-bold px-2.5 sm:px-3 py-2 sm:py-2.5 transition-colors duration-150 whitespace-nowrap"
          >
            <span>Learn More</span>
            <ArrowRight className="w-3 h-3 sm:hidden shrink-0" aria-hidden="true" />
          </Link>
          <a
            href={getServiceWhatsAppUrl(service.singularLabel)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center sm:flex-[1.25] rounded-full bg-[#102A56] hover:bg-[#0866D9] text-white text-[11px] min-[375px]:text-[11.5px] sm:text-[12.5px] font-bold px-2.5 sm:px-3.5 py-2 sm:py-2.5 transition-colors duration-150 whitespace-nowrap"
          >
            Get This Website
          </a>
        </div>
      </div>
    </article>
  );
}
