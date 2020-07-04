import React from "react";

import { render, screen, cleanup } from "../../utils/test-utils";
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import "@testing-library/jest-dom";

import ProductPage from "./ProductPage";

const product = {
  name: "BATA DECOTE FLUID",
  style: "20002581",
  code_color: "20002581_614",
  color_slug: "mini-folk",
  color: "MINI FOLK",
  on_sale: false,
  regular_price: "R$ 149,90",
  actual_price: "R$ 149,90",
  discount_percentage: "",
  installments: "3x R$ 49,97",
  image:
    "https://d3l7rqep7l31az.cloudfront.net/images/products/20002581_614_catalog_1.jpg?1459536611",
  sizes: [
    { available: false, size: "PP", sku: "5749_341_0_PP" },
    { available: true, size: "P", sku: "5749_341_0_P" },
    { available: false, size: "M", sku: "5749_341_0_M" },
    { available: true, size: "G", sku: "5749_341_0_G" },
    { available: true, size: "GG", sku: "5749_341_0_GG" },
  ],
};

const mockStore = configureStore([thunk])
const store = mockStore({})

it("Renders the correct information on Products", () => {
  render(<ProductPage store={store} product={product} />);

  expect(screen.getByTestId('product-photo').firstElementChild.nodeName).toBe('IMG')
  expect(screen.getByTestId('product-photo').firstElementChild.getAttribute('src')).toBe('https://d3l7rqep7l31az.cloudfront.net/images/products/20002581_614_catalog_1.jpg?1459536611')
  expect(screen.getByTestId("product-name")).toHaveTextContent("BATA DECOTE FLUID");
  expect(screen.getByTestId("product-price")).toHaveTextContent("R$ 149,90");
  expect(screen.getByTestId("product-installments")).toHaveTextContent("3x R$ 49,97");
  expect(screen.getByTestId("product-sizes").childElementCount).toBe(5)
});
