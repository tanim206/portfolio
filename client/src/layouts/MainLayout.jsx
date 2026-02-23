// src/layouts/MainLayout.jsx
import { Outlet } from "react-router";
import Navber from "../components/shared/Navber";
import Footer from "../components/shared/Footer";
import tanim from "../assets/TAnim.jpg"; // replace with your profile image path

const MainLayout = () => {
  return (
    <div className="relative min-h-screen">
      <Navber />

      {/* Profile image fixed at top-right */}
      <div className="fixed top-4 right-4 z-50">
        <img
          src={tanim}
          alt="Profile"
          className="w-12 h-12 rounded-full border-2 border-gray-300 object-cover shadow-md"
        />
      </div>

      <div className="mt-6">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;