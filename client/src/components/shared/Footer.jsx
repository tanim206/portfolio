import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-transparent backdrop-blur-md border-t border-white/20 text-white mt-20">
      <div className="max-w-5xl mx-auto px-6 md:px-0 py-12">
        <div className="grid md:grid-cols-2 gap-12">

          {/* Left - Branding */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-cyan-400">Muhammad Tanim</h2>

            <p className="text-gray-300 text-sm leading-relaxed">
              Junior Web Developer passionate about building modern, responsive
              and user-friendly web applications.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 text-lg">
              <a href="#" className="hover:text-white text-gray-300 transition hover:scale-110">
                <FiGithub />
              </a>

              <a href="#" className="hover:text-cyan-400 text-gray-300 transition hover:scale-110">
                <FiLinkedin />
              </a>

              <a href="#" className="hover:text-sky-400 text-gray-300 transition hover:scale-110">
                <FiTwitter />
              </a>

              <a href="#" className="hover:text-red-400 text-gray-300 transition hover:scale-110">
                <FiMail />
              </a>
            </div>
          </div>

          {/* Right - Subscribe UI (Static) */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">
              Subscribe
            </h3>

            <p className="text-gray-300 text-sm mb-4">
              Stay updated with my latest projects and articles.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition"
              />

              <button className="px-6 py-2 bg-cyan-500 rounded-md font-medium hover:bg-cyan-400 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 mt-10 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Muhammad Tanim. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;