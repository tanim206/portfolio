import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaCircle,
} from "react-icons/fa";
import { SiMongodb, SiJavascript, SiTailwindcss } from "react-icons/si";
import { TbSchool } from "react-icons/tb";
import { GrLocationPin } from "react-icons/gr";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("projects");

  const tabs = ["projects", "skills", "education"];

  const projects = [
    {
      title: "Portfolio Website",
      desc: "Modern portfolio built with React & Tailwind CSS.",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      github: "https://github.com/",
      live: "https://example.com",
    },
    {
      title: "Full Stack Blog",
      desc: "Authentication system with secure backend API.",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      github: "https://github.com/",
      live: "https://example.com",
    },
    {
      title: "E-Commerce UI",
      desc: "Premium shopping interface design concept.",
      img: "https://images.unsplash.com/photo-1522199710521-72d69614c702",
      github: "https://github.com/",
      live: "https://example.com",
    },
  ];

  const skills = [
    { icon: <FaReact size={35} />, name: "React", color: "#61DBFB" },
    { icon: <SiJavascript size={35} />, name: "JavaScript", color: "#F7DF1E" },
    { icon: <FaNodeJs size={35} />, name: "Node.js", color: "#3C873A" },
    { icon: <SiMongodb size={35} />, name: "MongoDB", color: "#4DB33D" },
    { icon: <SiTailwindcss size={35} />, name: "Tailwind", color: "#38BDF8" },
    { icon: <FaHtml5 size={35} />, name: "HTML5", color: "#E34F26" },
    { icon: <FaCss3Alt size={35} />, name: "CSS3", color: "#264de4" },
    { icon: <FaGithub size={35} />, name: "GitHub", color: "#ffffff" },
  ];

  return (
    <div className="flex items-center justify-center p-6 md:p-0">
      <div className="w-full max-w-5xl rounded-3xl md:p-0 p-8">
        

        {/* ================= TABS ================= */}
        <div className="flex  justify-center items-center gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 text-sm sm:text-base rounded-full font-semibold transition-all duration-300
                ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg scale-105"
                    : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ================= PROJECTS ================= */}
        {activeTab === "projects" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden bg-transparent backdrop-blur-md border border-white/10 transition-all duration-500 hover:-translate-y-3 "
              >
                <div className="overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <h2 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition">
                    {project.title}
                  </h2>

                  <p className="text-gray-400 mb-4 text-sm">{project.desc}</p>

                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      className="flex items-center gap-2 px-4 py-2 hover:underline  text-white text-sm transition"
                    >
                      <Github size={16} /> Repository
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      className="flex items-center gap-2 px-4 py-2 hover:underline  text-white text-sm transition"
                    >
                      <ExternalLink size={16} /> View Project
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ================= SKILLS ================= */}
        {activeTab === "skills" && (
          <div className="flex justify-center">
            {/* ========== RIGHT SIDE (Full Width Panel) ========== */}
            <div className="w-full max-w-5xl bg-black rounded-2xl p-8 border border-gray-800">
              <h2 className="text-xl font-semibold text-white mb-4">
                My Skills Overview
              </h2>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Here’s a quick overview of my skill levels for each technology I
                use. The percentages indicate my proficiency and confidence.
              </p>

              <div className="space-y-4">
                {skills.map((skill, i) => {
                  const percent =
                    skill.percent || Math.floor(Math.random() * 31) + 70;
                  return (
                    <div key={i}>
                      <div className="flex justify-between items-center text-sm text-gray-400 mb-1">
                        <div className="flex items-center gap-2">
                          <span
                            className="text-lg"
                            style={{ color: skill.color }}
                          >
                            {skill.icon}
                          </span>
                          <span>{skill.name}</span>
                        </div>
                        <span>{percent}%</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full">
                        <div
                          className="h-2 rounded-full"
                          style={{
                            width: `${percent}%`,
                            backgroundColor: skill.color,
                          }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
        {/* ================= EDUCATION ================= */}
        {activeTab === "education" && (
          <div className="space-y-10">
            {/* Diploma */}
            <div className="border rounded-xl border-gray-700 bg-gradient-to-br from-[#1e2137] to-[#1b1f2f] p-6 shadow-lg">
              <div className="flex flex-col gap-3">
                <div className="flex gap-1">
                  <FaCircle className="text-red-400 text-xs" />
                  <FaCircle className="text-yellow-400 text-xs" />
                  <FaCircle className="text-green-400 text-xs" />
                </div>

                <div className="flex items-center gap-4 mt-2">
                  <span className="border border-[#3a4b6b] text-2xl p-3 text-[#5fa5fa] bg-[#1f273f] rounded-xl">
                    <TbSchool />
                  </span>

                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      Diploma In Engineering
                    </h3>
                    <p className="text-sm flex items-center gap-1 text-[#7fb1ff]">
                      <GrLocationPin />
                      Moulvibazar Polytechnic Institute
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                <div className="bg-gradient-to-tr from-[#1a2a3a] to-[#223345] border border-[#3f5ea6] rounded-xl py-3 text-center">
                  <p className="text-2xl font-bold text-[#5fa5fa]">
                    Loading...
                  </p>
                  <span className="text-xs text-gray-300">Current GPA</span>
                </div>

                <div className="bg-gradient-to-tr from-[#232a42] to-[#2b3650] border border-[#7c4dff] rounded-xl py-3 text-center">
                  <p className="text-2xl font-bold text-[#c083fc]">
                    Electronics
                  </p>
                  <span className="text-xs text-gray-300">Department</span>
                </div>

                <div className="bg-gradient-to-tr from-[#1b3040] to-[#1c3d52] border border-[#21d2ed] rounded-xl py-3 text-center">
                  <p className="text-2xl font-bold text-[#21d2ed]">2021-2022</p>
                  <span className="text-xs text-gray-300">Session</span>
                </div>
              </div>
            </div>

            {/* SSC */}
            <div className="border rounded-xl border-gray-700 bg-gradient-to-br from-[#1e2137] to-[#1b1f2f] p-6 shadow-lg">
              <div className="flex flex-col gap-3">
                <div className="flex gap-1">
                  <FaCircle className="text-red-400 text-xs" />
                  <FaCircle className="text-yellow-400 text-xs" />
                  <FaCircle className="text-green-400 text-xs" />
                </div>

                <div className="flex items-center gap-4 mt-2">
                  <span className="border border-[#3a4b6b] text-2xl p-3 text-[#5fa5fa] bg-[#1f273f] rounded-xl">
                    <TbSchool />
                  </span>

                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      Secondary School Certificate (SSC)
                    </h3>
                    <p className="text-sm flex items-center gap-1 text-[#7fb1ff]">
                      <GrLocationPin />
                      Shah Helal High School
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                <div className="bg-gradient-to-tr from-[#1a2a3a] to-[#223345] border border-[#3f5ea6] rounded-xl py-3 text-center">
                  <p className="text-2xl font-bold text-[#5fa5fa]">4.11</p>
                  <span className="text-xs text-gray-300">Current GPA</span>
                </div>

                <div className="bg-gradient-to-tr from-[#232a42] to-[#2b3650] border border-[#7c4dff] rounded-xl py-3 text-center">
                  <p className="text-2xl font-bold text-[#c083fc]">Science</p>
                  <span className="text-xs text-gray-300">Group</span>
                </div>

                <div className="bg-gradient-to-tr from-[#1b3040] to-[#1c3d52] border border-[#21d2ed] rounded-xl py-3 text-center">
                  <p className="text-2xl font-bold text-[#21d2ed]">2020-2021</p>
                  <span className="text-xs text-gray-300">Session</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
