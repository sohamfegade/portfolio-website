import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#111] border-t border-[#27272a] pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-12 mb-16">

          {/* Left Column: Brand & Bio */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Soham Fegade</h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-sm">
              Artificial Intelligence & Data Science Engineer
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/soham-fegade/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#27272a] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#1a1a1a] hover:-translate-y-1 transition-all duration-300">
                <FaLinkedin size={18} />
              </a>
              <a href="https://github.com/sohamfegade" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#27272a] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#1a1a1a] hover:-translate-y-1 transition-all duration-300">
                <FaGithub size={18} />
              </a>
              <a href="https://www.instagram.com/sohamfegade/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#27272a] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#1a1a1a] hover:-translate-y-1 transition-all duration-300">
                <FaInstagram size={18} />
              </a>
              <a href="mailto:sohamfegade3@gmail.com" className="w-10 h-10 rounded-full border border-[#27272a] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#1a1a1a] hover:-translate-y-1 transition-all duration-300">
                <FaEnvelope size={18} />
              </a>
            </div>
          </div>

          {/* Middle Column: Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <div className="flex flex-col gap-4">
              <a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">About</a>
              <a href="#skills" className="text-gray-400 hover:text-white transition-colors text-sm">Skills</a>
              <a href="#projects" className="text-gray-400 hover:text-white transition-colors text-sm">Projects</a>
              <a href="#experience" className="text-gray-400 hover:text-white transition-colors text-sm">Experience</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</a>
            </div>
          </div>

          {/* Right Column: Get in Touch */}
          <div>
            <h4 className="text-white font-semibold mb-6">Get in Touch</h4>
            <div className="flex flex-col gap-4 text-sm text-gray-400">
              <p>sohamfegade3@gmail.com</p>
              <p>+91 9284922350</p>
              <p>Airoli, Navi Mumbai, Maharashtra</p>
            </div>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="border-t border-[#27272a] pt-8 flex items-center justify-center text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Soham Fegade. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
