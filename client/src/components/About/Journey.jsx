import { Map } from "lucide-react";
import React from "react";

const Journey = () => {
  return (
    <section className="w-full py-16">
      <div className="max-w-5xl mx-auto px-4 space-y-12">

        {/* Heading */}
        <div className="flex items-center gap-3 ">
          <Map size={20} />
          <h3 className="text-xl font-semibold">Developer Journey</h3>
        </div>

        {/* Timeline */}
        <div className="relative space-y-6 border-l-2 border-white/50 pl-6">

          <p className=" leading-relaxed">
            <span className="font-semibold ">2021 —</span>{" "}
            Started as a web designer, mastering HTML, CSS, JavaScript, and Bootstrap.
          </p>

          <p className=" leading-relaxed">
            <span className="font-semibold ">2022 —</span>{" "}
            Began freelancing and transitioned into frontend development with React,
            Next.js, and Tailwind CSS.
          </p>

          <p className=" leading-relaxed">
            <span className="font-semibold ">2023 —</span>{" "}
            Worked as a freelance email signature developer and explored backend
            technologies like Node.js and MongoDB.
          </p>

          <p className=" leading-relaxed">
            <span className="font-semibold ">2024–2025 —</span>{" "}
            Joined HypoMatrix LTD and grew into a Senior Software Engineer while
            continuously learning.
          </p>

        </div>
      </div>
    </section>
  );
};

export default Journey;