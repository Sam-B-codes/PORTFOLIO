"use client";
import React from "react";
import Link from "next/link";

function Hero() {
  return (
    <section className="w-full bg-gray-900 text-white min-h-screen flex items-center justify-center px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Side - Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi,I&apos;m <span className="text-blue-400">Saumya Bhardwaaj</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            A Passionate <span className="text-blue-300">Web Developer</span>
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto md:mx-0">
            I love building modern, responsive, and user-friendly websites and applications.
            Let’s work together to create something amazing!
          </p>
          
          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="/projects"
              className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition shadow-lg"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition shadow-lg"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/profile.png" // replace with your image
            alt="Profile"
            className="w-60 h-60 md:w-80 md:h-80 rounded-full object-cover shadow-lg border-4 border-blue-400"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
