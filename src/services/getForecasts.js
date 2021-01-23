import axios from 'axios';

const getForecastData = async (city) => {
  const response = await axios.get(`https://mcr-codes-weather.herokuapp.com/forecast?city=${city}`);
  return response;
  // .then(res => {
  //   if (res.status === 200) {
  //     setLocation(res.data.location);
  //     setForecasts(res.data.forecasts);
  //     setErrorMessage("");
  //   }
  // })
  // .catch((error) => {
  //   if (error.response.status === 404) {
  //     setErrorMessage(`Sorry, ${city} isn't available. Please choose another city.`)
  //   } else if (error.response.status === 500) {
  //     setErrorMessage("Oops! Something went wrong. Please try again later.")
  //   }
  // })
};

export default getForecastData;