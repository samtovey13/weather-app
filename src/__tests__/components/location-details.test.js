import React from 'react';
import { render } from "@testing-library/react";
import LocationDetails from '../../components/location-details';

const city = "Manchester";
const country = "UK";

it('renders correctly', () => {
  const { asFragment } = render(<LocationDetails city={city} country={country} />);
  expect(asFragment()).toMatchSnapshot();
})

it("renders the correct city and location props", () => {
  const { getByText } = render(
    <LocationDetails city={city} country={country} />
  );

  expect(getByText("Manchester, UK")).toHaveClass("location-details");
});