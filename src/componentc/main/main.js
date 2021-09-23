import React, {useState} from 'react';
import CityForm from "../city-form";
import Weather from "../weather";
import Error from "../error";

import './style.css'

const Main = () => {

  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState('');

  return (
    <div className='main'>
      <div className='main_block'>
        <CityForm setWeatherData={setWeatherData} weatherData={weatherData} setCity={setCity} city={city}/>
        {
          Object.entries(weatherData).length === 0 ?
            'Здесь будет погода' : weatherData.error ?
            <Error/> : <Weather weatherData={weatherData}/>
        }
      </div>
    </div>
  );
};

export default Main;



