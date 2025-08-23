import React from 'react';
import { Play } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Project } from '../types/Project';

interface ProjectsProps {
  onProjectSelect: (project: Project) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onProjectSelect }) => {
  const [ref, isVisible] = useIntersectionObserver();

  const projects: Project[] = [
    {
      id: 1,
      title: "ACTE Batch Alert Poster",
      category: "Graphic Design",
      description: "Promotional poster design for ACTE Data Analytics batch launch.",
      image: "https://image2url.com/images/1755709861167-95fc3aa5-9299-405b-84d7-2d638996a329.jpg", // replace with actual path
      technologies: ["Photoshop", "Illustrator"],
      details: "Designed a bold and engaging batch alert poster for ACTE to boost course enrollments.",
      duration: "2 Days",
    },
    {
      id: 2,
      title: "Digital Marketing Poster",
      category: "Graphic Design",
      description: "Career paths infographic poster for Learnovita digital marketing courses.",
      image: "https://image2url.com/images/1755709949206-3bba2f20-f390-4921-987a-a239740e74e1.jpg",
      technologies: ["Canva", "Illustrator"],
      details: "Designed an educational infographic to showcase multiple digital marketing career paths.",
      duration: "1 Day",
    },
    {
      id: 3,
      title: "Linkplux Women’s Day Creative",
      category: "Graphic Design",
      description: "Special Women’s Day campaign poster for Linkplux.",
      image: "https://image2url.com/images/1755710071289-2c02cbfb-6aa3-476e-ba90-16828859a157.jpg",
      technologies: ["Photoshop", "Figma"],
      details: "Designed a pink-theme poster to celebrate Women’s Day while maintaining brand identity.",
      duration: "1 Day",
    },
    {
      id: 3,
      title: "Linkplux Poster",
      category: "Graphic Design",
      description: "Linkplux Digital Marketing campaign poster for Linkplux.",
      image: "https://image2url.com/images/1755710905607-e1997f29-2ecb-41e5-a9a5-dd3a2668af01.jpg",
      technologies: ["Photoshop", "Figma"],
      details: "Designed a pink-theme poster to celebrate Women’s Day while maintaining brand identity.",
      duration: "1 Day",
    },
    {
      id: 3,
      title: "Thumbnail",
      category: "Graphic Design",
      description: "Poster design for Instagram reels.",
      image: "https://image2url.com/images/1755712249160-d9a76548-8687-4b06-9875-871cd421a6e4.jpg",
      technologies: ["Photoshop", "Figma"],
      details: "Colorful theme for social media promotion.",
      duration: "1 Day",
    },
    {
      id: 3,
      title: "Thumbnail",
      category: "Graphic Design",
      description: "Creative thumbnail poster.",
      image: "https://image2url.com/images/1755712160461-cf78ee17-4b00-4d27-89f6-9e418893484c.jpg",
      technologies: ["Photoshop", "Figma"],
      details: "Attractive design for digital branding.",
      duration: "1 Day",
    },
    {
      id: 3,
      title: "Thumbnail",
      category: "Graphic Design",
      description: "Marketing campaign visual asset.",
      image: "https://image2url.com/images/1755710905607-e1997f29-2ecb-41e5-a9a5-dd3a2668af01.jpg",
      technologies: ["Photoshop", "Figma"],
      details: "Modern gradient theme for digital campaign.",
      duration: "1 Day",
    },
  
  // 🎥 Instagram Reels Projects
  {
    id: 3,
    title: "Instagram Reel 1",
    category: "Video Editing",
    description: "Instagram promotional reel.",
    image: "https://image2url.com/images/1755713691863-6f8ab500-5c47-4d29-ba1e-6e9bab9e9615.jpeg", // placeholder thumbnail (replace with your own)
    technologies: ["Premiere Pro", "After Effects"],
    details: "Creative short-form video edited for Instagram audience.",
    duration: "1 Day",
    link: "https://www.instagram.com/reel/DNQPECevi33/?igsh=dTBjOGdtNWdhMzd5"
  },
  {
    id: 4,
    title: "Instagram Reel 2",
    category: "Video Editing",
    description: "Instagram promotional reel.",
    image: "https://image2url.com/images/1755713691863-6f8ab500-5c47-4d29-ba1e-6e9bab9e9615.jpeg",
    technologies: ["Premiere Pro","After Effects"],
    details: "Engaging reel with motion graphics and transitions.",
    duration: "1 Day",
    link: "https://www.instagram.com/reel/DNAsmT_InO0/?igsh=MW9rZ2RmcGN3Ynlqcg=="
  },
  {
    id: 5,
    title: "Instagram Reel 3",
    category: "Video Editing",
    description: "Instagram promotional reel.",
    image: "https://image2url.com/images/1755713691863-6f8ab500-5c47-4d29-ba1e-6e9bab9e9615.jpeg",
    technologies: ["Premiere Pro","After Effects"],
    details: "Short video optimized for Instagram engagement.",
    duration: "1 Day",
    link: "https://www.instagram.com/reel/DMxeaN2shm4/?igsh=MWFoZWZkZ3dzOW9pbQ=="
  },
  {
    id: 6,
    title: "Instagram Reel 4",
    category: "Video Editing",
    description: "Instagram promotional reel.",
    image: "https://image2url.com/images/1755713691863-6f8ab500-5c47-4d29-ba1e-6e9bab9e9615.jpeg",
    technologies: ["Premiere Pro", "After Effects"],
    details: "Stylized edit for Instagram branding.",
    duration: "1 Day",
    link: "https://www.instagram.com/reel/DMaELizAzJb/?igsh=MXN2MzdoZmV6dnUxcA=="
  },
  {
    id: 7,
    title: "Instagram Reel 5",
    category: "Video Editing",
    description: "Instagram promotional reel.",
    image: "https://image2url.com/images/1755713691863-6f8ab500-5c47-4d29-ba1e-6e9bab9e9615.jpeg",
    technologies: ["After Effects"],
    details: "Creative edits for social media campaigns.",
    duration: "1 Day",
    link: "https://www.instagram.com/reel/DL92uGoIpY4/?igsh=MXQya2dtMXk0Y3Y4bg=="
  },
  {
    id: 8,
    title: "Instagram Reel 6",
    category: "Video Editing",
    description: "Instagram promotional reel.",
    image: "https://image2url.com/images/1755713691863-6f8ab500-5c47-4d29-ba1e-6e9bab9e9615.jpeg",
    technologies: ["After Effects"],
    details: "Dynamic editing for Instagram.",
    duration: "1 Day",
    link: "https://www.instagram.com/reel/DLkNtYQvsQH/?igsh=MXYzZmpqczhiMmg0Zw=="
  },
  {
    id: 9,
    title: "Instagram Reel 7",
    category: "Video Editing",
    description: "Instagram promotional reel.",
    image: "https://image2url.com/images/1755713691863-6f8ab500-5c47-4d29-ba1e-6e9bab9e9615.jpeg",
    technologies: ["Premiere Pro", "After Effects"],
    details: "Reel optimized for engagement.",
    duration: "1 Day",
    link: "https://www.instagram.com/reel/DLXRCPNNJ7Y/?igsh=anNmOHNqbjA1MGhj"
  },
  {
    id: 10,
    title: "Instagram Reel 8",
    category: "Video Editing",
    description: "Instagram promotional reel.",
    image: "https://image2url.com/images/1755713691863-6f8ab500-5c47-4d29-ba1e-6e9bab9e9615.jpeg",
    technologies: ["Premiere Pro", "After Effects"],
    details: "Creative campaign reel edit.",
    duration: "1 Day",
    link: "https://www.instagram.com/reel/DKwt5MbiZt7/?igsh=ZnQyeTkxaXNiNmZ3"
  },
  {
    id: 11,
    title: "Instagram Reel 9",
    category: "Video Editing",
    description: "Instagram promotional reel.",
    image: "https://image2url.com/images/1755713691863-6f8ab500-5c47-4d29-ba1e-6e9bab9e9615.jpeg",
    technologies: ["Premiere Pro", "After Effects"],
    details: "Social media branding reel.",
    duration: "1 Day",
    link: "https://www.instagram.com/reel/DKcCm1yy5ag/?igsh=Ymxhb2x2c3YyeTQ0"
  },
  {
    id: 12,
    title: "Instagram Reel 10",
    category: "Video Editing",
    description: "Instagram promotional reel.",
    image: "https://image2url.com/images/1755713691863-6f8ab500-5c47-4d29-ba1e-6e9bab9e9615.jpeg",
    technologies: ["Premiere Pro", "After Effects"],
    details: "Dynamic video with transitions.",
    duration: "1 Day",
    link: "https://www.instagram.com/reel/DKKDMqrq-Nc/?igsh=ZTRydGlvanU0dWoz"
  },
  {
    id: 13,
    title: "Instagram Reel 11",
    category: "Video Editing",
    description: "Instagram promotional reel.",
    image: "https://image2url.com/images/1755713691863-6f8ab500-5c47-4d29-ba1e-6e9bab9e9615.jpeg",
    technologies: ["Premiere Pro", "After Effects"],
    details: "Engaging video edit for Instagram audience.",
    duration: "1 Day",
    link: "https://www.instagram.com/reel/DJwY3Iry3Ud/?igsh=dnMzeTJ6eGhhcXZ0"
  },
   {
    id: 2,
    title: "Instagram Reel 12",
    category: "Video Editing",
    description: "Motion graphic video reel for promotion.",
    image: "https://image2url.com/images/1755713691863-6f8ab500-5c47-4d29-ba1e-6e9bab9e9615.jpeg",
    technologies: ["After Effects", "Premiere Pro"],
    details: "Created an animated reel for ACTE showcasing new courses with engaging transitions and motion graphics.",
    duration: "3 Days",
  },
  ];

  const categories = ["All", "Graphic Design", "Video Editing"];
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              A showcase of my recent work in video editing, motion graphics, and graphic design
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-black text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group cursor-pointer transition-all duration-500 hover:scale-105 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => onProjectSelect(project)}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex items-center gap-2 text-white">
                        <Play size={16} />
                        <span className="text-sm font-medium">View Project</span>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-black mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 2).map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 2 && (
                        <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs font-medium">
                          +{project.technologies.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
