"use client";

import React from "react";
import Link from "next/link";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  skills: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  image,
  skills,
}) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-blue-400 mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
        <Link href={`/projects/${id}`}>
          <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            View More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
