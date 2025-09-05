import Button from "../button";
import Offers from "./homeOffers";
import { Bike, ShoppingBag } from "lucide-react";

const HomePage = () => {
  return (
    <div>
      <Offers />
      <div>
        <Button>
          <Bike className="inline-block mr-2" />
          Order Pickup
        </Button>
        <Button>
          <ShoppingBag className="inline-block mr-2" />
          Order Delivery
        </Button>
      </div>
    </div>
  );
};
export default HomePage;
