import React from "react";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import "@testing-library/jest-dom";
import { render, screen, cleanup } from "@testing-library/react";
import { products as productsList } from "../utils/mockProducts";
import { MemoryRouter } from "react-router-dom";

import Routes from "./index";

const mockStoreProducts = {
  products: {
    loading: false,
    error: false,
    productsList: productsList,
  },
};

const mockStore = configureStore([thunk]);

const renderPath = (path) => {
  const store = mockStore(mockStoreProducts);
  return (
    <MemoryRouter initialEntries={[path]}>
      <Provider store={store}>
        <Routes></Routes>
      </Provider>
    </MemoryRouter>
  );
};

describe("Render correct routes", () => {
  afterEach(cleanup);

  test("Render Home", async () => {
    await render(renderPath("/"));

    expect(screen.queryByTestId("products-catalog")).toBeInTheDocument();
  });

  test("Render Product Route with right code", async () => {
    await render(renderPath("/product/20002605_613"));

    expect(screen.getByTestId("product-page-container")).toBeInTheDocument();
  });

  test("Render Product Route with random code", async () => {
    const random = Math.random();
    await render(renderPath(`/product/${random}`));

    expect(screen.getByTestId("pageNotFound")).toBeInTheDocument();
  });

  test("Render Page not with random path", async () => {
    const random = Math.random();
    await render(renderPath(`/${random}`));

    expect(screen.getByTestId("pageNotFound")).toBeInTheDocument();
  });

  test("Render Page not with 404 path", async () => {
    const random = Math.random();
    await render(renderPath(`/404`));

    expect(screen.getByTestId("pageNotFound")).toBeInTheDocument();
  });
});
