import reducer from "./index";
import { PRODUCT } from "../actions/productsActions";
import { CART } from "../actions/cartActions";

const initialState = {
  cartProducts: {
    cartList: [],
    cartCount: 0,
    cartTotalPrice: 0,
  },
  products: {
    productsList: [],
    error: false,
    loading: true,
  },
};

describe("Reducers state change", () => {
  describe("With Initial state", () => {
    it("No actions", () => {
      expect(reducer(undefined, {})).toEqual(initialState);
    });

    describe("Get Products Done Action Type", () => {
      it("With loading == false", () => {
        const reducerResult = reducer(undefined, {
          type: PRODUCT.GET_PRODUCTS_DONE,
          products: [],
          loading: false,
        });
        expect(reducerResult.products.loading).toBe(false);
      });

      it("With loading == true", () => {
        const reducerResult = reducer(undefined, {
          type: PRODUCT.GET_PRODUCTS_DONE,
          products: [],
          loading: true,
        });
        expect(reducerResult.products.loading).toBe(true);
      });

      it("With product filtering", () => {
        const reducerResult = reducer(undefined, {
          type: PRODUCT.GET_PRODUCTS_DONE,
          products: [
            {
              id: "1",
            },
            {
              id: "2",
            },
          ],
          loading: true,
        });
        expect(reducerResult.products.productsList).toHaveLength(2);
      });
    });

    it("Get Products Error Type", () => {
      const errorMessage = "Testing error message.";
      const reducerResult = reducer(undefined, {
        type: PRODUCT.GET_PRODUCTS_ERROR,
        error: errorMessage,
      });

      expect(reducerResult).toEqual({
        ...initialState,
        products: {
          ...initialState.products,
          error: errorMessage,
        },
      });
    });

    it("Add Product to Cart", () => {
      const action = {
        type: CART.CART_ADD_PRODUCT,
      };
    });
  });
});
