import BgUi from "../../ui/BgUi";
import {
  FiLinkedin,
  FiTwitter,
  FiGithub,
  FiFacebook,
  FiInstagram,
} from "react-icons/fi";

const FirstPage = () => {
  return (
    <main className="relative min-h-screen flex items-center justify-center">
      {/* Background UI */}
      <div className="absolute inset-0 -z-10">
        <BgUi />
      </div>

      {/* Page Content */}
      <section className="relative flex flex-col items-center text-center px-4">
        <div className="max-w-3xl w-full flex flex-col items-center gap-6">
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-snug">
            Hello, It's Me <br />
            <span className="text-blue-400">Muhammad Tanim</span>
          </h1>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3">
            <span className="bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium">
              Web Developer
            </span>
            <span className="bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium">
              Innovation
            </span>
            <span className="bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium">
              Clean Code
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-200 text-base md:text-lg">
            JavaScript lover 🚀 | Engineering the Future of Web Technology
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
              View Projects ...
            </button>
            <button className="border bg-[#5e317d] border-blue-500 text-blue-500 px-6 py-2 rounded-lg hover:bg-blue-50 transition">
              Download CV
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 text-white text-xl">
            <FiLinkedin className="hover:text-blue-600 cursor-pointer" />
            <FiTwitter className="hover:text-blue-400 cursor-pointer" />
            <FiGithub className="hover:text-gray-800 cursor-pointer" />
            <FiFacebook className="hover:text-blue-600 cursor-pointer" />
            <FiInstagram className="hover:text-pink-500 cursor-pointer" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default FirstPage;
