import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from('.about-image', {
      scrollTrigger: { trigger: container.current, start: 'top 80%' },
      x: -50, opacity: 0, duration: 1, ease: 'power3.out'
    });

    gsap.from('.about-content p, .about-content h3, .about-content ul', {
      scrollTrigger: { trigger: '.about-content', start: 'top 80%' },
      y: 30, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out'
    });
  }, { scope: container });

  return (
    <section id="about" ref={container} className="py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">


        <div className="grid md:grid-cols-[1fr_2fr] gap-8 w-full">

          {/* Left Column: Image */}
          <div className="about-image glass-card p-4 rounded-3xl h-fit">
            <img
              src="https://ik.imagekit.io/ns4gfx2mi/Personal/IMG_20260703_122446.png"
              alt="Soham Fegade"
              className="w-full h-auto object-cover rounded-2xl aspect-[3/4]"
            />
          </div>

          {/* Right Column: Content */}
          <div className="about-content glass-card p-8 md:p-10 rounded-3xl flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-white mb-6">My Journey</h3>

            <div className="space-y-4 text-gray-300 text-lg leading-relaxed mb-10">
              <p>
                Hello! I'm Soham Fegade, a passionate and motivated student pursuing a degree in Artificial Intelligence and Data Science at Datta Meghe College of Engineering.
              </p>
              <p>
                I have a strong fondness for programming and problem-solving. With experience in building web applications and exploring AI integrations, I enjoy turning ideas into impactful solutions and constantly push myself to learn, improve, and take on new challenges.
              </p>
              <p>
                My goal is to grow into a skilled developer capable of creating software that contributes to real-world innovation.
              </p>
            </div>

            <h3 className="text-xl font-bold text-white mb-5">What I'm Focused On</h3>

            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">▶</span>
                <span>Building clean, efficient, and dynamic web applications.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">▶</span>
                <span>Creating impactful AI & Data Science solutions.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">▶</span>
                <span>Constantly pushing boundaries to learn modern software design.</span>
              </li>
            </ul>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
