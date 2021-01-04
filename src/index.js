import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { location, forecasts } from './data/forecast.json';
// import './index.css';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <App location={location} forecasts={forecasts} />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
