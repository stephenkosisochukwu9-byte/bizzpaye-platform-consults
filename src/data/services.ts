import type { FeatureIconKey } from "@/components/FeatureIcon";

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

export interface ServiceFeatureCard {
  title: string;
  description: string;
  icon: FeatureIconKey;
}

export interface WebsiteService {
  slug: string;
  title: string;
  singularLabel: string;
  ctaLabel: string;
  cardDescription: string;
  detailedExplanation: string;
  features: string[];
  featureCards: ServiceFeatureCard[];
  idealFor: string[];
  benefits: string[];
  mobileHighlight: string;
  integrations: string[];
  securityUsability: string[];
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
    featureCards: [
      {
        title: "Personal Introduction & Bio",
        description: "A confident opening hero and About Me section that immediately communicates your role, strengths and career focus.",
        icon: "user-check",
      },
      {
        title: "Visual Project Showcase",
        description: "Structured project cards and case-study summaries that highlight completed work, outcomes and tools used.",
        icon: "layout-grid",
      },
      {
        title: "Skills & Expertise Matrix",
        description: "Organized technical, creative or consulting skill groups so employers and clients scan your capabilities quickly.",
        icon: "layers",
      },
      {
        title: "Downloadable CV & Resume",
        description: "One-tap PDF resume access alongside a clean timeline of education, certifications and work experience.",
        icon: "file-text",
      },
      {
        title: "Direct Enquiry & Contact Form",
        description: "Validated contact options allowing recruiters and prospective clients to reach you effortlessly.",
        icon: "mail",
      },
      {
        title: "Professional Profile Links",
        description: "Clean outbound links to LinkedIn, GitHub, Behance or WhatsApp for seamless follow-up conversations.",
        icon: "share-2",
      },
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
    mobileHighlight:
      "Recruiters and clients often open portfolio links directly from WhatsApp or LinkedIn on their phones. Every bio, project card and resume download button is optimized for fast thumb scrolling and crisp readability on mobile screens.",
    integrations: [
      "WhatsApp direct chat button",
      "Downloadable PDF CV / resume link",
      "LinkedIn, GitHub & professional social profiles",
      "Email contact & validated enquiry form",
    ],
    securityUsability: [
      "HTTPS / SSL-ready deployment configuration",
      "Clean, distraction-free reading hierarchy",
      "Fast-loading optimized imagery for mobile networks",
      "SEO-structured name and profession metadata",
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
    featureCards: [
      {
        title: "Executive Corporate Homepage",
        description: "A high-trust opening banner and structured overview that communicates what your company offers within seconds.",
        icon: "building",
      },
      {
        title: "Services & Solutions Pages",
        description: "Clear presentation of each service or product line so prospective clients understand how you solve their problems.",
        icon: "briefcase",
      },
      {
        title: "Company Profile & Mission",
        description: "Dedicated About Us storytelling highlighting your expertise, values, leadership and brand positioning.",
        icon: "globe",
      },
      {
        title: "WhatsApp Lead Integration",
        description: "Prominent WhatsApp buttons that connect interested visitors directly to your business desk in one tap.",
        icon: "message-circle",
      },
      {
        title: "Validated Enquiry Forms",
        description: "Structured consultation and quote request forms that capture customer details cleanly and reliably.",
        icon: "mail",
      },
      {
        title: "Location & Contact Details",
        description: "Clear office address, working hours, email links and phone numbers presented cleanly across every page.",
        icon: "map-pin",
      },
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
    mobileHighlight:
      "Decision-makers frequently look up companies on mobile before calling or requesting a quote. Your corporate hero, service cards, phone number and WhatsApp CTA stay crisp and accessible on every screen size.",
    integrations: [
      "Direct WhatsApp business enquiry buttons",
      "Business email & structured quote forms",
      "Google Maps office location link",
      "Search engine metadata & Open Graph previews",
    ],
    securityUsability: [
      "HTTPS secure transport readiness",
      "Client-side validated enquiry forms",
      "Intuitive sticky navigation for fast browsing",
      "Accessible typography and high-contrast buttons",
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
    featureCards: [
      {
        title: "Product Catalogue & Categories",
        description: "Organize items by category with crisp product imagery, pricing, descriptions and availability labels.",
        icon: "shopping-bag",
      },
      {
        title: "Smooth Shopping Cart",
        description: "Intuitive add-to-cart, quantity updates and live subtotal calculation designed for effortless mobile shopping.",
        icon: "layout-grid",
      },
      {
        title: "Streamlined Checkout Flow",
        description: "Clear delivery address capture and order summary screens that minimize checkout drop-offs.",
        icon: "credit-card",
      },
      {
        title: "Payment Gateway Readiness",
        description: "Structured checkout integration support for Paystack, Flutterwave, bank transfers or pay-on-delivery flows.",
        icon: "shield-check",
      },
      {
        title: "Customer Accounts & Orders",
        description: "Shoppers can track order status, revisit past purchases and save shipping information securely.",
        icon: "user-check",
      },
      {
        title: "Store Admin Dashboard",
        description: "Centralized product updates, price adjustments, category control and incoming order management.",
        icon: "bar-chart",
      },
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
    mobileHighlight:
      "Most online shoppers browse and place orders from smartphones. Product grids, category tabs, cart drawers and checkout buttons are sized for comfortable one-hand mobile shopping.",
    integrations: [
      "Online payment gateways (Paystack, Flutterwave, Stripe)",
      "WhatsApp order support & customer assistance",
      "Automated order summary notifications",
      "Product search & category filtering",
    ],
    securityUsability: [
      "Secure HTTPS checkout architecture",
      "Validated shipping and billing inputs",
      "Clear pricing, cart subtotals and order confirmation steps",
      "Optimized product thumbnails for fast catalogue loading",
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
    featureCards: [
      {
        title: "Admissions Banner & Guide",
        description: "Prominent enrollment announcements, entry requirements, term dates and direct admission enquiry buttons.",
        icon: "graduation-cap",
      },
      {
        title: "Academic Programmes",
        description: "Clear breakdown of Nursery, Primary, Secondary or College curricula, subjects and learning pathways.",
        icon: "book-open",
      },
      {
        title: "School News & Announcements",
        description: "Organized updates for term resumptions, academic calendars, competitions and parent notices.",
        icon: "calendar",
      },
      {
        title: "Campus & Activity Gallery",
        description: "Visual showcase of classrooms, laboratories, libraries, sports facilities and student life.",
        icon: "image",
      },
      {
        title: "School Profile & Leadership",
        description: "Welcome message, school vision, core values and accreditation overview that reassure prospective parents.",
        icon: "building",
      },
      {
        title: "Parent Enquiry & Contact Desk",
        description: "Direct WhatsApp admissions support, school phone lines, email contact and campus directions.",
        icon: "message-circle",
      },
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
    mobileHighlight:
      "Parents researching schools check admission details and term announcements primarily on mobile phones. Navigation, admission banners and contact links are structured for instant mobile clarity.",
    integrations: [
      "Direct WhatsApp admissions office link",
      "Online admission enquiry form",
      "Downloadable prospectus & term calendar links",
      "Campus location map and contact details",
    ],
    securityUsability: [
      "Clear parent-friendly navigation structure",
      "Validated enquiry inputs to prevent incomplete applications",
      "Fast mobile rendering on low-bandwidth connections",
      "Accessible headings and readable font sizing for all families",
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
    featureCards: [
      {
        title: "Digital Food & Drink Menu",
        description: "Categorized starters, mains, grills, platters and drinks with transparent pricing and appetizing descriptions.",
        icon: "utensils",
      },
      {
        title: "Appetizing Dish Showcase",
        description: "High-clarity food photography sections designed to highlight signature meals and chef specials.",
        icon: "image",
      },
      {
        title: "Instant WhatsApp Ordering",
        description: "One-tap ordering buttons that send meal requests directly to your kitchen or delivery desk on WhatsApp.",
        icon: "message-circle",
      },
      {
        title: "Table & Event Reservations",
        description: "Simple reservation enquiry sections for dine-in groups, celebrations and catering requests.",
        icon: "calendar",
      },
      {
        title: "Opening Hours & Availability",
        description: "Upfront daily opening times and delivery coverage details so diners always know when you are open.",
        icon: "clock",
      },
      {
        title: "Location & Directions",
        description: "Clear street address, landmarks and map links making it easy for diners to walk right in.",
        icon: "map-pin",
      },
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
    mobileHighlight:
      "Hungry diners search menus and place orders on their phones while on the move. Your digital menu, dish prices and WhatsApp Order button load rapidly with zero pinching or zooming required.",
    integrations: [
      "Direct WhatsApp meal ordering & catering requests",
      "Google Maps directions to your dining location",
      "Table reservation enquiry form",
      "QR code menu link compatibility for in-house tables",
    ],
    securityUsability: [
      "Readable menu typography with clear price alignment",
      "Fast-loading compressed food photography",
      "Simple one-tap ordering and phone links",
      "Consistent HTTPS security and reliable mobile layout",
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
    featureCards: [
      {
        title: "Structured Property Listings",
        description: "Detailed cards showing price, location, bedrooms, property type and status for houses, flats and land.",
        icon: "home",
      },
      {
        title: "Sales, Rent & Shortlet Filters",
        description: "Easy category separation and search filtering by budget, neighbourhood and listing type.",
        icon: "search",
      },
      {
        title: "High-Resolution Property Galleries",
        description: "Clean visual framing for exterior, living space and compound photographs without distortion.",
        icon: "image",
      },
      {
        title: "Inspection & Buyer Enquiries",
        description: "Dedicated enquiry forms allowing serious buyers and tenants to request viewings immediately.",
        icon: "mail",
      },
      {
        title: "Direct Agent WhatsApp Contact",
        description: "Listing-aware WhatsApp buttons connecting prospects directly to your sales agents.",
        icon: "message-circle",
      },
      {
        title: "Neighbourhood & Location Info",
        description: "Clear area highlights, proximity details and office contact information that build buyer confidence.",
        icon: "map-pin",
      },
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
    mobileHighlight:
      "Property hunters browse listings on mobile while comparing areas and prices. Clean listing cards, crisp prices and instant WhatsApp inspection buttons make mobile property discovery effortless.",
    integrations: [
      "WhatsApp direct property inspection links",
      "Property search & category filter controls",
      "Validated viewing request forms",
      "Neighbourhood map & agency contact links",
    ],
    securityUsability: [
      "Clear verified-listing presentation and transparent specs",
      "Fast responsive image loading across large galleries",
      "Validated buyer enquiry forms with clear prompts",
      "HTTPS-ready professional corporate architecture",
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
    featureCards: [
      {
        title: "Rooms & Suites Showcase",
        description: "Present Standard, Deluxe, Executive and VIP suites with crisp photos, guest capacity and nightly rates.",
        icon: "bed",
      },
      {
        title: "Facilities & Guest Amenities",
        description: "Highlight dining, Wi-Fi, swimming pool, conference halls, parking and 24/7 front-desk services clearly.",
        icon: "building",
      },
      {
        title: "Direct Booking Enquiries",
        description: "Capture check-in dates, room preference and guest counts directly without third-party booking commissions.",
        icon: "calendar",
      },
      {
        title: "Instant WhatsApp Reservations",
        description: "Enable travellers to confirm room availability with your reception desk in one tap.",
        icon: "message-circle",
      },
      {
        title: "Check-In & Stay Policies",
        description: "Transparent check-in/out times, breakfast inclusions and corporate stay details upfront.",
        icon: "clock",
      },
      {
        title: "Hotel Location & Directions",
        description: "Clear address, airport proximity and map access helping guests arrive smoothly.",
        icon: "map-pin",
      },
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
    mobileHighlight:
      "Travellers frequently compare rooms and reserve stays from smartphones at airports or on the road. Room galleries, nightly pricing and WhatsApp booking buttons are optimized for fast mobile booking.",
    integrations: [
      "Direct WhatsApp front-desk reservation links",
      "Room booking enquiry & corporate stay forms",
      "Google Maps directions & landmark guide",
      "Direct reception email & click-to-call support",
    ],
    securityUsability: [
      "Clear room rate visibility with zero confusing clutter",
      "HTTPS secure booking enquiry handling",
      "High-clarity interior photography preserving true room proportions",
      "Mobile-friendly date and room selection experience",
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
    featureCards: [
      {
        title: "Course Catalogue & Enrolment",
        description: "Organize courses by topic with syllabus previews, lesson counts, instructor bios and clear enrolment CTAs.",
        icon: "book-open",
      },
      {
        title: "Structured Video Lessons",
        description: "Clean module-by-module lesson layouts supporting video playback alongside reading notes and downloads.",
        icon: "play-circle",
      },
      {
        title: "Student Registration & Portal",
        description: "Dedicated learner accounts allowing registered students to resume lessons right where they stopped.",
        icon: "users",
      },
      {
        title: "Progress Tracking & Milestones",
        description: "Visual completion bars and lesson checklists that keep students motivated through every course module.",
        icon: "bar-chart",
      },
      {
        title: "Quizzes & Assessments",
        description: "Knowledge checks, module quizzes and completion certificates to validate learner outcomes.",
        icon: "award",
      },
      {
        title: "Instructor Management Console",
        description: "Organized tools for publishing lessons, updating study guides and overseeing enrolled learners.",
        icon: "layers",
      },
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
    mobileHighlight:
      "Students watch lessons and review study materials on phones during commutes and study breaks. Lesson lists, video players and progress bars adapt cleanly to portrait and landscape mobile viewing.",
    integrations: [
      "Course payment & student enrolment flows",
      "Video hosting & downloadable PDF study materials",
      "WhatsApp learner support & cohort announcements",
      "Student email onboarding & completion notices",
    ],
    securityUsability: [
      "Protected student and instructor portal structure",
      "Distraction-free lesson viewer for better focus",
      "Responsive layout built for phones, tablets and laptops",
      "Clear module progression and accessible navigation controls",
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
    featureCards: [
      {
        title: "High-Impact Offer Hero",
        description: "Sharp above-the-fold headline, subheadline and immediate primary action button tailored to your campaign.",
        icon: "target",
      },
      {
        title: "Focused Value Highlights",
        description: "Scannable benefit blocks that answer buyer questions quickly and remove hesitation.",
        icon: "zap",
      },
      {
        title: "Lead Capture Forms",
        description: "Short, friction-free enquiry and registration fields built to maximize mobile conversions.",
        icon: "mail",
      },
      {
        title: "Instant WhatsApp Conversion CTA",
        description: "Pre-filled campaign WhatsApp buttons so warm prospects start chatting with your sales team immediately.",
        icon: "message-circle",
      },
      {
        title: "Fast Ad-Click Performance",
        description: "Lightweight architecture engineered to load rapidly when users tap links from Instagram, Facebook or Google Ads.",
        icon: "smartphone",
      },
      {
        title: "Campaign Tracking Readiness",
        description: "Clean structure ready for Meta Pixel, Google Analytics and conversion tracking tags.",
        icon: "bar-chart",
      },
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
    mobileHighlight:
      "Over 80% of social media ad clicks happen on mobile devices. Every headline, visual block and CTA button is engineered for immediate thumb-reach conversion on 320px–430px screens.",
    integrations: [
      "Pre-filled WhatsApp campaign enquiry buttons",
      "Lead capture forms & email alerts",
      "Analytics & ad conversion tracking readiness",
      "Social share preview metadata (Open Graph)",
    ],
    securityUsability: [
      "Distraction-free single-goal layout hierarchy",
      "Validated lead capture inputs for clean data",
      "Ultra-fast asset optimization to cut ad bounce rates",
      "HTTPS secure delivery across all ad platforms",
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
    featureCards: [
      {
        title: "Event Overview & Key Dates",
        description: "Prominent date, time, venue and registration banner so attendees see essential details right away.",
        icon: "calendar",
      },
      {
        title: "Speaker & Guest Lineup",
        description: "Clean profile cards showcasing keynote speakers, panelists, hosts and session topics.",
        icon: "mic",
      },
      {
        title: "Session Schedule & Agenda",
        description: "Clear chronological timetable breaking down talks, workshops, breaks and networking sessions.",
        icon: "clock",
      },
      {
        title: "Ticket Tiers & Registration",
        description: "Structured Standard, VIP or Group pass breakdowns paired with straightforward registration CTAs.",
        icon: "ticket",
      },
      {
        title: "Venue & Travel Directions",
        description: "Hall details, street address and map links guiding local and travelling attendees smoothly.",
        icon: "map-pin",
      },
      {
        title: "Sponsors & Attendee Desk",
        description: "Dedicated partner recognition alongside WhatsApp support for ticket or sponsorship enquiries.",
        icon: "users",
      },
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
    mobileHighlight:
      "Attendees check schedules, speaker rooms and venue maps on their phones both before and on event day. Clean vertical timelines and quick registration buttons work effortlessly on mobile.",
    integrations: [
      "Attendee registration & ticket enquiry flows",
      "WhatsApp attendee & sponsorship support desk",
      "Venue Google Maps location link",
      "Shareable event link previews for social promotion",
    ],
    securityUsability: [
      "Clear ticket and schedule readability on every screen",
      "Validated attendee registration fields",
      "Fast page loads for guests on venue cellular data",
      "HTTPS-secured event registration pages",
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
    featureCards: [
      {
        title: "Service Menu & Durations",
        description: "List consultations, treatments or sessions clearly with expected duration and fee transparency.",
        icon: "briefcase",
      },
      {
        title: "Date & Time Slot Selection",
        description: "Organized scheduling flow letting clients pick available days and preferred appointment windows.",
        icon: "calendar",
      },
      {
        title: "Specialist & Staff Profiles",
        description: "Introduce doctors, consultants, stylists or advisers so clients book with full confidence.",
        icon: "user-check",
      },
      {
        title: "Structured Booking Form",
        description: "Collect client name, phone, service choice and notes upfront before the appointment starts.",
        icon: "check-circle",
      },
      {
        title: "Instant WhatsApp Confirmation",
        description: "Send booking details directly to your scheduling desk via WhatsApp for quick confirmation.",
        icon: "message-circle",
      },
      {
        title: "Hours & Office Directions",
        description: "Upfront business hours, contact info and location links to reduce late arrivals or confusion.",
        icon: "clock",
      },
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
    mobileHighlight:
      "Clients typically book clinic visits, salon sessions or consultations straight from their smartphones. Large tap-friendly time slots and clean booking steps keep scheduling fast and frustration-free.",
    integrations: [
      "WhatsApp appointment confirmation & rescheduling link",
      "Calendar & email booking notifications",
      "Google Maps office or clinic location link",
      "Service selection & intake enquiry forms",
    ],
    securityUsability: [
      "Validated phone, email and time-slot inputs",
      "Clear step-by-step booking confirmation flow",
      "HTTPS secure client intake handling",
      "Accessible contrast and touch-friendly buttons on phones",
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
    featureCards: [
      {
        title: "Product & SKU Directory",
        description: "Maintain organized item codes, categories, unit prices, warehouse locations and current quantities.",
        icon: "package",
      },
      {
        title: "Real-Time Stock Tracking",
        description: "See accurate stock balances across stores or warehouses immediately as items arrive or leave.",
        icon: "bar-chart",
      },
      {
        title: "Low-Stock Alert Indicators",
        description: "Visual threshold badges highlight items running low so you reorder before stockouts occur.",
        icon: "alert-triangle",
      },
      {
        title: "Stock-In & Stock-Out Logs",
        description: "Traceable movement history recording supplier deliveries, branch transfers and daily dispatches.",
        icon: "truck",
      },
      {
        title: "Instant Search & Filtering",
        description: "Find any SKU, category or supplier record in seconds without flipping through manual ledgers.",
        icon: "search",
      },
      {
        title: "Role-Based Staff Access",
        description: "Separate admin and storekeeper permissions to protect inventory integrity and accountability.",
        icon: "lock",
      },
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
    mobileHighlight:
      "Storekeepers and managers can check quantities, log stock receipts and review low-stock items directly from tablets or smartphones right inside the warehouse aisle.",
    integrations: [
      "CSV / spreadsheet inventory export readiness",
      "Multi-branch or warehouse stock views",
      "Supplier directory & reorder alerts",
      "WhatsApp management summary sharing",
    ],
    securityUsability: [
      "Role-based authentication architecture for staff accountability",
      "Clear status badges and clean data tables",
      "Input validation to prevent negative or erroneous stock entries",
      "HTTPS-encrypted browser access from desktop or tablet",
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
    featureCards: [
      {
        title: "Branded Invoice Builder",
        description: "Generate crisp invoices displaying your company logo, invoice numbers, issue dates and bank details.",
        icon: "receipt",
      },
      {
        title: "Automatic Line-Item Totals",
        description: "Calculate quantities, unit rates, subtotals, discounts and taxes automatically with zero math errors.",
        icon: "calculator",
      },
      {
        title: "Client Billing Directory",
        description: "Store repeat client contacts, company names and complete invoice history in one place.",
        icon: "users",
      },
      {
        title: "Payment Status Tracking",
        description: "Monitor Paid, Pending and Overdue invoices at a glance to keep business cash flow healthy.",
        icon: "bar-chart",
      },
      {
        title: "Printable & PDF Invoice Output",
        description: "Clean print and PDF-ready invoice layouts ready to email or send to clients on WhatsApp.",
        icon: "file-text",
      },
      {
        title: "Receipt & Record Archive",
        description: "Search past invoices and payment receipts quickly whenever clients or accountants need copies.",
        icon: "shield-check",
      },
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
    mobileHighlight:
      "Business owners can create an invoice, check whether a client has paid, or share a printable invoice link directly from their smartphone while meeting clients on the go.",
    integrations: [
      "Printable & downloadable PDF invoice layouts",
      "WhatsApp & email invoice sharing links",
      "Client billing history & receipt logs",
      "Payment gateway link support for faster settlement",
    ],
    securityUsability: [
      "Protected financial dashboard access structure",
      "Validated numeric totals and invoice numbering",
      "Clean, readable billing tables across desktop and mobile",
      "HTTPS-encrypted transmission for business records",
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
    featureCards: [
      {
        title: "Featured Story Frontpage",
        description: "Magazine-grade lead story placement paired with crisp headline cards for breaking and trending posts.",
        icon: "newspaper",
      },
      {
        title: "Category & Topic Sections",
        description: "Organize coverage cleanly across Business, Technology, Lifestyle, Guides or custom editorial desks.",
        icon: "tag",
      },
      {
        title: "Clean Editorial Reading View",
        description: "Comfortable line lengths, clear headings and sharp photography built for distraction-free reading.",
        icon: "pen-tool",
      },
      {
        title: "Search & Story Archives",
        description: "Let readers discover past articles quickly by keyword, category, author or publication date.",
        icon: "search",
      },
      {
        title: "Social Sharing & Link Previews",
        description: "Structured Open Graph metadata so every shared article displays a clean headline and thumbnail.",
        icon: "share-2",
      },
      {
        title: "Author Profiles & Publishing Flow",
        description: "Display writer bylines, reading times and publish dates alongside an organized content workflow.",
        icon: "user-check",
      },
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
    mobileHighlight:
      "Readers consume news and articles primarily on mobile phones. Clean typography, responsive thumbnails and quick category navigation make reading effortless on any screen size.",
    integrations: [
      "SEO sitemaps & Open Graph social share cards",
      "Article search & category archive filtering",
      "Newsletter signup & WhatsApp community sharing",
      "Content management & editorial publishing support",
    ],
    securityUsability: [
      "Fast static or cached page delivery for high readership",
      "Accessible article typography and contrast ratios",
      "Clean semantic HTML structure for search engines",
      "HTTPS security and lightweight mobile image delivery",
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
