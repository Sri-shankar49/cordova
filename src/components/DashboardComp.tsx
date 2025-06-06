import { FaCalendarAlt, FaCheckCircle, FaClipboardList, FaClock, FaCloudSun, FaListAlt, FaRegSmile } from "react-icons/fa"

const DashboardComp = () => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h4 className="text-2xl font-bold mb-6 text-gray-800">📊 Dashboard Overview</h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                {/* Current Weather */}
                <a href="/Weather">
                    <div
                        className="bg-white rounded-2xl shadow-md p-5 flex items-center gap-4 cursor-pointer hover:bg-indigo-200"
                        title="Click here to go to Weather-App"
                    >
                        <FaCloudSun className="text-yellow-500 text-3xl" />
                        <div>
                            <p className="text-gray-600">Current Weather</p>
                            <h3 className="text-xl font-semibold">Sunny, 31°C</h3>
                            <p className="text-sm text-gray-500 mt">
                                Click here to go Weather App
                            </p>
                        </div>
                    </div>
                </a>

                {/* Total Tasks */}
                <a href="/Todos">
                    <div
                        title="Click here to go to TODO-App"
                        className="bg-white rounded-2xl shadow-md p-5 flex items-center gap-4 hover:bg-indigo-200 cursor-pointer"
                    >
                        <FaListAlt className="text-blue-500 text-3xl" />
                        <div>
                            <p className="text-gray-600">Total Tasks</p>
                            <h3 className="text-xl font-semibold">18</h3>
                            <p className="text-sm text-gray-500 mt">
                                Click here to go TODO App
                            </p>
                        </div>
                    </div>
                </a>

                {/* Completed Tasks */}
                <div className="bg-white rounded-2xl shadow-md p-5 flex items-center gap-4 hover:bg-indigo-200 cursor-pointer">
                    <FaCheckCircle className="text-green-500 text-3xl" />
                    <div>
                        <p className="text-gray-600">Completed</p>
                        <h3 className="text-xl font-semibold">12</h3>
                    </div>
                </div>

                {/* Pending Tasks */}
                <div className="bg-white rounded-2xl shadow-md p-5 flex items-center gap-4 hover:bg-indigo-200 cursor-pointer">
                    <FaClock className="text-red-500 text-3xl" />
                    <div>
                        <p className="text-gray-600">Pending</p>
                        <h3 className="text-xl font-semibold">6</h3>
                    </div>
                </div>

                {/* Today's Tasks */}
                <div className="bg-white rounded-2xl shadow-md p-5 flex items-center gap-4 hover:bg-indigo-200 cursor-pointer">
                    <FaCalendarAlt className="text-purple-500 text-3xl" />
                    <div>
                        <p className="text-gray-600">Today's Tasks</p>
                        <h3 className="text-xl font-semibold">5</h3>
                    </div>
                </div>

                {/* Upcoming Tasks */}
                <div className="bg-white rounded-2xl shadow-md p-5 flex items-center gap-4 hover:bg-indigo-200 cursor-pointer">
                    <FaClipboardList className="text-indigo-500 text-3xl" />
                    <div>
                        <p className="text-gray-600">Upcoming</p>
                        <h3 className="text-xl font-semibold">3</h3>
                    </div>
                </div>

                {/* Productivity Score (Example) */}
                <div className="bg-white rounded-2xl shadow-md p-5 flex items-center gap-4 hover:bg-indigo-200 cursor-pointer">
                    <FaRegSmile className="text-pink-500 text-3xl" />
                    <div>
                        <p className="text-gray-600">Productivity Score</p>
                        <h3 className="text-xl font-semibold">87%</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardComp