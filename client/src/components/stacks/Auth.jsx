// Auth.jsx
import { FaReact } from "react-icons/fa";
import { SiClerk, SiFirebase } from "react-icons/si";

const Auth = () => {
  return (
    <div className="space-y-3 px-4 sm:px-6 md:px-8 lg:px-0">
      <div className="space-y-1 text-center sm:text-left">
        <div className="flex items-center justify-center sm:justify-start gap-2">
          <FaReact className="w-6 h-6" />
          <h3 className="text-xl font-semibold">Authentication____</h3>
        </div>
        <p className="text-gray-400 text-sm">Technologies I work with</p>
      </div>

      <div className="flex flex-wrap justify-center sm:justify-start gap-4 max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto">
        {/* Clerk Card */}
        <div className="flex items-center gap-4 sm:gap-6 py-3 sm:py-4 px-4 sm:px-6 bg-white border border-black/10 rounded-lg hover:bg-white/5 transition w-full sm:w-auto">
          <span className="text-2xl sm:text-xl">
            <SiClerk />
          </span>
          <div className="flex flex-col">
            <span className="font-medium text-sm sm:text-base">Clerk</span>
            <span className="text-xs text-gray-400">Expert</span>
          </div>
        </div>

        {/* Firebase Card */}
        <div className="flex items-center gap-4 sm:gap-6 py-3 sm:py-4 px-4 sm:px-6 bg-white border border-black/10 rounded-lg hover:bg-white/5 transition w-full sm:w-auto">
          <span style={{ color: "gold" }} className="text-2xl sm:text-xl">
            <SiFirebase />
          </span>
          <div className="flex flex-col">
            <span className="font-medium text-sm sm:text-base">Firebase</span>
            <span className="text-xs text-gray-400">Expert</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;