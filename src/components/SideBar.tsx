import { IoClose } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

interface SideBarProps {
    closeSidebar: () => void;
}

export const SideBar: React.FC<SideBarProps> = ({ closeSidebar }) => {
    return (
        <div>
            <div className="">
                <div className="relative w-80 h-screen bg-red-400 px-10 py-10">

                    {/* Close Button */}
                    <div className="absolute top-5 right-5 transition-transform duration-300 hover:rotate-90">
                        <IoClose onClick={closeSidebar} className="text-[35px] text-mindfulGrey cursor-pointer hover:text-main " />
                    </div>


                    {/* Menus */}
                    <div>
                        <ul>
                            <NavLink
                                to="/"
                                className="active-nav"
                                aria-current="page"
                            >
                                <li className="border-b border-mindfulLightGrey text-[20px] font-semibold px-2 py-3">Home</li>
                            </NavLink>

                            <NavLink
                                to="/Todos"
                                className="active-nav"
                                aria-current="page"
                            >
                                <li
                                    onClick={closeSidebar}
                                    className="border-b border-mindfulLightGrey text-[18px] text-mindfulBlack font-semibold px-2 py-2 cursor-pointer hover:text-main">
                                    To do List
                                </li>
                            </NavLink>

                            <NavLink
                                to="/OurBrand"
                                className="active-nav"
                                aria-current="page"
                            >
                                <li
                                    onClick={closeSidebar}
                                    className="border-b border-mindfulLightGrey text-[18px] text-mindfulBlack font-semibold px-2 py-2 cursor-pointer hover:text-main">
                                    Settings
                                </li>
                            </NavLink>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    )
}
