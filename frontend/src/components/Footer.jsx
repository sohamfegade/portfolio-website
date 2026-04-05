import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary border-t border-gray-800 py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-white mb-2">Soham Fegade</h3>
          <p className="text-gray-400 text-sm">Artificial Intelligence & Data Science Engineer</p>
        </div>

        <div className="flex gap-4">
          <a href="mailto:sohamfegade3@gmail.com" className="p-2 bg-secondary rounded-full text-gray-400 hover:text-accent hover:bg-gray-800 transition-all">
            <FaEnvelope size={20} />
          </a>
          <a href="https://github.com/sohamfegade" target="_blank" rel="noopener noreferrer" className="p-2 bg-secondary rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition-all">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/soham-fegade" target="_blank" rel="noopener noreferrer" className="p-2 bg-secondary rounded-full text-gray-400 hover:text-[#0a66c2] hover:bg-gray-800 transition-all">
            <FaLinkedin size={20} />
          </a>
          <a href="https://instagram.com/soham_fegade" target="_blank" rel="noopener noreferrer" className="p-2 bg-secondary rounded-full text-gray-400 hover:text-[#E1306C] hover:bg-gray-800 transition-all">
            <FaInstagram size={20} />
          </a>
        </div>

        <div className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Soham Fegade. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
