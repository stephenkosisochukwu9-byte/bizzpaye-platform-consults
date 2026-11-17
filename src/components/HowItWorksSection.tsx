import React from "react";
import {
  MessageSquareText,
  ClipboardList,
  Code2,
  Rocket,
} from "lucide-react";

const STEPS = [
  {
    number: "01",
    label: "Step 1",
    icon: MessageSquareText,
    title: "Tell Us What You Need",
    description:
      "Explain the type of website or platform you want, your goals and the key pages or features you have in mind.",
  },
  {
    number: "02",
    label: "Step 2",
    icon: ClipboardList,
    title: "Discuss Your Requirements",
    description:
      "We discuss the design, features, budget and project scope so every detail is clear before work begins.",
  },
  {
    number: "03",
    label: "Step 3",
    icon: Code2,
    title: "Design and Development",
    description:
      "We build your website according to the agreed requirements with clean design and mobile responsiveness.",
  },
  {
    number: "04",
    label: "Step 4",
    icon: Rocket,
    title: "Review and Delivery",
    description:
      "You review the completed project and we arrange final delivery and deployment so your website is ready to launch.",
  },
];

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="py-16 sm:py-20 bg-[#E4F3FF]/55 border-t border-[#DCE8F3]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <p className="text-[12px] sm:text-[13px] font-extrabold tracking-[0.18em] uppercase text-[#0866D9] mb-2">
            OUR PROCESS
          </p>
          <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-extrabold text-[#102A56] tracking-[-0.02em] leading-tight">
            How It Works
          </h2>
          <p className="mt-3 text-[15px] sm:text-[16px] text-[#536477] leading-relaxed">
            A simple and transparent process from start to finish.
          </p>
        </div>

        {/* 4-Step Grid (4 columns desktop, 2 tablet, vertical mobile) */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Connecting desktop horizontal line */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-[52px] left-[12%] right-[12%] h-[2px] bg-[#0866D9]/20"
          />

          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative bg-white rounded-[20px] border border-[#DCE8F3] p-6 shadow-[0_6px_20px_rgba(16,42,86,0.05)] flex flex-col"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="relative z-10 w-13 h-13 rounded-2xl bg-[#102A56] text-white flex items-center justify-center shadow-sm">
                    <Icon className="w-6 h-6 text-[#E4F3FF]" aria-hidden="true" />
                  </div>
                  <span className="inline-flex items-center rounded-full bg-[#E4F3FF] px-3 py-1 text-xs font-extrabold text-[#0866D9] tracking-wide uppercase">
                    {step.label}
                  </span>
                </div>

                <h3 className="text-[17.5px] font-extrabold text-[#102A56] leading-snug mb-2">
                  {step.title}
                </h3>
                <p className="text-[14.5px] text-[#536477] leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

