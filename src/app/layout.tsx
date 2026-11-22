import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BUSINESS_INFO } from "@/lib/contact";

export const metadata: Metadata = {
  metadataBase: new URL("https://bizzpayeconsults.online"),
  alternates: {
    canonical: "https://bizzpayeconsults.online",
  },
  title: {
    default: `${BUSINESS_INFO.name} | Website Development Agency`,
    template: `%s`,
  },
  description:
    "BIZZPAYE PLATFORM CONSULTS is a professional website development and digital solutions brand helping individuals, entrepreneurs, businesses, educational institutions and organisations establish their online presence. Your Vision. Our Digital Solution.",
  keywords: [
    "BIZZPAYE PLATFORM CONSULTS",
    "website development agency",
    "business websites",
    "e-commerce websites",
    "school websites",
    "real estate websites",
    "hotel websites",
    "online learning platforms",
    "inventory management systems",
    "invoice and billing systems",
  ],
  openGraph: {
    title: `${BUSINESS_INFO.name} | ${BUSINESS_INFO.taglineTitleCase}`,
    description:
      "We build modern, responsive and professional websites and digital platforms for individuals, businesses and organisations.",
    url: "https://bizzpayeconsults.online",
    siteName: BUSINESS_INFO.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS_INFO.name} | Website Development Agency`,
    description:
      "We build modern, responsive and professional websites and digital platforms for individuals, businesses and organisations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FAFBF8] text-[#26364A] antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:bg-[#102A56] focus:text-white focus:px-4 focus:py-2 focus:text-sm focus:font-bold"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
