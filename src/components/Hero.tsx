import React, { useEffect, useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight">
            I turn <span className="text-blue-600">ideas</span> into{' '}
            <span className="text-blue-600">visuals</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-4 font-medium">
            Graphic Designer & Photographer
          </p>
          
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            Post-production • Motion Graphics • Branding
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToProjects}
              className="group bg-black text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-800 transition-all duration-300 hover:scale-105"
            >
              View My Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group flex items-center gap-2 text-gray-700 hover:text-black transition-colors duration-300">
              <div className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center group-hover:border-black transition-colors duration-300">
                <Play size={16} className="ml-1" />
              </div>
              <span className="font-medium">Watch Demo Reel</span>
            </button>
          </div>
        </div>

        <div className={`mt-20 transition-all duration-1000 delay-500 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="flex items-center justify-center space-x-12 text-gray-400">
            <div className="text-center">
              <div className="text-2xl font-bold text-black">299+</div>
              <div className="text-sm">Projects</div>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-black">4+</div>
              <div className="text-sm">Years Experience</div>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-black">10+</div>
              <div className="text-sm">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;