import { FaGithub, FaLinkedin } from "react-icons/fa";

const HeroSectiom = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0b1622] text-white px-6">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div>
          <p className="text-teal-400 mb-3 font-medium">
            👋 Hello, I'm
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Muhammad Tanim
          </h1>

          <p className="text-gray-400 mb-8 leading-relaxed">
            I build modern, scalable and user-friendly web applications 
            using React, Node.js and MongoDB. Passionate about clean UI 
            and high performance.
          </p>

          <div className="flex gap-4 mb-8">
            <a
              href="#"
              className="px-6 py-3 bg-teal-500 rounded-lg font-semibold hover:shadow-[0_0_20px_#14b8a6] transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-teal-500 rounded-lg hover:bg-teal-500/10 transition"
            >
              Contact Me
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 text-2xl text-gray-400">
            <a href="#"><FaGithub className="hover:text-white transition" /></a>
            <a href="#"><FaLinkedin className="hover:text-teal-400 transition" /></a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-400 to-cyan-500 blur-3xl opacity-30 rounded-full"></div>

            <img
              src="/YOUR_IMAGE_PATH.jpg"
              alt="Muhammad Tanim"
              className="relative w-72 h-72 md:w-80 md:h-80 object-cover rounded-full border-4 border-teal-500 shadow-2xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSectiom;