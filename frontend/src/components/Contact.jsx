import React from 'react';
import { Mail, Phone, MapPin, Briefcase, Users, Code } from 'lucide-react';
import { FaLinkedin, FaGithub, FaYoutube, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const email = "sohamfegade3@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/soham-fegade/"; // User will replace this correctly
  const mobile = "+91 9284922350";

  return (
    <section id="contact" className="py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-rose-400 via-pink-400 to-orange-400 text-transparent bg-clip-text inline-block tracking-tight">Get in Touch</h2>
          <p className="text-gray-400 text-lg md:text-xl font-medium">Let's collaborate and build something amazing together</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Column: Contact Info */}
          <div className="flex flex-col gap-10">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

              <div className="glass-card p-6 flex items-center gap-6 border border-transparent hover:border-rose-500/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#2d1b1b] border border-rose-900/30 flex items-center justify-center flex-shrink-0 shadow-[0_0_10px_rgba(225,29,72,0.1)]">
                  <Mail className="text-rose-500" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">Email</h4>
                  <p className="text-gray-400">{email}</p>
                </div>
              </div>

              <div className="glass-card p-6 flex items-center gap-6 border border-transparent hover:border-orange-500/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#2d1b1b] border border-orange-900/30 flex items-center justify-center flex-shrink-0 shadow-[0_0_10px_rgba(249,115,22,0.1)]">
                  <Phone className="text-orange-500" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">Phone</h4>
                  <p className="text-gray-400">{mobile}</p>
                </div>
              </div>

              <div className="glass-card p-6 flex items-center gap-6 border border-transparent hover:border-pink-500/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#2d1b1b] border border-pink-900/30 flex items-center justify-center flex-shrink-0 shadow-[0_0_10px_rgba(236,72,153,0.1)]">
                  <MapPin className="text-pink-500" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">Location</h4>
                  <p className="text-gray-400">Airoli, Navi Mumbai, Maharashtra</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Connect on Social</h3>
              <div className="flex flex-wrap gap-4">
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-[#1a1a1a] hover:-translate-y-1 transition-all duration-300">
                  <FaLinkedin className="text-gray-400 hover:text-white transition-colors" size={20} />
                </a>
                <a href="https://github.com/sohamfegade" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-[#1a1a1a] hover:-translate-y-1 transition-all duration-300">
                  <FaGithub className="text-gray-400 hover:text-white transition-colors" size={20} />
                </a>
                <a href="https://www.instagram.com/sohamfegade/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-[#1a1a1a] hover:-translate-y-1 transition-all duration-300">
                  <FaInstagram className="text-gray-400 hover:text-white transition-colors" size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Let's Work Together Box */}
          <div className="glass-card p-8 md:p-10 flex flex-col h-full">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Let's Work Together</h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              I'm always open to discussing new opportunities, innovative projects, and ways to contribute to meaningful technological solutions. Whether you're looking for a developer, need consultation, or just want to connect, I'd love to hear from you.
            </p>

            <div className="space-y-4 mb-10 flex-grow">
              {/* Opportunities Card */}
              <div className="border border-rose-900/30 bg-[#2d1b1b]/30 rounded-xl p-5 hover:border-rose-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <Briefcase size={20} className="text-[#a47b5f]" />
                  <h4 className="text-rose-500 font-semibold text-lg">Open for Opportunities</h4>
                </div>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  Full-time positions, internships, and freelance projects
                </p>
              </div>

              {/* Collaboration Card */}
              <div className="border border-orange-900/30 bg-[#2d1b1b]/30 rounded-xl p-5 hover:border-orange-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <Users size={20} className="text-yellow-500" />
                  <h4 className="text-orange-500 font-semibold text-lg">Collaboration Ready</h4>
                </div>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  Open source projects, hackathons, and technical discussions
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-4 mt-auto">
              <a
                href={`mailto:${email}`}
                className="w-full bg-rose-600/50 hover:bg-rose-600/70 border border-rose-500/50 hover:border-rose-400 text-white font-semibold py-4 rounded-xl shadow-[0_0_15px_rgba(225,29,72,0.2)] hover:shadow-[0_0_25px_rgba(225,29,72,0.4)] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail size={20} /> Send Email
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-transparent border border-[#27272a] hover:bg-[#1a1a1a] text-white font-semibold py-4 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <FaLinkedin size={20} /> Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
