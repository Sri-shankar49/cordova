import { IoClose } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { RxDashboard } from "react-icons/rx";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaListOl } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import { FaHome } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";

interface SideBarProps {
    closeSidebar: () => void;
}

export const SideBar: React.FC<SideBarProps> = ({ closeSidebar }) => {
    return (
        <div>
            <div className="">
                <div className="relative w-80 h-screen bg-indigo-50 px-10 py-10">

                    <div className="flex items-center space-x-2">
                        <TbLayoutDashboardFilled className='text-4xl text-gray-700' />
                        <h1 className='font-semibold text-black'>React Application</h1>
                    </div>

                    {/* Close Button */}
                    <div className="absolute top-5 right-5 transition-transform duration-300 hover:rotate-90">
                        <IoClose onClick={closeSidebar} className="text-[35px] text-black cursor-pointer hover:text-main " />
                    </div>


                    {/* Menus */}
                    <div>
                        <ul>
                            <NavLink
                                to="/"
                                className="active-nav"
                                aria-current="page"
                            >
                                <div className='flex items-center'>
                                    <RxDashboard className='text-lg text-indigo-500' />
                                    <li className="w-full border-b border-mindfulLightGrey text-[16px] text-indigo-700 font-semibold px-2 py-3 hover:text-indigo-500">
                                        Dashboard
                                    </li>
                                </div>
                            </NavLink>


                            <NavLink
                                to="/Weather"
                                className="active-nav"
                                aria-current="page"
                            >
                                <div className='flex items-center'>
                                    <TiWeatherPartlySunny className='text-lg text-indigo-500' />
                                    <li
                                        onClick={closeSidebar}
                                        className="w-full border-b border-mindfulLightGrey text-[16px] text-indigo-700 font-semibold px-2 py-2 cursor-pointer hover:text-main hover:text-indigo-500">
                                        Weather App
                                    </li>
                                </div>
                            </NavLink>

                            <NavLink
                                to="/Todos"
                                className="active-nav"
                                aria-current="page"
                            >
                                <div className='flex items-center'>
                                    <FaListOl className='text-lg text-indigo-500' />
                                    <li
                                        onClick={closeSidebar}
                                        className="w-full border-b border-mindfulLightGrey text-[16px] text-indigo-700 font-semibold px-2 py-2 cursor-pointer hover:text-main hover:text-indigo-500">
                                        To do List
                                    </li>
                                </div>
                            </NavLink>

                            <NavLink
                                to="/"
                                className="active-nav"
                                aria-current="page"
                            >
                                <div className='flex items-center'>
                                    <SiGoogleanalytics className='text-lg text-indigo-500' />
                                    <li
                                        onClick={closeSidebar}
                                        className="w-full border-b border-mindfulLightGrey text-[16px] text-indigo-700 font-semibold px-2 py-3 hover:text-indigo-500">
                                        Analytics
                                    </li>
                                </div>
                            </NavLink>

                            <NavLink
                                to="/"
                                className="active-nav"
                                aria-current="page"
                            >
                                <div className='flex items-center'>
                                    <FaHome className='text-lg text-indigo-500' />
                                    <li
                                        onClick={closeSidebar}
                                        className="w-full border-b border-mindfulLightGrey text-[16px] text-indigo-700 font-semibold px-2 py-3 hover:text-indigo-500">Home</li>
                                </div>
                            </NavLink>

                            <NavLink
                                to="/"
                                className="active-nav"
                                aria-current="page"
                            >
                                <div className='flex items-center'>
                                    <FaTasks className='text-lg text-indigo-500' />
                                    <li
                                        onClick={closeSidebar}
                                        className="w-full border-b border-mindfulLightGrey text-[16px] text-indigo-700 font-semibold px-2 py-3 hover:text-indigo-500">
                                        Tasks
                                    </li>
                                </div>
                            </NavLink>

                            <NavLink
                                to="/"
                                className="active-nav"
                                aria-current="page"
                            >
                                <div className='flex items-center'>
                                    <FiSettings className='text-lg text-indigo-500' />
                                    <li
                                        onClick={closeSidebar}
                                        className="w-full border-b border-mindfulLightGrey text-[16px] text-indigo-700 font-semibold px-2 py-3 hover:text-indigo-500">Settings</li>
                                </div>
                            </NavLink>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    )
}
