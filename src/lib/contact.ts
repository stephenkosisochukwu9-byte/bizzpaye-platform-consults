export const BUSINESS_INFO = {
  name: "BIZZPAYE PLATFORM CONSULTS",
  shortName: "BIZZPAYE",
  subName: "PLATFORM CONSULTS",
  tagline: "YOUR VISION. OUR DIGITAL SOLUTION.",
  taglineTitleCase: "Your Vision. Our Digital Solution.",
  whatsappDisplay: "+234 8143063375",
  whatsappBaseUrl: "https://wa.me/2348143063375",
  email: "bizzpayeinfo6@gmail.com",
  emailHref: "mailto:bizzpayeinfo6@gmail.com",
  defaultWhatsAppMessage:
    "Hello BIZZPAYE PLATFORM CONSULTS, I visited your website and I’m interested in your website development services. I would like to discuss my requirements.",
} as const;

export function getWhatsAppUrl(message: string = BUSINESS_INFO.defaultWhatsAppMessage): string {
  return `${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}

export function getServiceWhatsAppUrl(singularLabel: string): string {
  const message = `Hello BIZZPAYE PLATFORM CONSULTS, I am interested in getting ${singularLabel}. Please provide more information.`;
  return getWhatsAppUrl(message);
}

export interface ContactEnquiryPayload {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  description: string;
}

export function getEnquiryWhatsAppUrl(data: ContactEnquiryPayload): string {
  const lines = [
    "Hello BIZZPAYE PLATFORM CONSULTS, I would like to request a website.",
    "",
    `Full Name: ${data.fullName.trim()}`,
    `Email Address: ${data.email.trim()}`,
    `Phone Number: ${data.phone.trim()}`,
    `Service Required: ${data.service}`,
    `Project Description: ${data.description.trim()}`,
  ];
  return getWhatsAppUrl(lines.join("\n"));
}

