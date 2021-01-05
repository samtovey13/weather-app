import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from '../../components/forecast-details';
import ForecastSummaries from "../../components/forecast-summaries";

describe("ForecastDetails", () => {

  const forecast = {
    date: 1525219200000,
    temperature: {
      max: 999,
      min: 0,
    },
    humidity: 80,
    wind: {
      speed: 20,
      direction: "se"
    }
  };

  it("renders correctly", () => {

    const { asFragment } = render(<ForecastDetails 
      date={forecast.date}
      temperature={forecast.temperature}
      humidity={forecast.humidity}
      wind={forecast.wind}
    />);
    
    expect(asFragment()).toMatchSnapshot();
  })

  it("renders the correct date, icon, description and temperature props", () => {
    
    const { getByText } = render(
      <ForecastDetails 
      date={forecast.date}
      temperature={forecast.temperature}
      humidity={forecast.humidity}
      wind={forecast.wind} 
      />
    );

    expect(getByText("Wed 2nd May")).toHaveClass("date");
    expect(getByText("Min temp: 0°c")).toHaveClass("min-temperature");
    expect(getByText("Max temp: 999°c")).toHaveClass("max-temperature");
    expect(getByText("Humidity: 80%")).toHaveClass("humidity");
    expect(getByText("Wind speed: 20mph")).toHaveClass("wind-speed");
    expect(getByText("Wind direction: SE")).toHaveClass("wind-direction");

  });

})