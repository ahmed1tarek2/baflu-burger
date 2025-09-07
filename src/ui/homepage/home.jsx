import Button from "../button";
import Offers from "./homeOffers";
import { Bike, ShoppingBag } from "lucide-react";

const HomePage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Offers />
      <div className="text-center py-8">
        <Button className="bg-[#ff4f00]  hover:bg-white active:bg-white  active:border-[#ff4f00]">
          <Bike className="inline-block mr-2 " />
          Order Pickup
        </Button>
        <Button className="bg-white  hover:bg-[#ff4f00] active:bg-[#ff4f00]  active:border-[#ff4f00]">
          <ShoppingBag className="inline-block mr-2" />
          Order Delivery
        </Button>
      </div>
    </div>
  );
};
export default HomePage;
