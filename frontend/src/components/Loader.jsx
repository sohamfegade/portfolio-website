import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Loader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const counterRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Fade out perfectly instead of sliding
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: 'power2.inOut',
          onComplete: onComplete,
        });
      },
    });

    // Make sure elements are hidden natively
    gsap.set('.loader-char', { opacity: 0, y: 80 });

    // Progress Bar Animation
    tl.to('.progress-bar', {
      width: '100%',
      duration: 1.5,
      ease: 'power3.inOut'
    }, 0);

    // Number Counter Animation
    const counterProxy = { val: 0 };
    tl.to(counterProxy, {
      val: 100,
      duration: 1.5,
      ease: 'power3.inOut',
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.innerText = Math.round(counterProxy.val) + '%';
        }
      }
    }, 0);

    // Animate the text letters sequentially
    tl.to('.loader-char', {
      y: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.05,
      ease: 'back.out(2)'
    }, 0)
      // Add a satisfying pause before dropping them
      .to('.loader-char', {
        duration: 0.4,
        opacity: 0,
        y: -40,
        stagger: 0.03,
        ease: 'power2.in',
        delay: 0.4 // Wait for glitch to finish safely
      });

    // --- CYBERPUNK GLITCH EFFECT ---
    // Runs right as the bar reaches near 100%
    const glitchTime = 1.35;

    tl.to('.glitch-text', {
      x: "random(-4, 4)",
      y: "random(-2, 2)",
      textShadow: "3px 0px 0px rgba(0,255,255,0.8), -3px 0px 0px rgba(255,0,0,0.8)",
      duration: 0.06,
      repeat: 8,
      yoyo: true,
      ease: "steps(1)"
    }, glitchTime);

    tl.to(counterRef.current, {
      x: "random(-3, 3)",
      textShadow: "2px 0px 0px cyan, -2px 0px 0px red",
      duration: 0.04,
      repeat: 8,
      yoyo: true,
      ease: "steps(1)"
    }, glitchTime);

    tl.to('.progress-wrapper', {
      x: "random(-4, 4)",
      scaleY: 1.5,
      duration: 0.04,
      repeat: 8,
      yoyo: true,
      ease: "steps(1)"
    }, glitchTime);
    // --------------------------------

    // Fade out progress wrapper slightly after glitch
    tl.to('.progress-wrapper', {
      opacity: 0,
      duration: 0.3
    }, "-=0.3");

  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-transparent flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Ambient glowing blobs */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Text Container */}
      <div
        ref={textRef}
        className="flex space-x-1 sm:space-x-2 md:space-x-4 text-4xl sm:text-5xl md:text-7xl font-black py-4 z-10"
      >
        {['S', 'O', 'H', 'A', 'M', '\u00A0', 'F', 'E', 'G', 'A', 'D', 'E'].map((char, index) => (
          <span
            key={index}
            className="loader-char glitch-text inline-block text-white tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
          >
            {char}
          </span>
        ))}
      </div>

      {/* Neon Progress Bar & Counter */}
      <div className="progress-wrapper flex flex-col items-center mt-6 z-10">
        <span ref={counterRef} className="text-cyan-400 font-mono text-sm sm:text-base tracking-widest mb-3 font-bold">0%</span>
        <div className="w-48 sm:w-64 h-[3px] bg-white/10 rounded-full overflow-hidden">
          <div className="progress-bar h-full bg-cyan-500 w-0 shadow-[0_0_15px_cyan] rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
