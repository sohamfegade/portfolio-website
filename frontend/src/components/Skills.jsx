import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Database, Layout, Server, Settings, MessageSquare, Brain, Network, Key, Zap, Layers } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const container = useRef(null);
  const [activeTab, setActiveTab] = useState('Languages');

  const skillsCategories = {
    'Languages': [
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    ],
    'Frontend': [
      { name: 'HTML / CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
      { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'GSAP', icon: <Zap size={36} className="text-green-500" /> },
    ],
    'Backend': [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'JWT', icon: <Key size={36} className="text-purple-400" /> },
    ],
    'Database': [
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    ],
    'Tools': [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    ],
    'Other': [
      { name: 'Communication', icon: <MessageSquare size={36} className="text-cyan-400" /> },
      { name: 'Problem Solving', icon: <Brain size={36} className="text-emerald-400" /> },
      { name: 'REST API', icon: <Network size={36} className="text-teal-400" /> },
    ]
  };

  const tabs = [
    { id: 'Languages', icon: <Code size={18} /> },
    { id: 'Frontend', icon: <Layout size={18} /> },
    { id: 'Backend', icon: <Server size={18} /> },
    { id: 'Database', icon: <Database size={18} /> },
    { id: 'Tools', icon: <Settings size={18} /> },
    { id: 'Other', icon: <Layers size={18} /> }
  ];

  useGSAP(() => {
    gsap.from('.skills-heading', {
      scrollTrigger: { trigger: container.current, start: 'top 80%' },
      y: 30, opacity: 0, duration: 1, ease: 'power3.out'
    });

    gsap.from('.skills-tabs', {
      scrollTrigger: { trigger: container.current, start: 'top 75%' },
      y: 20, opacity: 0, duration: 0.8, ease: 'power2.out'
    });
  }, { scope: container });

  // Animate cards on tab change
  useGSAP(() => {
    gsap.fromTo('.skill-card', 
      { opacity: 0, scale: 0.9 }, 
      { opacity: 1, scale: 1, duration: 0.4, stagger: 0.05, ease: 'back.out(1.5)', clearProps: 'all' }
    );
  }, { dependencies: [activeTab], scope: container });

  return (
    <section id="skills" ref={container} className="py-24 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-16 skills-heading">
          <h2 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-500 text-transparent bg-clip-text inline-block tracking-tight">Core Skills</h2>
          <p className="text-gray-400 text-lg md:text-xl font-medium">Technologies and tools I work with to bring ideas to life</p>
        </div>

        {/* Tabs */}
        <div className="skills-tabs flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
          {tabs.map((tab) => {
            if (!skillsCategories[tab.id]) return null;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm md:text-base border transition-all duration-300 ${
                  isActive 
                  ? 'bg-cyan-600 border-cyan-500 text-white shadow-[0_4px_20px_rgba(6,182,212,0.4)]' 
                  : 'bg-[#171717] border-[#27272a] text-gray-400 hover:text-white hover:border-cyan-500/50'
                }`}
              >
                {tab.icon}
                {tab.id}
              </button>
            );
          })}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillsCategories[activeTab]?.map((skill, index) => (
            <div key={index} className="skill-card glass-card p-8 flex flex-col items-center justify-center gap-4 hover:-translate-y-2 transition-transform duration-300 border border-[#27272a] hover:border-emerald-500/30">
              <div className="w-16 h-16 rounded-2xl bg-[#132a2a] border border-cyan-900/30 flex items-center justify-center shadow-inner">
                {typeof skill.icon === 'string' ? (
                  <img src={skill.icon} alt={skill.name} className="w-8 h-8 md:w-10 md:h-10 object-contain" style={{ filter: skill.name === 'Next.js' || skill.name === 'Express.js' || skill.name === 'GitHub' ? 'invert(1) drop-shadow(0 0 10px rgba(255,255,255,0.2))' : 'none' }} />
                ) : (
                  skill.icon
                )}
              </div>
              <span className="text-white font-bold text-center text-sm md:text-lg leading-tight">{skill.name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
