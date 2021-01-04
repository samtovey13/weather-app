import React from 'react';
import PropTypes from 'prop-types'
import ForecastSummary from './forecast-summary';
import '../styles/forecast-summaries.css';

const ForecastSummaries = props => (
  <div className="forecast-summaries">
    {
      props.forecasts.map(forecast => (
        <ForecastSummary
          key={forecast.date}
          date={forecast.date}
          description={forecast.description}
          icon={forecast.icon}
          temperature={forecast.temperature.max}
        />
      ))
    }

  </div>
);

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
};

export default ForecastSummaries;
