import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: { id: string };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return notFound();
  }

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white py-20 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-blue-400 mb-6">
          {project.title}
        </h1>
        <img
          src={project.image}
          alt={project.title}
          className="rounded-xl shadow-lg mb-6"
        />
        <p className="text-lg text-gray-300 mb-6">{project.description}</p>
        <div className="flex flex-wrap gap-3">
          {project.skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
