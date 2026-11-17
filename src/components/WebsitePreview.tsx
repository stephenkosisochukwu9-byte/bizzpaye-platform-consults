import React from "react";
import Image from "next/image";
import type { WebsiteService } from "@/data/services";
import {
  Search,
  ShoppingCart,
  Calendar,
  MapPin,
  Star,
  Play,
  CheckCircle2,
  Clock,
  FileText,
  Package,
  Users,
  Phone,
  BookOpen,
} from "lucide-react";

interface WebsitePreviewProps {
  service: WebsiteService;
  size: "card" | "detail";
}

interface PreviewConfig {
  brand: string;
  domain: string;
  navItems: string[];
  heroBadge: string;
  heroTitle: string;
  heroSubtitle: string;
  heroCta: string;
  heroSecondaryCta?: string;
  layoutVariant: "split-light" | "hero-overlay" | "dashboard" | "editorial";
  bannerText?: string;
  cards: { title: string; meta: string; tag?: string }[];
  secondaryBlockTitle: string;
  secondaryItems: { label: string; value: string; status?: string }[];
  footerContact: string;
}

const PREVIEW_CONFIGS: Record<string, PreviewConfig> = {
  "personal-portfolio-websites": {
    brand: "David Okafor",
    domain: "davidokafor.dev",
    navItems: ["Home", "About", "Projects", "Resume", "Contact"],
    heroBadge: "Full-Stack Developer & Designer",
    heroTitle: "Hello, I’m David Okafor",
    heroSubtitle:
      "I design and engineer responsive web applications, digital interfaces and modern brand websites.",
    heroCta: "View Projects",
    heroSecondaryCta: "Download CV",
    layoutVariant: "split-light",
    bannerText: "Available for freelance & full-time software engineering roles",
    cards: [
      { title: "Fintech Dashboard UI", meta: "React · TypeScript", tag: "Web App" },
      { title: "Corporate Brand Portal", meta: "Next.js · Tailwind", tag: "Website" },
      { title: "Mobile Commerce Kit", meta: "UI/UX · Design System", tag: "Case Study" },
    ],
    secondaryBlockTitle: "Core Skills & Expertise",
    secondaryItems: [
      { label: "Frontend Architecture", value: "React, Next.js, TypeScript" },
      { label: "UI / UX Design", value: "Wireframing, Responsive Systems" },
      { label: "Backend & APIs", value: "Node.js, REST, Databases" },
    ],
    footerContact: "hello@davidokafor.dev · LinkedIn · GitHub",
  },
  "business-websites": {
    brand: "Crestline Advisory",
    domain: "crestlineadvisory.com",
    navItems: ["Home", "About", "Services", "Insights", "Contact"],
    heroBadge: "Corporate Consulting Firm",
    heroTitle: "Professional Business Solutions",
    heroSubtitle:
      "Strategic advisory, operational growth and corporate transformation tailored for ambitious companies.",
    heroCta: "Request Consultation",
    heroSecondaryCta: "Our Services",
    layoutVariant: "hero-overlay",
    bannerText: "Trusted business advisory across finance, strategy and digital operations",
    cards: [
      { title: "Business Strategy", meta: "Market planning & expansion", tag: "Advisory" },
      { title: "Corporate Finance", meta: "Structuring & financial models", tag: "Finance" },
      { title: "Operations Audit", meta: "Process & team optimization", tag: "Operations" },
    ],
    secondaryBlockTitle: "Company Information & Enquiry",
    secondaryItems: [
      { label: "Office Hours", value: "Mon – Fri, 8:00 AM – 5:00 PM" },
      { label: "Direct Enquiries", value: "WhatsApp & Consultation Form" },
      { label: "Head Office", value: "Victoria Island Business District" },
    ],
    footerContact: "info@crestlineadvisory.com · Direct WhatsApp Desk",
  },
  "ecommerce-websites": {
    brand: "NovaMart Store",
    domain: "novamartshop.com",
    navItems: ["Shop", "Electronics", "Accessories", "Deals", "Cart (2)"],
    heroBadge: "New Collection",
    heroTitle: "Shop Our Latest Products",
    heroSubtitle:
      "Curated everyday tech, audio gear and lifestyle essentials with fast nationwide delivery.",
    heroCta: "Shop Now",
    heroSecondaryCta: "View Cart",
    layoutVariant: "split-light",
    bannerText: "Secure online checkout · Fast nationwide dispatch · Order tracking",
    cards: [
      { title: "Studio Wireless Headphones", meta: "₦68,500", tag: "In Stock" },
      { title: "Chrono Smart Watch", meta: "₦54,000", tag: "Best Seller" },
      { title: "Leather Laptop Sleeve", meta: "₦24,500", tag: "New" },
    ],
    secondaryBlockTitle: "Checkout & Store Features",
    secondaryItems: [
      { label: "Cart Summary", value: "2 Items · Instant Checkout", status: "Ready" },
      { label: "Payment Methods", value: "Card, Transfer & Wallet" },
      { label: "Order Management", value: "Customer Account & Admin Panel" },
    ],
    footerContact: "orders@novamartshop.com · WhatsApp Order Support",
  },
  "school-websites": {
    brand: "BrightFuture Academy",
    domain: "brightfutureacademy.edu",
    navItems: ["Home", "Admissions", "Programmes", "News", "Gallery", "Contact"],
    heroBadge: "2026 Admissions Open",
    heroTitle: "Quality Education For A Brighter Future",
    heroSubtitle:
      "Nurturing academic excellence, character and digital literacy across Nursery, Primary and Secondary levels.",
    heroCta: "Admission Enquiry",
    heroSecondaryCta: "Explore Programmes",
    layoutVariant: "hero-overlay",
    bannerText: "Admissions Banner: Entrance Assessment & Parent Tours Now Open for New Session",
    cards: [
      { title: "Nursery & Early Years", meta: "Foundation literacy & creative play", tag: "Ages 2–5" },
      { title: "Primary School", meta: "STEM, languages & arts curriculum", tag: "Grades 1–6" },
      { title: "Secondary College", meta: "Sciences, technology & leadership", tag: "JSS1 – SSS3" },
    ],
    secondaryBlockTitle: "School News, Gallery & Admissions Desk",
    secondaryItems: [
      { label: "School News", value: "Annual Science & Innovation Fair Announced", status: "News" },
      { label: "Campus Gallery", value: "Classrooms, ICT Lab, Library & Sports Field" },
      { label: "Admissions Contact", value: "admissions@brightfutureacademy.edu · Mon–Fri" },
    ],
    footerContact: "Campus Admissions Office · Request Prospectus & School Tour",
  },
  "restaurant-websites": {
    brand: "Savory Kitchen",
    domain: "savorykitchen.ng",
    navItems: ["Home", "Menu", "Order Online", "Reservations", "Location"],
    heroBadge: "Fresh Daily Kitchen",
    heroTitle: "Delicious Meals Made Fresh",
    heroSubtitle:
      "Signature grilled platters, rice specials and chef-crafted dishes available for dine-in or quick WhatsApp delivery.",
    heroCta: "Order on WhatsApp",
    heroSecondaryCta: "View Full Menu",
    layoutVariant: "split-light",
    bannerText: "Open Daily: 9:00 AM – 10:00 PM · Dine-in, Takeaway & Catering",
    cards: [
      { title: "Herb-Grilled Chicken Bowl", meta: "₦8,500", tag: "Chef Special" },
      { title: "Smoky Jollof Platter", meta: "₦7,200", tag: "Popular" },
      { title: "Seafood Pasta Alfredo", meta: "₦11,000", tag: "Fresh" },
    ],
    secondaryBlockTitle: "Table Reservations & Location",
    secondaryItems: [
      { label: "WhatsApp Ordering", value: "Direct Kitchen Order Confirmation", status: "Active" },
      { label: "Opening Hours", value: "Mon – Sun · 9:00 AM to 10:00 PM" },
      { label: "Dining Location", value: "Central Plaza, Main Boulevard" },
    ],
    footerContact: "Table Bookings & Event Catering via WhatsApp",
  },
  "real-estate-websites": {
    brand: "PrimeHaven Realty",
    domain: "primehavenrealty.com",
    navItems: ["Buy", "Rent", "Shortlet", "Agents", "Contact"],
    heroBadge: "Verified Property Listings",
    heroTitle: "Find Your Dream Property",
    heroSubtitle:
      "Explore modern family homes, luxury apartments and commercial spaces across prime neighbourhoods.",
    heroCta: "Browse Listings",
    heroSecondaryCta: "Book Inspection",
    layoutVariant: "hero-overlay",
    bannerText: "Filter by: For Sale · For Rent · Location · Bedrooms · Price Range",
    cards: [
      { title: "4-Bed Modern Duplex", meta: "₦145,000,000 · Lekki", tag: "For Sale" },
      { title: "2-Bed Serviced Apartment", meta: "₦5,500,000/yr · Ikeja", tag: "For Rent" },
      { title: "Commercial Office Suite", meta: "₦12,000,000/yr · VI", tag: "Lease" },
    ],
    secondaryBlockTitle: "Property Search & Enquiries",
    secondaryItems: [
      { label: "Sales & Rental Filter", value: "Instant Category & Budget Filtering" },
      { label: "Inspection Booking", value: "Schedule Physical or Virtual Tour", status: "Available" },
      { label: "Agent Direct Line", value: "Instant WhatsApp Property Enquiry" },
    ],
    footerContact: "inspections@primehavenrealty.com · Verified Listings",
  },
  "hotel-websites": {
    brand: "Azure Crest Hotel",
    domain: "azurecresthotel.com",
    navItems: ["Rooms", "Suites", "Facilities", "Dining", "Book Now"],
    heroBadge: "Boutique Hospitality",
    heroTitle: "Comfortable Stays & Great Hospitality",
    heroSubtitle:
      "Refined guest rooms, executive suites, serene dining and attentive service for business and leisure travellers.",
    heroCta: "Reserve a Room",
    heroSecondaryCta: "View Suites",
    layoutVariant: "hero-overlay",
    bannerText: "Check-in: 2:00 PM · Free Wi-Fi · Breakfast · Conference Hall · 24/7 Reception",
    cards: [
      { title: "Standard Deluxe Room", meta: "₦55,000 / night", tag: "2 Guests" },
      { title: "Executive King Suite", meta: "₦95,000 / night", tag: "Breakfast Incl." },
      { title: "Presidential Suite", meta: "₦165,000 / night", tag: "Lounge Access" },
    ],
    secondaryBlockTitle: "Hotel Facilities & Reservations",
    secondaryItems: [
      { label: "Guest Amenities", value: "Restaurant, Pool, Gym & Event Hall" },
      { label: "Direct Reservations", value: "Online Booking Enquiry & WhatsApp", status: "Instant" },
      { label: "Location & Shuttle", value: "15 mins from City Airport Terminal" },
    ],
    footerContact: "reservations@azurecresthotel.com · 24/7 Front Desk",
  },
  "online-learning-platforms": {
    brand: "SkillBridge Academy",
    domain: "skillbridgelearn.com",
    navItems: ["Courses", "My Learning", "Instructors", "Certificates", "Sign In"],
    heroBadge: "Online Course Portal",
    heroTitle: "Learn Anywhere, Anytime",
    heroSubtitle:
      "Self-paced video lessons, practical assignments and progress tracking built for modern learners and instructors.",
    heroCta: "Explore Courses",
    heroSecondaryCta: "Student Login",
    layoutVariant: "split-light",
    bannerText: "Student Dashboard · HD Video Modules · Downloadable Resources · Quizzes",
    cards: [
      { title: "Web Development Bootcamp", meta: "24 Video Lessons · 68% Done", tag: "In Progress" },
      { title: "Digital Business Mastery", meta: "18 Video Lessons · Quiz", tag: "Popular" },
      { title: "UI Design Fundamentals", meta: "15 Video Lessons · Project", tag: "Certificate" },
    ],
    secondaryBlockTitle: "Learner & Instructor Tools",
    secondaryItems: [
      { label: "Student Progress", value: "Module Completion & Quiz Scores", status: "Tracked" },
      { label: "Course Materials", value: "HD Video Lessons & PDF Guides" },
      { label: "Instructor Console", value: "Upload Lessons & Manage Enrolments" },
    ],
    footerContact: "support@skillbridgelearn.com · Student Help Desk",
  },
  "landing-pages": {
    brand: "PayFlow Launch",
    domain: "getpayflow.app",
    navItems: ["Features", "How It Works", "Benefits", "Get Started"],
    heroBadge: "Campaign Launch Page",
    heroTitle: "Launch Your Offer With Clarity & Speed",
    heroSubtitle:
      "A focused, high-converting landing page structured to turn campaign clicks into qualified WhatsApp and form leads.",
    heroCta: "Claim Your Offer",
    heroSecondaryCta: "See Highlights",
    layoutVariant: "split-light",
    bannerText: "Focused single-goal conversion layout built for product launches & ad campaigns",
    cards: [
      { title: "Clear Value Message", meta: "Immediate above-the-fold clarity", tag: "Step 1" },
      { title: "Visual Proof Blocks", meta: "Structured benefits & features", tag: "Step 2" },
      { title: "Instant Lead Action", meta: "Direct WhatsApp & form capture", tag: "Step 3" },
    ],
    secondaryBlockTitle: "Campaign Conversion Flow",
    secondaryItems: [
      { label: "Mobile Load Speed", value: "Lightweight Responsive Layout", status: "Fast" },
      { label: "Call-to-Action Focus", value: "Distraction-Free Funnel" },
      { label: "Lead Routing", value: "WhatsApp & Email Enquiry Ready" },
    ],
    footerContact: "Dedicated Campaign Page · Instant Enquiry Button",
  },
  "event-websites": {
    brand: "Innovate Summit 2026",
    domain: "innovatesummit2026.com",
    navItems: ["Overview", "Speakers", "Schedule", "Tickets", "Venue"],
    heroBadge: "Annual Tech & Business Summit",
    heroTitle: "Digital Growth Conference 2026",
    heroSubtitle:
      "Join industry leaders, founders and builders for two days of keynotes, workshops and networking.",
    heroCta: "Register Now",
    heroSecondaryCta: "View Schedule",
    layoutVariant: "hero-overlay",
    bannerText: "Date: November 24–25, 2026 · Venue: Civic Convention Centre · Seats Open",
    cards: [
      { title: "Keynote Sessions", meta: "09:30 AM · Main Auditorium", tag: "Day 1" },
      { title: "Product Workshops", meta: "01:30 PM · Breakout Halls", tag: "Interactive" },
      { title: "Executive Networking", meta: "05:00 PM · Grand Lounge", tag: "VIP Pass" },
    ],
    secondaryBlockTitle: "Tickets, Speakers & Venue",
    secondaryItems: [
      { label: "Standard Attendee Pass", value: "Full 2-Day Access & Materials", status: "Open" },
      { label: "VIP Executive Pass", value: "Front-Row Seating & Lounge" },
      { label: "Venue & Directions", value: "Civic Convention Hall · Map Ready" },
    ],
    footerContact: "events@innovatesummit2026.com · Attendee Support Desk",
  },
  "appointment-booking-websites": {
    brand: "ClearCare Consult",
    domain: "clearcareconsult.com",
    navItems: ["Services", "Specialists", "Book Slot", "Hours", "Contact"],
    heroBadge: "Online Scheduling Portal",
    heroTitle: "Book Your Appointment Online",
    heroSubtitle:
      "Select your preferred service, pick a convenient date and time slot, and confirm your visit in seconds.",
    heroCta: "Book Appointment",
    heroSecondaryCta: "View Services",
    layoutVariant: "split-light",
    bannerText: "Available Today: 10:00 AM · 11:30 AM · 02:00 PM · 04:00 PM",
    cards: [
      { title: "General Consultation", meta: "30 mins · Specialist Desk", tag: "Available" },
      { title: "Executive Assessment", meta: "60 mins · Full Session", tag: "Popular" },
      { title: "Follow-Up Review", meta: "20 mins · In-Person / Online", tag: "Quick Slot" },
    ],
    secondaryBlockTitle: "Time Slot & Confirmation Flow",
    secondaryItems: [
      { label: "Step 1: Choose Service", value: "Clear Duration & Specialist Info" },
      { label: "Step 2: Pick Date & Time", value: "Calendar & Time Slot Selector", status: "Live" },
      { label: "Step 3: Instant Confirm", value: "Direct WhatsApp Booking Confirmation" },
    ],
    footerContact: "bookings@clearcareconsult.com · Mon–Sat 8AM–6PM",
  },
  "inventory-management-systems": {
    brand: "StockPulse IMS",
    domain: "app.stockpulse-ims.com",
    navItems: ["Dashboard", "Products", "Stock In/Out", "Suppliers", "Reports"],
    heroBadge: "Inventory Control System",
    heroTitle: "Real-Time Stock & Warehouse Tracking",
    heroSubtitle:
      "Monitor SKU levels, receive low-stock alerts and keep incoming and outgoing inventory accurate across branches.",
    heroCta: "Add New Stock",
    heroSecondaryCta: "Export Report",
    layoutVariant: "dashboard",
    bannerText: "Total SKUs: 1,248 · In Stock: 1,196 · Low Stock Alerts: 14 · Warehouses: 3",
    cards: [
      { title: "SKU-1042 · Laser Printer", meta: "Qty: 48 units · Warehouse A", tag: "In Stock" },
      { title: "SKU-2088 · Router Dual-Band", meta: "Qty: 6 units · Warehouse B", tag: "Low Stock" },
      { title: "SKU-3115 · Office Monitor 24\"", meta: "Qty: 32 units · Main Store", tag: "In Stock" },
    ],
    secondaryBlockTitle: "Recent Stock Movement Logs",
    secondaryItems: [
      { label: "Stock-In Batch #409", value: "+120 Units Received · Main Store", status: "Verified" },
      { label: "Dispatch Order #882", value: "-18 Units Issued · Branch B", status: "Logged" },
      { label: "Reorder Alert", value: "SKU-2088 below minimum threshold", status: "Alert" },
    ],
    footerContact: "Web-Based Inventory Workspace · Role-Based Staff Access",
  },
  "invoice-billing-systems": {
    brand: "BillCraft Suite",
    domain: "app.billcraft-suite.com",
    navItems: ["Overview", "Invoices", "Clients", "Payments", "Reports"],
    heroBadge: "Billing & Invoicing Portal",
    heroTitle: "Create Invoices & Track Client Payments",
    heroSubtitle:
      "Generate branded digital invoices with automated totals, monitor paid and pending balances and download receipts.",
    heroCta: "New Invoice",
    heroSecondaryCta: "Client Directory",
    layoutVariant: "dashboard",
    bannerText: "Invoices This Month: 42 · Paid: 35 · Pending: 7 · Auto-Calculated Tax & Totals",
    cards: [
      { title: "INV-2026-041 · Apex Logistics", meta: "₦450,000 · Due 15 Nov", tag: "Paid" },
      { title: "INV-2026-042 · Horizon Retail", meta: "₦280,000 · Due 22 Nov", tag: "Pending" },
      { title: "INV-2026-043 · Meridian Tech", meta: "₦620,000 · Due 28 Nov", tag: "Sent" },
    ],
    secondaryBlockTitle: "Invoice Line Item Preview",
    secondaryItems: [
      { label: "Branded PDF Output", value: "Company Logo, Terms & Bank Details", status: "Ready" },
      { label: "Automatic Subtotals", value: "Quantity × Rate + Tax Calculation" },
      { label: "Payment Records", value: "Receipts & Client Balance History" },
    ],
    footerContact: "Organized Financial Records · Printable & Shareable Invoices",
  },
  "blog-news-websites": {
    brand: "MetroPulse Daily",
    domain: "metropulsedaily.com",
    navItems: ["Latest", "Business", "Technology", "Lifestyle", "Guides"],
    heroBadge: "Featured Editorial",
    heroTitle: "How Modern Digital Brands Build Trust Online",
    heroSubtitle:
      "Clean publishing layouts, organized categories and mobile-optimized reading pages for journalists and bloggers.",
    heroCta: "Read Full Story",
    heroSecondaryCta: "Browse Categories",
    layoutVariant: "editorial",
    bannerText: "Trending Topics: Technology · Business Growth · Startup Guides · Local News",
    cards: [
      { title: "5 Essentials of a Fast Website", meta: "Technology · 4 min read", tag: "Guide" },
      { title: "Small Business Digital Trends", meta: "Business · 6 min read", tag: "Feature" },
      { title: "Designing for Mobile Readers", meta: "Design · 3 min read", tag: "Insight" },
    ],
    secondaryBlockTitle: "Publishing & Reader Experience",
    secondaryItems: [
      { label: "Category Archives", value: "Topic Filters & Instant Article Search" },
      { label: "Author Profiles", value: "Byline, Publish Date & Reading Time", status: "SEO Ready" },
      { label: "Reader Engagement", value: "Newsletter Signup & Social Sharing" },
    ],
    footerContact: "editorial@metropulsedaily.com · Daily News & Insights",
  },
};

export function WebsitePreview({ service, size }: WebsitePreviewProps) {
  const cfg = PREVIEW_CONFIGS[service.slug] ?? PREVIEW_CONFIGS["business-websites"];

  if (size === "card") {
    return <CardDevicePreview service={service} cfg={cfg} />;
  }

  return <DetailShowcasePreview service={service} cfg={cfg} />;
}

/* ============================================================================
   COMPACT CARD DEVICE MOCKUP (Laptop or Desktop Monitor inside ServiceCard)
   Optimized for crisp 2-column mobile presentation AND rich desktop detail
   ============================================================================ */
function CardDevicePreview({
  service,
  cfg,
}: {
  service: WebsiteService;
  cfg: PreviewConfig;
}) {
  const isDesktop = service.deviceType === "desktop";

  return (
    <div className="w-full flex flex-col items-center">
      {/* Device Screen Bezel */}
      <div
        className={`w-full bg-[#102A56] p-[3.5px] sm:p-[6px] shadow-[0_8px_18px_rgba(16,42,86,0.16)] ${
          isDesktop
            ? "rounded-[8px] sm:rounded-[10px]"
            : "rounded-t-[8px] sm:rounded-t-[10px] rounded-b-[3px] sm:rounded-b-[4px]"
        }`}
      >
        {/* Top webcam dot */}
        <div className="flex items-center justify-center pb-[2px] sm:pb-[3px]">
          <span className="w-1 h-1 rounded-full bg-white/30" />
        </div>

        {/* Inner Browser Viewport (Strict 16/10 Aspect Ratio — Zero Distortion) */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[4px] sm:rounded-[5px] bg-white border border-[#DCE8F3]/60 flex flex-col text-left select-none">
          {/* Mini Website Header */}
          <div className="flex items-center justify-between px-1.5 sm:px-2 py-0.5 sm:py-1 bg-white border-b border-[#DCE8F3] shrink-0">
            <span className="text-[6px] sm:text-[7px] font-extrabold text-[#102A56] truncate max-w-[68%] sm:max-w-[45%]">
              {cfg.brand}
            </span>
            <div className="flex items-center gap-1.5">
              {cfg.navItems.slice(0, 3).map((item) => (
                <span
                  key={item}
                  className="text-[5.5px] font-semibold text-[#536477] hidden sm:inline"
                >
                  {item}
                </span>
              ))}
              <span className="px-1 sm:px-1.5 py-[1px] sm:py-[1.5px] rounded-full bg-[#0866D9] text-white text-[4.5px] sm:text-[5px] font-bold">
                Start
              </span>
            </div>
          </div>

          {/* Mobile (< sm): Crisp Photographic Preview maximizing clarity inside 2-column cards */}
          <div className="sm:hidden relative flex-1 overflow-hidden">
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              sizes="46vw"
              className={`object-cover ${
                service.slug === "personal-portfolio-websites"
                  ? "object-[50%_20%]"
                  : "object-center"
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#102A56]/85 via-[#102A56]/25 to-transparent" />
            <div className="absolute bottom-1.5 left-1.5 right-1.5">
              <p className="text-[7px] min-[375px]:text-[8px] font-extrabold text-white leading-[1.15] line-clamp-2 drop-shadow-xs">
                {cfg.heroTitle}
              </p>
            </div>
          </div>

          {/* Tablet & Desktop (sm+): Full Detailed Mini Website Interface */}
          <div className="hidden sm:flex sm:flex-col flex-1 min-h-0 overflow-hidden">
            {cfg.layoutVariant === "hero-overlay" ? (
              <div className="relative flex-1 flex flex-col justify-between overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 45vw, 24vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#102A56]/88 via-[#102A56]/55 to-transparent" />
                <div className="relative z-10 p-2.5 flex flex-col justify-center h-full max-w-[68%]">
                  <span className="inline-block w-fit px-1.5 py-0.5 rounded bg-[#0866D9] text-white text-[5px] font-bold uppercase tracking-wider mb-1">
                    {cfg.heroBadge}
                  </span>
                  <p className="text-[10.5px] font-extrabold text-white leading-[1.15]">
                    {cfg.heroTitle}
                  </p>
                  <span className="mt-1.5 inline-block w-fit rounded-full bg-white text-[#102A56] text-[5.5px] font-extrabold px-2 py-0.5">
                    {cfg.heroCta}
                  </span>
                </div>
                <div className="relative z-10 bg-white/95 backdrop-blur-xs px-2 py-1 grid grid-cols-3 gap-1 border-t border-[#DCE8F3]">
                  {cfg.cards.map((c) => (
                    <div key={c.title} className="truncate">
                      <p className="text-[5.5px] font-bold text-[#102A56] truncate">
                        {c.title}
                      </p>
                      <p className="text-[5px] text-[#0866D9] font-semibold truncate">
                        {c.tag ?? c.meta}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : cfg.layoutVariant === "dashboard" ? (
              <div className="flex-1 bg-[#FAFBF8] p-2 flex flex-col gap-1.5 overflow-hidden">
                <div className="grid grid-cols-3 gap-1.5">
                  {cfg.cards.map((c, i) => (
                    <div
                      key={c.title}
                      className={`rounded p-1.5 border ${
                        i === 0
                          ? "bg-[#102A56] text-white border-[#102A56]"
                          : "bg-white text-[#102A56] border-[#DCE8F3]"
                      }`}
                    >
                      <p className="text-[5px] font-semibold opacity-80 truncate">
                        {c.tag}
                      </p>
                      <p className="text-[6.5px] font-extrabold truncate mt-0.5">
                        {c.meta.split("·")[0]}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex-1 grid grid-cols-12 gap-1.5 min-h-0">
                  <div className="col-span-5 relative rounded overflow-hidden border border-[#DCE8F3]">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 22vw, 15vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="col-span-7 bg-white rounded border border-[#DCE8F3] p-1.5 flex flex-col justify-between">
                    <p className="text-[6px] font-extrabold text-[#102A56] truncate">
                      {cfg.heroTitle}
                    </p>
                    <div className="space-y-1">
                      {cfg.cards.map((row) => (
                        <div
                          key={row.title}
                          className="flex items-center justify-between gap-1 bg-[#E4F3FF]/60 rounded px-1 py-0.5"
                        >
                          <span className="text-[5px] font-bold text-[#102A56] truncate">
                            {row.title.split("·")[0]}
                          </span>
                          <span className="text-[4.5px] font-bold text-[#0866D9] shrink-0">
                            {row.tag}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex-1 bg-[#FAFBF8] flex flex-col overflow-hidden">
                <div className="flex-1 grid grid-cols-12 gap-1.5 p-2 items-center min-h-0">
                  <div className="col-span-6 flex flex-col justify-center gap-1 pr-0.5">
                    <span className="text-[5px] font-bold uppercase tracking-wider text-[#0866D9] truncate">
                      {cfg.heroBadge}
                    </span>
                    <p className="text-[9.5px] font-extrabold text-[#102A56] leading-[1.15]">
                      {cfg.heroTitle}
                    </p>
                    <span className="mt-0.5 inline-block w-fit rounded-full bg-[#102A56] text-white text-[5.5px] font-bold px-2 py-0.5">
                      {cfg.heroCta}
                    </span>
                  </div>
                  <div className="col-span-6 relative h-full min-h-[62px] rounded-[5px] overflow-hidden border border-[#DCE8F3]">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 22vw, 15vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="bg-white border-t border-[#DCE8F3] px-2 py-1 grid grid-cols-3 gap-1 shrink-0">
                  {cfg.cards.map((c) => (
                    <div
                      key={c.title}
                      className="rounded bg-[#E4F3FF]/55 px-1 py-0.5 truncate"
                    >
                      <p className="text-[5px] font-bold text-[#102A56] truncate">
                        {c.title}
                      </p>
                      <p className="text-[4.5px] font-semibold text-[#0866D9] truncate">
                        {c.meta}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Realistic Laptop Base OR Desktop Monitor Stand */}
      {isDesktop ? (
        <div className="flex flex-col items-center">
          <div className="w-6 sm:w-8 h-2 sm:h-3 bg-gradient-to-b from-[#536477] to-[#DCE8F3]" />
          <div className="w-14 sm:w-20 h-1 sm:h-1.5 rounded-full bg-[#102A56]/25" />
        </div>
      ) : (
        <div className="w-[105%] h-[5px] sm:h-[7px] rounded-b-[6px] sm:rounded-b-[8px] bg-gradient-to-b from-[#DCE8F3] to-[#536477]/60 shadow-xs flex items-center justify-center">
          <span className="w-6 sm:w-8 h-[1.5px] sm:h-[2px] rounded-full bg-[#102A56]/30" />
        </div>
      )}
    </div>
  );
}

/* ============================================================================
   FULL-SCALE DETAIL PAGE SHOWCASE (Laptop/Browser Frame + Mobile Preview)
   ============================================================================ */
function DetailShowcasePreview({
  service,
  cfg,
}: {
  service: WebsiteService;
  cfg: PreviewConfig;
}) {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-end">
        {/* Large Laptop / Browser Showcase */}
        <div className="xl:col-span-9 flex flex-col items-center">
          <div className="w-full rounded-[16px] sm:rounded-[20px] bg-white border border-[#DCE8F3] shadow-[0_14px_38px_rgba(16,42,86,0.12)] overflow-hidden">
            {/* Browser Top Chrome */}
            <div className="bg-[#102A56] px-3 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between gap-2.5">
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white/35" />
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white/35" />
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#0866D9]" />
              </div>
              <div className="flex-1 max-w-md mx-auto rounded-full bg-white/12 px-3 py-0.5 sm:py-1 text-[10px] sm:text-[11px] font-medium text-[#E4F3FF] text-center truncate">
                https://{cfg.domain}
              </div>
              <span className="hidden sm:inline-block text-[10px] font-bold uppercase tracking-wider text-[#E4F3FF]/80 shrink-0">
                Live Preview Layout
              </span>
            </div>

            {/* Demo Website Navigation Bar */}
            <div className="bg-white border-b border-[#DCE8F3] px-3.5 sm:px-5 py-2.5 sm:py-3 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <span className="w-6 h-6 rounded-md bg-[#0866D9] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  {cfg.brand.charAt(0)}
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-[#102A56] truncate">
                  {cfg.brand}
                </span>
              </div>

              <div className="hidden md:flex items-center gap-4 text-xs font-semibold text-[#536477]">
                {cfg.navItems.map((nav, i) => (
                  <span
                    key={nav}
                    className={i === 0 ? "text-[#0866D9] font-bold" : ""}
                  >
                    {nav}
                  </span>
                ))}
              </div>

              <span className="rounded-full bg-[#102A56] text-white text-[10px] sm:text-[11px] font-bold px-3 sm:px-3.5 py-1.5 shrink-0">
                {cfg.heroCta}
              </span>
            </div>

            {/* Demo Website Hero Area (Preserving Exact Original Service Image & Aspect Ratio) */}
            <div className="relative bg-[#FAFBF8]">
              {cfg.layoutVariant === "hero-overlay" ? (
                <div className="relative aspect-[16/10] sm:aspect-auto sm:min-h-[290px] flex items-end sm:items-center overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    priority
                    sizes="(max-width: 1280px) 100vw, 68vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-[#102A56]/92 via-[#102A56]/65 to-[#102A56]/20" />
                  <div className="relative z-10 p-4 sm:p-8 max-w-lg space-y-2 sm:space-y-3">
                    <span className="inline-flex items-center rounded-full bg-[#0866D9] text-white text-[10px] sm:text-[11px] font-bold px-2.5 sm:px-3 py-0.5 sm:py-1">
                      {cfg.heroBadge}
                    </span>
                    <h3 className="text-lg sm:text-3xl font-extrabold text-white leading-tight">
                      {cfg.heroTitle}
                    </h3>
                    <p className="hidden sm:block text-sm text-[#E4F3FF] leading-relaxed">
                      {cfg.heroSubtitle}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-0.5 sm:pt-1">
                      <span className="rounded-full bg-white text-[#102A56] text-[10.5px] sm:text-xs font-extrabold px-3.5 sm:px-4 py-1.5 sm:py-2">
                        {cfg.heroCta}
                      </span>
                      {cfg.heroSecondaryCta && (
                        <span className="rounded-full bg-white/15 border border-white/40 text-white text-[10.5px] sm:text-xs font-bold px-3.5 sm:px-4 py-1.5 sm:py-2">
                          {cfg.heroSecondaryCta}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5 p-4 sm:p-7 items-center bg-gradient-to-br from-[#FAFBF8] to-[#E4F3FF]/50">
                  {/* Show crisp full-aspect image first on mobile for immediate visual impact */}
                  <div className="md:col-span-6 md:order-2">
                    <div className="relative aspect-[16/10] w-full rounded-xl sm:rounded-2xl overflow-hidden border-2 border-white shadow-md">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 md:order-1 space-y-2.5 sm:space-y-3">
                    <span className="inline-flex items-center rounded-full bg-[#E4F3FF] border border-[#DCE8F3] text-[#0866D9] text-[10.5px] sm:text-[11px] font-extrabold px-3 py-1">
                      {cfg.heroBadge}
                    </span>
                    <h3 className="text-xl sm:text-[26px] font-extrabold text-[#102A56] leading-tight">
                      {cfg.heroTitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#536477] leading-relaxed">
                      {cfg.heroSubtitle}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-0.5 sm:pt-1">
                      <span className="rounded-full bg-[#102A56] text-white text-[11px] sm:text-xs font-bold px-3.5 sm:px-4 py-1.5 sm:py-2">
                        {cfg.heroCta}
                      </span>
                      {cfg.heroSecondaryCta && (
                        <span className="rounded-full bg-white border border-[#0866D9]/40 text-[#102A56] text-[11px] sm:text-xs font-bold px-3.5 sm:px-4 py-1.5 sm:py-2">
                          {cfg.heroSecondaryCta}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Highlight / Admissions / Filter Banner */}
              {cfg.bannerText && (
                <div className="bg-[#E4F3FF] border-y border-[#DCE8F3] px-3.5 sm:px-5 py-2 sm:py-2.5 flex items-center justify-between gap-3">
                  <p className="text-[11px] sm:text-xs font-bold text-[#102A56] leading-snug">
                    {cfg.bannerText}
                  </p>
                  <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-extrabold text-[#0866D9] shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Active Module</span>
                  </span>
                </div>
              )}

              {/* Demo Featured Content Cards Grid */}
              <div className="p-3.5 sm:p-6 bg-white space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3.5">
                  {cfg.cards.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-xl bg-[#FAFBF8] border border-[#DCE8F3] p-3 sm:p-3.5 space-y-1"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-flex items-center rounded-full bg-[#E4F3FF] text-[#0866D9] text-[10px] font-extrabold px-2 py-0.5">
                          {item.tag ?? "Featured"}
                        </span>
                        <DetailMiniIcon slug={service.slug} />
                      </div>
                      <p className="text-xs sm:text-[13px] font-extrabold text-[#102A56]">
                        {item.title}
                      </p>
                      <p className="text-[11px] sm:text-[11.5px] font-medium text-[#536477]">
                        {item.meta}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Secondary Section (News/Gallery/Schedule/Logs/Checkout) */}
                <div className="rounded-xl bg-[#FAFBF8] border border-[#DCE8F3] p-3.5 sm:p-4">
                  <div className="flex items-center justify-between gap-2 mb-2.5 sm:mb-3">
                    <h4 className="text-xs sm:text-sm font-extrabold text-[#102A56]">
                      {cfg.secondaryBlockTitle}
                    </h4>
                    <span className="hidden sm:inline text-[10.5px] font-bold text-[#0866D9]">
                      {cfg.domain}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                    {cfg.secondaryItems.map((entry) => (
                      <div
                        key={entry.label}
                        className="rounded-lg bg-white border border-[#DCE8F3] p-2.5 sm:p-3"
                      >
                        <div className="flex items-center justify-between gap-1">
                          <p className="text-[11px] font-extrabold text-[#0866D9]">
                            {entry.label}
                          </p>
                          {entry.status && (
                            <span className="rounded bg-[#E4F3FF] px-1.5 py-0.5 text-[9.5px] font-bold text-[#102A56]">
                              {entry.status}
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-[11px] sm:text-[11.5px] text-[#26364A] leading-snug">
                          {entry.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Demo Footer Contact Bar */}
                <div className="rounded-xl bg-[#102A56] text-white px-3.5 sm:px-4 py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px]">
                  <span className="font-bold">{cfg.brand}</span>
                  <span className="text-[#E4F3FF] truncate">
                    {cfg.footerContact}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Subtle Laptop Base Under Browser Showcase on Mobile & Tablet */}
          <div className="w-[96%] h-2.5 rounded-b-xl bg-gradient-to-b from-[#DCE8F3] to-[#536477]/45 flex items-center justify-center shadow-xs">
            <span className="w-16 h-[3px] rounded-full bg-[#102A56]/30" />
          </div>
        </div>

        {/* Companion Mobile Responsive Phone Preview (Wide Desktop) */}
        <div className="hidden xl:flex xl:col-span-3 justify-center">
          <div className="w-[248px] rounded-[30px] bg-[#102A56] p-2.5 shadow-[0_18px_40px_rgba(16,42,86,0.18)] border border-[#DCE8F3]">
            <div className="w-20 h-3.5 mx-auto mb-2 rounded-full bg-white/15" />

            <div className="rounded-[22px] bg-white overflow-hidden border border-[#DCE8F3]">
              <div className="px-3 py-2 border-b border-[#DCE8F3] flex items-center justify-between">
                <span className="text-[10px] font-extrabold text-[#102A56] truncate">
                  {cfg.brand}
                </span>
                <span className="w-4 h-3 flex flex-col justify-between">
                  <span className="h-[1.5px] w-full bg-[#102A56] rounded" />
                  <span className="h-[1.5px] w-full bg-[#0866D9] rounded" />
                  <span className="h-[1.5px] w-full bg-[#102A56] rounded" />
                </span>
              </div>

              <div className="relative h-28 w-full">
                <Image
                  src={service.image}
                  alt={`${service.title} mobile view`}
                  fill
                  sizes="250px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102A56]/80 to-transparent" />
                <div className="absolute bottom-2 left-2.5 right-2.5">
                  <span className="text-[8.5px] font-bold text-[#E4F3FF] uppercase">
                    {cfg.heroBadge}
                  </span>
                  <p className="text-xs font-extrabold text-white leading-tight">
                    {cfg.heroTitle}
                  </p>
                </div>
              </div>

              <div className="p-3 space-y-2.5 bg-[#FAFBF8]">
                <span className="block w-full text-center rounded-full bg-[#102A56] text-white text-[10px] font-bold py-1.5">
                  {cfg.heroCta}
                </span>

                <div className="space-y-1.5">
                  {cfg.cards.slice(0, 2).map((c) => (
                    <div
                      key={c.title}
                      className="rounded-lg bg-white border border-[#DCE8F3] p-2"
                    >
                      <p className="text-[10px] font-extrabold text-[#102A56]">
                        {c.title}
                      </p>
                      <p className="text-[9px] font-semibold text-[#0866D9]">
                        {c.meta}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="rounded-lg bg-[#E4F3FF] px-2.5 py-2 text-center">
                  <p className="text-[9px] font-bold text-[#102A56]">
                    Mobile-First Responsive Layout
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailMiniIcon({ slug }: { slug: string }) {
  const cls = "w-3.5 h-3.5 text-[#0866D9] shrink-0";
  switch (slug) {
    case "ecommerce-websites":
      return <ShoppingCart className={cls} aria-hidden="true" />;
    case "school-websites":
      return <BookOpen className={cls} aria-hidden="true" />;
    case "real-estate-websites":
    case "hotel-websites":
      return <MapPin className={cls} aria-hidden="true" />;
    case "online-learning-platforms":
      return <Play className={cls} aria-hidden="true" />;
    case "event-websites":
    case "appointment-booking-websites":
      return <Calendar className={cls} aria-hidden="true" />;
    case "inventory-management-systems":
      return <Package className={cls} aria-hidden="true" />;
    case "invoice-billing-systems":
      return <FileText className={cls} aria-hidden="true" />;
    case "restaurant-websites":
      return <Clock className={cls} aria-hidden="true" />;
    case "blog-news-websites":
      return <Search className={cls} aria-hidden="true" />;
    case "personal-portfolio-websites":
      return <Star className={cls} aria-hidden="true" />;
    case "business-websites":
      return <Users className={cls} aria-hidden="true" />;
    default:
      return <Phone className={cls} aria-hidden="true" />;
  }
}
