import { Lock, FileText, Code2, QrCode, Palette, Ruler } from "lucide-react";

const Projects = () => {
  return (
    <section className="bg-white mb-16 mt-30">
      <div className="max-w-6xl mx-auto px-4">

        {/* Section Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-indigo-600">Projects</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A showcase of my latest work including tools, generators, and utilities
            that I built to solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow hover:shadow-lg transition">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500 text-white">
              <Lock size={20} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Password Generator
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Create strong, secure passwords with customizable options including length and complexity.
            </p>
            <p className="text-sm font-medium text-red-500">Available Now ✓</p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow hover:shadow-lg transition">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500 text-white">
              <FileText size={20} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Lorem Ipsum Generator
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Generate placeholder text with custom word count, paragraph length and formatting.
            </p>
            <p className="text-sm font-medium text-blue-500">Available Now ✓</p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow hover:shadow-lg transition">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-green-500 text-white">
              <Code2 size={20} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              JWT Decoder
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Decode and analyze JSON Web Tokens with header, payload and signature info.
            </p>
            <p className="text-sm font-medium text-green-500">Available Now ✓</p>
          </div>

          {/* Card 4 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow hover:shadow-lg transition">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500 text-white">
              <QrCode size={20} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              QR Code Generator
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Generate QR codes for URLs, text, and contact information.
            </p>
            <p className="text-sm font-medium text-purple-500">Available Now ✓</p>
          </div>

          {/* Card 5 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow hover:shadow-lg transition">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500 text-white">
              <Palette size={20} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Color Palette Generator
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Create beautiful color palettes with harmony rules and export options.
            </p>
            <p className="text-sm font-medium text-orange-500">Available Now ✓</p>
          </div>

          {/* Card 6 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow hover:shadow-lg transition">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-pink-500 text-white">
              <Ruler size={20} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Unit Converter
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Convert between length, weight, temperature and currency units.
            </p>
            <p className="text-sm font-medium text-pink-500">Available Now ✓</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;