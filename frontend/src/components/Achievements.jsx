import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCertificate, FaChalkboardTeacher, FaUserCircle, FaPlayCircle } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const Achievements = () => {
  const container = useRef(null);

  const achievements = [
    {
      id: 1,
      title: 'Git & GitHub Workshop Session Speaker',
      date: 'Beyond Bytes 4.0',
      organizer: 'SHAIDS DMCE',
      description: 'Conducted an engaging, hands-on workshop for students focusing on the fundamentals of version control, repository management, and collaborative software development. The session included live demonstrations of branching, merging, pull requests, and resolving merge conflicts using Git and GitHub, empowering students to confidently manage their open-source contributions and team projects.',
      videoUrl: 'https://ik.imagekit.io/ns4gfx2mi/Personal/BB%20vid1.mp4',
      images: [
        { url: 'https://ik.imagekit.io/ns4gfx2mi/Personal/BB%20certificate%20pic.png', caption: 'Certificate', icon: <FaCertificate size={32} /> },
        { url: 'https://ik.imagekit.io/ns4gfx2mi/Personal/BB%20imag1.jpeg', caption: 'Teaching Session', icon: <FaChalkboardTeacher size={32} /> }
      ]
    }
  ];

  useGSAP(() => {
    gsap.from('.achievements-heading', {
      scrollTrigger: { trigger: container.current, start: 'top 85%' },
      y: 30, opacity: 0, duration: 1, ease: 'power3.out'
    });
  }, { scope: container });

  return (
    <section id="achievements" ref={container} className="py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 achievements-heading">
          <h2 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 text-transparent bg-clip-text inline-block tracking-tight">Achievements</h2>
          <p className="text-gray-400 text-lg md:text-xl font-medium">Milestones and Recognitions</p>
        </div>

        <div className={`grid gap-8 ${achievements.length === 1 ? 'max-w-4xl mx-auto w-full' : 'lg:grid-cols-2'}`}>
          {achievements.map((achievement) => (
            <div key={achievement.id} className="achievement-card glass-card p-6 md:p-8 rounded-2xl border border-[#27272a] hover:border-amber-500/40 transition-all duration-500 flex flex-col h-full bg-[#171717]/50 backdrop-blur-sm">

              {/* Header Section */}
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-3 leading-tight">{achievement.title}</h3>
                <div className="flex flex-col sm:flex-row gap-3 mb-4 items-start sm:items-center">
                  <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 font-semibold text-sm rounded-full">{achievement.organizer}</span>
                  <span className="text-gray-500 text-xs font-medium uppercase tracking-wider">{achievement.date}</span>
                </div>
                <p className="text-gray-300 text-base leading-relaxed">
                  {achievement.description}
                </p>
              </div>

              {/* Media Section: Images on Left, Video on Right */}
              <div className="flex flex-col md:flex-row gap-8 mt-auto items-center">

                {/* Images Column (Left) */}
                <div className="flex flex-col gap-6 flex-1 justify-center">
                  {achievement.images.map((img, index) => (
                    <div key={index} className="flex flex-col group/img">
                      <div className="w-full rounded-xl bg-[#27272a]/20 border border-white/5 mb-3 overflow-hidden flex flex-col items-center justify-center relative shadow-inner">
                        {img.url ? (
                          <img src={img.url} alt={img.caption} className="w-full h-auto object-cover group-hover/img:scale-[1.02] transition-transform duration-500" />
                        ) : (
                          <div className="flex flex-col items-center justify-center text-gray-500 py-12">
                            <div className="opacity-40 mb-3 group-hover/img:opacity-100 group-hover/img:text-amber-400 transition-colors duration-300">
                              {img.icon}
                            </div>
                            <span className="text-xs font-medium text-center px-2">Upload {img.caption}</span>
                          </div>
                        )}
                      </div>
                      <span className="text-center text-gray-400 text-sm font-medium group-hover/img:text-amber-300 transition-colors">{img.caption}</span>
                    </div>
                  ))}
                </div>

                {/* Video Column (Right) */}
                <div className="w-full max-w-[320px] shrink-0 mx-auto rounded-2xl bg-[#171717] border-[6px] border-[#171717] shadow-xl overflow-hidden flex items-center justify-center relative group">
                  {achievement.videoUrl ? (
                    <video
                      src={achievement.videoUrl}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-auto block group-hover:scale-[1.02] transition-transform duration-700"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-gray-500">
                      <div className="opacity-40 mb-3 group-hover:opacity-100 group-hover:text-amber-400 transition-colors duration-300">
                        <FaPlayCircle size={48} />
                      </div>
                      <span className="text-sm font-medium text-center px-2">Upload Autoplay Video</span>
                    </div>
                  )}
                </div>

              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
