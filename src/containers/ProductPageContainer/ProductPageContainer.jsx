import React from "react";
import { useParams, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./ProductPageContainer.scss";
import ProductPage from "../../components/ProductPage/ProductPage";

const ProductPageContainer = () => {
  const { id } = useParams();
  const { productsList } = useSelector((state) => state.products);

  const productInfo = productsList.filter((item) => item.code_color === id)[0];

  return (
    <div
      className="productPage__container"
      data-testid="product-page-container"
    >
      <div className="productPage__content">
        {productInfo !== undefined ? (
          <ProductPage product={productInfo}></ProductPage>
        ) : (
          <Redirect to="/404"></Redirect>
        )}
      </div>
    </div>
  );
};

export default ProductPageContainer;
