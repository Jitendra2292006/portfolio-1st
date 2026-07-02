import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';

export default function App() {
  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#0C0C0C] min-h-screen w-full overflow-x-clip font-sans antialiased selection:bg-[#D7E2EA]/20 selection:text-white">
      
      {/* SECTION ORDER */}
      
      {/* 1. Hero Section */}
      <HeroSection onScrollToSection={handleScrollToSection} />

      {/* 2. Marquee Section */}
      <MarqueeSection />

      {/* 3. About Section */}
      <AboutSection onScrollToSection={handleScrollToSection} />

      {/* 4. Services Section */}
      <ServicesSection />

      {/* 5. Projects Section */}
      <ProjectsSection />

      {/* Simple, respectful bottom credit aligner with Jitendra Sharma's 3D brand */}
      <footer className="w-full bg-[#0C0C0C] py-8 border-t border-white/5 text-center text-xs text-[#D7E2EA]/40 tracking-widest uppercase">
        &copy; {new Date().getFullYear()} JITENDRA SHARMA &bull; ALL RIGHTS RESERVED
      </footer>

    </div>
  );
}
