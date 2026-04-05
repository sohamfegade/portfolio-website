import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGithub, FaExternalLinkAlt, FaCode, FaCheckCircle } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const container = useRef(null);

  const project = {
    title: 'EventHub',
    date: 'Feb 2026 – Mar 2026',
    association: 'Associated with Datta Meghe College of Engineering CIDCO Sector III Airoli Navi Mumbai 400 708',
    intro: 'EventHub is an innovative web application developed as a Sem IV Mini Project at Datta Meghe College of Engineering to solve the pressing inefficiencies in college event administration. The project was conceived to combat the challenges of manual management via spreadsheets and physical forms, which frequently lead to data errors, duplicate entries, and communication gaps between organizers and students.',
    features: [
      { name: 'Centralized Platform', desc: 'A unified digital space for students to browse seminars and workshops, and seamlessly register online.' },
      { name: 'Smart Ticketing & Attendance', desc: 'Generates custom QR-based digital tickets and features a scanning module to automate venue attendance.' },
      { name: 'Automated Certificates', desc: 'A dynamic generator that allows organizers to upload templates (via Cloudinary) and automatically populate them by adjusting participant names and fonts.' },
      { name: 'Real-Time Announcements', desc: 'A dedicated notification system to keep students instantly updated on schedules and registration deadlines.' }
    ],
    technicalDetails: "The application utilizes a secure JWT and OTP-based authentication process. Depending on the user's classification (Regular User or Admin/Organizer), the app routes them to dynamically adjusted, role-based dashboards to either register for events or manage administrative tasks.",
    impact: "Developing EventHub was an intense, collaborative journey that honed our full-stack development skills using the MERN stack (MongoDB, Express.js, React.js, Node.js) under real-world constraints. The project provides a practical solution to eliminate data redundancy, streamline campus coordination, and minimize administrative effort. It stands as a testament to our team's innovative spirit and our drive to create technology-driven solutions that enhance institutional efficiency.",
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'Cloudinary'],
    contributors: [
      { name: 'Atharva Jadhav', image: 'https://ik.imagekit.io/ns4gfx2mi/Personal/atharva.jpg?updatedAt=1775370006610', github: 'https://github.com/atharvajadhav2205' },
      { name: 'Harsh Bhendarkar', image: 'https://ik.imagekit.io/ns4gfx2mi/Personal/harsh.jpg?updatedAt=1775370006449', github: 'https://github.com/Bharsh25' },
      { name: 'Shivam Awate', image: 'https://ik.imagekit.io/ns4gfx2mi/Personal/shivam.jpg?updatedAt=1775370006245', github: 'https://github.com/ShivamAwate0903' }
    ],
    github: 'https://github.com/sohamfegade/Event--Management--System',
    live: 'https://eventhubdmce.vercel.app/'
  };

  useGSAP(() => {
    gsap.from('.projects-heading', {
      scrollTrigger: { trigger: container.current, start: 'top 80%' },
      y: 30, opacity: 0, duration: 1, ease: 'power3.out'
    });

    gsap.from('.project-card', {
      scrollTrigger: { trigger: container.current, start: 'top 75%' },
      y: 50, opacity: 0, duration: 1, ease: 'power2.out'
    });
  }, { scope: container });

  return (
    <section id="projects" ref={container} className="py-24 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 projects-heading">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4"><span className="text-accent">Featured</span> Project</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="project-card glass-card rounded-2xl overflow-hidden shadow-2xl relative border border-gray-700/50">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-purple-500"></div>

          <div className="p-8 md:p-12 border-b border-gray-800">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
              <div>
                <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-2 flex items-center gap-4">
                  <img src="https://ik.imagekit.io/ns4gfx2mi/Mini%20Project/logo.png?updatedAt=1775288960409" alt="EventHub Logo" className="w-16 h-16 object-contain" />
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base font-medium">{project.association}</p>
              </div>
              <div className="inline-block px-5 py-2 rounded-full border border-gray-700 bg-secondary/80 text-gray-300 text-sm font-semibold w-max whitespace-nowrap shadow-inner">
                {project.date}
              </div>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {project.intro}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((tech, i) => (
                <span key={i} className="text-sm font-bold text-accent bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-full shadow-sm">
                  {tech}
                </span>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-white border-b border-gray-700 pb-2 mb-4 inline-block">Key Features</h4>
                  <ul className="space-y-4">
                    {project.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <FaCheckCircle className="text-purple-400 mt-1 shrink-0" size={16} />
                        <p className="text-gray-400 text-sm leading-relaxed">
                          <strong className="text-gray-200">{feat.name}:</strong> {feat.desc}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-bold text-white border-b border-gray-700 pb-2 mb-4 inline-block">Technical Implementation</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.technicalDetails}
                  </p>
                </div>

                <div className="bg-primary/50 p-6 rounded-xl border border-gray-800">
                  <h4 className="text-lg font-bold text-accent mb-2">Impact & Learning</h4>
                  <p className="text-gray-400 text-sm leading-relaxed italic">
                    "{project.impact}"
                  </p>
                </div>
              </div>
            </div>

            {/* Other Contributors Section */}
            <div className="mt-8 mb-4">
              <h4 className="text-2xl font-bold text-gray-200 mb-4 tracking-tight">Other contributors</h4>
              <div className="flex -space-x-4">
                {project.contributors.map((contributor, index) => (
                  <a
                    key={index}
                    href={contributor.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-0 hover:z-10"
                  >
                    <img
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full border-[3px] border-[#1e1e1e] object-cover hover:-translate-y-2 hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer"
                      src={contributor.image}
                      alt={contributor.name}
                      title={`${contributor.name} - View GitHub`}
                    />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-6 mt-6 border-t border-gray-800">
              <a href={project.github} className="px-6 py-2.5 bg-gray-800 hover:bg-gray-700 border border-gray-600 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 group">
                <FaGithub size={18} className="group-hover:scale-110 transition-transform" /> View Source Code
              </a>
              <a href={project.live} className="px-6 py-2.5 bg-accent hover:bg-indigo-400 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 group shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                <FaExternalLinkAlt size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" /> Live Application
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
