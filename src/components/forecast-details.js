import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import '../styles/forecast-details.css';

const ForecastDetails = ({ forecast }) => {
  return <div className="forecast-details">
    <span className="date" data-testid="date-id">
      {moment(forecast.date).format("ddd Do MMM")}
    </span>
    <span className="min-temperature" data-testid="min-temperature-id">
      Min temp: {forecast.temperature.min}&deg;c
    </span>
    <span className="max-temperature" data-testid="max-temperature-id">
      Max temp: {forecast.temperature.max}&deg;c
    </span>
    <span className="humidity" data-testid="humidity-id">
      Humidity: {forecast.humidity}%
    </span>
    <span className="wind-speed" data-testid="wind-speed-id">
      Wind speed: {forecast.wind.speed}mph
    </span>
    <span className="wind-direction" data-testid="wind-direction-id">
      Wind direction: {forecast.wind.direction.toUpperCase()}
    </span>
  </div>
};

ForecastDetails.propTypes = ({
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
  }).isRequired;

export default ForecastDetails;