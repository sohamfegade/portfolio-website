import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaBriefcase } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

// Helper function to dynamically calculate the duration
const calculateDuration = (startDateStr) => {
  const start = new Date(startDateStr);
  const now = new Date();

  // Calculate total months difference
  let totalMonths = (now.getFullYear() - start.getFullYear()) * 12;
  totalMonths -= start.getMonth();
  totalMonths += now.getMonth();
  
  // Add 1 to make it inclusive (e.g., July to Present counts July as a full month)
  totalMonths += 1;

  // Format the output
  if (totalMonths < 12) {
    return `${totalMonths} mo${totalMonths > 1 ? 's' : ''}`;
  }

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  let duration = `${years} yr${years > 1 ? 's' : ''}`;
  if (months > 0) {
    duration += ` ${months} mo${months > 1 ? 's' : ''}`;
  }

  return duration;
};

const Experience = () => {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from('.experience-heading', {
      scrollTrigger: { trigger: container.current, start: 'top 80%' },
      y: 30, opacity: 0, duration: 1, ease: 'power3.out'
    });

    gsap.from('.experience-card', {
      scrollTrigger: { trigger: container.current, start: 'top 75%' },
      y: 40, opacity: 0, duration: 0.8, ease: 'power2.out'
    });
  }, { scope: container });

  return (
    <section id="experience" ref={container} className="py-24 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 experience-heading">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="relative border-l border-gray-800 ml-3 md:ml-6 pl-8 md:pl-10 py-4">
          <div className="absolute w-4 h-4 bg-accent rounded-full -left-[8.5px] top-8 shadow-[0_0_10px_rgba(99,102,241,0.8)]"></div>

          <div className="experience-card glass-card p-6 md:p-8 relative">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white flex items-start gap-3 w-full">
                  <FaBriefcase className="text-accent shrink-0 mt-1" size={20} />
                  <span className="break-words leading-tight">Technical Team Member</span>
                </h3>
                <p className="text-lg text-purple-400 font-medium mt-1">SHAIDS DMCE</p>
              </div>
              <div className="inline-block px-4 py-1.5 rounded-full border border-gray-700 bg-secondary/50 text-gray-300 text-sm font-medium w-max">
                {/* Dynamically calculating from July 2025 */}
                Jul 2025 - Present · {calculateDuration('2025-07-01')}
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Responsible for managing and updating the official SHAIDS website. Work includes developing new features, maintaining UI/UX, fixing bugs, and ensuring smooth deployment and performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
