import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import SearchForm from '../../components/search-form';

describe('SearchForm', () => {
const handleSearchText = jest.fn();
const errorMessage = "";

  it('renders correctly', () => {
    const { asFragment } = render(<SearchForm handleSearchText={handleSearchText} errorMessage={errorMessage}/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('calls the onClick function with text input from the user', () => {
    const { getByRole } = render(<SearchForm handleSearchText={handleSearchText} errorMessage={errorMessage}/>);
    const searchInput = getByRole('searchbox');
    const searchButton = getByRole('button');

    fireEvent.change(searchInput, {
      target: { value: "another city" }
    })
    fireEvent.click(searchButton);

    expect(handleSearchText).toHaveBeenCalledTimes(1);
    expect(handleSearchText).toHaveBeenCalledWith("another city");
  });

  describe('renders the error message only when required', () => {
    it('renders the error message when it exists', () => {
      const { getByText, getByTestId } = render(<SearchForm handleSearchText={handleSearchText} errorMessage={"Oops! There is an error."}/>);
      expect(getByText("Oops! There is an error.")).toBeInTheDocument();
      expect(getByTestId("error-message")).toBeInTheDocument();
    });

    it('hides the error message when it is empty', () => {
      const { queryByTestId } = render(<SearchForm handleSearchText={handleSearchText} errorMessage={""}/>);
      expect(queryByTestId("error-message")).not.toBeInTheDocument();
    })
  })
})