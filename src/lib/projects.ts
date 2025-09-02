// lib/projects.ts

export type Project = {
  id: string; // using string for flexibility
  title: string;
  description: string;
  skills: string[];
  image: string;
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Portfolio Website",
    description: "A modern portfolio website built with Next.js and Tailwind CSS.",
    skills: ["Next.js", "Tailwind CSS", "React"],
    image: "/projects/portfolio.png",
  },
  {
    id: "2",
    title: "E-commerce App",
    description: "Full-stack e-commerce application with product listings and payment integration.",
    skills: ["React", "Node.js", "Express", "MongoDB"],
    image: "/projects/ecommerce.png",
  },
  {
    id: "3",
    title: "Chat Application",
    description: "Real-time chat application using WebSocket and React.",
    skills: ["React", "Socket.io", "Node.js"],
    image: "/projects/chatapp.png",
  },
  {
    id: "4",
    title: "Task Manager",
    description: "A productivity web app to manage tasks and projects efficiently.",
    skills: ["React", "Firebase", "Tailwind CSS"],
    image: "/projects/taskmanager.png",
  },
];
