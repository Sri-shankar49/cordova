import { useState } from "react";
import axios from "axios";
import { IoSearchSharp } from "react-icons/io5";
import {
    WiHumidity,
    WiStrongWind,
    WiThermometer,
    WiDaySunny,
    WiCloud,
    WiRain,
    WiThunderstorm,
    WiSnow,
    WiFog,
    WiNa,
} from 'react-icons/wi';
import { IoPinSharp } from "react-icons/io5";

const API_KEY = "44437157dcfce2840cea138977b7677c"; // Replace with your OpenWeatherMap API key
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

export const WeatherApp = () => {

    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchWeather = async () => {
        if (!city.trim()) return;
        setLoading(true);
        setWeatherData(null);
        setError("");

        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
            );
            setWeatherData(response.data);
        } catch (err: any) {
            setError("No data found for the entered city.");
        } finally {
            setLoading(false);
        }
    };


    const getWeatherIcon = (condition: string) => {
        switch (condition.toLowerCase()) {
            case "clear":
                return <WiDaySunny size={150} className="text-yellow-400 text-7xl" />;
            case "clouds":
                return <WiCloud size={150} className="text-gray-500 text-7xl" />;
            case "rain":
                return <WiRain size={150} className="text-blue-400 text-7xl" />;
            case "thunderstorm":
                return <WiThunderstorm size={150} className="text-purple-600 text-7xl" />;
            case "snow":
                return <WiSnow size={150} className="text-blue-300 text-7xl" />;
            case "mist":
            case "fog":
                return <WiFog size={150} className="text-gray-400 text-7xl" />;
            default:
                return <WiNa size={150} className="text-gray-300 text-7xl" />;
        }
    };

    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-purple-300 p-4">
                <div className="bg-white shadow-xl rounded-xl w-full max-w-xl p-6">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            fetchWeather();
                        }}
                    >
                        <div className="relative mb-6">
                            <input
                                type="text"
                                placeholder="Enter city name"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                className="w-full px-5 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                            />
                            <button
                                type="submit"
                                className="text-2xl text-gray-600 hover:text-blue-500"
                            >
                                <IoSearchSharp className="absolute right-3 top-4 cursor-pointer" />
                            </button>
                        </div>
                    </form>

                    {loading ? (
                        <div className="text-center py-6 text-blue-500 font-medium text-lg">
                            Loading weather data...
                        </div>
                    ) : error ? (
                        <div className="text-center py-6 text-red-500 font-medium text-lg">
                            {error}
                        </div>
                    ) : weatherData ? (
                        <div className="text-center">
                            <h2 className="text-3xl font-semibold mb-2">{weatherData.name}</h2>

                            <div className="mb-4 w-fit mx-auto">{getWeatherIcon(weatherData.weather[0].main)}</div>

                            <p className="text-xl capitalize mb-4">
                                {weatherData.weather[0].description}
                            </p>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 text-sm">
                                <div className="flex items-start gap-2">
                                    <WiThermometer className="text-xl text-red-500" />
                                    Temp: {weatherData.main.temp}°C
                                </div>
                                <div className="flex items-start gap-2">
                                    <WiHumidity className="text-xl text-blue-500" />
                                    Humidity: {weatherData.main.humidity}%
                                </div>
                                <div className="flex items-start gap-2">
                                    <WiStrongWind className="text-xl text-gray-500" />
                                    Wind: {weatherData.wind.speed} m/s
                                </div>
                                <div className="flex items-start gap-2">
                                    <IoPinSharp className="text-xl text-red-500" />
                                    Lat: {weatherData.coord.lat}
                                </div>
                                <div className="flex items-start gap-2">
                                    <IoPinSharp className="text-xl text-red-500" />
                                    Lon: {weatherData.coord.lon}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center py-6 text-gray-600 font-medium text-lg">
                            Search for a city to get current weather.
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
