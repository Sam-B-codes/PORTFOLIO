"use client";
import React from "react";
import Link from "next/link";
import Navbar from "@/Components/NavBar";
import Hero from "@/Components/Hero";
import Skills from "@/Components/Skills";
import Footer from "@/Components/Footer";
import ProjectsSection from "@/Components/Projects"
function Page() {
  return (
    <>
    <Navbar />
    <div>
      <Hero />
      <Skills />
      <ProjectsSection />

      <Footer />

    </div>
    </>
  );
}

export default Page;
