import React from 'react';

import './style.css'
const Weather = ({weatherData}) => {

  const formattedTime = (time) => {
    const date = new Date(time * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
   return hours + ':' +minutes + ':' + seconds

  };

  return (
    <div>
      <p>Город : {weatherData.name}</p>
      <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt="Icon Weather"/>
      <p>Температура : {(weatherData.main.temp - 273.15).toFixed(2)} °C</p>
      <p>Давление : {weatherData.main.pressure} Па</p>
      <p>Влажность : {weatherData.main.humidity} %</p>
      <p>Время : {formattedTime(weatherData.dt)} </p>
      <p>Восход : {formattedTime(weatherData.sys.sunrise)} </p>
      <p>Закат : {formattedTime(weatherData.sys.sunset)} </p>
      <p>Скорость ветра : {weatherData.wind.speed} м.с</p>
    </div>
  );
};

export default Weather;