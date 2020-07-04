import React from "react";
import "@testing-library/jest-dom";
import { render, screen, cleanup, mockStore } from "../../utils/test-utils";
import { products as productsList } from "../../utils/mockProducts";

import BagProduct from "./BagProduct";

const productQuery = {
  size: "G",
  productCount: 10,
  product: {
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
  },
};

afterEach(cleanup);

it("Renders Bag Product without search", () => {
  render(<BagProduct product={productQuery} isSearch={false} />);

  expect(screen.getByTestId("bagproduct-image")).toHaveAttribute(
    "src",
    "https://d3l7rqep7l31az.cloudfront.net/images/products/20002581_614_catalog_1.jpg?1459536611"
  );

  const expectSize = expect(screen.getByTestId("bagproduct-size"));
  expectSize.toBeInTheDocument();
  expectSize.toHaveTextContent("G");

  expect(screen.queryByTestId("bagproduct-count")).toHaveTextContent("10");

  expect(
    screen.queryByTestId("bagproduct-remove_item_button")
  ).toBeInTheDocument();
});

it("Renders Bag Product with search", () => {
  render(<BagProduct product={productQuery} isSearch={true} />);

  expect(screen.getByTestId("bagproduct-image")).toHaveAttribute(
    "src",
    "https://d3l7rqep7l31az.cloudfront.net/images/products/20002581_614_catalog_1.jpg?1459536611"
  );

  expect(screen.queryByTestId("bagproduct-count")).not.toBeInTheDocument();
  expect(screen.queryByTestId("bagproduct-size")).not.toBeInTheDocument();
  expect(
    screen.queryByTestId("bagproduct-remove_item_button")
  ).not.toBeInTheDocument();

  expect(screen.queryByTestId("bagproduct-empty")).toBeInTheDocument();
});
