import { IoMenu } from "react-icons/io5";
import { SideBar } from "./SideBar";
import { useState } from "react";

export const Header = () => {

    // Sidebar State Declaration
    const [showSideBar, setShowSideBar] = useState(false);

    const toggleHamButton = () => {
        setShowSideBar(!showSideBar);
    };


    return (
        <div>
            <div className='bg-amber-200 px-5 py-3'>
                <div className='flex items-center justify-between'>
                    <div>
                        <a href="/" className="text-xl font-semibold">React Weather & To Do App</a>
                    </div>

                    <div>
                        <IoMenu onClick={toggleHamButton} className="text-3xl cursor-pointer" />
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
                        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transition-transform duration-300 z-20 
                    ${showSideBar
                                ? "transform translate-x-0"
                                : "transform translate-x-full"
                            }`}
                    >
                        <SideBar closeSidebar={() => setShowSideBar(false)} />
                    </div>
                </div>
            </div>
        </div>
    )
}
