import React from "react";
import { render, waitFor, fireEvent } from "@testing-library/react";
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
          {
            date: 1525132800000,
            temperature: {
              max: 13,
              min: 8
            },
            wind: {
              speed: 60,
              direction: "ne"
            },
            humidity: 80,
            description: "Stormy",
            icon: "211"
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

  it("renders forecast details when button is clicked", async () => {
    const { getByText, getByTestId } = render(<App />);
    await waitFor(() => expect(getByText("Clear")).toBeInTheDocument());
    const detailsButton = getByTestId("details-button-1525046400000");

    fireEvent.click(detailsButton);
    expect(getByText("Humidity: 30%")).toBeInTheDocument();
  });

  it("re-renders forecast details if another forecast is selected", async () => {
    const { getByText, queryByText, getByTestId } = render(<App />);
    await waitFor(() => expect(getByText("Clear")).toBeInTheDocument());
    const detailsButton1 = getByTestId("details-button-1525046400000");
    const detailsButton2 = getByTestId("details-button-1525132800000");

    fireEvent.click(detailsButton1);
    expect(getByText("Humidity: 30%")).toBeInTheDocument();
    
    fireEvent.click(detailsButton2);
    expect(getByText("Humidity: 80%")).toBeInTheDocument();
    expect(queryByText("Humidity: 30%")).not.toBeInTheDocument();
  });

  it("hides forecast details if the selected forecast is clicked again", async () => {
    const { getByText, queryByText, getByTestId } = render(<App />);
    await waitFor(() => expect(getByText("Clear")).toBeInTheDocument());
    const detailsButton = getByTestId("details-button-1525046400000");

    fireEvent.click(detailsButton);
    expect(getByText("Humidity: 30%")).toBeInTheDocument();
    
    fireEvent.click(detailsButton);
    expect(queryByText("Humidity: 30%")).not.toBeInTheDocument();
  });

  it('re-renders forecasts on search', async () => {
    const { getByText, getByRole, getByTestId } = render(<App />);
    await waitFor(() => expect(getByText("Clear")).toBeInTheDocument());

    const searchInput = getByRole('searchbox');
    const searchButton = getByTestId('search-button');

    getForecastData.mockResolvedValue({
      status: 200,
      data: {
        location: { city: "Edinburgh", country: "GB" },
        forecasts: [
          {
            date: 1525046400000,
            temperature: {
              max: 9,
              min: 2,
            },
            wind: {
              speed: 25,
              direction: "n",
            },
            humidity: 60,
            description: "Heavy Snow",
            icon: "602",
          }
        ],
      },
    });

    fireEvent.change(searchInput, {
      target: { value: "Edinburgh" }
    })
    fireEvent.click(searchButton);

    await waitFor(() => expect(getByText("Heavy Snow")).toBeInTheDocument());
    expect(getByText("Edinburgh, GB")).toBeInTheDocument()
  });

})
