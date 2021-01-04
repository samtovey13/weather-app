import React from 'react';
import PropTypes from 'prop-types';

const ForecastSummary = ({
  date,
  temperature,
  description,
  icon,
  handleForecastSelect,
}) => {
  return (
    <div className="forecast-summary-card">
      <span className="date" data-testid="date-id">
        {date}
      </span>
      <span className="temperature" data-testid="temperature-id">
        {temperature}&deg;c
      </span>
      <span className="description" data-testid="description-id">
        {description}
      </span>
      <span className="icon" data-testid="icon-id">
        {icon}
      </span>
      <button value={date} onClick={handleForecastSelect}>
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
};

export default ForecastSummary;