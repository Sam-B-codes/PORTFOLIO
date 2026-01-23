"use client"
import React from "react"

const skillsData = [
  {
    title: "Frontend Development",
    skills: [
      "React.js",
      "Next.js (App Router)",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      "Node.js",
      "Express.js",
      "REST API Concepts",
      "API Integration",
    ],
  },
  {
    title: "State Management & Routing",
    skills: [
      "React Context API",
      "React Router",
      "Component State Management",
    ],
  },
  {
    title: "UI / UX & Performance",
    skills: [
      "Responsive Design",
      "Reusable Components",
      "Performance Optimization",
      "Accessibility Basics",
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      "Git & GitHub",
      "VS Code",
      "npm",
      "Vercel Deployment",
    ],
  },
  {
    title: "Currently Learning",
    skills: [
      "Advanced Next.js",
      "MongoDB",
      "Authentication (JWT)",
    ],
  },
]

const SkillsSection = () => {
  return (
    <section className="w-full bg-gray-950 text-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-14">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category) => (
            <div
              key={category.title}
              className="bg-white/10 backdrop-blur-lg border border-white/15 rounded-xl p-6 shadow-lg hover:scale-[1.02] transition"
            >
              <h3 className="text-xl font-semibold text-blue-300 mb-4">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-blue-500/20 text-blue-200 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
