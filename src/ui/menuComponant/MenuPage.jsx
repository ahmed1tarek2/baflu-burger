import MenuCard from "./menueCard";
import burgerImg from"/Hambúrguer_Lanche_Sanduiche_PNG_Transparente-removebg-preview.png"
const MenuPage = () => {
  return (
    <div>
      <h2 className="px-4 pt-3 text-center text-2xl font-bold  text-[#e33434]">MenuPage</h2>
      <nav className="p-3 flex flex-col justify-between gap-4">
        <MenuCard
          img={burgerImg}
          title="Delicious Burger"
          description="A tasty burger with all the fixings."
          price={50}
        />
        <MenuCard
          img={burgerImg}
          title="Delicious Burger"
          description="A tasty burger with all the fixings."
          price={50}
        />
        <MenuCard
          img={burgerImg}
          title="Delicious Burger"
          description="A tasty burger with all the fixings."
          price={50}
        />
      </nav>
    </div>
  );
};

export default MenuPage;
