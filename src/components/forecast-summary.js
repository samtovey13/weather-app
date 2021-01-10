import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import moment from 'moment';
import '../styles/forecast-summary.css'

const ForecastSummary = ({
  date,
  temperature,
  description,
  icon,
  onSelect,
}) => {
  return (
    <div className="forecast-summary">
      <span className="date" data-testid="date-id">
        {moment(date).format("ddd Do MMM")}
      </span>
      <span className="temperature" data-testid="temperature-id">
        {temperature}&deg;c
      </span>
      <span className="description" data-testid="description-id">
        {description}
      </span>
      <span className="icon" data-testid="icon-id">
        <WeatherIcon name="owm" iconId={icon} data-testid="weather-icon-id"/>
      </span>
      <button className="details-button" onClick={() => onSelect(date)}>
        More Details
      </button>
    </div>
  );
};

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default ForecastSummary;