import { fetchProductsService, PRODUCT } from "./productsActions";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { products } from "../../utils/mockProducts";

const mockStore = configureStore([thunk]);

describe("Products Actions", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it("Fetches Products Done", async () => {
    fetch.mockResponseOnce(JSON.stringify(products));
    const store = mockStore();

    const expectedActions = [
      {
        type: PRODUCT.GET_PRODUCTS_START,
      },
      {
        type: PRODUCT.GET_PRODUCTS_DONE,
        loading: false,
        products,
      },
    ];

    await store.dispatch(fetchProductsService());
    const storeActions = store.getActions();
    expect(storeActions).toEqual(expectedActions);
  });

  it("Fetches Products Error", async () => {
    fetch.mockResponseOnce(JSON.stringify(undefined));
    const store = mockStore();

    const expectedActions = [
      {
        type: PRODUCT.GET_PRODUCTS_START,
      },
      {
        type: PRODUCT.GET_PRODUCTS_ERROR,
        error: true,
      },
    ];

    await store.dispatch(fetchProductsService());
    const storeActions = store.getActions();
    expect(storeActions).toEqual(expectedActions);
  });
});
