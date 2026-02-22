// Database.jsx
import { SiClerk, SiCloudinary, SiFirebase, SiMongodb, SiMongoose } from "react-icons/si";

const Auth = () => {
  const tools = [
    { name: "Clerk", subtitle: "Expert", icon: <SiClerk />, color: "" },
    { name: "Firebase", subtitle: "Expert", icon: <SiFirebase />, color: "gold" },
   
  ];

  return (
    <div className="space-y-3 px-4 sm:px-6 md:px-8 lg:px-0">
      <h3 className="text-xl font-semibold text-cyan-400 text-center sm:text-left">Authentication</h3>
      <div className="flex flex-wrap justify-center sm:justify-start gap-4 max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto">
        {tools.map((tool, i) => (
          <div
            key={i}
            className="flex items-center gap-4 sm:gap-6 py-3 sm:py-4 px-4 sm:px-6 bg-white border border-black/10 rounded-lg hover:bg-white/5 transition w-full sm:w-auto"
          >
            <span style={{ color: tool.color }} className="text-2xl sm:text-xl">{tool.icon}</span>
            <div className="flex flex-col">
              <span className="font-medium text-sm sm:text-base">{tool.name}</span>
              <span className="text-xs text-gray-400">{tool.subtitle}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Auth;