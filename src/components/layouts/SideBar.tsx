import { NavLink } from "react-router-dom";

const SideBar = () =>{
    return (
        <aside className="bg-green-200 col-span-2 h-screen sticky top-0 left-0 overflow-auto p-5">
            <nav className="flex flex-col gap-2">
                <NavLink  to="/admin" className="p-3 bg-green-300 rounded-md hover:text-white hover:bg-black transition-all">Dashboard</NavLink>
                <NavLink  to="/admin/add-service" className="p-3 bg-green-300 rounded-md hover:text-white hover:bg-black">Add Service</NavLink>
                <NavLink  to="/admin/service-list" className="p-3 bg-green-300 rounded-md hover:text-white hover:bg-black">Service List</NavLink>
            </nav>
        </aside>
    )
}

export default SideBar;