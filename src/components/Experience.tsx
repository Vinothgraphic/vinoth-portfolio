import React from 'react';
import { MapPin } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Experience = () => {
  const [ref, isVisible] = useIntersectionObserver();

  const experiences = [
    {
      year: '2024',
      title: 'Graphic Designer',
      company: 'Markerz Global Solution',
      location: 'Chennai, Tamil Nadu',
      description:
        'Provided video editing, motion graphics, and graphic design services for diverse clients including startups, restaurants, and marketing agencies.',
      type: 'full-time',
    },
    {
      year: '2023',
      title: 'Photographer',
      company: 'Creative Design Studio',
      location: 'Dharmapuri, Tamil Nadu',
      description:
        'Specialized in social media content creation and promotional videos. Collaborated with creative directors to produce engaging video content for various brands.',
      type: 'full-time',
    },
    {
      year: '2021',
      title: 'Social Media Manager and Graphic Designer',
      company: 'Dawn Academy',
      location: 'Dharmapuri, Tamil Nadu',
      description:
        'Gained hands-on experience in video production workflow, from pre-production planning to final delivery. Assisted in editing documentary content and promotional materials.',
      type: 'freelance',
    },
  ];

  // Helper for badge styles
  const getBadge = (type: string) => {
    switch (type.toLowerCase()) {
      case 'full-time':
        return { label: 'Full-time', style: 'bg-green-100 text-green-600' };
      case 'freelance':
        return { label: 'Freelance', style: 'bg-blue-100 text-blue-600' };
      case 'internship':
        return { label: 'Internship', style: 'bg-orange-100 text-orange-600' };
      default:
        return { label: type, style: 'bg-gray-100 text-gray-600' };
    }
  };

  return (
    <section id="experience" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Experience
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              My professional journey in video editing and creative design
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gray-300"></div>

            {experiences.map((exp, index) => {
              const badge = getBadge(exp.type);

              return (
                <div
                  key={index}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Content */}
                  <div
                    className={`w-full md:w-5/12 ${
                      index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                    } ml-16 md:ml-0`}
                  >
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                      <div
                        className={`flex items-center gap-2 mb-2 ${
                          index % 2 === 0 ? 'md:justify-end' : ''
                        }`}
                      >
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${badge.style}`}
                        >
                          {badge.label}
                        </span>
                        <span className="text-blue-600 font-bold text-lg">{exp.year}</span>
                      </div>

                      <h3 className="text-xl font-bold text-black mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-4 mb-3 text-gray-600">
                        <span className="font-medium">{exp.company}</span>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
