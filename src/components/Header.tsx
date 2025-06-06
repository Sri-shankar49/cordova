import { IoMenu } from "react-icons/io5";
import { SideBar } from "./SideBar";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { LuMessageCircleMore } from "react-icons/lu";
import { FaRegBell } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";

export const Header = () => {

    // Sidebar State Declaration
    const [showSideBar, setShowSideBar] = useState(false);

    const toggleHamButton = () => {
        setShowSideBar(!showSideBar);
    };


    return (
        <div>
            <div className='bg-slate-800 px-5 py-3'>
                <div className='flex items-center justify-between'>
                    <div className="flex items-center space-x-5">
                        <IoMenu onClick={toggleHamButton} className="text-white text-3xl cursor-pointer" title="Menu" />
                        <a href="/" className="text-xl text-slate-100 font-semibold">React Application</a>
                    </div>

                    {/* Search Bar & icons */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                        {/* Search Bar */}
                        <div className="relative bg-[#f3f3f3] rounded-lg pl-8 py-1.5 w-full sm:w-72">
                            <input
                                type="text"
                                placeholder="Search"
                                className="text-md w-full bg-transparent focus:outline-none"
                            />
                            <IoIosSearch className="absolute text-gray-400 text-xl top-2 left-2" />
                        </div>

                        {/* Icons Section */}
                        <div className="flex items-center justify-between sm:justify-start gap-4">

                            {/* Message */}
                            <LuMessageCircleMore className="text-2xl text-white cursor-pointer" />

                            {/* Bell Icon */}
                            <div className="relative">
                                <FaRegBell className="text-2xl text-white cursor-pointer" />
                                <span className="text-[10px] p-1 w-3 h-3 flex justify-center items-center absolute bg-red-600 text-white rounded-full top-[-3px] right-[-2px]">
                                    2
                                </span>
                            </div>

                            {/* User Info */}
                            <div className="flex items-center space-x-2">
                                <FaRegUserCircle className="text-2xl text-white cursor-pointer" />
                                <div className="hidden sm:block">
                                    <h5 className="text-xs text-white">Welcome,</h5>
                                    <p className="text-xs text-white font-semibold">Guest User</p>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* Overlay */}
                    {showSideBar && (
                        <div
                            className={`fixed inset-0 h-dvh bg-[#00000033] bg-opacity-50 transition-opacity duration-300 z-10
         ${showSideBar ? "opacity-100" : "opacity-0"}`}
                            onClick={() => setShowSideBar(false)}
                        ></div>
                    )}


                    {/* Side Bar */}
                    <div
                        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg transition-transform duration-300 z-20 
    ${showSideBar ? "transform translate-x-0" : "-translate-x-full"}`}
                    >
                        <SideBar closeSidebar={() => setShowSideBar(false)} />
                    </div>
                </div>
            </div>
        </div>
    )
}
