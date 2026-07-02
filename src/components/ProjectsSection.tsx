import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { LiveProjectButton } from './LiveProjectButton';
import { FadeIn } from './FadeIn';

interface ProjectItem {
  num: string;
  name: string;
  category: string;
  col1Image1: string;
  col1Image2: string;
  col2Image: string;
  link: string;
}

const PROJECTS_DATA: ProjectItem[] = [
  {
    num: "01",
    name: "Weather Application",
    category: "Personal Project",
    col1Image1:
      "https://images.unsplash.com/photo-1601297183305-6df142704ea2?auto=format&fit=crop&w=600&q=80",
    col1Image2:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
    col2Image:
      "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=800&q=80",
    link: "https://jitendra2292006.github.io/weather-App/",
  },
  {
    num: "02",
    name: "Expense Tracker",
    category: "Personal Project",
    col1Image1:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    col1Image2:
      "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=600&q=80",
    col2Image:
      "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=800&q=80",
    link: "https://jitendra2292006.github.io/expnanse/",
  },
  {
    num: "03",
    name: "To-Do List",
    category: "Personal Project",
    col1Image1:
      "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=600&q=80",
    col1Image2:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
    col2Image:
      "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&w=800&q=80",
    link: "https://jitendra2292006.github.io/my-todo-app/",
  },
  {
    num: "04",
    name: "Password Generator",
    category: "Personal Project",
    col1Image1:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    col1Image2:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80",
    col2Image:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80",
    link: "https://github.com/jacksharma2177/password-generator",
  },
  {
    num: "05",
    name: "Currency Converter",
    category: "Personal Project",
    col1Image1:
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=600&q=80",
    col1Image2:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80",
    col2Image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
    link: "https://curenncy-exchange-bihqwjl4z-jitendra2292006s-projects.vercel.app/",
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section 
      id="projects" 
      className="relative bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 pt-20 pb-24 sm:pb-32 -mt-10 sm:-mt-12 md:-mt-14 z-20 select-none overflow-x-clip"
    >
      <div className="max-w-6xl mx-auto flex flex-col">
        
        {/* Section Heading */}
        <div className="text-center mb-16 sm:mb-20 md:mb-28">
          <FadeIn y={30} delay={0} duration={0.8}>
            <h2 
              className="hero-heading font-black uppercase tracking-tight leading-none"
              style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            >
              Project
            </h2>
          </FadeIn>
        </div>

        {/* Sticky-stacking Cards */}
        <div className="flex flex-col gap-12 w-full">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard 
              key={project.num}
              project={project}
              index={index}
              totalCards={PROJECTS_DATA.length}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

// Sub-component for individual sticky scale cards
const ProjectCard: React.FC<{
  project: ProjectItem;
  index: number;
  totalCards: number;
}> = ({ project, index, totalCards }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Tracks the scroll position of the card's outer container relative to viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"]
  });

  // Calculate target scale: scale down as you scroll past
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[95vh] sm:h-[90vh] md:h-[85vh] flex justify-center items-start"
    >
      <motion.div
        style={{
          scale,
          top: `calc(80px + ${index * 24}px)`
        }}
        className="sticky w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-5 sm:p-6 md:p-8 shadow-3xl flex flex-col justify-between"
      >
        {/* Top Row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 md:mb-8 border-b border-[#D7E2EA]/10 pb-4 md:pb-6">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            {/* Massive Number */}
            <span 
              className="font-black text-[#D7E2EA] leading-none tracking-tighter"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 90px)' }}
            >
              {project.num}
            </span>
            {/* Category + Name Stacked */}
            <div className="flex flex-col">
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-light mb-1">
                {project.category}
              </span>
              <h4 
                className="font-black uppercase text-[#D7E2EA] tracking-tight leading-tight"
                style={{ fontSize: 'clamp(1.2rem, 3.2vw, 2.3rem)' }}
              >
                {project.name}
              </h4>
            </div>
          </div>

          {/* Ghost button */}
          <LiveProjectButton href={project.link} className="self-end sm:self-auto" />
        </div>

        {/* Bottom Row - Two-Column Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-4 md:gap-6 items-stretch w-full flex-1 min-h-0">
          
          {/* Left Column (40% width) - Stacked Images */}
          <div className="col-span-1 md:col-span-4 flex flex-col gap-4 md:gap-6 justify-between h-full">
            <div className="w-full overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[48px] border border-white/5 shadow-md">
              <img 
                src={project.col1Image1} 
                alt={`${project.name} preview 1`} 
                className="w-full object-cover hover:scale-105 transition-transform duration-700" 
                style={{ height: 'clamp(130px, 16vw, 230px)' }}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="w-full overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[48px] border border-white/5 shadow-md">
              <img 
                src={project.col1Image2} 
                alt={`${project.name} preview 2`} 
                className="w-full object-cover hover:scale-105 transition-transform duration-700" 
                style={{ height: 'clamp(160px, 22vw, 340px)' }}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right Column (60% width) - Tall Image */}
          <div className="col-span-1 md:col-span-6 overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[48px] border border-white/5 shadow-md h-full min-h-[220px] md:min-h-0">
            <img 
              src={project.col2Image} 
              alt={`${project.name} highlight`} 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>

        </div>

      </motion.div>
    </div>
  );
};
