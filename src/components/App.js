import '../styles/App.css';
import React from 'react';
import PropTypes from 'prop-types';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';

const App = props => {
  return <div className="forecast">
    <LocationDetails 
      city={props.location.city} 
      country={props.location.country}
    />
    <ForecastSummaries forecasts={props.forecasts} />
  </div>
};


App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number,
      temperature: PropTypes.shape({
        max: PropTypes.number,
        min: PropTypes.number
      }),
      wind: PropTypes.shape({
        speed: PropTypes.number,
        direction: PropTypes.string
      }),
      humidity: PropTypes.number,
      description: PropTypes.string,
      icon: PropTypes.number
    })
  ).isRequired,
};

export default App;
