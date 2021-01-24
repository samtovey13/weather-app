import axios from 'axios';

const getForecastData = async (city) => {
  const response = await axios.get(`https://mcr-codes-weather.herokuapp.com/forecast?city=${city}`)
    .catch((error) => error);
  return response;
};

export default getForecastData;