import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGraduationCap } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const container = useRef(null);

  const educationData = [
    {
      institution: 'Datta Meghe College of Engineering CIDCO Sector III Airoli Navi Mumbai 400 708',
      degree: 'Bachelor of Engineering - BE, Artificial intelligence and Data science',
      date: 'Sep 2024 – Apr 2028',

    },
    {
      institution: 'Godavari Foundations Dr. Ulhas Patil English Medium School, Savda',
      degree: 'HSC',
      date: 'May 2024',
      details: ''
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
  }, { scope: container });

  return (
    <section id="education" ref={container} className="py-24 px-6 overflow-hidden bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 education-heading">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="relative border-l border-gray-800 ml-3 md:ml-6 pl-8 md:pl-10 py-4 space-y-12">
          {educationData.map((edu, index) => (
            <div key={index} className="education-card relative glass-card p-6 md:p-8">
              <div className="absolute w-4 h-4 bg-accent rounded-full -left-[40.5px] md:-left-[48.5px] top-8 shadow-[0_0_10px_rgba(99,102,241,0.8)]"></div>

              <div className="flex flex-col mb-4 gap-2">
                <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                  <FaGraduationCap className="text-accent shrink-0" size={24} />
                  {edu.institution}
                </h3>
                <p className="text-lg text-purple-400 font-medium leading-snug">
                  {edu.degree}
                </p>
                {edu.date && (
                  <div className="inline-block mt-2 px-4 py-1.5 rounded-full border border-gray-700 bg-secondary/50 text-gray-300 text-sm font-medium w-max">
                    {edu.date}
                  </div>
                )}
              </div>
              {edu.details && (
                <p className="text-gray-400 leading-relaxed mt-2 font-medium">
                  {edu.details.includes('Skills:') ? (
                    <>
                      <strong className="text-gray-300">Skills:</strong> {edu.details.replace('Skills: ', '')}
                    </>
                  ) : (
                    edu.details
                  )}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
