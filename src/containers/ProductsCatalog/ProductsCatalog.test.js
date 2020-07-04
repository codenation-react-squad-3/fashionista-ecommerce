import React from "react";
import jest from "jest";
import { Provider } from "react-redux";
import { render, fireEvent, screen } from "../../utils/test-utils";
import ProductsCatalog from "./ProductsCatalog";

const mockProducts = {
  products: {
    loading: false,
    error: false,
    productsList: [],
  },
};
const mockStore = configureStore();

beforeEach(() => {
  fetch.resetMocks();
});

test("Lists correctly the Products", () => {
  fetch.mockResponseOnce(JSON.stringify(mockProducts));

  const { container } = render(<ProductsCatalog />, {
    initialState: mockProducts,
  });
});
