import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGraduationCap } from 'react-icons/fa';
import { Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const container = useRef(null);

  const educationData = [
    {
      institution: 'Datta Meghe College of Engineering',
      degree: 'Bachelor of Engineering - BE, Artificial intelligence and Data science',
      date: 'Sep 2024 – Apr 2028',
      details: 'CGPA: 8.9'
    },
    {
      institution: 'Godavari Foundations Dr. Ulhas Patil English Medium School, Savda',
      degree: 'HSC',
      date: 'May 2024',
      details: 'Grade: 76%'
    },
    {
      institution: 'Godavari Foundations Dr. Ulhas Patil English Medium School, Bhusawal',
      degree: 'SSC',
      date: 'May 2022',
      details: 'Grade: 93.8%'
    }
  ];

  useGSAP(() => {
    gsap.from('.education-heading', {
      scrollTrigger: { trigger: container.current, start: 'top 80%' },
      y: 30, opacity: 0, duration: 1, ease: 'power3.out'
    });

    gsap.from('.education-card', {
      scrollTrigger: { trigger: container.current, start: 'top 75%' },
      y: 40, opacity: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out'
    });

    // Animate timeline line segments
    const segments = container.current.querySelectorAll('.timeline-segment-fill');
    segments.forEach((segment) => {
      gsap.fromTo(
        segment,
        { scaleY: 0, transformOrigin: 'top center' },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: segment.parentElement, // Trigger from the track container 
            start: 'top 65%',
            end: 'bottom 65%',
            scrub: true,
          },
        }
      );
    });

    // Animate each timeline dot strictly targeting rendered DOM nodes
    const dots = container.current.querySelectorAll('.timeline-dot');
    dots.forEach((dot) => {
      gsap.fromTo(
        dot,
        { scale: 0, transformOrigin: 'center center' },
        {
          scale: 1,
          duration: 0.8,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: dot,
            start: 'top 70%',
          },
        }
      );
    });
  }, { scope: container });

  return (
    <section id="education" ref={container} className="py-24 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 education-heading">
          <h2 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 text-transparent bg-clip-text inline-block tracking-tight">Education</h2>
          <p className="text-gray-400 text-lg md:text-xl font-medium">Academic foundation in AI & DS and technology</p>
        </div>

        <div className="relative ml-8 md:ml-12 education-timeline"> 
          
          <div>
            {educationData.map((edu, index) => (
              <div key={index} className="relative mb-12">
                
                {/* Timeline Dot (Pops in) */}
                <div className="timeline-dot absolute left-[-29px] md:left-[-39px] top-[32px] md:top-[40px] w-4 h-4 rounded-full bg-indigo-500 border-4 border-[#0a0a0a] z-10 shadow-[0_0_15px_rgba(99,102,241,0.8)]"></div>

                {/* Line segment connecting to NEXT dot */}
                {index !== educationData.length - 1 && (
                  <div className="absolute left-[-22px] md:left-[-32px] top-[40px] md:top-[48px] bottom-[-88px] md:bottom-[-96px] w-[2px] bg-[#202020] z-0">
                    <div className="timeline-segment-fill absolute inset-0 bg-indigo-500 origin-top shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                  </div>
                )}

                {/* Main Card */}
                <div className="education-card glass-card p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start z-20 relative border border-[#27272a] hover:border-indigo-500/30 transition-colors duration-500">
                  {/* Icon Box */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#1e1c2e] border border-indigo-900/40 flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.15)] relative z-10">
                    <FaGraduationCap className="text-indigo-400" size={32} />
                  </div>

                  {/* Main Info */}
                  <div className="flex-grow w-full">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                          {edu.institution}
                        </h3>
                        <p className="text-gray-300 font-medium text-lg mb-4">
                          {edu.degree}
                        </p>
                      </div>

                      {/* Date and Grade */}
                      <div className="flex flex-col md:items-end gap-3 flex-shrink-0">
                        {edu.date && (
                          <div className="flex items-center gap-2 text-gray-400 font-medium text-sm">
                            <Calendar size={16} />
                            {edu.date}
                          </div>
                        )}
                        {edu.details && (
                          <div className="inline-block px-4 py-1.5 rounded-full border border-purple-900/50 bg-[#2d1b38]/40 text-purple-400 text-sm font-semibold shadow-inner">
                            {edu.details}
                          </div>
                        )}
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
