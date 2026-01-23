// import { projects } from "@/lib/projects";
// import ProjectCard from "@/Components/ProjectCard";

// export default function ProjectsPage() {
//   return (
//     <section className="w-full bg-gray-900 text-white py-20 px-6 md:px-16">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">
//           My Projects
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {projects.map((project) => (
//             <ProjectCard key={project.id} {...project} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




import { projects } from "@/data/Project"
// import ProjectCard from "@/components/UI/ProjectCard"
import ProjectCard from "@/Components/ProjectCard"

export default function ProjectsPage() {
  return (
    <section className="min-h-screen bg-gray-900 text-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-blue-400 mb-6">
          Projects
        </h1>

        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
          A collection of projects showcasing my experience with modern web
          technologies, performance optimization, and scalable UI development.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              skills={project.skills}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
