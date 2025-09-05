const Button = ({ children, onClick }) => {
  return (
    <button
      className="bg-[#e33434] text-white py-2 px-4 rounded hover:bg-[#c53030]"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
