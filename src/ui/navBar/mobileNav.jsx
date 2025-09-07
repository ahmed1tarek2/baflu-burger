import { NavLink } from "react-router-dom";
import { House, Utensils, Phone } from "lucide-react";

const MobileNav = () => {
  return (
    <nav className="flex justify-around bg-white text-zinc-900 p-3 text-xs font-medium fixed bottom-0 w-full z-50 lg:hidden">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `relative flex flex-col items-center px-4 
     ${
       isActive
         ? "after:content-[''] after:absolute  after:-top-3 after:w-full after:h-1 after:bg-zinc-900 text-zinc-900"
         : "text-zinc-900"
     }`
        }
      >
        <House />
        <span>Home</span>
      </NavLink>

      <NavLink
        to="/Menu"
        className={({ isActive }) =>
          `relative flex flex-col items-center px-4 
     ${
       isActive
         ? "after:content-[''] after:absolute after:-top-3 after:w-full after:h-1 after:bg-zinc-900 text-zinc-900"
         : "text-zinc-900"
     }`
        }
      >
        <Utensils />
        <span>Menu</span>
      </NavLink>

      <NavLink
        to="/Contact"
        className={({ isActive }) =>
          `relative flex flex-col items-center px-4 
     ${
       isActive
         ? "after:content-[''] after:absolute after:-top-3 after:w-full after:h-1 after:bg-zinc-900 text-zinc-900"
         : "text-zinc-900"
     }`
        }
      >
        <Phone />
        <span>Contact</span>
      </NavLink>
    </nav>
  );
};

export default MobileNav;
