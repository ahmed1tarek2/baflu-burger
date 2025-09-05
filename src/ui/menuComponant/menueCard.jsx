const MenuCard = (props) => {
  const { img, title, description, price } = props;
  return (
    <div>
      <div className="border-2 border-gray-200 p-3 rounded-lg duration-300">
        <img
          src={img}
          alt="burger"
          className="w-fit"
        />
        <h2 className="text-2xl font-bold mb-1">{title}</h2>
        <p className="text-gray-600 mb-2">{description}</p>
        <div className="flex justify-between items-center pt-2">
          <p className="text-red-500 font-bold text-lg">{price} EGP</p>
          <button className="bg-[#e33434] text-white py-2 px-4 rounded-lg">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
