import React from "react";

const SocialMedia = () => {
  return (
    <div>
      <div className="flex justify-center lg:justify-start gap-6 text-gray-400 text-xl">
        <a
          href="https://github.com/tanim206"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition cursor-pointer hover:scale-110"
        >
          <FiGithub />
        </a>

        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-700 transition cursor-pointer hover:scale-110"
        >
          <FiLinkedin />
        </a>

        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-sky-400 transition cursor-pointer hover:scale-110"
        >
          <FiTwitter />
        </a>

        <a
          href="mailto:mdtanim.dev@gmail.com"
          className="hover:text-red-400 transition cursor-pointer hover:scale-110"
        >
          <FiMail />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
