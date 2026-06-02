import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGithub, FaExternalLinkAlt, FaCheckCircle, FaDownload } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const container = useRef(null);
  const [expanded, setExpanded] = useState({});

  const projects = [
    {
      id: 1,
      title: 'EventHub - Event Management System',
      date: 'Feb 2026 – Mar 2026',
      association: 'Datta Meghe College of Engineering',
      intro: 'A central platform to seamlessly browse, register, and manage campus events with digital ticketing and automated attendance.',
      features: [
        { name: 'Centralized Platform', desc: 'A unified digital space for students to browse seminars and workshops, and seamlessly register online.' },
        { name: 'Smart Ticketing & Attendance', desc: 'Generates custom QR-based digital tickets and features a scanning module to automate venue attendance.' },
        { name: 'Automated Certificates', desc: 'A dynamic generator that allows organizers to upload templates (via Cloudinary) and automatically populate them by adjusting participant names and fonts.' },
        { name: 'Real-Time Announcements', desc: 'A dedicated notification system to keep students instantly updated on schedules and registration deadlines.' }
      ],
      technicalDetails: "The application utilizes a secure JWT and OTP-based authentication process. Depending on the user's classification (Regular User or Admin/Organizer), the app routes them to dynamically adjusted, role-based dashboards to either register for events or manage administrative tasks.",
      impact: "Developing EventHub was an intense, collaborative journey that honed our full-stack development skills using the MERN stack (MongoDB, Express.js, React.js, Node.js) under real-world constraints. The project provides a practical solution to eliminate data redundancy, streamline campus coordination, and minimize administrative effort.",
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'Cloudinary'],
      contributors: [
        { name: 'Atharva Jadhav', image: 'https://ik.imagekit.io/ns4gfx2mi/Personal/atharva.jpg?updatedAt=1775370006610', github: 'https://github.com/atharvajadhav2205' },
        { name: 'Harsh Bhendarkar', image: 'https://ik.imagekit.io/ns4gfx2mi/Personal/harsh.jpg?updatedAt=1775370006449', github: 'https://github.com/Bharsh25' },
        { name: 'Shivam Awate', image: 'https://ik.imagekit.io/ns4gfx2mi/Personal/shivam.jpg?updatedAt=1775370006245', github: 'https://github.com/ShivamAwate0903' }
      ],
      github: 'https://github.com/sohamfegade/Event--Management--System',
      actionLink: 'https://eventhubdmce.vercel.app/',
      actionType: 'live',
      image: 'https://ik.imagekit.io/ns4gfx2mi/Mini%20Project/logo.png?updatedAt=1775288960409'
    },
    {
      id: 2,
      title: 'ZapIt – High-Speed File & App Sharing Application',
      date: 'Aug 2026 – Sep 2026',
      association: 'Independent Project',
      intro: 'A fast, secure, and internet-free file sharing application that enables users to transfer files, media, documents, and applications directly between Android devices using Wi-Fi Direct technology.',
      features: [
        { name: 'Lightning-Fast File Transfers', desc: 'Utilizes Wi-Fi Direct technology to achieve significantly higher transfer speeds compared to traditional Bluetooth sharing.' },
        { name: 'App & File Sharing', desc: 'Supports seamless transfer of APK files, images, videos, audio files, documents, and other media formats.' },
        { name: 'Internet-Free Connectivity', desc: 'Establishes direct device-to-device connections without requiring mobile data, Wi-Fi routers, or internet access.' },
        { name: 'User-Friendly Interface', desc: 'Built with Flutter to provide a clean, intuitive, and responsive user experience across Android devices.' },
        { name: 'Secure Peer-to-Peer Communication', desc: 'Files are transferred directly between connected devices, ensuring privacy and reducing dependency on third-party servers.' }
      ],
      technicalDetails: "ZapIt is developed using Flutter and Dart, leveraging Android's Wi-Fi Direct APIs for peer discovery, connection establishment, and high-speed data transfer. The application includes device scanning, connection management, file selection, transfer progress monitoring, and transfer status notifications. The architecture focuses on performance, scalability, and smooth user interaction while handling large file transfers efficiently.",
      impact: "Developing ZapIt provided valuable hands-on experience in mobile application development, wireless networking, peer-to-peer communication, and Flutter application architecture. The project strengthened my understanding of Android networking concepts, state management, UI/UX design, and real-world file transfer mechanisms while building a practical solution for fast and reliable offline sharing.",
      tech: ['Flutter', 'Dart', 'Android Studio', 'Wi-Fi Direct', 'Android SDK'],
      contributors: [], // Left empty so the section hides automatically
      github: 'https://github.com/sohamfegade/ZapIt', // Update with actual GitHub link if available
      actionLink: '/ZapIt.apk', // Place your APK file in the public folder
      actionType: 'download',
      image: null // Uses placeholder styling if no image is provided
    }
  ];

  const toggleExpand = (id) => {
    setExpanded(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  useGSAP(() => {
    gsap.from('.projects-heading', {
      scrollTrigger: { trigger: container.current, start: 'top 80%' },
      y: 30, opacity: 0, duration: 1, ease: 'power3.out'
    });
  }, { scope: container });

  return (
    <section id="projects" ref={container} className="py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 projects-heading">
          <h2 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-500 text-transparent bg-clip-text inline-block tracking-tight">Projects</h2>
          <p className="text-gray-400 text-lg md:text-xl font-medium">Some of my best work</p>
        </div>

        <div className={`grid gap-8 ${projects.length === 1 ? 'max-w-3xl mx-auto w-full' : 'lg:grid-cols-2'}`}>
          {projects.map((proj) => {
            const isExpanded = expanded[proj.id];

            return (
              <div key={proj.id} className={`project-wrapper ${isExpanded ? 'lg:col-span-2' : ''}`}>
                <div
                  className={`project-card glass-card p-6 md:p-8 flex flex-col transition-all duration-500 cursor-pointer border border-[#27272a] hover:border-fuchsia-500/40 h-full`}
                  onClick={() => toggleExpand(proj.id)}
                >
                  {/* Header Section */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-4">
                      {proj.image ? (
                        <div className="shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-2 flex items-center justify-center overflow-hidden shadow-lg">
                          <img src={proj.image} alt={`${proj.title} Logo`} className="w-full h-full object-contain" />
                        </div>
                      ) : (
                        <div className="shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl bg-purple-900/20 backdrop-blur-sm border border-purple-900/40 flex items-center justify-center shadow-lg">
                          <span className="text-purple-400 font-bold text-xl">{proj.title.charAt(0)}</span>
                        </div>
                      )}
                      <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">{proj.title}</h3>
                    </div>
                    <div className="flex items-center gap-3">
                      <a href={proj.github} onClick={e => e.stopPropagation()} target="_blank" rel="noreferrer" className="p-2 rounded-full border border-[#27272a] bg-[#1a1a1a] text-gray-400 hover:text-white hover:border-gray-500 transition-colors shrink-0">
                        <FaGithub size={20} />
                      </a>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-4">
                    <div className="text-gray-400 font-medium">{proj.date}</div>
                  </div>

                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {proj.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 text-xs font-semibold rounded-full border border-purple-900/40 bg-purple-900/20 text-purple-300">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Intro Description */}
                  <p className="text-gray-300 text-base leading-relaxed mb-6">
                    {proj.intro}
                  </p>

                  {/* Expanded Details */}
                  <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[2000px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      {/* Features */}
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-xl font-bold text-white border-b border-gray-700 pb-2 mb-4 inline-block">Key Features</h4>
                          <ul className="space-y-4">
                            {proj.features.map((feat, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <FaCheckCircle className="text-pink-500 mt-1 shrink-0" size={16} />
                                <p className="text-gray-400 text-sm leading-relaxed">
                                  <strong className="text-gray-200">{feat.name}:</strong> {feat.desc}
                                </p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Tech Implementation & Impact */}
                      <div className="space-y-8">
                        <div>
                          <h4 className="text-xl font-bold text-white border-b border-gray-700 pb-2 mb-4 inline-block">Technical Implementation</h4>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {proj.technicalDetails}
                          </p>
                        </div>

                        <div className="bg-[#2d1b38]/40 p-6 rounded-xl border border-purple-900/30">
                          <h4 className="text-lg font-bold text-fuchsia-400 mb-2">Impact & Learning</h4>
                          <p className="text-gray-400 text-sm leading-relaxed italic">
                            "{proj.impact}"
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Contributors & Link */}
                    <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-800 gap-6">
                      
                      {/* Conditional Render for Contributors */}
                      {proj.contributors && proj.contributors.length > 0 ? (
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                          <h4 className="text-lg font-bold text-gray-200 mb-3 tracking-tight">Other Contributors</h4>
                          <div className="flex -space-x-4 justify-center md:justify-start">
                            {proj.contributors.map((contributor, index) => (
                              <a
                                key={index}
                                href={contributor.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative z-0 hover:z-10"
                                onClick={e => e.stopPropagation()}
                              >
                                <img
                                  className="w-12 h-12 rounded-full border-2 border-[#1e1e1e] object-cover hover:-translate-y-1 hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer"
                                  src={contributor.image}
                                  alt={contributor.name}
                                  title={`${contributor.name} - View GitHub`}
                                />
                              </a>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="hidden md:block"></div> /* Empty div to maintain flex spacing */
                      )}

                      <div className="flex items-center gap-4 w-full md:w-auto justify-center md:justify-end">
                        {proj.actionType === 'download' ? (
                          <a href={proj.actionLink} download onClick={e => e.stopPropagation()} className="px-6 py-2.5 bg-purple-600 hover:bg-purple-500 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(168,85,247,0.3)] w-full md:w-auto">
                            <FaDownload size={16} /> Download APK
                          </a>
                        ) : (
                          <a href={proj.actionLink} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()} className="px-6 py-2.5 bg-purple-600 hover:bg-purple-500 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(168,85,247,0.3)] w-full md:w-auto">
                            <FaExternalLinkAlt size={16} /> Live Demo
                          </a>
                        )}
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
