// src/layouts/MainLayout.jsx
import { Outlet } from "react-router";
import Navber from "../components/shared/Navber";
import Footer from "../components/shared/Footer";

const MainLayout = () => {
  return (
    <div className="">
      <Navber />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
