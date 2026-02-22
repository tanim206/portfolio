"use client";
import { NavLink } from "react-router-dom";
import { FiHome, FiUser, FiCode, FiMail, FiBriefcase, FiSearch } from "react-icons/fi";

const navItems = [
  { id: 1, name: "Home", icon: FiHome, path: "/" },
  { id: 2, name: "About", icon: FiUser, path: "/about" },
  { id: 3, name: "Stacks", icon: FiCode, path: "/stacks" },
  { id: 4, name: "Contact", icon: FiMail, path: "/contact" },
  { id: 5, name: "projects", icon: FiBriefcase, path: "/projects" },
];

const Navbar = () => {
  return (
    <nav className="fixed flex justify-center  top-4 md:top-6  items-center gap-2 md:gap-4 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-auto">
      
      <div
        className="
          flex items-center justify-between
          px-3 md:px-6 py-2 md:py-3
          gap-2 md:gap-4
          rounded-full

         bg-white backdrop-blur-md
          border border-black/20
         shadow-sm
        "
      >
        <div className="flex items-center gap-2 md:gap-4">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) =>
                  `
                  flex flex-col md:flex-row items-center
                  gap-1 md:gap-2
                  px-2 md:px-4 py-1 md:py-2
                  rounded-full
                  transition-all duration-300
                  ${
                    isActive
                      ? "bg-black/20 text-black font-semibold scale-105 font-bold"
                      : "text-black font-semibold hover:bg-white/10 hover:scale-105"
                  }
                `
                }
              >
                <Icon className="text-base md:text-lg" />
                <span className="text-[10px] md:text-sm">{item.name}</span>
              </NavLink>
            );
          })}
        </div>
      </div>

      {/* Search Button
      <div className="flex flex-col items-center ml-2 md:ml-4">
        <div className="p-5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-3xl shadow-lg transition cursor-pointer">
          <FiSearch className="text-white text-lg md:text-2xl" />
        </div>
      </div> */}

    </nav>
  );
};

export default Navbar;
