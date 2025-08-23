import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const About = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="order-2 md:order-1">
              <div className="relative">
                <img
                  src="https://image2url.com/images/1755628342901-9b8ff330-9d2c-4842-aa14-27b50617c31a.jpg"
                  alt="Vinoth"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                About Me
              </h2>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I'm a passionate creative professional with over 4 years of experience in Graphic Design and Photographer. 
                My journey began with a fascination for storytelling through visuals, and it has evolved into a career dedicated 
                to bringing ideas to life.
              </p>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                I specialize in post-production workflows, motion graphics, and brand identity design. 
                Whether it's crafting compelling video narratives or designing memorable visual identities, 
                I approach each project with creativity, precision, and a commitment to excellence.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h3 className="font-semibold text-black mb-2">Animation Graphic</h3>
                  <p className="text-sm text-gray-600">ads Design, Color Grading, Audio Mixing</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h3 className="font-semibold text-black mb-2">Motion Graphics</h3>
                  <p className="text-sm text-gray-600">2D Animation, Visual Effects, Compositing</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h3 className="font-semibold text-black mb-2">Graphic Design</h3>
                  <p className="text-sm text-gray-600">Brand Identity, Print Design, Digital Assets</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h3 className="font-semibold text-black mb-2">Image Editing</h3>
                  <p className="text-sm text-gray-600">Color Grading, Visual Strategy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;