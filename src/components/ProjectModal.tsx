import React from 'react'; 
import { X, ExternalLink, Calendar, User, Clock } from 'lucide-react';
import { Project } from '../types/Project';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-bounce-in">
        {/* Header */}
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 md:h-80 object-cover rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
          >
            <X size={20} />
          </button>
          <div className="absolute bottom-4 left-4">
            <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-black mb-4">{project.title}</h2>
            <p className="text-lg text-gray-600 leading-relaxed">{project.description}</p>
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {project.client && (
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <User size={18} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Client</p>
                  <p className="font-semibold text-black">{project.client}</p>
                </div>
              </div>
            )}
            
            {project.duration && (
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Clock size={18} className="text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Duration</p>
                  <p className="font-semibold text-black">{project.duration}</p>
                </div>
              </div>
            )}
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <Calendar size={18} className="text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Category</p>
                <p className="font-semibold text-black">{project.category}</p>
              </div>
            </div>
          </div>

          {/* Detailed Description */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4">Project Overview</h3>
            <p className="text-gray-600 leading-relaxed">{project.details}</p>
          </div>

          {/* Technologies Used */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            {project.link && (
              <button
                onClick={() => window.open(project.link, "_blank")}
                className="flex-1 bg-black text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
              >
                <ExternalLink size={18} />
                View Live Project
              </button>
            )}
            <button 
              onClick={onClose}
              className="flex-1 border border-gray-300 text-gray-700 py-3 px-6 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
