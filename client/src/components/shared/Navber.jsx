"use client";
import { useState } from "react";
import { FiHome, FiUser, FiCode, FiMail, FiSearch } from "react-icons/fi";
import BgUi from "../../ui/BgUi";

const navItems = [
  { id: 1, name: "Home", icon: FiHome },
  { id: 2, name: "About", icon: FiUser },
  { id: 3, name: "Projects", icon: FiCode },
  { id: 4, name: "Contact", icon: FiMail },
  { id: 5, name: "Experience", icon: FiUser },
];

const Navbar = () => {
  const [active, setActive] = useState("Home");

  return (
    <main className="">
      {/* Navbar */}
      <nav className="fixed top-4 md:top-6 flex items-center gap-2 md:gap-4 left-1/2 -translate-x-1/2 z-50 w-[95%]  md:w-auto">
        <div
          className="
            flex items-center justify-between
            px-3 md:px-6 py-2 md:py-3
            gap-2 md:gap-4
            rounded-full
            backdrop-blur-3xl
            bg-white/10
            border border-white/20
            shadow-[0_8px_32px_rgba(0,0,0,0.37)]
          "
        >
          {/* Nav Items */}
          <div className="flex items-center gap-2 md:gap-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = active === item.name;

              return (
                <button
                  key={item.id}
                  onClick={() => setActive(item.name)}
                  className={`
                    flex flex-col md:flex-row items-center
                    gap-1 md:gap-2
                    px-2 md:px-4 py-1 md:py-2
                    rounded-full
                    transition-all duration-300
                    ${
                      isActive
                        ? "bg-white/20 font-semibold scale-105 text-blue-400"
                        : "text-white hover:bg-white/10 hover:scale-105"
                    }
                  `}
                >
                  <Icon className="text-base md:text-lg" />
                  <span className="text-[10px] md:text-sm">{item.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Search Button */}
        <div className="flex flex-col items-center ml-2 md:ml-4">
          <div className="p-5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-3xl shadow-lg transition cursor-pointer">
            <FiSearch className="text-white text-lg md:text-2xl" />
          </div>
        </div>
      </nav>

      {/* Extra spacing for fixed navbar */}
    
    </main>
  );
};

export default Navbar;
