import '../styles/App.css';
import React, { useEffect, useState } from 'react';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import ForecastDetails from './forecast-details';
import SearchForm from './search-form';
import getForecastData from '../services/getForecasts';

const App = () => {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: 'Edinburgh', country: 'GB' });
  const [selectedDate, setSelectedDate] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getForecasts = async (city) => {
    try {
      const res = await getForecastData(city);
      if (res.status === 200) {
        setLocation(res.data.location);
        setForecasts(res.data.forecasts);
        setErrorMessage("");
      } else if (res.response.status === 404) {
        setErrorMessage(`Sorry, ${city} isn't available. Please choose another city.`)
      } else {
        setErrorMessage("Oops! Something went wrong. Please try again later.")
      }
    } catch (error) {
      setErrorMessage("Oops! Something went wrong. Please try again later.")
    }
  }

  useEffect( () => {
    getForecasts(location.city);
    setIsLoading(false);
  }, [location.city]);

  const selectedForecast = forecasts.find(forecast => 
    forecast.date === selectedDate);
  
  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  }

  const handleShowDetails = (b) => {
    setShowDetails(b);
  }

  const handleSearchText = (searchText) => {
    getForecasts(searchText);
  };

  if (isLoading) {
    return <div className="loading-message-wrapper"><div className="loading-message">...loading...</div></div>
  }

  return <div className="forecast">
    {
      forecasts[0] && (<div className="location-details-wrapper">
        <LocationDetails 
          city={location.city} 
          country={location.country}
        />
        <SearchForm
          handleSearchText={handleSearchText}
          errorMessage={errorMessage}
        />
      </div>
      )
    }
    {
      forecasts[0] && (<ForecastSummaries 
      forecasts={forecasts}
      onForecastSelect={handleForecastSelect}
      handleShowDetails={handleShowDetails}
    />
      )
    }
        
    {
      selectedForecast && showDetails && (<ForecastDetails 
        forecast={selectedForecast}
        /> )
    }
    
  </div>
};

export default App;
