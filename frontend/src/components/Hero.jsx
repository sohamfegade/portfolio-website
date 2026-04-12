import React, { useRef } from 'react';
import { ArrowRight, Download, ChevronDown, Code, Database, Cpu, Terminal, Globe, Layers, Mail } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = ({ isLoaded = true }) => {
  const container = useRef(null);

  useGSAP(() => {
    // Only conditionally launch animations if we are physically loaded
    if (!isLoaded) return;

    // Small delay provides smoothness when transitioning states
    const tl = gsap.timeline({ delay: 0.2 });

    gsap.set('.hero-pill', { opacity: 0, y: 20 });
    gsap.set('.hero-title', { opacity: 0, scale: 0.9 });
    gsap.set('.hero-desc', { opacity: 0, y: 20 });
    gsap.set('.hero-btn', { opacity: 0, y: 20 });
    gsap.set('.floating-icon', { opacity: 0, scale: 0 });

    tl.to('.hero-pill', { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' })
      .to('.hero-title', { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.5)' }, '-=0.2')
      .to('.hero-desc', { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' }, '-=0.4')
      .to('.typewriter-char', { opacity: 1, duration: 0.01, stagger: 0.015, ease: 'none' }, '-=0.2')
      .to('.hero-btn', { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' }, '-=0.4')
      .to('.floating-icon', { opacity: 1, scale: 1, duration: 0.8, stagger: 0.15, ease: 'back.out(1.5)' }, '-=0.6');

    // Continuous breathing effect for background scale
    gsap.to('.bg-shape-1', {
      scale: 1.2,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    gsap.to('.bg-shape-2', {
      scale: 1.15,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    // Gentle floating effect for glass icons
    gsap.to('.floating-icon', {
      y: '-=20',
      rotation: 'random(-15, 15)',
      duration: 'random(3, 6)',
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.15
    });

  }, { scope: container, dependencies: [isLoaded] });

  const handleMouseMove = (e) => {
    if (!container.current) return;

    // Calculate cursor position relative to the center of the window
    const xPos = (e.clientX / window.innerWidth - 0.5) * 150; // Max movement 75px
    const yPos = (e.clientY / window.innerHeight - 0.5) * 150;

    // Follow the mouse (Shape 1)
    gsap.to('.bg-shape-1', {
      x: xPos,
      y: yPos,
      duration: 1,
      ease: 'power2.out',
    });

    // Move opposite to the mouse (Shape 2)
    gsap.to('.bg-shape-2', {
      x: -xPos,
      y: -yPos,
      duration: 1.5,
      ease: 'power2.out',
    });

    // Subtle parallax for floating icons
    gsap.to('.floating-icon', {
      x: xPos * 0.6,
      y: yPos * 0.6,
      duration: 1.2,
      ease: 'power2.out',
    });
  };

  const titleText = "Soham Fegade";

  return (
    <section
      id="home"
      ref={container}
      onMouseMove={handleMouseMove}
      className="pt-32 pb-24 md:pt-48 md:pb-32 px-4 flex items-center justify-center min-h-screen relative overflow-hidden"
    >

      {/* Background Gradients */}
      <div className="bg-shape-1 absolute top-1/3 left-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-blue-600/30 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="bg-shape-2 absolute top-1/2 right-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-red-600/20 rounded-full blur-[150px] pointer-events-none translate-x-1/2 -translate-y-1/2" />

      {/* Floating Glass Icons */}
      <div className="floating-icon absolute top-[12%] left-[2%] md:top-[20%] md:left-[15%] pointer-events-none flex z-0">
        <div className="w-10 h-10 md:w-16 md:h-16 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center -rotate-12 opacity-30 md:opacity-100 transition-opacity">
          <Code className="text-blue-400 w-5 h-5 md:w-7 md:h-7" />
        </div>
      </div>

      <div className="floating-icon absolute top-[45%] left-[2%] md:left-[8%] pointer-events-none flex z-0">
        <div className="w-8 h-8 md:w-12 md:h-12 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center rotate-12 opacity-30 md:opacity-100 transition-opacity">
          <Layers className="text-yellow-400 w-4 h-4 md:w-5 md:h-5" />
        </div>
      </div>

      <div className="floating-icon absolute bottom-[18%] left-[2%] md:bottom-[20%] md:left-[20%] pointer-events-none flex z-0">
        <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center -rotate-6 opacity-30 md:opacity-100 transition-opacity">
          <Database className="text-emerald-400 w-5 h-5 md:w-6 md:h-6" />
        </div>
      </div>

      {/* Right Side Icons */}
      <div className="floating-icon absolute top-[15%] right-[2%] md:top-[20%] md:right-[15%] pointer-events-none flex z-0">
        <div className="w-10 h-10 md:w-14 md:h-14 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center rotate-6 opacity-30 md:opacity-100 transition-opacity">
          <Terminal className="text-pink-400 w-5 h-5 md:w-6 md:h-6" />
        </div>
      </div>

      <div className="floating-icon absolute top-[45%] right-[2%] md:right-[8%] pointer-events-none flex z-0">
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center -rotate-[15deg] opacity-30 md:opacity-100 transition-opacity">
          <Globe className="text-cyan-400 w-6 h-6 md:w-7 md:h-7" />
        </div>
      </div>

      <div className="floating-icon absolute bottom-[15%] right-[2%] md:bottom-[20%] md:right-[20%] pointer-events-none flex z-0">
        <div className="w-12 h-12 md:w-20 md:h-20 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center rotate-12 opacity-30 md:opacity-100 transition-opacity">
          <Cpu className="text-purple-400 w-6 h-6 md:w-8 md:h-8" />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center relative z-10">

        {/* Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {['AI & DS', 'Web Dev', 'Tech Enthusiast'].map((text, i) => (
            <div key={i} className="hero-pill px-5 py-1.5 rounded-full border border-gray-700/60 bg-[#1f1f1f]/60 backdrop-blur-sm text-gray-300 text-sm font-medium">
              {text}
            </div>
          ))}
        </div>

        {/* Title with Interactive Hover */}
        <h1 className="hero-title text-6xl sm:text-7xl md:text-[5.5rem] font-black tracking-tight text-white leading-tight mb-6 w-full flex justify-center flex-wrap gap-x-4 md:gap-x-6">
          {titleText.split(' ').map((word, wordIndex) => (
            <div key={wordIndex} className="inline-flex">
              {word.split('').map((char, index) => (
                <span
                  key={index}
                  className="inline-block transition-transform duration-300 hover:-translate-y-3 hover:scale-110 hover:text-blue-500 cursor-default"
                >
                  {char}
                </span>
              ))}
            </div>
          ))}
        </h1>

        {/* Terminal Typing Description */}
        <p className="hero-desc flex flex-wrap justify-center text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-medium leading-relaxed font-mono">
          {"I craft intelligent datacentric solutions and build dynamic web applications. Constantly pushing boundaries to learn and innovate.".split(' ').map((word, wordIndex) => (
            <span key={wordIndex} className="inline-flex mr-1.5 md:mr-2">
              {word.split('').map((char, charIndex) => (
                <span key={`${wordIndex}-${charIndex}`} className="typewriter-char opacity-0">
                  {char}
                </span>
              ))}
            </span>
          ))}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a href="#projects" className="hero-btn w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all flex items-center justify-center gap-2 group">
            View Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          {/* 
          <a href="/resume.pdf" download className="hero-btn w-full sm:w-auto px-8 py-3.5 bg-transparent hover:bg-[#1f1f1f] border border-gray-700 text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2">
            Download Resume
            <Download size={18} />
          </a> 
          */}
          
          <a href="#contact" className="hero-btn w-full sm:w-auto px-8 py-3.5 bg-transparent hover:bg-[#1f1f1f] border border-gray-700 text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2">
            Let's Connect
            <Mail size={18} />
          </a>
        </div>

      </div>

    </section>
  );
};

export default Hero;
