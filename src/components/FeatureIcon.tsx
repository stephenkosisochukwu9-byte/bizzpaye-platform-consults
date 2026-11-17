import React from "react";
import {
  LayoutGrid,
  UserCheck,
  Briefcase,
  FileText,
  Mail,
  Share2,
  Globe,
  MessageCircle,
  ShieldCheck,
  ShoppingBag,
  CreditCard,
  BarChart3,
  GraduationCap,
  Calendar,
  BookOpen,
  Image as ImageIcon,
  Utensils,
  MapPin,
  Clock,
  Home,
  Search,
  Building2,
  BedDouble,
  PlayCircle,
  Award,
  Users,
  Zap,
  Target,
  Ticket,
  Mic,
  CheckCircle2,
  Package,
  AlertTriangle,
  Truck,
  Receipt,
  Calculator,
  Newspaper,
  Tag,
  PenTool,
  Smartphone,
  Layers,
  Lock,
} from "lucide-react";

export type FeatureIconKey =
  | "layout-grid"
  | "user-check"
  | "briefcase"
  | "file-text"
  | "mail"
  | "share-2"
  | "globe"
  | "message-circle"
  | "shield-check"
  | "shopping-bag"
  | "credit-card"
  | "bar-chart"
  | "graduation-cap"
  | "calendar"
  | "book-open"
  | "image"
  | "utensils"
  | "map-pin"
  | "clock"
  | "home"
  | "search"
  | "building"
  | "bed"
  | "play-circle"
  | "award"
  | "users"
  | "zap"
  | "target"
  | "ticket"
  | "mic"
  | "check-circle"
  | "package"
  | "alert-triangle"
  | "truck"
  | "receipt"
  | "calculator"
  | "newspaper"
  | "tag"
  | "pen-tool"
  | "smartphone"
  | "layers"
  | "lock";

interface FeatureIconProps {
  name: FeatureIconKey;
  className?: string;
}

export function FeatureIcon({ name, className = "w-5 h-5" }: FeatureIconProps) {
  switch (name) {
    case "layout-grid":
      return <LayoutGrid className={className} aria-hidden="true" />;
    case "user-check":
      return <UserCheck className={className} aria-hidden="true" />;
    case "briefcase":
      return <Briefcase className={className} aria-hidden="true" />;
    case "file-text":
      return <FileText className={className} aria-hidden="true" />;
    case "mail":
      return <Mail className={className} aria-hidden="true" />;
    case "share-2":
      return <Share2 className={className} aria-hidden="true" />;
    case "globe":
      return <Globe className={className} aria-hidden="true" />;
    case "message-circle":
      return <MessageCircle className={className} aria-hidden="true" />;
    case "shield-check":
      return <ShieldCheck className={className} aria-hidden="true" />;
    case "shopping-bag":
      return <ShoppingBag className={className} aria-hidden="true" />;
    case "credit-card":
      return <CreditCard className={className} aria-hidden="true" />;
    case "bar-chart":
      return <BarChart3 className={className} aria-hidden="true" />;
    case "graduation-cap":
      return <GraduationCap className={className} aria-hidden="true" />;
    case "calendar":
      return <Calendar className={className} aria-hidden="true" />;
    case "book-open":
      return <BookOpen className={className} aria-hidden="true" />;
    case "image":
      return <ImageIcon className={className} aria-hidden="true" />;
    case "utensils":
      return <Utensils className={className} aria-hidden="true" />;
    case "map-pin":
      return <MapPin className={className} aria-hidden="true" />;
    case "clock":
      return <Clock className={className} aria-hidden="true" />;
    case "home":
      return <Home className={className} aria-hidden="true" />;
    case "search":
      return <Search className={className} aria-hidden="true" />;
    case "building":
      return <Building2 className={className} aria-hidden="true" />;
    case "bed":
      return <BedDouble className={className} aria-hidden="true" />;
    case "play-circle":
      return <PlayCircle className={className} aria-hidden="true" />;
    case "award":
      return <Award className={className} aria-hidden="true" />;
    case "users":
      return <Users className={className} aria-hidden="true" />;
    case "zap":
      return <Zap className={className} aria-hidden="true" />;
    case "target":
      return <Target className={className} aria-hidden="true" />;
    case "ticket":
      return <Ticket className={className} aria-hidden="true" />;
    case "mic":
      return <Mic className={className} aria-hidden="true" />;
    case "check-circle":
      return <CheckCircle2 className={className} aria-hidden="true" />;
    case "package":
      return <Package className={className} aria-hidden="true" />;
    case "alert-triangle":
      return <AlertTriangle className={className} aria-hidden="true" />;
    case "truck":
      return <Truck className={className} aria-hidden="true" />;
    case "receipt":
      return <Receipt className={className} aria-hidden="true" />;
    case "calculator":
      return <Calculator className={className} aria-hidden="true" />;
    case "newspaper":
      return <Newspaper className={className} aria-hidden="true" />;
    case "tag":
      return <Tag className={className} aria-hidden="true" />;
    case "pen-tool":
      return <PenTool className={className} aria-hidden="true" />;
    case "smartphone":
      return <Smartphone className={className} aria-hidden="true" />;
    case "layers":
      return <Layers className={className} aria-hidden="true" />;
    case "lock":
      return <Lock className={className} aria-hidden="true" />;
  }
}

