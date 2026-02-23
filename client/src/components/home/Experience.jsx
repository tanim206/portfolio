import { FaBriefcase, FaVideo } from "react-icons/fa";
import { PiOfficeChairBold } from "react-icons/pi";
import {
  SiBackendless,
  SiFrontendmentor,
  SiStmicroelectronics,
  SiTaichigraphics,
} from "react-icons/si";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto md:px-0">
      
        {/* Title */}
        <div className=" mb-10">
          <h2 className="text-4xl  font-bold">
          Experience_____
          </h2>
          <p className="text-gray-500 mt-4 text-lg">
            Professional journey and work history.
          </p>

          
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Experience 1 */}
          <div className=" p-8 rounded-2xl shadow border border-black/5 hover:shadow-xl transition duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#cf1d5b] text-white rounded-full mr-4">
                <SiFrontendmentor size={18} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Frontend Development</h3>
                <p className="text-[#cf1d5b] text-sm">2021 - Present</p>
              </div>
            </div>
            <p className="text-gray-600">
              Teaching branding, typography, UI/UX fundamentals and mentoring
              students to build professional portfolios with real-world
              projects.
            </p>
          </div>

          {/* Experience 2 */}
          <div className=" p-8 rounded-2xl shadow border border-black/5 hover:shadow-xl transition duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#509e42] text-white rounded-full mr-4">
                <SiBackendless size={18} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Backend Development</h3>
                <p className="text-[#509e42] text-sm">2022 - Present</p>
              </div>
            </div>
            <p className="text-gray-600">
              Designing marketing materials, banners, and social media creatives
              for student counselling campaigns and branding projects.
            </p>
          </div>

          {/* Experience 3 */}
          <div className=" p-8 rounded-2xl shadow border border-black/5 hover:shadow-xl transition duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#d47800] text-white rounded-full mr-4">
                <SiTaichigraphics size={18} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Graphics Design</h3>
                <p className="text-[#d47800] text-sm">2020 - Present</p>
              </div>
            </div>
            <p className="text-gray-600">
              Providing logo design, brand identity, and social media content
              design services for local and international clients.
            </p>
          </div>
          {/* Experience 4 */}
          <div className=" p-8 rounded-2xl shadow border border-black/5 hover:shadow-xl transition duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#d92d21] text-white rounded-full mr-4">
                <FaVideo size={18} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Motion Graphics</h3>
                <p className="text-[#d92d21] text-sm">2020 - Present</p>
              </div>
            </div>
            <p className="text-gray-600">
              Providing logo design, brand identity, and social media content
              design services for local and international clients.
            </p>
          </div>
          {/* Experience 5 */}
          <div className=" p-8 rounded-2xl shadow border border-black/5 hover:shadow-xl transition duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#00acf0] text-white rounded-full mr-4">
                <PiOfficeChairBold size={18} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Office Applicaion</h3>
                <p className="text-[#00acf0] text-sm">2020 - Present</p>
              </div>
            </div>
            <p className="text-gray-600">
              Providing logo design, brand identity, and social media content
              design services for local and international clients.
            </p>
          </div>
          {/* Experience 6 */}
          <div className=" p-8 rounded-2xl shadow border border-black/5 hover:shadow-xl transition duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#f24e29] text-white rounded-full mr-4">
                <SiStmicroelectronics size={18} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">House Wiring</h3>
                <p className="text-[#f24e29] text-sm">2020 - Present</p>
              </div>
            </div>
            <p className="text-gray-600">
              Providing logo design, brand identity, and social media content
              design services for local and international clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
