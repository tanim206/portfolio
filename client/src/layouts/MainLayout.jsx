import { Outlet } from "react-router";
import Navber from "../components/shared/Navber";

const MainLayout = () => {
  return (
    <div>
      <Navber />
      <Outlet />
    </div>
  );
};

export default MainLayout;
