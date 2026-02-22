import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiInstagram } from "react-icons/fi";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black py-16 ">
      <div className="max-w-5xl mx-auto px-4 md:px-0">
        <div className="rounded-3xl bg-white/5 backdrop-blur border border-white/10 p-8 space-y-8">

          {/* Name */}
          <div className="text-white text-2xl font-bold">
            Muhammad Tanim
          </div>

          {/* Description / Skills */}
          <p className="text-gray-400">
            Junior Web Developer skilled in <span className="text-white font-medium">React, Next.js, Tailwind CSS, Node.js, Express.js, MongoDB</span>. Passionate about building modern, responsive, and user-friendly web applications.
          </p>

          {/* Contact List */}
          <ul className="grid sm:grid-cols-2 gap-3 text-gray-300">
            <li className="flex items-center gap-2">
              <FiGithub className="text-white" />
              <a
                href="https://github.com/tanim206"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white hover:underline"
              >
                @tanim206
              </a>
            </li>

            <li className="flex items-center gap-2">
              <FiTwitter className="text-sky-400" />
              <a
                href="https://x.com/mdtanim_dev"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white hover:underline"
              >
                @mdtanim_dev
              </a>
            </li>

            <li className="flex items-center gap-2">
              <FiLinkedin className="text-blue-500" />
              <a
                href="https://www.linkedin.com/in/tanim206"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white hover:underline"
              >
                @tanim206
              </a>
            </li>

            <li className="flex items-center gap-2">
              <FiMail className="text-red-400" />
              <a
                href="mailto:mdtanim.dev@gmail.com"
                className="font-medium text-white hover:underline"
              >
                mdtanim.dev@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FiInstagram className="text-pink-400" />
              <a
                href="https://www.instagram.com/in/hussen_md_tanim"
                className="font-medium text-white hover:underline"
              >
            @hussen_md_tanim
              </a>
            </li>
          </ul>

          {/* Bottom copyright */}
          <div className="border-t border-white/20 mt-8 pt-4 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Muhammad Tanim. All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;