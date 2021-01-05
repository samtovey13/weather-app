import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import '../styles/forecast-details.css';

const ForecastDetails = ({
  date,
  temperature,
  humidity,
  wind
}) => {
  return <div className="forecast-details">
    <span className="date" data-testid="date-id">
      {moment(date).format("ddd Do MMM")}
    </span>
    <span className="min-temperature" data-testid="min-temperature-id">
      Min temp: {temperature.min}&deg;c
    </span>
    <span className="max-temperature" data-testid="max-temperature-id">
      Max temp: {temperature.max}&deg;c
    </span>
    <span className="humidity" data-testid="humidity-id">
      Humidity: {humidity}%
    </span>
    <span className="wind-speed" data-testid="wind-speed-id">
      Wind speed: {wind.speed}mph
    </span>
    <span className="wind-direction" data-testid="wind-direction-id">
      Wind direction: {wind.direction.toUpperCase()}
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