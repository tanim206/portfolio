import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const FirstPage = () => {
  return (
    <main className="mt-25 flex max-w-5xl mx-auto px-4">
      
      {/* Glass Card */}
      <div className="w-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-8 md:p-12">
        
        {/* Responsive Layout */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
          
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-white/20 bg-gradient-to-br from-cyan-400/40 to-indigo-500/40 shadow-lg"></div>
          </div>

          {/* Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 flex-1">
            
            {/* Name */}
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold text-white">
                Muhammad Tanim
              </h1>
              <p className="text-gray-400 text-sm mt-1">
                JavaScript Developer • Clean Code Enthusiast
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-8">
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
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-2 rounded-xl bg-cyan-500 text-white shadow-lg hover:shadow-cyan-500/40 hover:scale-105 transition">
                View Projects
              </button>
              <button className="px-6 py-2 rounded-xl border border-white/20 text-white hover:bg-white/10 transition">
                Download CV
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 text-gray-400 text-xl">
              <FiGithub className="hover:text-white transition cursor-pointer" />
              <FiLinkedin className="hover:text-cyan-400 transition cursor-pointer" />
              <FiTwitter className="hover:text-sky-400 transition cursor-pointer" />
            </div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default FirstPage;
