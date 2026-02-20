"use client";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      
      {/* Glassmorphic Card */}
      <div className="w-full max-w-3xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-8 md:p-12 shadow-[0_0_60px_rgba(0,255,255,0.15)]">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
          Contact Me
        </h2>
        <p className="text-gray-400 text-center mb-6">
          Feel free to reach out for collaborations or just a friendly hello 👋
        </p>

        {/* Contact Form */}
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          ></textarea>

          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-cyan-500 text-white font-semibold shadow-lg hover:shadow-cyan-500/40 hover:scale-105 transition"
          >
            Send Message
          </button>
        </form>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-8 text-gray-400 text-xl">
          <a href="https://github.com/tanim206" target="_blank">
            <FiGithub className="hover:text-white transition cursor-pointer" />
          </a>
          <a href="https://linkedin.com/in/tanim206" target="_blank">
            <FiLinkedin className="hover:text-cyan-400 transition cursor-pointer" />
          </a>
          <a href="https://twitter.com/tanim206" target="_blank">
            <FiTwitter className="hover:text-sky-400 transition cursor-pointer" />
          </a>
          <a href="mailto:tanim@example.com">
            <FiMail className="hover:text-red-400 transition cursor-pointer" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;
