import React from "react";
import { Github, ExternalLink } from "lucide-react";

const Project = ({ project }) => {
  return (
    <div className="group relative rounded-2xl overflow-hidden bg-[#0f172a] border border-white/10 transition-all duration-500 hover:scale-105 hover:border-cyan-500">
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={project.img}
          alt={project.title}
          className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h2 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
          {project.title}
        </h2>

        <p className="text-gray-400 mb-4 text-sm">{project.desc}</p>

        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-white text-sm hover:bg-white/20 transition"
          >
            <Github size={16} /> Repository
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm hover:opacity-90 transition"
          >
            <ExternalLink size={16} /> View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;