import React from "react";
import HeroSection from "./project/HeroSecton";
import Tabs from "../core/tabs";
import ProjectsSection from "./About/ProjectSection";

const Projects = () => {
  return (
    <div className="max-w-5xl mx-auto  mt-30">
      <div className="px-6">
        <ProjectsSection />
      </div>
      <Tabs />
    </div>
  );
};

export default Projects;
