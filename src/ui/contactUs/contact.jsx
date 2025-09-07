import { Facebook, Instagram, Smartphone } from "lucide-react";
import MyMap from "./map";

const ContactPage = () => {
  return (
    <div className="container mx-auto px-1 py-4 bg-zinc-900">
      <h2 className="text-2xl font-bold mb-4 text-center text-[#ff4f00]">
        Contact Us
      </h2>
      <MyMap />
      <div className="p-4 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-4 mt-2 capitalize text-[#ff4f00] text-center">
          our social media
        </h3>
        <ul>
          <li className="mb-3 flex items-center gap-2 text-lg font-medium">
            <Smartphone className="text-[#ff4f00]" />
            <a
              href="tel:19914"
              className="*:hover:text-[#ff4f00] active:text-[#ff4f00] text-white"
            >
              19914
            </a>
          </li>
          <li className="mb-3 flex items-center gap-2 text-lg font-medium">
            <Facebook className="text-[#ff4f00]" />
            <a
              href="https://www.facebook.com/BuffaloBurger"
              className="*:hover:text-[#ff4f00] active:text-[#ff4f00] text-white"
            >
              Facebook
            </a>
          </li>
          <li className="mb-2 flex items-center gap-2 text-lg font-medium">
            <Instagram className="text-[#ff4f00]" />
            <a
              href="https://www.instagram.com/buffalo_burger"
              className="*:hover:text-[#ff4f00] active:text-[#ff4f00] text-white"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactPage;
