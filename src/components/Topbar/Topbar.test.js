import React from "react";
import "@testing-library/jest-dom";
import { render, screen, cleanup, mockStore } from "../../utils/test-utils";
import { products as productsList } from "../../utils/mockProducts";

import Topbar from "./Topbar";

const state = {
  cartProducts: {
    cartList: [],
    cartCount: 99,
  },
  products: {
    productsList: productsList,
  },
};

const store = mockStore(state);

afterEach(cleanup);

it("Renders Topbar", () => {
  render(<Topbar />, {
    store: store,
  });

  expect(screen.getByTestId("topbar-cart_count")).toHaveTextContent('99')
});
