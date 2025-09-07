import MenuCard from "./menueCard";
import burgerImg from"/Hambúrguer_Lanche_Sanduiche_PNG_Transparente-removebg-preview.png"
const MenuPage = () => {
  return (
    <div>
      <h2 className="px-4 pt-3 text-center text-2xl md:text-3xl md:p-4 font-bold  text-[#ff4f00]">Menu Page</h2>
      <nav className="p-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 grid">
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
