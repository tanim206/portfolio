// src/layouts/MainLayout.jsx
import { Outlet } from "react-router";
import Navber from "../components/shared/Navber";
import Footer from "../components/shared/Footer";
import BgUi from "../ui/BgUiTwo"; // তোমার FloatingLines

const MainLayout = () => {
  return (
    <div className="relative min-h-screen">
      {/* 💫 Background */}
      <div className="fixed inset-0 -z-10">
        <BgUi
          linesGradient={['#00d6c1', '#61dafb', '#c700ff']}
          enabledWaves={['top', 'middle', 'bottom']}
          lineCount={[6, 4, 5]}
          lineDistance={[5, 3, 4]}
          animationSpeed={1.2}
          interactive={true}
          bendRadius={5}
          bendStrength={-0.5}
          parallax={true}
          parallaxStrength={0.2}
          mixBlendMode="screen"
        />
      </div>

      {/* 🖥️ Main Layout Content */}
      <Navber />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;