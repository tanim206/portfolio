// Database.jsx
import { FaReact } from "react-icons/fa";
import { SiCloudinary, SiMongodb, SiMongoose } from "react-icons/si";

const Database = () => {
  return (
    <div className="space-y-3 px-4 sm:px-6 md:px-8 lg:px-0">
      <div className="space-y-1 text-center sm:text-left">
        <div className="flex items-center justify-center sm:justify-start gap-2">
          <FaReact className="w-6 h-6" />
          <h3 className="text-xl font-semibold">Database____</h3>
        </div>
        <p className="text-gray-400 text-sm">Technologies I work with</p>
      </div>

      <div className="flex flex-wrap justify-center sm:justify-start gap-4 max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto">
        {/* MongoDB Card */}
        <div className="flex items-center gap-4 sm:gap-6 py-3 sm:py-4 px-4 sm:px-6 border border-black/10 rounded-lg hover:bg-white/5 transition w-full sm:w-auto">
          <span style={{ color: "#4DB33D" }} className="text-2xl sm:text-xl">
            <SiMongodb />
          </span>
          <div className="flex flex-col">
            <span className="font-medium text-sm sm:text-base">MongoDB</span>
            <span className="text-xs text-gray-400">Expert</span>
          </div>
        </div>

        {/* Mongoose Card */}
        <div className="flex items-center gap-4 sm:gap-6 py-3 sm:py-4 px-4 sm:px-6 border border-black/10 rounded-lg hover:bg-white/5 transition w-full sm:w-auto">
          <span style={{ color: "#4DB33D" }} className="text-2xl sm:text-xl">
            <SiMongoose />
          </span>
          <div className="flex flex-col">
            <span className="font-medium text-sm sm:text-base">Mongoose</span>
            <span className="text-xs text-gray-400">Expert</span>
          </div>
        </div>

        {/* Cloudinary Card */}
        <div className="flex items-center gap-4 sm:gap-6 py-3 sm:py-4 px-4 sm:px-6 border border-black/10 rounded-lg hover:bg-white/5 transition w-full sm:w-auto">
          <span style={{ color: "#38BDF8" }} className="text-2xl sm:text-xl">
            <SiCloudinary />
          </span>
          <div className="flex flex-col">
            <span className="font-medium text-sm sm:text-base">Cloudinary</span>
            <span className="text-xs text-gray-400">Expert</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Database;