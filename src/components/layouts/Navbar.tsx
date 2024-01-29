import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";

const Navbar = () =>{
    return (
        <header className="h-16">
            <nav className="w-full h-full max-w-[1220px] px-[20px] mx-auto flex justify-between ">
                <span className="text-3xl">iRepair</span>
                <ul className="space-x-5">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/">About</NavLink>
                    <Button>
                        <NavLink to="/">Login</NavLink>
                    </Button>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;