import { Facebook, Instagram, Smartphone } from "lucide-react";
import MyMap from "./map";

const ContactPage = () => {
  return (
    <div className="container mx-auto px-1 py-4">
      <h2 className="text-2xl font-bold mb-4 text-center text-[#e33434]">
        Contact Us
      </h2>
      <MyMap />
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4 mt-2 capitalize text-[#e33434]">
          our social media
        </h3>
        <ul>
          <li className="mb-3 flex items-center gap-2 text-lg font-medium">
            <Smartphone className="text-[#e33434]" />
            <a
              href="tel:19905"
              className="*:hover:text-red-500 active:text-[#e33434]"
            >
              19905
            </a>
          </li>
          <li className="mb-3 flex items-center gap-2 text-lg font-medium">
            <Facebook className="text-[#e33434]" />
            <a
              href="https://www.facebook.com/profile.php?id=61559362118791&mibextid=ZbWKwL"
              className="*:hover:text-red-500 active:text-[#e33434]"
            >
              Facebook
            </a>
          </li>
          <li className="mb-2 flex items-center gap-2 text-lg font-medium">
            <Instagram className="text-[#e33434]" />
            <a
              href="https://www.instagram.com/wahmyburgereg/?hl=ar"
              className="*:hover:text-red-500 active:text-[#e33434]"
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
