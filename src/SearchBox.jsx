import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import "./Weatherapp.css"
import { useState } from 'react';
export default function SearchBox({updateInfo}){
    let[city,setCity] = useState("");
    let [error,setError]= useState(false)
    const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
console.log(API_URL);
    let getWeatherInfo = async()=>{
        try{
let response = await fetch(`${API_URL}?q=${city}&appid=${ API_KEY}&units=metric`)
let data = await response.json()
//console.log(data)
let result = {
    city:city,
    temp:data.main.temp,
    tempMin:data.main.temp_min,
    tempMax:data.main.temp_max,
    humidity:data.main.humidity,
    feelsLike:data.main.feels_like,
    weather:data.weather[0].description,

};
console.log(result)
return result;
        }catch(err){
            throw err
        }
    }


let handleChange = (e)=>{
setCity(e.target.value);
};
let handleSubmit =async (e)=>{
    try{
    e.preventDefault()
console.log(city);
setCity("");
let newInfo = await getWeatherInfo();
updateInfo(newInfo);
    }catch{
        setError(true);
    setTimeout(() => {
        setError(false)
    },3000);
     }
};

    return(
        <>
        <div className="box searchBox">
        <form onSubmit={handleSubmit}>
        <TextField id="city" label="Search City" variant="outlined" 
        value={city}
        onChange={handleChange}
        required/>
<br /><br />
<Button variant="contained" type = "submit" >Search</Button>
        </form>
        {error &&<p style={{color:"red"}}>No Such Place Exits</p> }
        </div>
        </>
    )
}