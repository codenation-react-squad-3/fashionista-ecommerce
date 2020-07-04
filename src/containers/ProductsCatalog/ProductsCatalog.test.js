import React from "react";

import { cleanup } from "@testing-library/react";
import '@testing-library/jest-dom'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { render, screen } from "../../utils/test-utils";
import { products as productsList } from "../../utils/mockProducts";

import ProductsCatalog from "./ProductsCatalog";

const mockStoreProducts = {
  products: {
    loading: false,
    error: false,
    productsList: productsList,
  },
};

const mockStore = configureStore([thunk])
const store = mockStore(mockStoreProducts)

beforeEach(() => {
  fetch.resetMocks();
});

afterEach(cleanup);

test("Renders correctly number of Products", () => {
  fetch.mockResponseOnce(JSON.stringify(mockStoreProducts));

  render(<ProductsCatalog />, {
    store: store
  });

  expect(screen.getByTestId("products-catalog")).toHaveClass('productsCatalog');
  expect(screen.getByTestId("products-list").childElementCount).toBe(2);
});
