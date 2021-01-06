import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaries from "../../components/forecast-summaries";

describe("ForecastSummaries", () => {
  
  const forecasts = [
    {
      date: 123,
      description: "date1",
      icon: "211",
      temperature: {
        max: 999,
      },
    },
    {
      date: 456,
      description: "date2",
      icon: "800",
      temperature: {
        max: 777,
      },
    },
  ];
  const onSelect = function() {};


  it("renders the correct amount of ForecastSummary components", () => {
    const { asFragment } = render(<ForecastSummaries forecasts={forecasts} onForecastSelect={onSelect} />);
    
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct amount of ForecastSummary component props", () => {
    const { getAllByTestId } = render(
      <ForecastSummaries forecasts={forecasts} onForecastSelect={onSelect}/>
    );
    
    expect(getAllByTestId("date-id")).toHaveLength(2);
    expect(getAllByTestId("description-id")).toHaveLength(2);
    expect(getAllByTestId("icon-id")).toHaveLength(2);
    expect(getAllByTestId("temperature-id")).toHaveLength(2);
  });

});
