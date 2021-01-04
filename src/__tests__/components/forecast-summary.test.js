import React from 'react';
import { render } from "@testing-library/react";
import ForecastSummary from '../../components/forecast-summary';

describe("ForecastSummary", () => {

  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummary
        date={1525046400000} 
        icon="721"
        description="Hazy" 
        temperature={10} 
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct date, icon, description and temperature props", () => {
    const { getByText } = render(
      <ForecastSummary 
        date={1525046400000} 
        icon="721"
        description="Hazy" 
        temperature={10} 
      />
    );

    expect(getByText(1525046400000)).toHaveClass("date");
    expect(getByText("721")).toHaveClass("icon");
    expect(getByText("Hazy")).toHaveClass("description");
    expect(getByText("10")).toHaveClass("temperature");

  });
})

