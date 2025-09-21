"use client";
import React from "react";
import Link from "next/link";

import Hero from "@/Components/Hero";
import Skills from "@/Components/Skills";

import ProjectsSection from "@/Components/Projects"
function Page() {
  return (
    <>
 
    <div>
      <Hero />
      <Skills />
      <ProjectsSection />

   

    </div>
    </>
  );
}

export default Page;
