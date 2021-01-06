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
          onSelect={props.onForecastSelect}
        />
      ))
    }

  </div>
);

ForecastSummaries.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number,
      icon: PropTypes.string,
      description: PropTypes.string,
      temperature: PropTypes.object,
    }).isRequired
  ),
  onForecastSelect: PropTypes.func.isRequired,
};

export default ForecastSummaries;
