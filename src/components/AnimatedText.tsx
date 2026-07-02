import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = "" }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  // Track scroll progress of the paragraph container relative to viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"]
  });

  // Split text into characters
  const characters = text.split("");

  return (
    <p ref={containerRef} className={`relative flex flex-wrap justify-center ${className}`}>
      {characters.map((char, index) => {
        const total = characters.length;
        // Map individual character animation windows with an overlapping stagger
        const start = index / total;
        const end = Math.min(1, (index + 6) / total); 

        return (
          <Character
            key={index}
            char={char}
            progress={scrollYProgress}
            range={[start, end]}
          />
        );
      })}
    </p>
  );
};

interface CharacterProps {
  char: string;
  progress: any;
  range: [number, number];
}

const Character: React.FC<CharacterProps> = ({ char, progress, range }) => {
  // Translate progress into an opacity value between 0.2 and 1
  const opacity = useTransform(progress, range, [0.2, 1]);

  if (char === " ") {
    return <span className="inline-block">&nbsp;</span>;
  }

  return (
    <span className="relative inline-block select-none">
      {/* Invisible placeholder for preserving dimensions */}
      <span className="opacity-0">{char}</span>
      {/* Absolute positioned animated span */}
      <motion.span
        style={{ opacity }}
        className="absolute left-0 top-0 h-full w-full"
      >
        {char}
      </motion.span>
    </span>
  );
};
