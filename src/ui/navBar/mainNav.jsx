import logo from "../../../public/headerLogo.svg";
import { NavLink } from "react-router-dom";
import { House, Utensils, Phone, CircleUser } from "lucide-react";
const MainNav = (props) => {
  const { userName, icon } = props;
  return (
    <nav className="flex w-full h-16 bg-zinc-900 shadow-md items-center justify-between lg:justify-center  px-4 sticky top-0 z-50">
      {icon}
      <div className="lg:flex justify-around  p-3 text-xs font-medium w-full z-50 md:hidden max-sm:hidden">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `relative flex items-center gap-2 
     ${
       isActive
         ? "after:content-[''] after:absolute  after:-bottom-4 after:w-0 after:h-0.5 after:bg-[#ff4f00] text-[#ff4f00] hover:after:w-full after:transition-all after:duration-300"
         : "text-white"
     }`
          }
        >
          <House />
          <span className="text-lg font-medium">Home</span>
        </NavLink>

        <NavLink
          to="/Menu"
          className={({ isActive }) =>
            `relative flex items-center gap-2 
    ${
       isActive
         ? "after:content-[''] after:absolute  after:-bottom-4 after:w-0 after:h-0.5 after:bg-[#ff4f00] text-[#ff4f00] hover:after:w-full after:transition-all after:duration-300"
         : "text-white"
     }`
          }
        >
          <Utensils />
          <span className="text-lg font-medium">Menu</span>
        </NavLink>

        <NavLink
          to="/Contact"
          className={({ isActive }) =>
            `relative flex items-center gap-2 
    ${
       isActive
         ? "after:content-[''] after:absolute  after:-bottom-4 after:w-0 after:h-0.5 after:bg-[#ff4f00] text-[#ff4f00] hover:after:w-full after:transition-all after:duration-300"
         : "text-white"
     }`
          }
        >
          <Phone />
          <span className="text-lg font-medium">Contact</span>
        </NavLink>
        <NavLink
          to="/About"
          className={({ isActive }) =>
            `relative flex items-center gap-2 
    ${
       isActive
         ? "after:content-[''] after:absolute  after:-bottom-4 after:w-0 after:h-0.5 after:bg-[#ff4f00] text-[#ff4f00] hover:after:w-full after:transition-all after:duration-300"
         : "text-white"
     }`
          }
        >
          <CircleUser />
          <span className="text-lg font-medium">About Us</span>
        </NavLink>
      </div>
      <img src={logo} alt="Logo" className="h-14" />
    </nav>
  );
};

export default MainNav;
