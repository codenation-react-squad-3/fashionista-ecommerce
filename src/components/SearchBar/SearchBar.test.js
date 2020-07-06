import React from "react";
import "@testing-library/jest-dom";
import {
  render,
  screen,
  cleanup,
  fireEvent,
  waitFor,
  waitForDomChange,
} from "../../utils/test-utils";
import { products as productsList } from "../../utils/mockProducts";

import SearchBar from "./SearchBar";

afterEach(cleanup);

test("Renders Search Bar while querying", async () => {
  render(<SearchBar productsList={productsList} />);

  expect(screen.queryAllByTestId("bagproduct")).toHaveLength(0);

  const search = "vestido";
  const input = screen.getByTestId("searchbar-input");
  fireEvent.change(input, { target: { value: search } });

  // wait for changes in the DOM
  await waitFor(()=> {
    screen.getAllByTestId("bagproduct")
  })

  expect(input.value).toBe(search);
  expect(screen.getAllByTestId("bagproduct")).toHaveLength(1);
});
