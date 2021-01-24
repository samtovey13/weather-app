import React from "react";
import { render, waitFor } from "@testing-library/react";
import App from '../../components/App';

import getForecastData from '../../services/getForecasts';
jest.mock('../../services/getForecasts');

describe("App", () => {

  beforeEach(() => {
    getForecastData.mockResolvedValue({
      status: 200,
      data: {
        location: { city: "Manchester", country: "GB" },
        forecasts: [
          {
            date: 1525046400000,
            temperature: {
              max: 11,
              min: 4,
            },
            wind: {
              speed: 13,
              direction: "s",
            },
            humidity: 30,
            description: "Clear",
            icon: "800",
          },
        ],
      },
    });
  });
  

  it('renders the loading screen correctly', async () => {
    getForecastData.mockReturnValue(new Promise(() => {}));
    const { asFragment, getByText } = render(<App />);
    expect(getByText(/loading/i)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly after loading forecasts', async () => {
    const { asFragment, getByText, queryByText } = render(<App />);
    await waitFor(() => expect(getByText("Clear")).toBeInTheDocument());
    expect(asFragment()).toMatchSnapshot();
    expect(queryByText(/loading/i)).not.toBeInTheDocument();
  });

  it('renders a 404 error correctly', async () => {
    getForecastData.mockResolvedValue({response: {status: 404}});
    const { asFragment, getByText } = render(<App />);
    await waitFor(() => expect(getByText(/please choose another city/i)).toBeInTheDocument());
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders any other errors correctly', async () => {
    getForecastData.mockResolvedValue(Promise.reject("FAILED"));
    const { asFragment, getByText } = render(<App />);
    await waitFor(() => expect(getByText(/something went wrong/i)).toBeInTheDocument());
    expect(asFragment()).toMatchSnapshot();
  });

})
