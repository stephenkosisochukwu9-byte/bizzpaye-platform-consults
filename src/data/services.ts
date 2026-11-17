export type ServiceIconKey =
  | "user"
  | "building"
  | "shopping-cart"
  | "graduation-cap"
  | "utensils"
  | "home"
  | "bed"
  | "monitor-play"
  | "layout"
  | "calendar-days"
  | "calendar-check"
  | "boxes"
  | "file-spreadsheet"
  | "newspaper";

export interface WebsiteService {
  slug: string;
  title: string;
  singularLabel: string;
  ctaLabel: string;
  cardDescription: string;
  detailedExplanation: string;
  features: string[];
  idealFor: string[];
  benefits: string[];
  icon: ServiceIconKey;
  image: string;
  imageAlt: string;
  deviceType: "laptop" | "desktop";
  featured: boolean;
  category: string;
  seoTitle: string;
  seoDescription: string;
}

export const SERVICES: WebsiteService[] = [
  {
    slug: "personal-portfolio-websites",
    title: "Personal Portfolio Websites",
    singularLabel: "a Personal Portfolio Website",
    ctaLabel: "Get a Personal Portfolio Website",
    cardDescription: "Showcase your skills, projects and professional profile online.",
    detailedExplanation:
      "A personal portfolio website allows individuals to present their professional identity, qualifications, achievements, expertise and completed projects online. Designed with clean layouts and fast navigation, it turns your experience into a persuasive digital showcase that impresses recruiters, clients and collaborators.",
    features: [
      "Personal introduction",
      "About Me",
      "Skills and expertise",
      "Project portfolio",
      "CV and resume",
      "Contact form",
      "Social media links",
    ],
    idealFor: [
      "Students",
      "Freelancers",
      "Job seekers",
      "Developers",
      "Designers",
      "Professionals",
    ],
    benefits: [
      "Stand out immediately to recruiters and prospective clients with a dedicated web address.",
      "Present real work samples, case studies and credentials in one structured place.",
      "Share your professional profile effortlessly via WhatsApp, email or LinkedIn.",
      "Build lasting personal brand credibility across desktop and mobile devices.",
    ],
    icon: "user",
    image: "/images/service-portfolio.jpg",
    imageAlt: "Illustrative Personal Portfolio Website showcasing a professional developer profile",
    deviceType: "laptop",
    featured: true,
    category: "Personal & Brand",
    seoTitle: "Personal Portfolio Websites | BIZZPAYE PLATFORM CONSULTS",
    seoDescription:
      "Showcase your skills, projects and professional profile online with a custom Personal Portfolio Website built by BIZZPAYE PLATFORM CONSULTS.",
  },
  {
    slug: "business-websites",
    title: "Business Websites",
    singularLabel: "a Business Website",
    ctaLabel: "Get a Business Website",
    cardDescription: "Build a strong online presence for your company or brand.",
    detailedExplanation:
      "A business website introduces a company, explains its services, builds credibility and allows prospective customers to contact the business. We build corporate-grade websites tailored to communicate your value proposition clearly and convert visitors into genuine business enquiries.",
    features: [
      "Homepage",
      "About the company",
      "Services",
      "Product presentation",
      "Company information",
      "Contact details",
      "WhatsApp integration",
      "Enquiry forms",
    ],
    idealFor: [
      "Small businesses",
      "Startups",
      "Companies",
      "Consultants",
      "Entrepreneurs",
    ],
    benefits: [
      "Establish immediate trust and corporate authority when clients search for your company.",
      "Explain your services and offerings clearly around the clock, even outside office hours.",
      "Capture direct customer leads through WhatsApp integration and structured enquiry forms.",
      "Scale effortlessly as your company adds new services, branches or team members.",
    ],
    icon: "building",
    image: "/images/service-business.jpg",
    imageAlt: "Illustrative Business Website showing a modern corporate building and company services",
    deviceType: "desktop",
    featured: true,
    category: "Corporate & Business",
    seoTitle: "Business Websites | BIZZPAYE PLATFORM CONSULTS",
    seoDescription:
      "Build a strong corporate online presence for your company or brand with professional Business Websites from BIZZPAYE PLATFORM CONSULTS.",
  },
  {
    slug: "ecommerce-websites",
    title: "E-commerce Websites",
    singularLabel: "an E-commerce Website",
    ctaLabel: "Get an E-commerce Website",
    cardDescription: "Sell your products online with a secure and easy-to-use online store.",
    detailedExplanation:
      "An e-commerce website allows businesses to display products, receive orders and sell directly to customers online. Built for speed and smooth mobile shopping, our online stores simplify browsing, cart management, checkout and order tracking for both shoppers and store owners.",
    features: [
      "Product catalogue",
      "Product categories",
      "Shopping cart",
      "Customer accounts",
      "Checkout",
      "Payment gateway integration",
      "Order management",
      "Admin dashboard",
    ],
    idealFor: [
      "Fashion stores",
      "Electronics vendors",
      "Supermarkets",
      "Online retailers",
    ],
    benefits: [
      "Sell products 24/7 beyond the physical limits of a walk-in shop.",
      "Give shoppers an intuitive category browsing, search and checkout experience on mobile.",
      "Track orders, update product prices and manage stock from a clean admin dashboard.",
      "Accept digital payments securely and streamline order fulfillment.",
    ],
    icon: "shopping-cart",
    image: "/images/service-ecommerce.jpg",
    imageAlt: "Illustrative E-commerce Website displaying product categories, prices and shopping cart",
    deviceType: "desktop",
    featured: true,
    category: "Online Commerce",
    seoTitle: "E-commerce Websites | BIZZPAYE PLATFORM CONSULTS",
    seoDescription:
      "Sell your products online with a secure, mobile-friendly E-commerce Website developed by BIZZPAYE PLATFORM CONSULTS.",
  },
  {
    slug: "school-websites",
    title: "School Websites",
    singularLabel: "a School Website",
    ctaLabel: "Get a School Website",
    cardDescription: "Manage admissions, showcase programmes and share school information online.",
    detailedExplanation:
      "A school website provides a central online platform for parents, students and visitors to access information about an educational institution. From admissions announcements and academic programmes to school news and campus galleries, everything is organized clearly for modern families.",
    features: [
      "School profile",
      "Admission information",
      "Academic programmes",
      "Announcements",
      "School gallery",
      "Contact information",
      "Admission enquiries",
    ],
    idealFor: [
      "Nursery, primary and secondary schools",
      "Colleges",
      "Training institutions",
    ],
    benefits: [
      "Give prospective parents clear, trustworthy information about your curriculum and values.",
      "Simplify admission enquiries with dedicated banners and direct contact options.",
      "Keep students and families informed with organized school news and announcements.",
      "Showcase your learning environment, classrooms and campus facilities professionally.",
    ],
    icon: "graduation-cap",
    image: "/images/service-school.jpg",
    imageAlt: "Illustrative School Website featuring students, admissions banner and academic programmes",
    deviceType: "laptop",
    featured: true,
    category: "Education",
    seoTitle: "School Websites | BIZZPAYE PLATFORM CONSULTS",
    seoDescription:
      "Manage admissions, showcase academic programmes and share school information online with custom School Websites by BIZZPAYE PLATFORM CONSULTS.",
  },
  {
    slug: "restaurant-websites",
    title: "Restaurant Websites",
    singularLabel: "a Restaurant Website",
    ctaLabel: "Get a Restaurant Website",
    cardDescription: "Display your menu, take orders and attract more customers.",
    detailedExplanation:
      "A restaurant website helps food businesses showcase their menu, prices, location and ordering options. High-impact dish presentation paired with instant WhatsApp ordering and table reservation enquiries makes it effortless for hungry customers to choose your kitchen.",
    features: [
      "Digital food menu",
      "Food photographs",
      "Prices",
      "WhatsApp ordering",
      "Restaurant location",
      "Opening hours",
      "Reservation enquiries",
    ],
    idealFor: [
      "Restaurants",
      "Cafes",
      "Fast-food businesses",
      "Catering companies",
    ],
    benefits: [
      "Present appetizing food photography alongside clear, up-to-date menu pricing.",
      "Enable direct WhatsApp meal orders without losing commission to third-party apps.",
      "Help customers quickly find your address, opening hours and table booking options.",
      "Attract event catering and group dining enquiries with a polished brand presence.",
    ],
    icon: "utensils",
    image: "/images/service-restaurant.jpg",
    imageAlt: "Illustrative Restaurant Website featuring gourmet dishes, digital menu and ordering options",
    deviceType: "desktop",
    featured: true,
    category: "Food & Hospitality",
    seoTitle: "Restaurant Websites | BIZZPAYE PLATFORM CONSULTS",
    seoDescription:
      "Display your digital food menu, accept WhatsApp orders and attract more diners with Restaurant Websites by BIZZPAYE PLATFORM CONSULTS.",
  },
  {
    slug: "real-estate-websites",
    title: "Real Estate Websites",
    singularLabel: "a Real Estate Website",
    ctaLabel: "Get a Real Estate Website",
    cardDescription: "List properties, manage enquiries and grow your real estate business.",
    detailedExplanation:
      "A real estate website helps agents and property businesses showcase available properties and receive enquiries from prospective buyers and tenants. Clear sales and rental categories, crisp property photography and structured filtering help clients discover the right home or commercial space faster.",
    features: [
      "Property listings",
      "Property images",
      "Property descriptions",
      "Rental and sales categories",
      "Search and filtering",
      "Property enquiry forms",
      "WhatsApp contact",
    ],
    idealFor: [
      "Realtors",
      "Property agents",
      "Landlords",
      "Real estate companies",
    ],
    benefits: [
      "Showcase houses, apartments and land listings with structured specs and pricing.",
      "Let buyers and tenants filter by property type, category and budget effortlessly.",
      "Receive qualified inspection requests directly via enquiry forms and WhatsApp.",
      "Build agency authority that attracts both property owners and serious buyers.",
    ],
    icon: "home",
    image: "/images/service-realestate.jpg",
    imageAlt: "Illustrative Real Estate Website showcasing modern property listings for sale and rent",
    deviceType: "desktop",
    featured: true,
    category: "Property & Real Estate",
    seoTitle: "Real Estate Websites | BIZZPAYE PLATFORM CONSULTS",
    seoDescription:
      "List properties, organize rental and sales categories and receive buyer enquiries with Real Estate Websites from BIZZPAYE PLATFORM CONSULTS.",
  },
  {
    slug: "hotel-websites",
    title: "Hotel Websites",
    singularLabel: "a Hotel Website",
    ctaLabel: "Get a Hotel Website",
    cardDescription: "Showcase rooms, facilities and accept reservations online.",
    detailedExplanation:
      "A hotel website presents accommodation, facilities, available rooms, prices and reservation options. Designed to evoke comfort and trust, it makes it easy for travellers and corporate guests to explore suites, inspect amenities and send booking requests directly.",
    features: [
      "Room listings",
      "Room photographs",
      "Room descriptions",
      "Prices",
      "Hotel facilities",
      "Booking enquiry forms",
      "WhatsApp reservations",
      "Hotel location",
    ],
    idealFor: [
      "Hotels",
      "Resorts",
      "Guest houses",
      "Lodges",
    ],
    benefits: [
      "Encourage direct room reservations and reduce dependency on booking middlemen.",
      "Highlight suites, dining areas, conference halls and guest amenities beautifully.",
      "Provide clear nightly rates, check-in details and location guidance upfront.",
      "Convert mobile travellers quickly with instant WhatsApp reservation buttons.",
    ],
    icon: "bed",
    image: "/images/service-hotel.jpg",
    imageAlt: "Illustrative Hotel Website displaying luxury hotel rooms, rates and reservation buttons",
    deviceType: "laptop",
    featured: true,
    category: "Food & Hospitality",
    seoTitle: "Hotel Websites | BIZZPAYE PLATFORM CONSULTS",
    seoDescription:
      "Showcase hotel rooms, facilities and accept direct online reservations with Hotel Websites built by BIZZPAYE PLATFORM CONSULTS.",
  },
  {
    slug: "online-learning-platforms",
    title: "Online Learning Platforms",
    singularLabel: "an Online Learning Platform",
    ctaLabel: "Get an Online Learning Platform",
    cardDescription: "Create and sell online courses and manage your students easily.",
    detailedExplanation:
      "An online learning platform allows instructors and educational organisations to publish courses and provide learning materials to registered students. With structured modules, student progress views and clean dashboards, learners stay engaged across desktop and mobile screens.",
    features: [
      "Student registration",
      "Instructor dashboard",
      "Course listings",
      "Video lessons",
      "Learning materials",
      "Student progress tracking",
      "Quizzes and assessments",
    ],
    idealFor: [
      "Training centres",
      "Tutors",
      "Coaches",
      "Online educators",
    ],
    benefits: [
      "Deliver structured digital courses to students anywhere without classroom limits.",
      "Organize video lessons, downloadable study guides and assessments in one portal.",
      "Track student enrollment and learning progress from a central instructor workspace.",
      "Monetize your teaching expertise with a branded platform you fully own.",
    ],
    icon: "monitor-play",
    image: "/images/service-elearning.jpg",
    imageAlt: "Illustrative Online Learning Platform displaying courses, video lessons and progress tracking",
    deviceType: "laptop",
    featured: true,
    category: "Education & EdTech",
    seoTitle: "Online Learning Platforms | BIZZPAYE PLATFORM CONSULTS",
    seoDescription:
      "Create and sell online courses and manage students easily with custom Online Learning Platforms by BIZZPAYE PLATFORM CONSULTS.",
  },
  {
    slug: "landing-pages",
    title: "Landing Pages",
    singularLabel: "a Landing Page",
    ctaLabel: "Get a Landing Page",
    cardDescription: "Convert visitors into leads with focused, high-impact campaign pages.",
    detailedExplanation:
      "A landing page is a focused, single-purpose web page engineered to promote a specific product, service, offer or marketing campaign and guide visitors toward a clear call to action. Every headline, visual section and button is structured for clarity, speed and conversion.",
    features: [
      "Conversion-focused hero section",
      "Clear value proposition blocks",
      "Feature and benefit highlights",
      "Lead capture and enquiry forms",
      "WhatsApp quick-action CTA",
      "Fast mobile-first loading",
      "Campaign analytics readiness",
    ],
    idealFor: [
      "Product launches",
      "Digital marketers",
      "Startups",
      "Service promotions",
      "Ad campaigns",
    ],
    benefits: [
      "Focus visitor attention on one clear goal without distracting navigation clutter.",
      "Maximize return on social media ads and promotional campaigns.",
      "Launch new offers, services or pre-registrations quickly and professionally.",
      "Capture warm leads directly through WhatsApp or structured enquiry forms.",
    ],
    icon: "layout",
    image: "/images/service-landing.jpg",
    imageAlt: "Illustrative Landing Page showing a focused product launch hero and call-to-action",
    deviceType: "laptop",
    featured: false,
    category: "Marketing & Growth",
    seoTitle: "Landing Pages | BIZZPAYE PLATFORM CONSULTS",
    seoDescription:
      "Drive leads and conversions with high-impact, mobile-first Landing Pages designed and built by BIZZPAYE PLATFORM CONSULTS.",
  },
  {
    slug: "event-websites",
    title: "Event Websites",
    singularLabel: "an Event Website",
    ctaLabel: "Get an Event Website",
    cardDescription: "Promote conferences, workshops and events with schedules and registration.",
    detailedExplanation:
      "An event website provides an engaging digital hub for conferences, seminars, concerts, weddings and corporate programmes. Attendees can view dates, venues, keynote speakers, session schedules and register or request tickets seamlessly from any device.",
    features: [
      "Event overview and countdown details",
      "Speaker and guest profiles",
      "Programme schedule and agenda",
      "Ticket tiers and registration forms",
      "Venue map and directions",
      "Sponsor and partner showcase",
      "WhatsApp attendee support",
    ],
    idealFor: [
      "Conference organizers",
      "Corporate summits",
      "Workshop hosts",
      "Religious and community events",
      "Event planners",
    ],
    benefits: [
      "Give attendees a single reliable source for dates, speakers and schedule updates.",
      "Simplify attendee registration and ticket enquiries online.",
      "Present sponsors, partners and event highlights in a polished visual layout.",
      "Build excitement and credibility before, during and after your event.",
    ],
    icon: "calendar-days",
    image: "/images/service-event.jpg",
    imageAlt: "Illustrative Event Website displaying conference speakers, agenda and registration",
    deviceType: "desktop",
    featured: false,
    category: "Events & Community",
    seoTitle: "Event Websites | BIZZPAYE PLATFORM CONSULTS",
    seoDescription:
      "Promote conferences, workshops and special programmes with responsive Event Websites built by BIZZPAYE PLATFORM CONSULTS.",
  },
  {
    slug: "appointment-booking-websites",
    title: "Appointment Booking Websites",
    singularLabel: "an Appointment Booking Website",
    ctaLabel: "Get an Appointment Booking Website",
    cardDescription: "Let clients view services, choose time slots and book appointments online.",
    detailedExplanation:
      "An appointment booking website streamlines how service-based businesses schedule clients. Visitors can explore available services, select preferred dates and time slots, and submit booking details without endless back-and-forth phone calls.",
    features: [
      "Service menu and duration details",
      "Interactive date and time slot selection",
      "Specialist or staff profiles",
      "Client booking form",
      "Instant WhatsApp confirmation link",
      "Operating hours and location info",
      "Mobile-friendly scheduling flow",
    ],
    idealFor: [
      "Clinics and healthcare practices",
      "Salons and spas",
      "Consultants and law firms",
      "Fitness trainers",
      "Repair and service centres",
    ],
    benefits: [
      "Allow clients to schedule appointments at their convenience, day or night.",
      "Reduce missed calls, scheduling mix-ups and manual calendar administration.",
      "Collect essential client details upfront before each consultation.",
      "Deliver a modern, organized customer experience from the very first interaction.",
    ],
    icon: "calendar-check",
    image: "/images/service-appointment.jpg",
    imageAlt: "Illustrative Appointment Booking Website with service selector and time slot calendar",
    deviceType: "laptop",
    featured: false,
    category: "Scheduling & Services",
    seoTitle: "Appointment Booking Websites | BIZZPAYE PLATFORM CONSULTS",
    seoDescription:
      "Simplify client scheduling with custom Appointment Booking Websites developed by BIZZPAYE PLATFORM CONSULTS.",
  },
  {
    slug: "inventory-management-systems",
    title: "Inventory Management Systems",
    singularLabel: "an Inventory Management System",
    ctaLabel: "Get an Inventory Management System",
    cardDescription: "Track stock levels, monitor product movement and reduce inventory errors.",
    detailedExplanation:
      "An inventory management system is a custom web-based platform built to help businesses monitor product stock, track incoming and outgoing items, spot low-stock alerts and review inventory summaries from one clean, browser-accessible dashboard.",
    features: [
      "Product and SKU catalogue",
      "Real-time stock level tracking",
      "Low-stock status indicators",
      "Stock-in and stock-out logs",
      "Supplier and category organization",
      "Searchable inventory tables",
      "Role-based staff access",
    ],
    idealFor: [
      "Wholesalers and distributors",
      "Retail stores and pharmacies",
      "Warehouses",
      "Supermarkets",
      "Hardware and parts suppliers",
    ],
    benefits: [
      "Replace error-prone paper ledgers and scattered spreadsheets with one digital system.",
      "Spot low-stock products early to prevent costly stockouts and lost sales.",
      "Maintain clear visibility over product quantities, categories and movement history.",
      "Access your business inventory securely from office desktops or mobile tablets.",
    ],
    icon: "boxes",
    image: "/images/service-inventory.jpg",
    imageAlt: "Illustrative Inventory Management System dashboard with stock tracking and alerts",
    deviceType: "desktop",
    featured: false,
    category: "Business Systems",
    seoTitle: "Inventory Management Systems | BIZZPAYE PLATFORM CONSULTS",
    seoDescription:
      "Monitor stock levels, manage SKUs and streamline warehouse operations with web-based Inventory Management Systems by BIZZPAYE PLATFORM CONSULTS.",
  },
  {
    slug: "invoice-billing-systems",
    title: "Invoice & Billing Systems",
    singularLabel: "an Invoice & Billing System",
    ctaLabel: "Get an Invoice & Billing System",
    cardDescription: "Generate professional invoices, track client payments and organize billing.",
    detailedExplanation:
      "An invoice and billing system enables businesses to create branded client invoices, calculate line items and totals accurately, track paid and pending balances, and maintain organized digital billing records in one structured web application.",
    features: [
      "Branded invoice generator",
      "Client directory and billing profiles",
      "Itemized services and automatic totals",
      "Paid, pending and overdue tracking",
      "Printable and downloadable invoice view",
      "Revenue summary dashboard",
      "Receipt and payment record logs",
    ],
    idealFor: [
      "Agencies and freelancers",
      "SMEs and service companies",
      "Logistics and supply firms",
      "Accounting and consulting practices",
    ],
    benefits: [
      "Send clean, branded digital invoices that reinforce client confidence.",
      "Keep accurate visibility over received payments and outstanding client balances.",
      "Eliminate manual calculation mistakes with automated line-item subtotals.",
      "Retrieve past invoices and client billing history in seconds.",
    ],
    icon: "file-spreadsheet",
    image: "/images/service-invoice.jpg",
    imageAlt: "Illustrative Invoice and Billing System showing financial summaries and invoice list",
    deviceType: "desktop",
    featured: false,
    category: "Business Systems",
    seoTitle: "Invoice & Billing Systems | BIZZPAYE PLATFORM CONSULTS",
    seoDescription:
      "Create branded invoices, monitor payment statuses and organize client billing with Invoice & Billing Systems from BIZZPAYE PLATFORM CONSULTS.",
  },
  {
    slug: "blog-news-websites",
    title: "Blog & News Websites",
    singularLabel: "a Blog & News Website",
    ctaLabel: "Get a Blog & News Website",
    cardDescription: "Publish articles, news stories and insights in an engaging editorial layout.",
    detailedExplanation:
      "A blog and news website gives publishers, writers, media brands and companies a clean editorial platform to publish articles, organize stories by category, highlight featured posts and grow a loyal readership with fast, search-friendly pages.",
    features: [
      "Featured story hero layout",
      "Category and topic navigation",
      "Article reading pages with clean typography",
      "Author profiles and publish dates",
      "Search and archive browsing",
      "Newsletter signup and social sharing",
      "Easy content management workflow",
    ],
    idealFor: [
      "News publications and media brands",
      "Bloggers and journalists",
      "Corporate content hubs",
      "Community magazines",
      "Thought leaders",
    ],
    benefits: [
      "Publish timely stories and long-form articles in a crisp, distraction-free reading layout.",
      "Grow organic search traffic with SEO-structured article pages and category archives.",
      "Organize content clearly across news desks, guides and featured editorials.",
      "Deliver rapid loading on mobile networks for readers on the go.",
    ],
    icon: "newspaper",
    image: "/images/service-blog.jpg",
    imageAlt: "Illustrative Blog and News Website featuring editorial stories and category tabs",
    deviceType: "laptop",
    featured: false,
    category: "Media & Publishing",
    seoTitle: "Blog & News Websites | BIZZPAYE PLATFORM CONSULTS",
    seoDescription:
      "Publish articles, news updates and insights with fast, SEO-ready Blog & News Websites designed by BIZZPAYE PLATFORM CONSULTS.",
  },
];

export const FEATURED_SERVICES = SERVICES.filter((s) => s.featured);
export const ADDITIONAL_SERVICES = SERVICES.filter((s) => !s.featured);

export function getServiceBySlug(slug: string): WebsiteService | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

