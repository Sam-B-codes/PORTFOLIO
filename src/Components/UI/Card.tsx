"use client";
import React from "react";

// Define the props type
interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  skills: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description, skills }) => {
  return (
    <div className="backdrop-blur-md bg-white/10 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
      {/* Project Image */}
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      <div className="p-6 flex flex-col gap-3">
        {/* Project Title */}
        <h3 className="text-2xl font-bold text-blue-400">{title}</h3>

        {/* Description */}
        <p className="text-gray-300 text-sm">{description}</p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mt-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="text-xs bg-blue-400/20 text-blue-300 px-2 py-1 rounded-lg"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
