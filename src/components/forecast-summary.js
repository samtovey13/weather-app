import React from 'react';
import PropTypes from 'prop-types';

const ForecastSummary = props => {
  return <div className="forecast-summary-card">
    <span className="date">{props.date}</span>
    <span className="icon">{props.icon}</span>
    <span className="description">{props.description}</span>
    <span className="temperature">{props.temperature}</span>
  </div>
};

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
};

export default ForecastSummary;