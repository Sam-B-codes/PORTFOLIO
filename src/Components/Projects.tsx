"use client";
import React from "react";
import ProjectCard from "@/Components/UI/Card";

// Define project type
interface Project {
  title: string;
  description: string;
  skills: string[];
  image: string;
}

// Project data
const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built with Next.js and Tailwind CSS.",
    skills: ["Next.js", "Tailwind CSS", "React"],
    image: "/projects/portfolio.png",
  },
  {
    title: "E-commerce App",
    description: "Full-stack e-commerce application with product listings and payment integration.",
    skills: ["React", "Node.js", "Express", "MongoDB"],
    image: "/projects/ecommerce.png",
  },
  {
    title: "Chat Application",
    description: "Real-time chat application using WebSocket and React.",
    skills: ["React", "Socket.io", "Node.js"],
    image: "/projects/chatapp.png",
  },
  {
    title: "Task Manager",
    description: "A productivity web app to manage tasks and projects efficiently.",
    skills: ["React", "Firebase", "Tailwind CSS"],
    image: "/projects/taskmanager.png",
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section className="w-full bg-gray-900 text-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              skills={project.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
