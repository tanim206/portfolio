import { FiGithub, FiExternalLink } from "react-icons/fi";
import { GiFlatStar, GiTechnoHeart, GiTrenchKnife } from "react-icons/gi"; // লোগোর জন্য নতুন আইকন
import tanim from "../../assets/Tanim.jpg";

const HeroSection = () => {
  return (
    <main className="flex max-w-5xl mx-auto px-4 flex-col items-center">
    
      <div className="mb-6 mt-8 rounded-full border animate-pulse">
        <img src={tanim} alt="" className="h-30 w-30  rounded-full" />
      </div>

      <div className="w-full rounded-3xl px-2">
        <div className="flex justify-center items-center gap-14">
          <div className="flex flex-col items-center text-center lg:text-left gap-6 flex-1">
            <div className="space-y-4">
              <div className="mb-4 flex justify-center ">
                <p className="rounded-full text-xs flex justify-center items-center gap-3 border py-1 px-2 sm:px-10 border-black/10 bg-white text-gray-500">
                  <GiFlatStar />
                  <span>
                    Development Magic • Clean Code Enthusiast • Innovation
                  </span>
                </p>
              </div>

              <h1 className="text-3xl md:text-5xl text-center font-bold">
                <span>Hi, I'm Md. Tanim Hussen —</span>{" "}
                <br className="hidden md:block" />
                <span> Junior Web Developer </span>
              </h1>
              <p className="text-gray-500 text-center text-sm mt-2">
                Development Magic • Clean Code Enthusiast • Innovation
              </p>
            </div>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start gap-8">
              <div>
                <p className=" font-semibold text-lg">25+</p>
                <p className="text-gray-500 text-xs">Projects</p>
              </div>
              <div>
                <p className=" font-semibold text-lg">2+</p>
                <p className="text-gray-500 text-xs">Years</p>
              </div>
              <div>
                <p className=" font-semibold text-lg">100%</p>
                <p className="text-gray-500 text-xs">Passion</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">
              <a
                href="https://github.com/tanim206"
                className="flex items-center gap-2 px-8 py-1.5 shadow-sm rounded-full bg-white border border-black/20 hover:bg-black/10 transition"
              >
                <FiGithub className="w-5 h-5" />
                Github
              </a>

              <a
                href="#"
                className="flex items-center gap-2 px-8 py-1.5 shadow-sm rounded-full bg-black border border-white/20 text-white hover:bg-[#000000] transition"
              >
                <FiExternalLink className="w-5 h-5" />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
