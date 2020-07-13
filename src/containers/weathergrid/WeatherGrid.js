import React,{useEffect, useState} from 'react';
import {weather_key, location_key} from '../../keys';
import './WeatherGrid.css';


const WeatherGrid = () => {
   	const[meteo, setMeteo] = useState()
  
  useEffect(() => {
		(async() =>{
			const getDataLocation = await fetch(`https://geo.ipify.org/api/v1?apiKey=${location_key}`);
			const dataLocation = await getDataLocation.json();
			console.log(dataLocation.location);
			const getDataWeather = await fetch(`https://api.weatherbit.io/v2.0/current?city=${dataLocation.location.city}&key=${weather_key}`)
			const dataWeather = await getDataWeather.json();
			console.log(dataWeather)
			setMeteo(dataWeather);
		})()
	},[])
	
	return(
    meteo
    ? <div id='meteoContainer'>
      <p id='city' className='infos'>{meteo.data[0].city_name}</p>
      <p id='temp' className='infos'>{`${meteo.data[0].temp} F`}</p>
      <p id='description' className='infos'>{`${meteo.data[0].weather.description}`}</p>
      <img id='icon'alt="weather" src={`https://www.weatherbit.io/static/img/icons/${meteo.data[0].weather.icon}.png`}/>
    </div>
    : <div><h1>Loading</h1></div>      
	)			
} 

export default WeatherGrid;