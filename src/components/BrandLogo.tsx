import React from 'react';

interface BrandLogoProps {
  variant?: 'light' | 'dark' | 'footer';
  className?: string;
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'light',
  className = '',
  showTagline = true
}) => {
  const isDarkBg = variant === 'light'; // on dark navbar/footer
  const isFooter = variant === 'footer';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Brand Icon Emblem */}
      <div className="relative flex-shrink-0 flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-brand-orange-500 via-brand-orange-600 to-amber-600 shadow-md border border-amber-300/30">
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7 text-white drop-shadow"
        >
          {/* Stylized crown / sacred plume feather arch symbol */}
          <path
            d="M18 4C18 4 13 11 13 17C13 20.3137 15.2386 23 18 23C20.7614 23 23 20.3137 23 17C23 11 18 4 18 4Z"
            fill="#FEF08A"
            stroke="#FFFFFF"
            strokeWidth="1.5"
          />
          {/* Inner aura flame / eye */}
          <circle cx="18" cy="16" r="3" fill="#EA580C" />
          <circle cx="18" cy="16" r="1.5" fill="#FFFFFF" />
          {/* Travel compass / road trail curve */}
          <path
            d="M6 28C10 24 14 26 18 26C22 26 26 24 30 28"
            stroke="#FFFFFF"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M11 31C14 29 16 30 18 30C20 30 22 29 25 31"
            stroke="#FEF08A"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Brand Name & Identity Text */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span
            className={`font-extrabold text-sm sm:text-base md:text-lg tracking-tight leading-tight ${
              isDarkBg || isFooter ? 'text-white' : 'text-brand-blue-900'
            }`}
          >
            Shri Khatu Shyam Ji
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold tracking-wide">
          <span className="text-brand-orange-400 uppercase tracking-wider font-extrabold text-[11px] sm:text-xs">
            Tour & Travels
          </span>
          {showTagline && (
            <>
              <span className="text-slate-400 hidden sm:inline">•</span>
              <span className="text-slate-300 font-medium text-[11px] hidden sm:inline">
                Najafgarh
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
