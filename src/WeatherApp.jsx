import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){

    let [weatherInfo,setWeatherInfo] = useState({
        city:"WonderLand",
        feelsLike: 30.47,
        humidity: 10,
        temp: 32.84,
        tempMax: 33.05,
        tempMin: 32.84,
        weather: "haze",
    });

    let updateInfo = (info)=>{
setWeatherInfo(info)
    }
    return (
        <>
        <h1 className="box">Weather App</h1>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info = {weatherInfo}/>
        </>
    )
}