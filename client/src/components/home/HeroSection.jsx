import { FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";
import TechPlanet from "../../ui/TechPlanet";

const HeroSection = () => {
  return (
    <main className="mt-30 flex max-w-6xl mx-auto px-4">
      <div className="w-full rounded-3xl  p-8 md:p-12">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex flex-col text-center lg:text-left gap-6 flex-1">
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold text-white">
                <span>Hi, I'm Muhammad Tanim —</span> 
               <span> Junior Web Developer </span> ✨
              </h1>
              <p className="text-gray-400 text-sm mt-2">
                Development Magic  •  Clean Code Enthusiast  •  Innovation
              </p>
            </div>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start gap-8">
              <div>
                <p className="text-white font-semibold text-lg">25+</p>
                <p className="text-gray-500 text-xs">Projects</p>
              </div>
              <div>
                <p className="text-white font-semibold text-lg">2+</p>
                <p className="text-gray-500 text-xs">Years</p>
              </div>
              <div>
                <p className="text-white font-semibold text-lg">100%</p>
                <p className="text-gray-500 text-xs">Passion</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button className="px-6 py-2 rounded-xl bg-cyan-500 text-white shadow-lg hover:shadow-cyan-500/40 hover:scale-105 transition">
                View Projects
              </button>
              <button className="px-6 py-2 rounded-xl border border-white/20 text-white hover:bg-white/10 transition">
                Download CV
              </button>
            </div>

            {/* Social */}
            <div className="flex justify-center lg:justify-start gap-6 text-gray-400 text-xl">
              <a
                href="https://github.com/tanim206"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition cursor-pointer hover:scale-110"
              >
                <FiGithub />
              </a>

              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-700 transition cursor-pointer hover:scale-110"
              >
                <FiLinkedin />
              </a>

              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400 transition cursor-pointer hover:scale-110"
              >
                <FiTwitter />
              </a>

              <a
                href="mailto:mdtanim.dev@gmail.com"
                className="hover:text-red-400 transition cursor-pointer hover:scale-110"
              >
                <FiMail />
              </a>
            </div>
          </div>

          {/* Right Planet */}
          <div className="flex-1 flex justify-center">
            <TechPlanet />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
