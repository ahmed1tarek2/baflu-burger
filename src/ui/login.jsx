import { CircleX } from "lucide-react";
import logo from "../../public/headerLogo.svg";
import Button from "./button";

const LoginPage = ({ onClose }) => {
  return (
    <div className="bg-zinc-900 px-8 h-96 rounded-lg shadow-lg w-full z-[10000] fixed max-sm:bottom-0 left-0 max-sm:right-0 lg:top-0 lg:h-full lg:m-auto max-w-md flex flex-col items-center justify-center">
      <img src={logo} alt="Logo" className="h-14" />
      <div className="flex justify-between items-center w-full py-4">
        <h2 className="text-white text-xl font-bold">login</h2>
        <button onClick={onClose} className="text-red-500 font-bold">
          <CircleX className="cursor-pointer" />
        </button>
      </div>
      <form className="flex flex-col gap-4 text-white w-full">
        <input
          type="text"
          placeholder="Username"
          className="bg-white text-black p-3 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="bg-white text-black p-3 rounded"
        />
        <Button className={"bg-[#ff4f00] text-white w-full "}>login</Button>
      </form>
    </div>
  );
};

export default LoginPage;
