import React from "react";
import {
  Sparkles,
  Smartphone,
  Zap,
  SlidersHorizontal,
  Headphones,
} from "lucide-react";

const BENEFITS = [
  {
    icon: Sparkles,
    title: "Modern and Professional Designs",
    description:
      "Clean, corporate and contemporary interfaces crafted to present your brand with immediate credibility and trust.",
  },
  {
    icon: Smartphone,
    title: "Mobile-Friendly and Responsive Layouts",
    description:
      "Every website adapts smoothly across smartphones, tablets and desktop monitors for an effortless visitor experience.",
  },
  {
    icon: Zap,
    title: "Fast and User-Friendly Websites",
    description:
      "Clear navigation, readable typography and optimized performance ensure visitors find what they need without friction.",
  },
  {
    icon: SlidersHorizontal,
    title: "Customized Solutions for Your Business",
    description:
      "Tailored structures, features and enquiry flows designed around the specific goals of your organisation or industry.",
  },
  {
    icon: Headphones,
    title: "Professional Development and Support",
    description:
      "Structured communication, reliable engineering practices and dedicated guidance from initial discussion to final handover.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section
      id="why-choose-us"
      className="py-16 sm:py-20 bg-white border-t border-[#DCE8F3]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[12px] sm:text-[13px] font-extrabold tracking-[0.18em] uppercase text-[#0866D9] mb-2">
            THE BIZZPAYE ADVANTAGE
          </p>
          <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-extrabold text-[#102A56] tracking-[-0.02em] leading-tight">
            Why Choose Us?
          </h2>
          <p className="mt-3 text-[15px] sm:text-[16px] text-[#536477] leading-relaxed">
            Here’s why individuals and businesses trust us with their website
            projects.
          </p>
        </div>

        {/* 5 Benefit Cards: 3 + 2 balanced layout on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 lg:gap-6">
          {BENEFITS.map((benefit, index) => {
            const Icon = benefit.icon;
            // First 3 cards span 2 columns each (3 across); bottom 2 span 3 columns each (2 balanced across) on lg
            const spanClass =
              index < 3
                ? "lg:col-span-2"
                : "lg:col-span-3";

            return (
              <div
                key={benefit.title}
                className={`${spanClass} group rounded-[20px] bg-[#FAFBF8] hover:bg-white border border-[#DCE8F3] hover:border-[#0866D9]/45 p-6 sm:p-7 shadow-[0_3px_14px_rgba(16,42,86,0.04)] hover:shadow-[0_12px_28px_rgba(16,42,86,0.09)] transition-all duration-200 flex flex-col`}
              >
                <div className="w-12 h-12 rounded-2xl bg-[#E4F3FF] group-hover:bg-[#0866D9] text-[#0866D9] group-hover:text-white flex items-center justify-center mb-5 transition-colors duration-200">
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-[18px] font-extrabold text-[#102A56] leading-snug mb-2.5">
                  {benefit.title}
                </h3>
                <p className="text-[14.5px] text-[#536477] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

