import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Robot from './Robot';

const Hero = () => {
  const container = useRef(null);

  useGSAP(() => {
    const mainTl = gsap.timeline({ delay: 0.3 });

    // Background element animations
    gsap.from('.hero-badge', { y: 20, opacity: 0, duration: 0.8, delay: 0.2, ease: 'power3.out' });
    gsap.from('.hero-image-container', { scale: 0.8, opacity: 0, duration: 1.2, delay: 0.5, ease: 'elastic.out(1, 0.7)' });

    // Set initial states
    gsap.set('.soham-name-text', { opacity: 0, y: 20 });
    gsap.set('.robot-wrapper', { x: 200, opacity: 0 });
    gsap.set('.hero-desc', { opacity: 0, y: 20 });
    gsap.set('.hero-buttons', { opacity: 0, y: 20 });

    // === STEP 1: "Hi, I'm" text appears ===
    mainTl.from('.hero-title-line1', {
      y: 40, opacity: 0, duration: 0.8, ease: 'power3.out'
    })

      // === STEP 2: Robot slides in ===
      .to('.robot-wrapper', {
        x: 0, opacity: 1, duration: 1.2, ease: 'power2.out'
      }, '+=0.2')

      // === STEP 3: "Soham" name appears ===
      .to('.soham-name-text', {
        opacity: 1, y: 0, duration: 0.7, ease: 'back.out(1.7)'
      }, '-=0.3')

      // === STEP 4: Show description and buttons ===
      .to('.hero-desc', { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '+=0.2')
      .to('.hero-buttons', { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3');

    // Gentle floating bob (idle)
    gsap.to('.robot-wrapper', {
      y: '+=5', duration: 2.5, repeat: -1, yoyo: true,
      ease: 'sine.inOut', delay: 5
    });

    // Eye blink
    gsap.to('.robot-eye-left, .robot-eye-right', {
      scaleY: 0.1, transformOrigin: 'center',
      duration: 0.12, repeat: -1, yoyo: true,
      repeatDelay: 3, ease: 'power2.in', delay: 4
    });

    // Antenna pulse
    gsap.to('.robot-antenna-ball', {
      scale: 1.3, transformOrigin: 'center',
      duration: 0.8, repeat: -1, yoyo: true, ease: 'sine.inOut'
    });

  }, { scope: container });

  return (
    <section id="home" ref={container} className="pt-28 pb-16 md:pt-48 md:pb-32 px-4 md:px-6 flex items-center justify-center min-h-screen relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 relative z-10">
        {/* Title block */}
        <div className="text-center md:text-left">
          <div className="hero-badge inline-block px-4 py-1.5 rounded-full border border-gray-700 bg-secondary/50 backdrop-blur-sm text-accent text-sm font-medium mb-4 md:mb-6">
            Aspiring AI & DS Engineer
          </div>

          <div className="mb-4 md:mb-6">
            <h1 className="hero-title-line1 text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-none">
              Hi, I'm
            </h1>
            <span className="soham-name-text text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400 leading-none">
              Soham
            </span>
            {/* Name + Robot row */}
            <div className="hero-name-row flex flex-col md:flex-row items-center md:items-end justify-center md:justify-start mt-1 sm:mt-2 relative gap-1 md:gap-0">
              <div className="robot-wrapper relative w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[130px] md:h-[130px] order-first md:order-last md:ml-4 md:-mb-2">
                <Robot
                  className="w-full h-full"
                  style={{ filter: 'drop-shadow(0 4px 16px rgba(99, 102, 241, 0.4))' }}
                />
              </div>

            </div>
          </div>
        </div>

        {/* Profile Image - appears after title on mobile, spans right column on desktop */}
        <div className="relative group hero-image-container flex justify-center md:row-span-2">
          <div className="absolute inset-0 bg-gradient-to-tr from-accent to-purple-600 rounded-3xl opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500"></div>
          <img
            src="https://ik.imagekit.io/ns4gfx2mi/Personal/profile.jpeg"
            alt="Soham Fegade"
            className="relative z-10 rounded-3xl object-cover w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 border border-gray-800 shadow-2xl rotate-2 group-hover:rotate-0 transition-transform duration-500"
          />
        </div>

        {/* Description + Buttons - appears after image on mobile, below title on desktop */}
        <div className="text-center md:text-left">
          <p className="hero-desc text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed mx-auto md:mx-0">
            I craft intelligent datacentric solutions and build dynamic web applications. Constantly pushing boundaries to learn and innovate.
          </p>
          <div className="hero-buttons flex flex-col sm:flex-row gap-3 sm:gap-4 pt-5 md:pt-6 justify-center md:justify-start">
            <a href="#contact" className="px-6 sm:px-8 py-3 sm:py-3.5 bg-accent hover:bg-indigo-400 text-white font-semibold rounded-lg shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all flex items-center justify-center gap-2 group text-sm sm:text-base">
              Let's Talk
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#about" className="px-6 sm:px-8 py-3 sm:py-3.5 bg-secondary hover:bg-gray-800 border border-gray-700 text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2 text-center text-sm sm:text-base">
              View Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
