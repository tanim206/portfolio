const HeroSection = () => {
  return (
    <div className="space-y-4">
      <div className="p-5 rounded-xl bg-[#0b1622] border border-white/10">
        <h3 className="text-white font-semibold">Portfolio Website</h3>
        <p className="text-gray-400 text-sm">
          Personal portfolio using React & Tailwind CSS.
        </p>
      </div>

      <div className="p-5 rounded-xl bg-[#0b1622] border border-white/10">
        <h3 className="text-white font-semibold">MERN Blog App</h3>
        <p className="text-gray-400 text-sm">
          Full-stack blog app with authentication.
        </p>
      </div>

      <div className="p-5 rounded-xl bg-[#0b1622] border border-white/10">
        <h3 className="text-white font-semibold">UI Component Library</h3>
        <p className="text-gray-400 text-sm">
          Reusable UI components for modern web apps.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;