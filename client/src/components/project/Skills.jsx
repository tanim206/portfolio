const Skills = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {[
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js",
        "Tailwind CSS",
      ].map((skill, i) => (
        <div
          key={i}
          className="p-4 text-center rounded-xl bg-[#0b1622] border border-white/10 text-gray-300"
        >
          {skill}
        </div>
      ))}
    </div>
  );
};

export default Skills;