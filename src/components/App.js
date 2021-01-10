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
  const [errorMessage, setErrorMessage] = useState("");

  const getForecasts = (city) => {
    axios.get(`https://mcr-codes-weather.herokuapp.com/forecast?city=${city}`)
    .then(res => {
      if (res.status === 200) {
        setLocation(res.data.location);
        setForecasts(res.data.forecasts);
        setErrorMessage("");
        document.getElementById("location-search-input").value = "";
      }
    })
    .catch((error) => {
      if (error.response.status === 404) {
        setErrorMessage(`Sorry, ${city} isn't available. Please choose another city.`)
      } else if (error.response.status === 500) {
        setErrorMessage("Oops! Something went wrong. Please try again later.")
      }
      document.getElementById("location-search-input").value = "";
    })
  }
  
  useEffect( () => {
    getForecasts(location.city)
  }, [location.city]);

  const selectedForecast = forecasts.find(forecast => 
    forecast.date === selectedDate);
  
  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  }

  const handleSearchText = (searchText) => {
    getForecasts(searchText);
  };
  

  return <div className="forecast">
    <LocationDetails 
      city={location.city} 
      country={location.country}
    />
    <SearchForm
      handleSearchText={handleSearchText}
      errorMessage={errorMessage}
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
