import React from "react";
import Image from "next/image";
import { Globe, Briefcase, Cpu, LifeBuoy } from "lucide-react";

const PILLARS = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Responsive personal, corporate, school and industry websites.",
  },
  {
    icon: Briefcase,
    title: "Business Digital Solutions",
    description: "Practical web platforms built to strengthen business operations.",
  },
  {
    icon: Cpu,
    title: "Custom Web Applications",
    description: "Tailored booking, inventory, invoicing and learning systems.",
  },
  {
    icon: LifeBuoy,
    title: "Professional Support",
    description: "Clear communication and dependable guidance through delivery.",
  },
];

export function AboutUsSection() {
  return (
    <section
      id="about"
      className="py-11 sm:py-16 lg:py-20 bg-[#FAFBF8] border-t border-[#DCE8F3]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Agency Copy & 4 Core Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <p className="text-[12px] sm:text-[13px] font-extrabold tracking-[0.18em] uppercase text-[#0866D9] mb-2">
                ABOUT US
              </p>
              <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-extrabold text-[#102A56] tracking-[-0.02em] leading-tight">
                Who We Are
              </h2>
            </div>

            <div className="space-y-4 text-[15.5px] text-[#26364A] leading-[1.7]">
              <p>
                <strong className="font-bold text-[#102A56]">
                  BIZZPAYE PLATFORM CONSULTS
                </strong>{" "}
                is a digital solutions and website development brand dedicated
                to helping individuals, entrepreneurs, startups and established
                businesses establish a strong online presence.
              </p>
              <p>
                We create modern, functional and user-friendly websites tailored
                to the unique needs of every client.
              </p>
              <p>
                Whether you need a personal portfolio, business website, online
                store or custom business management platform, we work to turn
                your ideas into practical digital solutions.
              </p>
            </div>

            {/* Four Core Focus Areas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {PILLARS.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="flex items-start gap-3.5 rounded-2xl bg-white border border-[#DCE8F3] p-4 shadow-[0_3px_12px_rgba(16,42,86,0.04)]"
                  >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#E4F3FF] text-[#0866D9] shrink-0">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-[15px] font-extrabold text-[#102A56]">
                        {pillar.title}
                      </h3>
                      <p className="mt-1 text-[13.5px] text-[#536477] leading-snug">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Supporting Agency Visual */}
          <div className="lg:col-span-5">
            <div className="relative rounded-[24px] bg-[#E4F3FF] p-3 sm:p-4 border border-[#DCE8F3] shadow-[0_14px_34px_rgba(16,42,86,0.09)]">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[18px] bg-white">
                <Image
                  src="/images/about-workspace.jpg"
                  alt="BIZZPAYE PLATFORM CONSULTS digital solutions and website development workspace"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>

              <div className="mt-3 rounded-2xl bg-white border border-[#DCE8F3] px-5 py-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#0866D9]">
                    BIZZPAYE PLATFORM CONSULTS
                  </p>
                  <p className="text-sm font-bold text-[#102A56] mt-0.5">
                    Your Vision. Our Digital Solution.
                  </p>
                </div>
                <span className="inline-flex items-center justify-center rounded-full bg-[#E4F3FF] text-[#0866D9] text-xs font-extrabold px-3 py-1.5 shrink-0">
                  14+ Solutions
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

