import React from "react";
import "@testing-library/jest-dom";
import { render, screen, cleanup, mockStore } from "../../utils/test-utils";
import { products as productsList } from "../../utils/mockProducts";

import HomeProductCard from "./HomeProductCard";

const store = mockStore();
const product = {
  name: "T-SHIRT LEATHER DULL",
  style: "20002602",
  code_color: "20002602_027",
  color_slug: "marinho",
  color: "MARINHO",
  on_sale: true,
  regular_price: "R$ 139,90",
  actual_price: "R$ 119,90",
  discount_percentage: "12%",
  installments: "3x R$ 39,97",
  image:
    "https://d3l7rqep7l31az.cloudfront.net/images/products/20002584_035_catalog_1.jpg?1459947139",
  sizes: [
    { available: true, size: "PP", sku: "5793_1000032_0_PP" },
    { available: true, size: "P", sku: "5793_1000032_0_P" },
    { available: true, size: "M", sku: "5793_1000032_0_M" },
    { available: false, size: "G", sku: "5793_1000032_0_G" },
    { available: false, size: "GG", sku: "5793_1000032_0_GG" },
  ],
};

beforeEach(() => {
  fetch.resetMocks();
});

afterEach(cleanup);

it("Render Home Product Card", () => {
  render(<HomeProductCard {...product} />);

  expect(screen.getByTestId("productcard-image")).toHaveAttribute(
    "src",
    "https://d3l7rqep7l31az.cloudfront.net/images/products/20002584_035_catalog_1.jpg?1459947139"
  );
  expect(screen.getByTestId("productcard-regular_price")).toHaveTextContent(
    "R$ 139,90"
  );
  expect(screen.getByTestId("productcard-discount_percentage")).toHaveTextContent(
    "12%"
  );
  expect(screen.getByTestId("productcard-name")).toHaveTextContent(
    "T-SHIRT LEATHER DULL"
  );

  expect(screen.getByTestId("productcard-actual_price")).toHaveTextContent(
    "R$ 119,90"
  );
});
