export interface Project {
  id: number;
  title: string;
  category: 'Video Editing' | 'Motion Graphics' | 'Graphic Design';
  description: string;
  image: string;
  technologies: string[];
  details: string;
  duration?: string;
  client?: string;
}