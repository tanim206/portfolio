import { GraduationCap, School } from "lucide-react";
import React from "react";

const Education = () => {
  return (
    <main className="">
      <section className="max-w-5xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-10 flex items-center gap-3 ">
          <GraduationCap size={22} />
          <h3 className="text-2xl font-semibold">Education</h3>
        </div>

        {/* Timeline */}
        <div className="relative space-y-10 border-l  pl-8">
          {/* Diploma */}
          <div className="relative">
            <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-green-700"></span>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-slate-900">
                Diploma in Engineering
              </h4>
              <p className="text-sm  mt-1">
                Electronics & Technology
              </p>
              <p className="mt-3 text-slate-700">
                🎓 Moulvibazar Polytechnic Institute
              </p>
            </div>
          </div>

          {/* SSC */}
          <div className="relative">
            <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-green-700"></span>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-slate-900">
                Secondary School Certificate (SSC)
              </h4>
              <p className="text-sm  mt-1">Science Group</p>
              <p className="mt-3 text-slate-700">🏫 Shah Helal High School</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Education;
