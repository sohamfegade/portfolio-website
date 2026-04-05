import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Loader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Slide up the entire loader
        gsap.to(containerRef.current, {
          yPercent: -100,
          duration: 1.2,
          ease: 'power4.inOut',
          onComplete: onComplete,
        });
      },
    });

    // Make sure elements are visible natively
    gsap.set('.loader-char', { opacity: 0, y: 100 });

    // Animate the text letters sequentially
    tl.to('.loader-char', {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.15,
      ease: 'back.out(2)'
    })
      // Add a satisfying pause so the user can read it
      .to('.loader-char', {
        duration: 0.6,
        opacity: 0,
        y: -50,
        stagger: 0.1,
        ease: 'power2.in',
        delay: 1.0 // Added a much longer delay so it stays on screen
      });
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-transparent flex items-center justify-center overflow-hidden"
    >
      <div
        ref={textRef}
        className="flex space-x-1 sm:space-x-2 md:space-x-4 text-3xl sm:text-4xl md:text-7xl font-extrabold py-10"
      >
        {['S', 'O', 'H', 'A', 'M', '\u00A0', 'F', 'E', 'G', 'A', 'D', 'E'].map((char, index) => (
          <span
            key={index}
            className="loader-char inline-block text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400"
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Loader;
