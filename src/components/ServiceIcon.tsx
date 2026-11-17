import React from "react";
import {
  User,
  Building2,
  ShoppingCart,
  GraduationCap,
  Utensils,
  Home,
  BedDouble,
  MonitorPlay,
  LayoutTemplate,
  CalendarDays,
  CalendarCheck,
  Boxes,
  FileSpreadsheet,
  Newspaper,
} from "lucide-react";
import type { ServiceIconKey } from "@/data/services";

interface ServiceIconProps {
  name: ServiceIconKey;
  className?: string;
}

export function ServiceIcon({ name, className = "w-5 h-5" }: ServiceIconProps) {
  switch (name) {
    case "user":
      return <User className={className} aria-hidden="true" />;
    case "building":
      return <Building2 className={className} aria-hidden="true" />;
    case "shopping-cart":
      return <ShoppingCart className={className} aria-hidden="true" />;
    case "graduation-cap":
      return <GraduationCap className={className} aria-hidden="true" />;
    case "utensils":
      return <Utensils className={className} aria-hidden="true" />;
    case "home":
      return <Home className={className} aria-hidden="true" />;
    case "bed":
      return <BedDouble className={className} aria-hidden="true" />;
    case "monitor-play":
      return <MonitorPlay className={className} aria-hidden="true" />;
    case "layout":
      return <LayoutTemplate className={className} aria-hidden="true" />;
    case "calendar-days":
      return <CalendarDays className={className} aria-hidden="true" />;
    case "calendar-check":
      return <CalendarCheck className={className} aria-hidden="true" />;
    case "boxes":
      return <Boxes className={className} aria-hidden="true" />;
    case "file-spreadsheet":
      return <FileSpreadsheet className={className} aria-hidden="true" />;
    case "newspaper":
      return <Newspaper className={className} aria-hidden="true" />;
  }
}

