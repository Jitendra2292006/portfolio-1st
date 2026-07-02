import React from 'react';

interface LiveProjectButtonProps {
  onClick?: () => void;
  href?: string;
  label?: string;
  className?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  onClick,
  href,
  label = "Live Project",
  className = "",
}) => {
  const baseClasses = `inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-colors duration-200 cursor-pointer active:scale-95 ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
        onClick={onClick}
      >
        {label}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={baseClasses}
    >
      {label}
    </button>
  );
};
