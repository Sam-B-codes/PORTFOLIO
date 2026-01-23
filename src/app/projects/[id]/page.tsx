// // import { projects } from "@/lib/projects";
// // import { notFound } from "next/navigation";

// // interface ProjectPageProps {
// //   params: { id: string };
// // }

// // export default function ProjectPage({ params }: ProjectPageProps) {
// //   const project = projects.find((p) => p.id === params.id);

// //   if (!project) {
// //     return notFound();
// //   }

// //   return (
// //     <div className="w-full min-h-screen bg-gray-900 text-white py-20 px-6 md:px-16">
// //       <div className="max-w-4xl mx-auto">
// //         <h1 className="text-5xl font-bold text-blue-400 mb-6">
// //           {project.title}
// //         </h1>
// //         <img
// //           src={project.image}
// //           alt={project.title}
// //           className="rounded-xl shadow-lg mb-6"
// //         />
// //         <p className="text-lg text-gray-300 mb-6">{project.description}</p>
// //         <div className="flex flex-wrap gap-3">
// //           {project.skills.map((skill) => (
// //             <span
// //               key={skill}
// //               className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg"
// //             >
// //               {skill}
// //             </span>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }




// import { notFound } from "next/navigation"
// import Image from "next/image"
// import { projects } from "@/data/Project"

// export default async function ProjectDetailPage({ params }) {
//   const { id } = await params

//   const project = projects.find((p) => p.id === id)

//   if (!project) {
//     notFound()
//   }

//   return (
//     <section className="min-h-screen bg-gray-900 text-white py-20 px-6 md:px-16">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-6">
//           {project.title}
//         </h1>

//         <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden shadow-lg mb-8">
//           <Image
//             src={project.image}
//             alt={project.title}
//             fill
//             className="object-cover"
//             priority
//           />
//         </div>

//         <p className="text-lg text-gray-300 leading-relaxed mb-8">
//           {project.description}
//         </p>

//         <div className="flex flex-wrap gap-3 mb-10">
//           {project.skills.map((skill) => (
//             <span
//               key={skill}
//               className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg text-sm"
//             >
//               {skill}
//             </span>
//           ))}
//         </div>

//         {project.link && (
//           <a
//             href={project.link}
//             target="_blank"
//             className="inline-block bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-lg"
//           >
//             Visit Live Project →
//           </a>
//         )}
//       </div>
//     </section>
//   )
// }



import { notFound } from "next/navigation"
import Image from "next/image"
import { projects } from "@/data/Project"

interface ProjectPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function ProjectDetailPage({
  params,
}: ProjectPageProps) {
  const { id } = await params

  const project = projects.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  return (
    <section className="min-h-screen bg-gray-900 text-white py-20 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-6">
          {project.title}
        </h1>

        <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden shadow-lg mb-8">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <p className="text-lg text-gray-300 leading-relaxed mb-8">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3 mb-10">
          {project.skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg text-sm"
            >
              {skill}
            </span>
          ))}
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            className="inline-block bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-lg"
          >
            Visit Live Project →
          </a>
        )}
      </div>
    </section>
  )
}
