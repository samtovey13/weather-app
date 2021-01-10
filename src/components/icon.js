import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';

const Icon = ({icon}) => {
  return (
    <div>
      <WeatherIcon name="owm" iconId={icon} />
    </div>
  )
};

Icon.propTypes = {
  icon: PropTypes.string
}

export default Icon;
