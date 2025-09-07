import logo from"../../../public/headerLogo.svg"
const MainNav=(props)=>{
    const {userName,icon}=props;
    return(
        <nav className="flex w-full h-16 bg-zinc-900 shadow-md items-center justify-between px-4">
            {
                icon
            }
            <img src={logo} alt="Logo" className="h-14" />
            
        </nav>
    )
}

export default MainNav