import React, { useRef } from 'react';
import { BookOpen, Target, Code2 } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from('.about-heading', {
      scrollTrigger: { trigger: container.current, start: 'top 80%' },
      y: 30, opacity: 0, duration: 1, ease: 'power3.out', stagger: 0.2
    });
    
    gsap.from('.about-text p', {
      scrollTrigger: { trigger: container.current, start: 'top 70%' },
      y: 30, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out'
    });

    gsap.from('.about-card', {
      scrollTrigger: { trigger: '.about-cards-container', start: 'top 80%' },
      y: 40, opacity: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out'
    });
  }, { scope: container });

  return (
    <section id="about" ref={container} className="py-24 px-6 bg-secondary/30 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 about-heading">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">About <span className="text-accent">Me</span></h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col gap-12">
          <div className="about-text space-y-6 text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto md:text-center text-left">
            <p>
              Hello! I'm Soham Fegade, a passionate and motivated 2nd-year student pursuing a degree in Artificial Intelligence and Data Science at Datta Meghe College of Engineering.
            </p>
            <p>
              I have a strong fondness for programming and problem-solving. I enjoy bringing ideas to life through code and constantly push myself to learn, improve, and take on new challenges.
            </p>
            <p>
              My goal is to grow into a skilled developer capable of creating impactful solutions that contribute to real-world innovation.
            </p>
          </div>

          <div className="about-cards-container grid md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
            <div className="about-card glass-card w-full p-6 flex gap-4 items-start hover:-translate-y-1 transition-transform">
              <div className="bg-purple-500/20 p-3 rounded-lg text-purple-400 shrink-0">
                <Code2 size={24} />
              </div>
              <div className="text-left w-full">
                <h3 className="text-white font-semibold text-xl mb-1">Passion</h3>
                <p className="text-gray-400 text-sm">Building clean, efficient, and dynamic web applications and software.</p>
              </div>
            </div>

            <div className="about-card glass-card w-full p-6 flex gap-4 items-start hover:-translate-y-1 transition-transform">
              <div className="bg-blue-500/20 p-3 rounded-lg text-blue-400 shrink-0">
                <Target size={24} />
              </div>
              <div className="text-left">
                <h3 className="text-white font-semibold text-xl mb-1">Goals</h3>
                <p className="text-gray-400 text-sm">Creating impactful solutions that contribute to technological innovation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
