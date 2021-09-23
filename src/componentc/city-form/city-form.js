import React from 'react';
import axios from "axios";

import './style.css'
const CityForm = ({weatherData, setWeatherData, city, setCity}) => {

  const API_KEY = '74f96713c454d92512df8b319694a0b4';
  const getWeatherData = (e) => {
    e.preventDefault();
    axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
      .then(({data}) => {
        return setWeatherData(data)
      })
      .catch(() => {
        setWeatherData({...weatherData, error: true})

      })
  };
  const inputHandler = (e) => {
    setCity(e.target.value)
  };
  return (
    <div>
      <form onSubmit={getWeatherData}>
        <input type="text" placeholder="Введите город" onChange={inputHandler}/>
        <button type='submit'>Получить данные</button>
      </form>

    </div>
  );
};

export default CityForm;