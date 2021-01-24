import React from "react";
import { render, waitFor } from "@testing-library/react";
import Icon from '../../components/icon';

describe("icon", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<Icon icon="200" />)
    expect(asFragment()).toMatchSnapshot();
  })
})