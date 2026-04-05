import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {
  const container = useRef(null);

  useGSAP(() => {
    // Initial Load Animations
    gsap.from('.hero-badge', { y: 20, opacity: 0, duration: 0.8, delay: 0.2, ease: 'power3.out' });
    gsap.from('.hero-title', { y: 30, opacity: 0, duration: 1, delay: 0.4, ease: 'power3.out' });
    gsap.from('.hero-desc', { y: 20, opacity: 0, duration: 0.8, delay: 0.6, ease: 'power3.out' });
    gsap.from('.hero-buttons', { y: 20, opacity: 0, duration: 0.8, delay: 0.8, ease: 'power3.out' });
    gsap.from('.hero-image-container', { scale: 0.8, opacity: 0, duration: 1.2, delay: 0.5, ease: 'elastic.out(1, 0.7)' });
  }, { scope: container });

  return (
    <section id="home" ref={container} className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 flex items-center justify-center min-h-screen relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        <div className="flex-1 text-center md:text-left space-y-6">
          <div className="hero-badge inline-block px-4 py-1.5 rounded-full border border-gray-700 bg-secondary/50 backdrop-blur-sm text-accent text-sm font-medium mb-2">
            Aspiring AI & DS Engineer
          </div>
          <h1 className="hero-title text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">Soham</span>
          </h1>
          <p className="hero-desc text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
            I craft intelligent datacentric solutions and build dynamic web applications. Constantly pushing boundaries to learn and innovate.
          </p>
          <div className="hero-buttons flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
            <a href="#contact" className="px-8 py-3.5 bg-accent hover:bg-indigo-400 text-white font-semibold rounded-lg shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all flex items-center justify-center gap-2 group">
              Let's Talk
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#about" className="px-8 py-3.5 bg-secondary hover:bg-gray-800 border border-gray-700 text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2 text-center">
              View Profile
            </a>
          </div>
        </div>

        <div className="flex-1 relative group hero-image-container">
          <div className="absolute inset-0 bg-gradient-to-tr from-accent to-purple-600 rounded-3xl opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500"></div>
          <img 
            src="https://ik.imagekit.io/ns4gfx2mi/Personal/profile.jpeg" 
            alt="Soham Fegade" 
            className="relative z-10 rounded-3xl object-cover w-72 h-72 md:w-96 md:h-96 border border-gray-800 shadow-2xl rotate-2 group-hover:rotate-0 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
