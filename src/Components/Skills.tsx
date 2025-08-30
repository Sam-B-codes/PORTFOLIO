"use client";
import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const skills = [
  { name: "HTML", level: 90, icon: <FaHtml5 size={32} className="text-orange-500" /> },
  { name: "CSS", level: 85, icon: <FaCss3Alt size={32} className="text-blue-500" /> },
  { name: "JavaScript", level: 90, icon: <FaJsSquare size={32} className="text-yellow-400" /> },
  { name: "React", level: 80, icon: <FaReact size={32} className="text-cyan-400" /> },
  { name: "Next.js", level: 75, icon: <SiNextdotjs size={32} className="text-gray-300" /> },
  { name: "Tailwind CSS", level: 85, icon: <SiTailwindcss size={32} className="text-teal-400" /> },
  { name: "Node.js", level: 70, icon: <FaNodeJs size={32} className="text-green-600" /> },
  { name: "Git", level: 75, icon: <FaGitAlt size={32} className="text-red-500" /> },
];

function Skills() {
  return (
    <section className="w-full bg-gray-900 text-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">My Skills</h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="backdrop-blur-md bg-white/10 rounded-2xl p-6 flex flex-col items-center shadow-lg hover:scale-105 transition-transform duration-300"
            >
              {/* Icon */}
              <div className="mb-4">{skill.icon}</div>

              {/* Skill Name */}
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>

              {/* Skill Level Bar */}
              <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
                <div
                  className="h-3 bg-blue-400 rounded-full animate-skill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>

              {/* Level Text */}
              <p className="text-sm text-gray-300 mt-2">{skill.level}%</p>
            </div>
          ))}
        </div>
      </div>

      {/* Animation for skill bars */}
      <style jsx>{`
        @keyframes fillBar {
          0% { width: 0; }
          100% { width: var(--width); }
        }
        .animate-skill {
          animation: fillBar 1.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
}

export default Skills;
