import React, { useState } from "react";
import "@testing-library/jest-dom";
import { render, screen, cleanup, fireEvent } from "../../utils/test-utils";
import { products as productsList } from "../../utils/mockProducts";

import SearchBar from "./SearchBar";

afterEach(cleanup);

it("Renders Search Bar with products", () => {
  render(<SearchBar productsList={productsList} />);
  const input = screen.getByTestId("searchbar-input");
  fireEvent.change(input, { target: { value: "a" } });

  expect(input.value).toBe('a')
  expect(screen.queryAllByTestId('bagproduct').length).toBe(2)
});