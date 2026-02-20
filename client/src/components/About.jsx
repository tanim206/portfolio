const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      
      <div className="max-w-5xl  w-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-8 md:p-14 shadow-2xl">

        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            About Me
          </h2>
          <p className="text-gray-400 mt-3 text-sm md:text-base">
            Passionate Developer • Clean Architecture • Modern UI Lover
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Text */}
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              I am <span className="text-white font-medium">Muhammad Tanim</span>, 
              a passionate Web Application Developer who loves building 
              modern, scalable and clean user interfaces.
            </p>

            <p>
              My focus is on creating smooth UI experiences, clean backend 
              architecture, and writing maintainable code.
            </p>

            <p>
              I enjoy working with React, Node.js, MongoDB, and modern CSS 
              frameworks like Tailwind to build premium digital experiences.
            </p>
          </div>

          {/* Right Stats / Highlights */}
          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center backdrop-blur-xl">
              <h3 className="text-2xl font-semibold text-white">25+</h3>
              <p className="text-gray-400 text-sm">Projects Completed</p>
            </div>

            <div className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center backdrop-blur-xl">
              <h3 className="text-2xl font-semibold text-white">2+</h3>
              <p className="text-gray-400 text-sm">Years Experience</p>
            </div>

            <div className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center backdrop-blur-xl">
              <h3 className="text-2xl font-semibold text-white">100%</h3>
              <p className="text-gray-400 text-sm">Client Focus</p>
            </div>

            <div className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center backdrop-blur-xl">
              <h3 className="text-2xl font-semibold text-white">∞</h3>
              <p className="text-gray-400 text-sm">Learning Mode</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default About;
