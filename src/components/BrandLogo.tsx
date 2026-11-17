import React from "react";

interface BrandLogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export function BrandLogo({ variant = "light", className = "" }: BrandLogoProps) {
  const isDark = variant === "dark";

  return (
    <span className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Stylized layered geometric 'B' emblem matching the BIZZPAYE reference */}
      <svg
        width="38"
        height="34"
        viewBox="0 0 44 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        {/* Left dynamic blue vertical ribbon */}
        <path
          d="M6.5 4.5H15.5L10.2 33.5H1.2L6.5 4.5Z"
          fill={isDark ? "#E4F3FF" : "#0866D9"}
        />
        {/* Upper B loop */}
        <path
          d="M15 4.5H28.8C35.2 4.5 39 7.8 38 13.2C37.3 16.9 34.4 19 30.4 19.6H17.2L19.1 12.6H27.4C29.3 12.6 30.5 11.7 30.8 10.2C31.1 8.8 30.1 8 28.2 8H15.6L15 4.5Z"
          fill={isDark ? "#FFFFFF" : "#102A56"}
        />
        {/* Center primary blue dynamic accent slash */}
        <path
          d="M12.4 16.2H31.8C36.6 16.2 39.8 18.8 39.2 23.2L31.4 23.2C31.5 21.4 30.3 20.5 28.2 20.5H11.6L12.4 16.2Z"
          fill="#0866D9"
        />
        {/* Lower B loop */}
        <path
          d="M11.6 20.5H29.4C35.4 20.5 39.6 23.3 38.5 28.5C37.5 32.9 33.4 35 27.2 35H9.2L10.5 28.1H26.4C28.8 28.1 30.3 27.1 30.6 25.5C30.9 24.1 29.7 23.4 27.5 23.4H11.1L11.6 20.5Z"
          fill={isDark ? "#FFFFFF" : "#102A56"}
        />
      </svg>

      <span className="flex flex-col leading-none">
        <span
          className={`text-[19px] sm:text-[21px] font-extrabold tracking-tight ${
            isDark ? "text-white" : "text-[#102A56]"
          }`}
        >
          BIZZPAYE
        </span>
        <span
          className={`text-[9px] sm:text-[9.5px] font-bold tracking-[0.16em] mt-0.5 ${
            isDark ? "text-[#E4F3FF]" : "text-[#102A56]"
          }`}
        >
          PLATFORM CONSULTS
        </span>
      </span>
    </span>
  );
}

