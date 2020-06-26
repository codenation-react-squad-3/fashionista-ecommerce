import React from 'react'
import { useParams } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import './ProductPageContainer.scss';
import ProductPage from '../../components/ProductPage/ProductPage'

const ProductPageContainer = () => {
  const {id} = useParams();
  const {productsList} = useSelector(state => state.products);

  const productInfo = productsList.filter(item => item.code_color === id)[0];

  return (
    <div className="productPage__container">
      <div className="productPage__content">
        <ProductPage {...productInfo}></ProductPage>
      </div>
    </div>
    
  )
}

export default ProductPageContainer;
