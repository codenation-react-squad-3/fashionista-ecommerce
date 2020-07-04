// test-utils.js
import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { render as rtlRender } from "@testing-library/react";

function reducer(state, action) {}

function render(
  ui,
  {
    initialState,
    store = createStore(reducer, initialState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    function RouterWrapper(provider) {
      return <Router>{provider}</Router>;
    }

    return RouterWrapper(<Provider store={store}>{children}</Provider>);
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
