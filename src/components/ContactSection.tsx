"use client";

import React, { useState } from "react";
import { Mail, Phone, Send, AlertCircle, ExternalLink } from "lucide-react";
import { SERVICES } from "@/data/services";
import {
  BUSINESS_INFO,
  getEnquiryWhatsAppUrl,
  getWhatsAppUrl,
} from "@/lib/contact";
import { WhatsAppIcon } from "./WhatsAppIcon";

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  description: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  service?: string;
  description?: string;
}

export function ContactSection() {
  const [form, setForm] = useState<FormState>({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    description: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [generatedWhatsAppUrl, setGeneratedWhatsAppUrl] = useState<string | null>(
    null
  );

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};

    if (!form.fullName.trim() || form.fullName.trim().length < 2) {
      nextErrors.fullName = "Please enter your full name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim() || !emailRegex.test(form.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }

    const cleanedPhone = form.phone.replace(/[^\d+]/g, "");
    if (!cleanedPhone || cleanedPhone.length < 7) {
      nextErrors.phone = "Please enter a valid phone or WhatsApp number.";
    }

    if (!form.service) {
      nextErrors.service = "Please select the website service you require.";
    }

    if (!form.description.trim() || form.description.trim().length < 10) {
      nextErrors.description =
        "Please briefly describe your project (at least 10 characters).";
    }

    return nextErrors;
  };

  const handleChange = (
    field: keyof FormState,
    value: string
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    if (generatedWhatsAppUrl) {
      setGeneratedWhatsAppUrl(null);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const whatsappUrl = getEnquiryWhatsAppUrl(form);
    setGeneratedWhatsAppUrl(whatsappUrl);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contact"
      className="py-11 sm:py-16 lg:py-20 bg-white border-t border-[#DCE8F3]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[12px] sm:text-[13px] font-extrabold tracking-[0.18em] uppercase text-[#0866D9] mb-2">
            CONTACT US
          </p>
          <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-extrabold text-[#102A56] tracking-[-0.02em] leading-tight">
            Let’s Take Your Business Online!
          </h2>
          <p className="mt-3 text-[15px] sm:text-[16px] text-[#536477] leading-relaxed">
            Have a project in mind? Let’s discuss your ideas and find the right
            digital solution for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Details Card */}
          <div className="lg:col-span-5 rounded-[22px] bg-[#102A56] text-white p-7 sm:p-8 shadow-[0_14px_34px_rgba(16,42,86,0.16)] relative overflow-hidden">
            {/* Subtle blue decorative circles */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#0866D9]/25"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-20 -left-16 w-52 h-52 rounded-full bg-[#0866D9]/20"
            />

            <div className="relative z-10 space-y-6">
              <div>
                <p className="text-xs font-bold tracking-[0.16em] uppercase text-[#E4F3FF]">
                  {BUSINESS_INFO.tagline}
                </p>
                <h3 className="mt-2 text-[22px] sm:text-[24px] font-extrabold text-white leading-snug">
                  {BUSINESS_INFO.name}
                </h3>
                <p className="mt-2 text-sm text-[#E4F3FF]/85 leading-relaxed">
                  Reach out directly via WhatsApp or email to discuss your
                  website goals, preferred features and timeline.
                </p>
              </div>

              {/* Direct Contact Channels */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5 rounded-2xl bg-white/8 border border-white/12 p-4">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#0866D9] text-white shrink-0">
                    <Phone className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#E4F3FF]/80">
                      WhatsApp
                    </p>
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[16px] font-bold text-white hover:text-[#E4F3FF] transition-colors"
                    >
                      {BUSINESS_INFO.whatsappDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 rounded-2xl bg-white/8 border border-white/12 p-4">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#0866D9] text-white shrink-0">
                    <Mail className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#E4F3FF]/80">
                      Email
                    </p>
                    <a
                      href={BUSINESS_INFO.emailHref}
                      className="text-[15px] sm:text-[16px] font-bold text-white hover:text-[#E4F3FF] transition-colors break-all"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct Action Buttons */}
              <div className="pt-2 flex flex-col gap-3">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 rounded-full bg-[#0866D9] hover:bg-white text-white hover:text-[#102A56] text-[14.5px] font-bold px-6 py-3.5 transition-colors duration-200"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href={BUSINESS_INFO.emailHref}
                  className="w-full inline-flex items-center justify-center gap-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/25 text-[14.5px] font-bold px-6 py-3.5 transition-colors duration-200"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  <span>Send an Email</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Validated WhatsApp Enquiry Form */}
          <div className="lg:col-span-7 rounded-[22px] bg-[#FAFBF8] border border-[#DCE8F3] p-6 sm:p-8 shadow-[0_6px_24px_rgba(16,42,86,0.05)]">
            <div className="mb-6">
              <h3 className="text-[20px] sm:text-[22px] font-extrabold text-[#102A56]">
                Request a Website Enquiry
              </h3>
              <p className="mt-1 text-sm text-[#536477]">
                Complete your project details below to generate a pre-filled
                WhatsApp enquiry directly to {BUSINESS_INFO.name}.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="enquiry-full-name"
                    className="block text-sm font-bold text-[#102A56] mb-1.5"
                  >
                    Full Name <span className="text-[#0866D9]">*</span>
                  </label>
                  <input
                    id="enquiry-full-name"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    value={form.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    placeholder="Enter your full name"
                    aria-invalid={Boolean(errors.fullName)}
                    aria-describedby={
                      errors.fullName ? "error-full-name" : undefined
                    }
                    className={`w-full rounded-xl bg-white border px-4 py-3 text-sm text-[#26364A] placeholder:text-[#536477]/70 transition-colors focus:outline-none focus:border-[#0866D9] ${
                      errors.fullName ? "border-[#102A56]" : "border-[#DCE8F3]"
                    }`}
                  />
                  {errors.fullName && (
                    <p
                      id="error-full-name"
                      role="alert"
                      className="mt-1.5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#102A56]"
                    >
                      <AlertCircle className="w-3.5 h-3.5 text-[#0866D9] shrink-0" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label
                    htmlFor="enquiry-email"
                    className="block text-sm font-bold text-[#102A56] mb-1.5"
                  >
                    Email Address <span className="text-[#0866D9]">*</span>
                  </label>
                  <input
                    id="enquiry-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="you@example.com"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "error-email" : undefined}
                    className={`w-full rounded-xl bg-white border px-4 py-3 text-sm text-[#26364A] placeholder:text-[#536477]/70 transition-colors focus:outline-none focus:border-[#0866D9] ${
                      errors.email ? "border-[#102A56]" : "border-[#DCE8F3]"
                    }`}
                  />
                  {errors.email && (
                    <p
                      id="error-email"
                      role="alert"
                      className="mt-1.5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#102A56]"
                    >
                      <AlertCircle className="w-3.5 h-3.5 text-[#0866D9] shrink-0" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone Number */}
                <div>
                  <label
                    htmlFor="enquiry-phone"
                    className="block text-sm font-bold text-[#102A56] mb-1.5"
                  >
                    Phone Number <span className="text-[#0866D9]">*</span>
                  </label>
                  <input
                    id="enquiry-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="+234 800 000 0000"
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? "error-phone" : undefined}
                    className={`w-full rounded-xl bg-white border px-4 py-3 text-sm text-[#26364A] placeholder:text-[#536477]/70 transition-colors focus:outline-none focus:border-[#0866D9] ${
                      errors.phone ? "border-[#102A56]" : "border-[#DCE8F3]"
                    }`}
                  />
                  {errors.phone && (
                    <p
                      id="error-phone"
                      role="alert"
                      className="mt-1.5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#102A56]"
                    >
                      <AlertCircle className="w-3.5 h-3.5 text-[#0866D9] shrink-0" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

                {/* Service Required Dropdown (All 14 Services) */}
                <div>
                  <label
                    htmlFor="enquiry-service"
                    className="block text-sm font-bold text-[#102A56] mb-1.5"
                  >
                    Service Required <span className="text-[#0866D9]">*</span>
                  </label>
                  <select
                    id="enquiry-service"
                    name="service"
                    value={form.service}
                    onChange={(e) => handleChange("service", e.target.value)}
                    aria-invalid={Boolean(errors.service)}
                    aria-describedby={
                      errors.service ? "error-service" : undefined
                    }
                    className={`w-full rounded-xl bg-white border px-4 py-3 text-sm text-[#26364A] transition-colors focus:outline-none focus:border-[#0866D9] ${
                      errors.service ? "border-[#102A56]" : "border-[#DCE8F3]"
                    }`}
                  >
                    <option value="">Select a website service...</option>
                    {SERVICES.map((service) => (
                      <option key={service.slug} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p
                      id="error-service"
                      role="alert"
                      className="mt-1.5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#102A56]"
                    >
                      <AlertCircle className="w-3.5 h-3.5 text-[#0866D9] shrink-0" />
                      <span>{errors.service}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Project Description */}
              <div>
                <label
                  htmlFor="enquiry-description"
                  className="block text-sm font-bold text-[#102A56] mb-1.5"
                >
                  Project Description <span className="text-[#0866D9]">*</span>
                </label>
                <textarea
                  id="enquiry-description"
                  name="description"
                  rows={4}
                  value={form.description}
                  onChange={(e) => handleChange("description", e.target.value)}
                  placeholder="Tell us about your business, the features you need and any goals for your website..."
                  aria-invalid={Boolean(errors.description)}
                  aria-describedby={
                    errors.description ? "error-description" : undefined
                  }
                  className={`w-full rounded-xl bg-white border px-4 py-3 text-sm text-[#26364A] placeholder:text-[#536477]/70 transition-colors focus:outline-none focus:border-[#0866D9] resize-y ${
                    errors.description ? "border-[#102A56]" : "border-[#DCE8F3]"
                  }`}
                />
                {errors.description && (
                  <p
                    id="error-description"
                    role="alert"
                    className="mt-1.5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#102A56]"
                  >
                    <AlertCircle className="w-3.5 h-3.5 text-[#0866D9] shrink-0" />
                    <span>{errors.description}</span>
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#102A56] hover:bg-[#0866D9] text-white text-[14.5px] font-bold px-7 py-3.5 shadow-[0_8px_20px_rgba(16,42,86,0.16)] transition-colors duration-200 cursor-pointer"
                >
                  <Send className="w-4 h-4" aria-hidden="true" />
                  <span>Continue to WhatsApp Enquiry</span>
                </button>

                <p className="text-xs text-[#536477]">
                  Opens WhatsApp in a new tab with your details pre-filled.
                </p>
              </div>

              {/* Direct fallback link if popup was blocked (not a fake submission confirmation) */}
              {generatedWhatsAppUrl && (
                <div className="rounded-xl bg-[#E4F3FF] border border-[#0866D9]/35 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <p className="text-xs sm:text-sm text-[#102A56] font-medium">
                    Your encoded WhatsApp enquiry link is ready. If WhatsApp did
                    not open automatically, use the button to launch it directly.
                  </p>
                  <a
                    href={generatedWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#0866D9] hover:bg-[#102A56] text-white text-xs font-bold px-4 py-2 shrink-0 transition-colors"
                  >
                    <span>Open WhatsApp</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

