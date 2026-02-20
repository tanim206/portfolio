import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiGithub,
  SiFirebase,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

const TechPlanet = () => {
  const techs = [
    { icon: <SiJavascript color="#F7DF1E" /> },
    { icon: <SiReact color="#61DAFB" /> },
    { icon: <SiNodedotjs color="#339933" /> },
    { icon: <SiMongodb color="#47A248" /> },
    { icon: <SiTailwindcss color="#38BDF8" /> },
    { icon: <SiGithub color="#ffffff" /> },
    { icon: <SiFirebase color="#FFCA28" /> },
    { icon: <SiHtml5 color="#E34F26" /> },
    { icon: <SiCss3 color="#1572B6" /> },
  ];

  return (
    <section className="flex items-center justify-center">
      <div className="relative w-[380px] h-[380px]">

        {/* 🌍 Center Planet */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute w-44 h-44 rounded-full bg-gradient-to-br from-cyan-500 via-indigo-600 to-purple-700 blur-2xl opacity-40"></div>

          <div className="relative w-36 h-36 rounded-full bg-black border border-white/10 flex items-center justify-center text-white font-semibold shadow-2xl">
          Hey
          </div>
        </div>

        {/* 🌌 Orbit Ring */}
        <div className="absolute inset-0 rounded-full border border-white/10"></div>

        {/* 🔄 Rotating Orbit */}
        <div className="absolute inset-0 animate-spin-slow">
          {techs.map((tech, index) => {
            const angle = (360 / techs.length) * index;
            return (
              <div
                key={index}
                className="absolute top-1/2 left-1/2"
                style={{
                  transform: `
                    rotate(${angle}deg)
                    translate(160px)
                    rotate(-${angle}deg)
                  `,
                }}
              >
                <div className="w-14 h-14 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 flex items-center justify-center text-2xl shadow-xl hover:scale-110 transition">
                  {tech.icon}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default TechPlanet;
