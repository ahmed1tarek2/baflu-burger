import MenuCard from "./menueCard";
import burgerImg from "/Hambúrguer_Lanche_Sanduiche_PNG_Transparente-removebg-preview.png";
import { burgers } from "../../data/burger";
const MenuPage = () => {
  return (
    <div>
      <h2 className="px-4 pt-3 text-center text-2xl md:text-3xl md:p-4 font-bold  text-[#ff4f00]">
        Menu Page
      </h2>1
      <nav className="p-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 grid">
        {burgers.map((burger, index) => (
          <MenuCard
            key={index}
            index={index}
            img={burgerImg}
            title={burger.name}
            description={burger.description}
              price={burger.price}
            />
        ))}
      </nav>
    </div>
  );
};

export default MenuPage;
