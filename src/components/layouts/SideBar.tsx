import { cn } from "@/lib/utils";
import { LayoutDashboard } from "lucide-react";
import { NavLink } from "react-router-dom";

const SideBar = () =>{
    return (
        <aside className="bg-green-200 col-span-2 h-screen sticky top-0 left-0 overflow-auto p-4 lg:p-5">
            <nav className="flex flex-col gap-2 ">
                <NavLink  to="/admin/dashboard" className={({isActive}) => cn("p-3 bg-green-300 rounded-md transition-all flex gap-2 items-center",
                    {
                        "text-white bg-black" : isActive
                    }
                    ) }>
                        <LayoutDashboard className="shrink-0"></LayoutDashboard>
                        <span className="truncate">Dashboard</span>
                </NavLink>

                <NavLink  to="/admin/add-service" className={({isActive}) => cn("p-3 bg-green-300 rounded-md transition-all flex gap-2 items-center",
                    {
                        "text-white bg-black" : isActive
                    }
                    ) }>
                        <LayoutDashboard className="shrink-0"></LayoutDashboard>
                        <span className="truncate">Add Service</span>
                </NavLink>

                <NavLink  to="/admin/service-list" className={({isActive}) => cn("p-3 bg-green-300 rounded-md transition-all flex gap-2 items-center",
                    {
                        "text-white bg-black" : isActive
                    }
                    ) }>
                        <LayoutDashboard className="shrink-0"></LayoutDashboard>
                        <span className="truncate">Service List</span>
                </NavLink>
            </nav>
        </aside>
    )
}

export default SideBar;