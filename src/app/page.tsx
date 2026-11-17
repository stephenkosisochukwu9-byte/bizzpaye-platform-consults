import React from "react";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { ContactSection } from "@/components/ContactSection";
import { AboutUsSection } from "@/components/AboutUsSection";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Banner & Business Highlights */}
      <HeroSection />

      {/* 2. Website Development Services & View All 14 Services Panel */}
      <ServicesSection />

      {/* 3. Why Choose Us */}
      <WhyChooseUsSection />

      {/* 4. How It Works */}
      <HowItWorksSection />

      {/* 5. Contact Us */}
      <ContactSection />

      {/* 6. About Us (Immediately before Footer) */}
      <AboutUsSection />
    </>
  );
}

