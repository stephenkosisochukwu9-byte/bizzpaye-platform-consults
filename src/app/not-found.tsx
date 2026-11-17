import React from "react";
import Link from "next/link";
import { ArrowLeft, Layers } from "lucide-react";

export default function NotFound() {
  return (
    <section className="py-20 sm:py-28 bg-[#FAFBF8]">
      <div className="max-w-xl mx-auto px-4 text-center space-y-5">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#E4F3FF] text-[#0866D9] mx-auto">
          <Layers className="w-7 h-7" aria-hidden="true" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#102A56]">
          Page Not Found
        </h1>
        <p className="text-base text-[#536477] leading-relaxed">
          The page you are looking for could not be found. Return to the
          homepage or explore all 14 website development services offered by
          BIZZPAYE PLATFORM CONSULTS.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-[#102A56] hover:bg-[#0866D9] text-white text-sm font-bold px-6 py-3 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Back to Home</span>
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full bg-white hover:bg-[#E4F3FF] text-[#102A56] border border-[#DCE8F3] text-sm font-bold px-6 py-3 transition-colors"
          >
            <span>View All 14 Services</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

