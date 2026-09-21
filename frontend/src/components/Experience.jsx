import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Helper function to automatically calculate the duration based on start and end date strings
const calculateDuration = (startDateStr, endDateStr) => {
  const start = new Date(startDateStr);
  const end = endDateStr.toLowerCase() === 'present' ? new Date() : new Date(endDateStr);

  if (isNaN(start.getTime()) || isNaN(end.getTime())) return '';

  let months = (end.getFullYear() - start.getFullYear()) * 12;
  months -= start.getMonth();
  months += end.getMonth();

  months += 1; // Inclusive month logic

  if (months <= 0) return '1 mo';

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  let durationStr = '';
  if (years > 0) durationStr += `${years} yr${years !== 1 ? 's' : ''} `;
  if (remainingMonths > 0) durationStr += `${remainingMonths} mo${remainingMonths !== 1 ? 's' : ''}`;

  return durationStr.trim() || '1 mo';
};

const calculateTotalDuration = (roles) => {
  if (!roles || roles.length === 0) return '';
  const earliestStart = roles[roles.length - 1].startDate;
  const latestEnd = roles[0].endDate;
  return calculateDuration(earliestStart, latestEnd);
};

const Experience = () => {
  const container = useRef(null);

  const experienceData = [
    {
      company: 'SHAIDS DMCE',
      location: 'Maharashtra, India · On-site',
      logo: 'https://ik.imagekit.io/ns4gfx2mi/Personal/shaids_dmce_logo.jpg',
      roles: [
        {
          title: 'Logistics Head',
          startDate: 'Jul 2026',
          endDate: 'Present',
          description: '',
          keyContributions: []
        },
        {
          title: 'Technical Team Member',
          startDate: 'Jul 2025',
          endDate: 'Jul 2026',
          description: 'Responsible for managing and updating the official SHAIDS website. Work includes developing new features, maintaining UI/UX, fixing bugs, and ensuring smooth deployment and performance.',
          keyContributions: []
        }
      ]
    },
    {
      company: 'Syntecxhub',
      type: 'Internship',
      location: 'India · Remote',
      logo: 'https://ik.imagekit.io/ns4gfx2mi/Personal/syntecxhub_logo.jpg',
      roles: [
        {
          title: 'Python Developer Intern',
          startDate: 'Jun 2026',
          endDate: 'Jul 2026',
          description: '',
          keyContributions: []
        }
      ]
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
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 experience-heading">
          <h2 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-orange-400 via-rose-400 to-red-500 text-transparent bg-clip-text inline-block tracking-tight">Experience</h2>
          <p className="text-gray-400 text-lg md:text-xl font-medium">My professional journey</p>
        </div>

        <div className="space-y-4">
          {experienceData.map((exp, expIdx) => {
            const hasMultipleRoles = exp.roles.length > 1;

            return (
              <div key={expIdx} className="experience-card glass-card p-6 md:p-8 rounded-2xl border border-[#27272a] hover:border-orange-500/40 transition-all duration-500 flex gap-5 md:gap-6 bg-[#171717]/50 backdrop-blur-sm mb-6 shadow-xl">

                {/* Logo Section */}
                <div className="shrink-0">
                  {exp.logo ? (
                    <img src={exp.logo} alt={exp.company} className="w-12 h-12 md:w-14 md:h-14 object-cover rounded-lg border border-white/10 shadow-md" />
                  ) : (
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-600/40 rounded-lg flex items-center justify-center border border-white/10 shadow-md">
                      <span className="text-gray-300 font-bold text-xl">{exp.company.charAt(0)}</span>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="flex-1 flex flex-col">

                  {hasMultipleRoles ? (
                    /* MULTIPLE ROLES LAYOUT */
                    <>
                      <div className="mb-6">
                        <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">{exp.company}</h3>
                        <div className="text-gray-400 text-sm font-medium mt-2">{calculateTotalDuration(exp.roles)}</div>
                        <div className="text-gray-500 text-xs font-medium uppercase tracking-wider mt-1">{exp.location}</div>
                      </div>

                      <div className="relative ml-1.5 pl-6 pb-2 space-y-8 mt-4">
                        {exp.roles.map((role, roleIdx) => (
                          <div key={roleIdx} className="relative">
                            
                            {/* Connecting Line (Only if not the last item) */}
                            {roleIdx !== exp.roles.length - 1 && (
                              <div className="absolute w-[2px] bg-orange-500/60 top-[12px] -left-[25px] h-[calc(100%+32px)] shadow-[0_0_15px_rgba(249,115,22,0.5)] z-0"></div>
                            )}

                            {/* Dot on the timeline */}
                            <div className="absolute w-3 h-3 bg-orange-500 rounded-full -left-[30px] top-1.5 ring-[6px] ring-[#171717] shadow-[0_0_10px_rgba(249,115,22,0.8)] z-10"></div>
                            
                            <h4 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-tight">{role.title}</h4>
                            <div className="text-gray-400 text-sm mt-1 font-medium">
                              {role.startDate} - {role.endDate} · {calculateDuration(role.startDate, role.endDate)}
                            </div>

                            {role.description && (
                              <p className="text-gray-300 text-base leading-relaxed mt-3">
                                {role.description}
                              </p>
                            )}

                            {role.keyContributions && role.keyContributions.length > 0 && (
                              <div className="mt-3 flex flex-col gap-2">
                                {role.keyContributions.map((contrib, idx) => (
                                  <div key={idx} className="flex gap-2 text-sm text-gray-300 items-start">
                                    <span className="shrink-0 mt-0.5">💎</span>
                                    <span>{contrib}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    /* SINGLE ROLE LAYOUT */
                    <div className="flex flex-col pb-2">
                      <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-tight">{exp.roles[0].title}</h3>
                      <div className="text-gray-300 text-base mt-2 font-medium">
                        {exp.company}{exp.type ? ` · ${exp.type}` : ''}
                      </div>
                      <div className="text-gray-400 text-sm mt-1 font-medium">
                        {exp.roles[0].startDate} - {exp.roles[0].endDate} · {calculateDuration(exp.roles[0].startDate, exp.roles[0].endDate)}
                      </div>
                      <div className="text-gray-500 text-xs font-medium uppercase tracking-wider mt-1">{exp.location}</div>

                      {exp.roles[0].description && (
                        <p className="text-gray-300 text-base leading-relaxed mt-3">
                          {exp.roles[0].description}
                        </p>
                      )}

                      {exp.roles[0].keyContributions && exp.roles[0].keyContributions.length > 0 && (
                        <div className="mt-3 flex flex-col gap-2">
                          {exp.roles[0].keyContributions.map((contrib, idx) => (
                            <div key={idx} className="flex gap-2 text-sm text-gray-300 items-start">
                              <span className="shrink-0 mt-0.5">💎</span>
                              <span>{contrib}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
