import React from 'react';
import { render } from "@testing-library/react";
import ForecastSummary from '../../components/forecast-summary';

describe("ForecastSummary", () => {
  const onSelect = function() {};

  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummary
        date={1525046400000} 
        icon="211"
        description="Hazy" 
        temperature={10}
        onSelect={onSelect}
        handleShowDetails={function(){}}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct date, icon, description and temperature props", () => {
    const { getByText } = render(
      <ForecastSummary 
        date={1525046400000} 
        icon="211"
        description="Hazy" 
        temperature={10}
        onSelect={onSelect}
        handleShowDetails={function(){}}
      />
    );

    expect(getByText("Mon 30th Apr")).toHaveClass("date");
    expect(getByText("Hazy")).toHaveClass("description");
    expect(getByText("10°c")).toHaveClass("temperature");
  });

  it("renders the correct icon", () => {
    const { getByTestId } = render(
      <ForecastSummary 
        date={1525046400000} 
        icon="211"
        description="Hazy" 
        temperature={10}
        onSelect={onSelect}
        handleShowDetails={function(){}}
      />
    );

    expect(getByTestId("icon-id")).toHaveClass("icon");
    expect(getByTestId("icon-id")).toContainElement(getByTestId("weather-icon-id"));
    expect(getByTestId("weather-icon-id")).toHaveAttribute("name", "owm");
  });
})

