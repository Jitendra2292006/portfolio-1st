import React from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';

interface AboutSectionProps {
  onScrollToSection: (id: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onScrollToSection }) => {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col justify-center items-center bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 overflow-hidden select-none"
    >
      {/* Absolute Decorative 3D Images */}
      {/* 1. Moon Icon (Top-Left) */}
      <FadeIn
        x={-80}
        y={0}
        delay={0.1}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-10 w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="Moon 3D Icon"
          className="w-full h-auto object-contain animate-pulse duration-3000"
          referrerPolicy="no-referrer"
        />
      </FadeIn>

      {/* 2. Bottom-Left 3D Object */}
      <FadeIn
        x={-80}
        y={0}
        delay={0.25}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-10 w-[100px] sm:w-[140px] md:w-[180px] pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="Abstract 3D Object"
          className="w-full h-auto object-contain animate-bounce duration-[4000ms]"
          referrerPolicy="no-referrer"
        />
      </FadeIn>

      {/* 3. Top-Right Lego Icon */}
      <FadeIn
        x={80}
        y={0}
        delay={0.15}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-10 w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="Lego 3D Icon"
          className="w-full h-auto object-contain animate-pulse duration-[3500ms]"
          referrerPolicy="no-referrer"
        />
      </FadeIn>

      {/* 4. Bottom-Right 3D Group */}
      <FadeIn
        x={80}
        y={0}
        delay={0.3}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-10 w-[130px] sm:w-[170px] md:w-[220px] pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="3D Group Object"
          className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
      </FadeIn>

      {/* Main stacked layout */}
      <div className="flex flex-col items-center justify-center max-w-4xl z-20 text-center">
        {/* Heading */}
        <FadeIn y={40} delay={0} duration={0.8}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Gap 1 */}
        <div className="h-10 sm:h-14 md:h-16" />

        {/* Animated Paragraph */}
        <div className="max-w-[640px] w-full px-4 text-center">
          <AnimatedText
            text="I am Jitendra Sharma, a frontend web developer and 4th-semester BCA student at Bipin Tripathi Kumaon Institute of Technology (SSJU). I specialize in building interactive web experiences using React, JavaScript, and Tailwind CSS.
Beyond the screen, I am a digital creator with a deep passion for cinematic landscape photography, which inspires my design-centric approach to coding. I thrive on combining functional code with visual storytelling to create something remarkable. Let’s connect and build something great  together !"
            className="text-[#D7E2EA] font-semibold leading-relaxed text-center text-lg sm:text-xl md:text-2xl"
          />
        </div>

        {/* Detailed Profile Bento Grid */}
        <div className="w-full max-w-4xl mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
          {/* Card 1: Academic & University Focus */}
          <FadeIn
            y={30}
            delay={0.1}
            duration={0.8}
            className="rounded-3xl border border-[#D7E2EA]/10 bg-white/[0.02] p-6 text-left backdrop-blur-md"
          >
            <span className="text-[10px] uppercase tracking-widest text-[#D7E2EA]/40 font-mono">
              Education
            </span>
            <h4 className="text-xl font-bold text-white mt-2 mb-1">
              Soban Singh Jeena University
            </h4>
            <p className="text-sm text-[#D7E2EA]/80 font-light mb-4">
              4th-Semester BCA Student &bull; Uttarakhand
            </p>
            <div className="border-t border-[#D7E2EA]/10 pt-4">
              <span className="text-xs uppercase tracking-wider text-[#D7E2EA]/60 font-semibold block mb-2">
                Academic Core
              </span>
              <div className="flex flex-wrap gap-2">
                {["C++", "C", "Python"].map((subject, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-white/5 border border-white/10 rounded-full px-3 py-1 text-white/80"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Card 2: Creative & Lifestyle Profile */}
          <FadeIn
            y={30}
            delay={0.2}
            duration={0.8}
            className="rounded-3xl border border-[#D7E2EA]/10 bg-white/[0.02] p-6 text-left backdrop-blur-md"
          >
            <span className="text-[10px] uppercase tracking-widest text-[#D7E2EA]/40 font-mono">
              Creative Mindset
            </span>
            <h4 className="text-xl font-bold text-white mt-2 mb-1">
              Digital Creator on Instagram
            </h4>
            <p className="text-sm text-[#D7E2EA]/80 font-light mb-4">
              Expressing vision through frames & form
            </p>
            <div className="border-t border-[#D7E2EA]/10 pt-4">
              <span className="text-xs uppercase tracking-wider text-[#D7E2EA]/60 font-semibold block mb-2">
                Interests
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  "Cinematic Landscape Photography",
                  "Men's Fashion",
                  "Modern UI Trends",
                ].map((interest, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-[#B600A8]/10 border border-[#B600A8]/20 rounded-full px-3 py-1 text-white/90"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Card 3: Deployed Projects Checklist (Span full row on desktop) */}
          <FadeIn
            y={30}
            delay={0.3}
            duration={0.8}
            className="md:col-span-2 rounded-3xl border border-[#D7E2EA]/10 bg-white/[0.02] p-6 text-left backdrop-blur-md"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#D7E2EA]/40 font-mono">
                  Core Skills & Builds
                </span>
                <h4 className="text-xl font-bold text-white mt-1">
                  Interactive Deployed Projects
                </h4>
                <p className="text-xs text-[#D7E2EA]/60 font-light mt-1">
                  Actively building web tools and exploring modern technologies.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["React", "JavaScript", "HTML/CSS", "Tailwind CSS"].map(
                  (tech, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono bg-white/10 text-white rounded px-2 py-0.5"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
            </div>
            <div className="border-t border-[#D7E2EA]/10 pt-4 mt-4 grid grid-cols-2 sm:grid-cols-5 gap-3">
              {[
                {
                  name: "🌤️ Weather App",
                  link: "https://github.com/Jitendra2292006/weather-App",
                },
                {
                  name: "💳 Expense Tracker",
                  link: "https://github.com/Jitendra2292006/expnanse",
                },
                {
                  name: "📝 To-Do List",
                  link: "https://github.com/Jitendra2292006/my-todo-app",
                },
                {
                  name: "🔑 Password Gen",
                  link: "https://github.com/jacksharma2177/password-generator",
                },
                {
                  name: "💱 Currency Convert",
                  link: "https://github.com/Jitendra2292006/curenncy-exchange",
                },
              ].map((proj, idx) => (
                <a
                  key={idx}
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-center gap-2 bg-white/[0.03] hover:bg-[#B600A8]/10 hover:border-[#B600A8]/30 transition-all duration-300 p-3 rounded-2xl border border-white/5 cursor-pointer active:scale-95"
                >
                  <span className="text-xs sm:text-sm font-semibold text-white/90">
                    {proj.name}
                  </span>
                </a>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Gap 2 */}
        <div className="h-12 sm:h-16 md:h-20" />

        {/* Contact button below the text block */}
        <FadeIn y={20} delay={0.4} duration={0.8}>
          <ContactButton
            onClick={() => {
              // Open/trigger contact actions, or just scroll to section
              onScrollToSection("projects");
            }}
            label="Let's Connect"
          />
        </FadeIn>
      </div>
    </section>
  );
};
