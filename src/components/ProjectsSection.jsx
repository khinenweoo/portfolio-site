import { Sparkles } from 'lucide-react'
import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 1,
    title: "Project Name",
    image: "linear-gradient(135deg, #818cf8 0%, #ffedd5 100%)", // Matching your gradient
  },
  {
    id: 2,
    title: "Project Name",
    image: "linear-gradient(135deg, #ffedd5 0%, #818cf8 100%)",
  },
  {
    id: 3,
    title: "Project Name",
    image: "linear-gradient(135deg, #818cf8 0%, #ffedd5 100%)",
  },
];
const ProjectsSection = () => {
  return (
    <section id='projects' className="w-full px-4 sm:px-12 lg:px-24 xl:px-40 min-h-screen transition-all">
      <div className='max-w-5xl mx-auto mb-18'>
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-16">
          <h2 className="text-3xl md:text-4xl text-white font-semibold">
            Some Featured Projects
          </h2>
          <Sparkles className="text-white" size={24} />
        </div>
      </div>

      <div className="space-y-12">
        {projects.map((project) => (
          <div
            key={project.id}
          >
            <ProjectCard key={project.id} project={project} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection;