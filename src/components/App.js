import '../styles/App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import ForecastDetails from './forecast-details';

const App = () => {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: '', country: '' });
  const [selectedDate, setSelectedDate] = useState(0);
  
  useEffect( () => {
    axios.get(`https://mcr-codes-weather.herokuapp.com/forecast?city=Edinburgh`)
    .then(res => {
      console.log("useEffect");
      setLocation(res.data.location);
      setForecasts(res.data.forecasts);
    })
    .catch((error) => console.log(error))
  }, []);

  const selectedForecast = forecasts.find(forecast => 
    forecast.date === selectedDate);
  
  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  }

  return <div className="forecast">
    <LocationDetails 
      city={location.city} 
      country={location.country}
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


// App.propTypes = {
//   location: PropTypes.shape({
//     city: PropTypes.string,
//     country: PropTypes.string,
//   }).isRequired,
//   forecasts: PropTypes.arrayOf(
//     PropTypes.shape({
//       date: PropTypes.number,
//       temperature: PropTypes.shape({
//         max: PropTypes.number,
//         min: PropTypes.number
//       }),
//       wind: PropTypes.shape({
//         speed: PropTypes.number,
//         direction: PropTypes.string
//       }),
//       humidity: PropTypes.number,
//       description: PropTypes.string,
//       icon: PropTypes.string
//     })
//   ).isRequired,
// };

export default App;
