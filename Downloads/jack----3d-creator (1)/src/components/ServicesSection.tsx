import React from 'react';
import { FadeIn } from './FadeIn';

interface ServiceItem {
  num: string;
  name: string;
  description: string;
}

// DEVELOPER NOTE FOR JITENDRA:
// Aap apne skills, tools, aur descriptions ko is array ke andar edit ya add kar sakte hain.
const SERVICES_DATA: ServiceItem[] = [
  {
    num: "01",
    name: "Frontend Development",
    description: "Building responsive, high-performance, and interactive web interfaces using React, JavaScript, HTML, CSS, and Tailwind CSS."
  },
  {
    num: "02",
    name: "Computer Science Core",
    description: "Solid academic foundation in Operating Systems, Database Management Systems (DBMS), and Cloud Computing."
  },
  {
    num: "03",
    name: "3D Web Experiences",
    description: "Crafting immersive three-dimensional spatial layouts, scroll-driven visual narratives, and engaging digital portfolios."
  },
  {
    num: "04",
    name: "Cinematic Photography",
    description: "Creative digital creator focusing on rich atmospheric composition, lighting, and cinematic landscape photography."
  },
  {
    num: "05",
    name: "Aesthetics & Design",
    description: "Bridging the gap between code and design with attention to modern visual trends, typography, and user experiences."
  }
];

export const ServicesSection: React.FC = () => {
  return (
    <section 
      id="services" 
      className="relative bg-white text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 z-10 select-none"
    >
      <div className="max-w-5xl mx-auto flex flex-col">
        
        {/* Section Heading */}
        <div className="text-center mb-16 sm:mb-20 md:mb-28">
          <FadeIn y={30} delay={0} duration={0.8}>
            <h2 
              className="text-[#0C0C0C] font-black uppercase tracking-tight leading-none"
              style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            >
              Skills
            </h2>
          </FadeIn>
        </div>

        {/* Services List */}
        <div className="flex flex-col border-t border-[rgba(12,12,12,0.15)]">
          {SERVICES_DATA.map((service, index) => (
            <FadeIn 
              key={service.num}
              y={30}
              delay={index * 0.1}
              duration={0.8}
              className="border-b border-[rgba(12,12,12,0.15)]"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 py-8 sm:py-10 md:py-12 group hover:bg-[#0c0c0c]/[0.02] px-2 sm:px-4 transition-all duration-300">
                
                {/* Left Number */}
                <div 
                  className="font-black text-[#0C0C0C] leading-none select-none tracking-tighter"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                >
                  {service.num}
                </div>

                {/* Right Content */}
                <div className="flex flex-col gap-2 sm:gap-3 flex-1 sm:pl-10 md:pl-16 lg:pl-24">
                  <h3 
                    className="font-medium uppercase text-[#0C0C0C] tracking-tight"
                    style={{ fontSize: 'clamp(1.2rem, 2.2vw, 2.1rem)' }}
                  >
                    {service.name}
                  </h3>
                  <p 
                    className="font-light text-[#0C0C0C] opacity-60 leading-relaxed max-w-2xl"
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                  >
                    {service.description}
                  </p>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};
