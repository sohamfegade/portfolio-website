import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaBriefcase } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

// Helper function to automatically calculate the duration based on start and end date strings
const calculateDuration = (startDateStr, endDateStr) => {
  const start = new Date(startDateStr);
  const end = endDateStr.toLowerCase() === 'present' ? new Date() : new Date(endDateStr);
  
  if (isNaN(start.getTime()) || isNaN(end.getTime())) return '';

  let months = (end.getFullYear() - start.getFullYear()) * 12;
  months -= start.getMonth();
  months += end.getMonth();
  
  // Inclusive month logic
  months += 1;

  if (months <= 0) return '1 mo';

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  let durationStr = '';
  if (years > 0) durationStr += `${years} yr${years > 1 ? 's' : ''} `;
  if (remainingMonths > 0) durationStr += `${remainingMonths} mo${remainingMonths > 1 ? 's' : ''}`;
  
  return durationStr.trim();
};

const Experience = () => {
  const container = useRef(null);

  const experienceData = [
    {
      role: 'Technical Team Member',
      company: 'SHAIDS DMCE',
      startDate: 'Jul 2025',
      endDate: 'Present',
      description: 'Responsible for managing and updating the official SHAIDS website. Work includes developing new features, maintaining UI/UX, fixing bugs, and ensuring smooth deployment and performance.',
    }
  ];

  useGSAP(() => {
    gsap.from('.experience-heading', {
      scrollTrigger: { trigger: container.current, start: 'top 80%' },
      y: 30, opacity: 0, duration: 1, ease: 'power3.out'
    });

    gsap.from('.experience-card', {
      scrollTrigger: { trigger: container.current, start: 'top 75%' },
      y: 40, opacity: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out'
    });
  }, { scope: container });

  return (
    <section id="experience" ref={container} className="py-24 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 experience-heading">
          <h2 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-orange-400 via-rose-400 to-red-500 text-transparent bg-clip-text inline-block tracking-tight">Experience</h2>
          <p className="text-gray-400 text-lg md:text-xl font-medium">My professional journey & Key Contributions</p>
        </div>

        <div className="space-y-6">
          {experienceData.map((exp, index) => (
            <div key={index} className="experience-card glass-card p-6 md:p-8 relative border border-[#27272a] hover:border-orange-500/30 transition-colors duration-500">
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-5 gap-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white flex items-start gap-4 w-full">
                    <FaBriefcase className="text-orange-400 shrink-0 mt-1" size={22} />
                    <span className="break-words leading-tight">{exp.role}</span>
                  </h3>
                  <p className="text-lg text-rose-400 font-medium mt-1 ml-9">{exp.company}</p>
                </div>
                
                {/* Dynamically Calculated Date Pill */}
                <div className="inline-block px-4 py-1.5 rounded-full border border-orange-900/40 bg-[#2d1b1b]/40 text-orange-400 text-sm font-semibold w-max shadow-inner md:ml-auto">
                  {exp.startDate} - {exp.endDate} · {calculateDuration(exp.startDate, exp.endDate)}
                </div>
              </div>
              
              <p className="text-gray-400 leading-relaxed ml-9 text-base md:text-lg">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
