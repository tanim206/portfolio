// Frontend.jsx
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import {
  SiBootstrap,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

const Frontend = () => {
  return (
    <div className="space-y-6 px-4 sm:px-6 md:px-8 lg:px-0">
      {/* Heading with Icon and Subtitle */}
      <div className="space-y-1 text-center sm:text-left">
        <div className="flex items-center justify-center sm:justify-start gap-2">
          <FaReact className="w-6 h-6" />
          <h3 className="text-xl font-semibold">Frontend____</h3>
        </div>
        <p className="text-gray-400 text-sm">Technologies I work with</p>
      </div>

      {/* Tools Cards */}
      <div className="flex flex-wrap justify-center sm:justify-start gap-4 max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto">
        {/* HTML5 */}
        <div className="flex items-center gap-4 sm:gap-6 py-3 sm:py-4 px-4 sm:px-6 bg-white border border-black/10 rounded-lg hover:bg-white/5 transition w-full sm:w-auto">
          <span style={{ color: "#E34F26" }} className="text-2xl sm:text-xl flex-shrink-0">
            <FaHtml5 />
          </span>
          <div className="flex flex-col">
            <span className="font-medium text-sm sm:text-base">HTML5</span>
            <span className="text-xs text-gray-400">Expert</span>
          </div>
        </div>

        {/* CSS3 */}
        <div className="flex items-center gap-4 sm:gap-6 py-3 sm:py-4 px-4 sm:px-6 bg-white border border-black/10 rounded-lg hover:bg-white/5 transition w-full sm:w-auto">
          <span style={{ color: "#264de4" }} className="text-2xl sm:text-xl flex-shrink-0">
            <FaCss3Alt />
          </span>
          <div className="flex flex-col">
            <span className="font-medium text-sm sm:text-base">CSS3</span>
            <span className="text-xs text-gray-400">Expert</span>
          </div>
        </div>

        {/* JavaScript */}
        <div className="flex items-center gap-4 sm:gap-6 py-3 sm:py-4 px-4 sm:px-6 bg-white border border-black/10 rounded-lg hover:bg-white/5 transition w-full sm:w-auto">
          <span style={{ color: "#F7DF1E" }} className="text-2xl sm:text-xl flex-shrink-0">
            <SiJavascript />
          </span>
          <div className="flex flex-col">
            <span className="font-medium text-sm sm:text-base">JavaScript</span>
            <span className="text-xs text-gray-400">Expert</span>
          </div>
        </div>

        {/* Next */}
        <div className="flex items-center gap-4 sm:gap-6 py-3 sm:py-4 px-4 sm:px-6 bg-white border border-black/10 rounded-lg hover:bg-white/5 transition w-full sm:w-auto">
          <span style={{ color: "#000" }} className="text-2xl sm:text-xl flex-shrink-0">
            <SiNextdotjs />
          </span>
          <div className="flex flex-col">
            <span className="font-medium text-sm sm:text-base">Next</span>
            <span className="text-xs text-gray-400">Expert</span>
          </div>
        </div>

        {/* React */}
        <div className="flex items-center gap-4 sm:gap-6 py-3 sm:py-4 px-4 sm:px-6 bg-white border border-black/10 rounded-lg hover:bg-white/5 transition w-full sm:w-auto">
          <span style={{ color: "#61DBFB" }} className="text-2xl sm:text-xl flex-shrink-0">
            <FaReact />
          </span>
          <div className="flex flex-col">
            <span className="font-medium text-sm sm:text-base">React</span>
            <span className="text-xs text-gray-400">Expert</span>
          </div>
        </div>

        {/* Tailwind CSS */}
        <div className="flex items-center gap-4 sm:gap-6 py-3 sm:py-4 px-4 sm:px-6 bg-white border border-black/10 rounded-lg hover:bg-white/5 transition w-full sm:w-auto">
          <span style={{ color: "#38BDF8" }} className="text-2xl sm:text-xl flex-shrink-0">
            <SiTailwindcss />
          </span>
          <div className="flex flex-col">
            <span className="font-medium text-sm sm:text-base">Tailwind CSS</span>
            <span className="text-xs text-gray-400">Expert</span>
          </div>
        </div>

        {/* Bootstrap */}
        <div className="flex items-center gap-4 sm:gap-6 py-3 sm:py-4 px-4 sm:px-6 bg-white border border-black/10 rounded-lg hover:bg-white/5 transition w-full sm:w-auto">
          <span style={{ color: "#646CFF" }} className="text-2xl sm:text-xl flex-shrink-0">
            <SiBootstrap />
          </span>
          <div className="flex flex-col">
            <span className="font-medium text-sm sm:text-base">Bootstrap</span>
            <span className="text-xs text-gray-400">Intermediate</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;