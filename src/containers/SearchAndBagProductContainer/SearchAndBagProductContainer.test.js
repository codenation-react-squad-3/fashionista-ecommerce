import React from "react";
import "@testing-library/jest-dom";
import { render, screen, cleanup, mockStore } from "../../utils/test-utils";
import { products as productsList } from "../../utils/mockProducts";

import SearchAndBagProductContainer from "./SearchAndBagProductContainer";

const state = {
  cartProducts: {
    cartList: [],
    cartCount: 99,
    cartTotalPrice: 199.87
  },
  products: {
    productsList: productsList,
  },
};

afterEach(cleanup);

it('Renders Search', () => {
    render(<SearchAndBagProductContainer isSearch={true} />, {
        store: mockStore(state)
    })

    expect(screen.getByTestId('searchbar')).toBeInTheDocument()
})

it('Renders BagProduct with cart products', () => {
    render(<SearchAndBagProductContainer isSearch={false} />, {
        store: mockStore(state)
    })

    expect(screen.queryByTestId('searchbar')).not.toBeInTheDocument()
    expect(screen.queryByTestId('total-price')).toHaveTextContent('R$ 199,87')
})

it('Renders BagProduct with no cart products', () => {
    render(<SearchAndBagProductContainer isSearch={false} />, {
        store: mockStore({
            ...state,
          cartProducts: {
              ...state.cartProducts,
            cartCount: 0
          }
        })
    })

    expect(screen.queryByTestId('searchbar')).not.toBeInTheDocument()
    expect(screen.queryByTestId('total-price')).toHaveTextContent('R$ 0,00')
})