import { GiFlatStar } from "react-icons/gi";

const ProjectsSection = () => {
  const projects = [
    {
      title: "TOJO Global Agency Website",
      desc: "Digital marketing platform with services & admin dashboard.",
    },
    {
      title: "TS Geosystem E-commerce",
      desc: "E-commerce system with API & payment integration.",
    },
    {
      title: "TOJO News Platform",
      desc: "Modern news platform with auth & notifications.",
    },
  ];

  return (
    <>
      <div className="mb-4 flex">
        <p className="rounded-full flex items-center gap-3 border py-1 px-6 sm:px-10 border-[#0b4357] bg-[#0e2638] text-[#64e2f5]">
          <GiFlatStar />
          <span>Projects Highlights</span>
        </p>
      </div>
      <div className="space-y-4 mb-10">
        {projects.map((project, i) => (
          <div
            key={i}
            className="p-5 border-b-4  border-cyan-500 bg-transparent backdrop-blur-md  shadow-md"
          >
            <h3 className="font-bold text-white">{project.title}</h3>
            <p className="text-gray-400">{project.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
