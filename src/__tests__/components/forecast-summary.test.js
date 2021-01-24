import React from 'react';
import { fireEvent, render } from "@testing-library/react";
import ForecastSummary from '../../components/forecast-summary';

describe("ForecastSummary", () => {
  const onSelect = jest.fn();
  const handleShowDetails = jest.fn();

  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummary
        date={1525046400000} 
        icon="211"
        description="Hazy" 
        temperature={10}
        onSelect={onSelect}
        handleShowDetails={handleShowDetails}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct date, icon, description and temperature props", () => {
    const { getByText, getByTestId } = render(
      <ForecastSummary 
        date={1525046400000} 
        icon="211"
        description="Hazy" 
        temperature={10}
        onSelect={onSelect}
        handleShowDetails={handleShowDetails}
      />
    );

    expect(getByText("Mon 30th Apr")).toHaveClass("date");
    expect(getByText("Hazy")).toHaveClass("description");
    expect(getByText("10°c")).toHaveClass("temperature");
    expect(getByTestId("icon-id")).toHaveClass("icon");
    expect(getByTestId("icon-id")).toContainElement(getByTestId("weather-icon-id"));
    expect(getByTestId("weather-icon-id")).toHaveAttribute("name", "owm");
  });

  it("calls the onClick function when button is clicked", () => {
    const { getByTestId } = render(
      <ForecastSummary 
        date={1525046400000} 
        icon="211"
        description="Hazy" 
        temperature={10}
        onSelect={onSelect}
        handleShowDetails={handleShowDetails}
      />
    );
    const detailsButton = getByTestId("details-button-1525046400000");
    fireEvent.click(detailsButton);
    expect(onSelect).toHaveBeenCalledTimes(1);
    expect(onSelect).toHaveBeenCalledWith(1525046400000);
    expect(handleShowDetails).toHaveBeenCalledTimes(1);
    expect(handleShowDetails).toHaveBeenCalledWith(true);
  });
})

