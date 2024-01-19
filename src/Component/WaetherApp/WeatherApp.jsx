import React, { useEffect, useState } from 'react'
import './WeatherApp.css'
export default function WeatherApp() {
    // API key :  6fb119b8da05ff453a9e9d151df34602;
    // API : https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    let[temp,setTemp]=useState('');
    let[main ,setMain]=useState('');
    let [cityName,setCityName]=useState('');
    let [feel_like,setFeel_like]=useState('');
    let[city,setCity]=useState('');
    let[speed,setSpeed]=useState('');
    let[wind,setWind]=useState('')
    useEffect(()=>{
        fetch("https://api.openweathermap.org/data/2.5/weather?units=metric&q=Karachi&appid=6fb119b8da05ff453a9e9d151df34602")
        .then(res => res.json())
        .then(res => {
            setTemp(Math.round(res.main.temp));
            setFeel_like(res.main.feels_like)
            setMain(res.weather[0].main)
            setCityName(res.name)
            setSpeed(res.wind.speed)
            setWind(res.wind.deg)
        })
    },[])
    let getValue=(e)=>{
        setCity(e.target.value)
    }
    let search=()=>{
        searchData(city)
    }
    let searchData=(cityName)=>{
        if(cityName){
            fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=6fb119b8da05ff453a9e9d151df34602`)
            .then(res => res.json())
            .then(res => {
                setTemp(Math.round(res.main.temp));
                setFeel_like(res.main.feels_like)
                setMain(res.weather[0].main)
                setCityName(res.name)
                console.log(res)
            })
        }else{
            alert('something was wrong')
        }
        console.log(cityName)
    }
    // Alt + 0176.
  return (
    <div className='weatherApp'>
        <h2>Weather App</h2>
        <div className="main">
            <div className="input">
                <input placeholder='Enter city name' className='form-control' onChange={getValue} type="text" name="" id="" />
                <button className='btn btn-light' onClick={search}>search</button>
            </div>
            <div className="bottom">
                <p>Feel like : {feel_like}</p>
                <p></p>
            </div>
            <div className="showWeather">
                <p>{main}</p>
                <p>{temp}°C</p>
                <p>{cityName}</p>
            </div>
                {/* <p>{}</p> */}
            <div className="footer">
                <p>Speed : {speed}</p>
                <p>Wind : {wind}</p>
            </div>
        </div>
    </div>
  )
}
