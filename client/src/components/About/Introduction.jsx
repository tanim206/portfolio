import { User, Map, GraduationCap, Mail } from "lucide-react";

const Introduction = () => {
  return (
    <section className="max-w-5xl mx-auto px-2 md:px-0">
      <div className=" mb-10">
        <h2 className="text-4xl  font-bold">About_____</h2>
        <p className="text-gray-500 mt-4 text-lg">
          Professional journey and my history.
        </p>
      </div>
      {/* Intro Card */}
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 space-y-4">
        <div className="flex items-center gap-3 text-xl">
          <User size={20} />
          <span className="font-semibold">Introduction</span>
        </div>

        <p className="text-slate-700 leading-relaxed text-lg">
          Hey, I&apos;m{" "}
          <span className="font-semibold text-slate-900">Md. Tanim Hussen</span>
          , a self-taught web app developer who loves solving real-world
          problems through clean code, thoughtful design, and continuous
          learning.
        </p>
      </div>
    </section>
  );
};

export default Introduction;
