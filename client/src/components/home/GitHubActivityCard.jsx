import React from "react";
import { FaGithub } from "react-icons/fa";

const GitHubActivityCard = () => {
  return (
    <section className="flex items-center justify-center px-4 py-20 ">
      {/* Glassmorphic Card */}
      <div className="max-w-5xl w-full rounded-3xl md:p-0 p-6  ">
        
        {/* Header with GitHub logo */}
        <div className="flex items-center gap-3 mb-6">
          <FaGithub className="text-2xl" />
          <h2 className="text-2xl md:text-3xl font-bold  tracking-wide">
            GitHub Activity —
          </h2>
        </div>

        {/* GitHub Contributions Iframe */}
        <div className="overflow-hidden rounded-2xl border border-black bg-white backdrop-blur-xl shadow-md p-2">
          <iframe
            src="https://ghchart.rshah.org/tanim206?full=true&bg=0d1117&color=4c1&line=ffffff"
            title="GitHub Contribution Chart"
            frameBorder="0"
            width="100%"
            height="240"
            className="rounded-2xl"
          ></iframe>
        </div>

        {/* Footer Info */}
        <p className="text-gray-400 mt-4 text-center text-sm md:text-base">
          Total contributions in the last year
        </p>
      </div>
    </section>
  );
};

export default GitHubActivityCard;
