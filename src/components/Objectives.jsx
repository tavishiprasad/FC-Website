'use client';

import { useEffect, useRef, useState } from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Objectives() {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setScrollY(window.scrollY - rect.top);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const objectives = [
    'Stock Analysis',
    'Financial Softwares',
    'Investment and Trading',
    'Reviews',
    'Insurance',
    'Tackle Financial Crisis',
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen"
      id='services'
    >
      {/* Content */}
      <div className="container mx-auto px-12 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-[54px] md:leading-[60px] font-semibold tracking-tighter bg-gradient-to-b from-black to-fcbluedark text-transparent bg-clip-text">
              Objectives
              <br />
              of the
              <br />
              Club
            </h2>

            {/* Social Icons */}
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-black transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-black transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-black transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>

            <p className="text-lg text-gray-400 max-w-lg">
              The Finance Club aims to improve financial knowledge, teach personal
              finance management, and develop investment skills. It provides a space to
              learn, collaborate, and stay updated on financial trends.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {objectives.map((objective, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative">
                  <h3 className="text-xl md:text-2xl text-black py-2 transition-transform duration-300 group-hover:-translate-y-1">
                    {objective}
                  </h3>
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-white/30 transform origin-left transition-transform duration-300 group-hover:scale-x-100" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
