import Button from "../button";
import Offers from "./homeOffers";
import OffersMD from "./homeMDOffer";
import { Bike, ShoppingBag } from "lucide-react";
import DownloadPage from "./download";


const HomePage = () => {
  return (
    <div className="bg-white ">
      <Offers/>
      <OffersMD />
      <div className="text-center py-8">
        <Button className="bg-[#ff4f00]  hover:bg-white active:bg-white  active:border-[#ff4f00] mx-3 my-2">
          <Bike className="inline-block mr-2 " />
          Order Pickup
        </Button>
        <Button className="bg-white  hover:bg-[#ff4f00] active:bg-[#ff4f00]  active:border-[#ff4f00]">
          <ShoppingBag className="inline-block mr-2" />
          Order Delivery
        </Button>
      </div>
      <DownloadPage />
    </div>
  );
};
export default HomePage;
