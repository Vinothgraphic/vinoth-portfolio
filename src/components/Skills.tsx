import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Skills = () => {
  const [ref, isVisible] = useIntersectionObserver();

  const skills = [
     { 
    name: 'Adobe Photoshop', 
    level: 88, 
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg' 
  },
  { 
    name: 'Adobe Illustrator', 
    level: 85, 
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg' 
  },
  { 
    name: 'Adobe Premiere Pro', 
    level: 80, 
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg' 
  },
  { 
    name: 'Adobe After Effects', 
    level: 82, 
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg' 
  },
  { 
  name: 'Canva',  
  level: 82, 
  image: 'https://image2url.com/images/1755708182500-9ca64a83-c2aa-403d-8a2e-2a834cb30659.png' 
},
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Skills & Tools
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Proficient in industry-standard software and tools for creating exceptional visual content
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 ${
                  isVisible ? 'animate-bounce-in' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-lg overflow-hidden">
                    <img 
                      src={skill.image} 
                      alt={skill.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-black mb-4">{skill.name}</h3>
                  
                  <div className="relative w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div
                      className={`bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ${
                        isVisible ? 'animate-slide-in' : 'w-0'
                      }`}
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%',
                        animationDelay: `${index * 100 + 500}ms`
                      }}
                    ></div>
                  </div>
                  
                  <span className="text-sm text-gray-500 font-medium">{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;