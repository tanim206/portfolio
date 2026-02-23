import { BiLogoGithub } from "react-icons/bi";
import { TbLivePhoto } from "react-icons/tb";

const Projects = () => {
  return (
    <section className="bg-white mb-16 mt-30">
      <div className="max-w-5xl mx-auto px-4 md:px-0">
        {/* Section Title */}
        <div className=" mb-12">
          <h1 className="text-4xl  font-bold text-gray-900 mb-4">
            My Projects____
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl ">
            Explore a collection of my recent projects, featuring web apps,
            automation tools, and creative solutions designed to tackle
            real-world challenges efficiently.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div class="bg-[#111111] p-10 font-sans text-white max-w-2xl rounded-lg">
            <h2 class="mb-6 text-3xl font-black uppercase ">Parrots Academy</h2>

            <p class="mb-10 text-lg leading-relaxed text-gray-300">
              Parrots Academy is an educational institute that focuses on
              improving students' skills in languages, academics, and computer
              courses.
            </p>

            <ul class="  space-y-4">
              <li className="flex items-center gap-3">
                {/* Repository Button */}
                <a
                  href="https://github.com/tanim206/Parrots-Academy-Website.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded border border-black cursor-pointer transition"
                >
                  <BiLogoGithub className="h-5 w-5" />
                  Repository
                </a>

                {/* Live View Button */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded border border-black cursor-pointer transition"
                >
                  <TbLivePhoto className="h-5 w-5" />
                  View
                </a>
              </li>
            </ul>
          </div>
          {/* Card 2 */}
          <div class="bg-[#111111] p-10 font-sans text-white max-w-2xl rounded-lg">
            <h2 class="mb-6 text-3xl font-black uppercase ">
              School Management Project
            </h2>

            <p class="mb-10 text-lg leading-relaxed text-gray-300">
              A web-based School Management System to streamline student,
              teacher, and administrative operations efficiently.
            </p>

            <ul class="  space-y-4">
              <li className="flex items-center gap-3">
                {/* Repository Button */}
                <a
                  href="https://github.com/tanim206/School-Management-Project.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded border border-black cursor-pointer transition"
                >
                  <BiLogoGithub className="h-5 w-5" />
                  Repository
                </a>

                {/* Live View Button */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded border border-black cursor-pointer transition"
                >
                  <TbLivePhoto className="h-5 w-5" />
                  View
                </a>
              </li>
            </ul>
          </div>
          {/* Card 3 */}
          <div class="bg-[#111111] p-10 font-sans text-white max-w-2xl rounded-lg">
            <h2 class="mb-6 text-3xl font-black uppercase ">
              Md. Tahrim hossen tayef
            </h2>

            <p class="mb-10 text-lg leading-relaxed text-gray-300">
              Tahrim, 4 years experienced graphic designer and IT instructor,
              creating modern designs and teaching web & UI/UX skills.
            </p>

            <ul class="  space-y-4">
              <li className="flex items-center gap-3">
                {/* Repository Button */}
                <a
                  href="https://github.com/tanim206/Md.-Tahrim-Hossain-Tayef.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded border border-black cursor-pointer transition"
                >
                  <BiLogoGithub className="h-5 w-5" />
                  Repository
                </a>

                {/* Live View Button */}
                <a
                  href="https://md-tahrim-hossain-tanim.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded border border-black cursor-pointer transition"
                >
                  <TbLivePhoto className="h-5 w-5" />
                  View
                </a>
              </li>
            </ul>
          </div>
          {/* Card 4 */}
          <div class="bg-[#111111] p-10 font-sans text-white max-w-2xl rounded-lg">
            <h2 class="mb-6 text-3xl font-black uppercase ">Shopify</h2>

            <p class="mb-10 text-lg leading-relaxed text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <ul class="  space-y-4">
              <li className="flex items-center gap-3">
                {/* Repository Button */}
                <a
                  href="https://github.com/tanim206/sHOP.com.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded border border-black cursor-pointer transition"
                >
                  <BiLogoGithub className="h-5 w-5" />
                  Repository
                </a>

                {/* Live View Button */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded border border-black cursor-pointer transition"
                >
                  <TbLivePhoto className="h-5 w-5" />
                  View
                </a>
              </li>
            </ul>
          </div>
          {/* Card 5 */}
          <div class="bg-[#111111] p-10 font-sans text-white max-w-2xl rounded-lg">
            <h2 class="mb-6 text-3xl font-black uppercase ">Summer Sale</h2>

            <p class="mb-10 text-lg leading-relaxed text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <ul class="  space-y-4">
              <li className="flex items-center gap-3">
                {/* Repository Button */}
                <a
                  href="https://github.com/tanim206/Summer-Sale-website.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded border border-black cursor-pointer transition"
                >
                  <BiLogoGithub className="h-5 w-5" />
                  Repository
                </a>

                {/* Live View Button */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded border border-black cursor-pointer transition"
                >
                  <TbLivePhoto className="h-5 w-5" />
                  View
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
