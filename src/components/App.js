import '../styles/App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import ForecastDetails from './forecast-details';
import SearchForm from './search-form';

const App = () => {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: 'Edinburgh', country: '' });
  const [selectedDate, setSelectedDate] = useState(0);
  
  useEffect( () => {
    axios.get(`https://mcr-codes-weather.herokuapp.com/forecast?city=${location.city}`)
    .then(res => {
      setLocation(res.data.location);
      setForecasts(res.data.forecasts);
      document.getElementById("location-search-input").value = "";
    })
    .catch((error) => console.log(error))
  }, [location.city]);

  const selectedForecast = forecasts.find(forecast => 
    forecast.date === selectedDate);
  
  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  }

  const handleSearchText = (searchText) => {
    axios.get(`https://mcr-codes-weather.herokuapp.com/forecast?city=${searchText}`)
    .then(res => {
      setLocation(res.data.location);
      setForecasts(res.data.forecasts);
      document.getElementById("location-search-input").value = "";
    })
    .catch((error) => console.log(error))
  };
  

  return <div className="forecast">
    <LocationDetails 
      city={location.city} 
      country={location.country}
    />
    <SearchForm
      handleSearchText={handleSearchText}
    />
    <ForecastSummaries 
      forecasts={forecasts}
      onForecastSelect={handleForecastSelect}
    />
    {
      selectedForecast && (<ForecastDetails forecast={selectedForecast} /> )
    }
    
  </div>
};

export default App;
