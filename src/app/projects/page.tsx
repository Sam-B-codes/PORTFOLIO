import { projects } from "@/lib/projects";
import ProjectCard from "@/Components/ProjectCard";

export default function ProjectsPage() {
  return (
    <section className="w-full bg-gray-900 text-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}


