const Button = ({ children, onClick,className }) => {
  return (
    <button
      className={` py-2 px-4 rounded-3xl h-14 w-52 border-2 border-[#ff4f00] my-2 mx-2 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
