import React from 'react';
import { FadeIn } from './FadeIn';
import { Magnet } from './Magnet';
import { ContactButton } from './ContactButton';

interface HeroSectionProps {
  onScrollToSection: (id: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToSection }) => {
  return (
    <section id="hero" className="relative h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C] select-none">
      
      {/* 1. Navbar */}
      <FadeIn y={-20} delay={0} duration={0.8} className="w-full z-20">
        <nav className="flex justify-between items-center w-full px-6 md:px-10 pt-6 md:pt-8">
          {/* Logo or Left marker */}
          <span 
            onClick={() => onScrollToSection('hero')} 
            className="text-white font-black tracking-widest text-lg md:text-xl cursor-pointer hover:opacity-70 transition-opacity"
          >
            {/* User name Jitendra Sharma customizable logo */}
            JITENDRA SHARMA
          </span>
          
          {/* Links */}
          <div className="flex gap-4 sm:gap-6 md:gap-10">
            {[
              { label: 'About', target: 'about' },
              { label: 'Skills', target: 'services' },
              { label: 'Projects', target: 'projects' },
              { label: 'Contact', target: 'about' }, // scrolls to About button or footer
            ].map((link, i) => (
              <button
                key={i}
                onClick={() => onScrollToSection(link.target)}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>
        </nav>
      </FadeIn>

      {/* 2. Hero Heading (Middle-top) */}
      <div className="w-full px-6 md:px-10 mt-6 sm:mt-4 md:-mt-5 z-20 pointer-events-none">
        <div className="overflow-hidden w-full">
          <FadeIn y={40} delay={0.15} duration={0.8}>
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[8vw] md:text-[16vw] lg:text-[5vw]">
              Hi, i&apos;m jitu sharma
            </h1>
          </FadeIn>
        </div>
      </div>

      {/* 3. Absolutely Centered Hero Portrait */}
      <FadeIn 
        y={30} 
        delay={0.6} 
        duration={0.9} 
        className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0"
      >
        <Magnet 
          padding={150} 
          strength={3} 
          activeTransition="transform 0.3s ease-out" 
          inactiveTransition="transform 0.6s ease-in-out"
          className="w-full flex justify-center"
        >
          <img 
            src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png" 
            alt="Jack Portrait" 
            className="w-full h-auto object-contain pointer-events-none drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            referrerPolicy="no-referrer"
          />
        </Magnet>
      </FadeIn>

      {/* 4. Bottom Bar */}
      <div className="w-full px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 flex justify-between items-end z-20">
        
        {/* Left paragraph */}
        <FadeIn y={20} delay={0.35} duration={0.8}>
          <p 
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            a frontend developer & designer and unforgettable projects
          </p>
        </FadeIn>

        {/* Right Contact Button */}
        <FadeIn y={20} delay={0.5} duration={0.8}>
          <ContactButton onClick={() => onScrollToSection('about')} />
        </FadeIn>

      </div>
    </section>
  );
};
