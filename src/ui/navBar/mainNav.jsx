
const MainNav=(props)=>{
    const {userName,icon}=props;
    return(
        <nav className="flex w-full h-16 bg-white shadow-md items-center justify-between px-4">
            <h2>logo</h2>
            {
                icon
            }
        </nav>
    )
}

export default MainNav