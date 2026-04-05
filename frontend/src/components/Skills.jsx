import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const container = useRef(null);
  
  const skills = [
    { name: 'Python', level: 85 },
    { name: 'C', level: 75 },
    { name: 'Java', level: 70 },
    { name: 'HTML / CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Node.js', level: 70 },
    { name: 'Git & GitHub', level: 85 },
  ];

  useGSAP(() => {
    gsap.from('.skills-heading', {
      scrollTrigger: { trigger: container.current, start: 'top 80%' },
      y: 30, opacity: 0, duration: 1, ease: 'power3.out'
    });

    gsap.from('.skill-card', {
      scrollTrigger: { trigger: container.current, start: 'top 75%' },
      y: 40, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'back.out(1.7)'
    });

    // Animate width of the progress bars
    gsap.from('.skill-progress-bar', {
      scrollTrigger: { trigger: container.current, start: 'top 65%' },
      width: 0, duration: 1.5, stagger: 0.1, ease: 'power3.out'
    });
  }, { scope: container });

  return (
    <section id="skills" ref={container} className="py-24 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 skills-heading">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">My <span className="text-accent">Skills</span></h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="glass-card p-6 skill-card">
              <div className="flex justify-between items-center mb-3">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-accent font-semibold">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden">
                <div 
                  className="bg-accent h-2.5 rounded-full relative skill-progress-bar" 
                  style={{ width: `${skill.level}%` }}
                >
                  <div className="absolute inset-0 bg-white/20 w-full animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
