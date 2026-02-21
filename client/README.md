 <!-- <!-- <div className="flex gap-4 mt-4 text-gray-700">
              <FiLinkedin className="text-xl hover:text-blue-600 cursor-pointer" />
              <FiTwitter className="text-xl hover:text-blue-400 cursor-pointer" />
              <FiGithub className="text-xl hover:text-black cursor-pointer" />
              <FiFacebook className="text-xl hover:text-blue-600 cursor-pointer" />
              <FiInstagram className="text-xl hover:text-pink-500 cursor-pointer" />
            </div> -->




            import { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="w-full max-w-3xl mx-auto mt-30">
      {/* Tab Buttons */}
      <div className="flex border-b border-gray-700">
        <button
          onClick={() => setActiveTab("tab1")}
          className={`px-6 py-3 font-medium transition ${
            activeTab === "tab1"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Profile
        </button>

        <button
          onClick={() => setActiveTab("tab2")}
          className={`px-6 py-3 font-medium transition ${
            activeTab === "tab2"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Projects
        </button>

        <button
          onClick={() => setActiveTab("tab3")}
          className={`px-6 py-3 font-medium transition ${
            activeTab === "tab3"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Contact
        </button>
      </div>

      {/* Tab Content */}
      <div className="bg-gray-900 p-6 rounded-b-xl text-white">
        {activeTab === "tab1" && (
          <div>
            <h2 className="text-xl font-bold mb-2">My Profile</h2>
            <p className="text-gray-400">
              I am a Diploma Engineering student learning React & Java.
            </p>
          </div>
        )}

        {activeTab === "tab2" && (
          <div>
            <h2 className="text-xl font-bold mb-2">My Projects</h2>
            <p className="text-gray-400">
              Portfolio Website, Authentication System, API Projects.
            </p>
          </div>
        )}

        {activeTab === "tab3" && (
          <div>
            <h2 className="text-xl font-bold mb-2">Contact Info</h2>
            <p className="text-gray-400">
              Email: example@gmail.com <br />
              Phone: 0123456789
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs; -->