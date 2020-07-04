import React from 'react';
import { useDispatch } from 'react-redux'
import { FiPlus, FiMinus } from 'react-icons/fi';

import './BagProduct.scss'

import { cartAddProduct, cartRemoveProduct } from '../../store/actions/cartActions'

const BagProduct = ({product, isSearch}) => {
  const dispatch = useDispatch();

  return (
    <article className="bagProduct">
      <section className="bagProduct__info">
        <figure className="bagProduct__photo" data-testid="bagproduct-photo">
          <img data-testid="bagproduct-image" src={ product.product.image } alt="" />
          { isSearch ? <span></span> : <button type="button" data-testid="bagproduct-remove_item_button"> Remover item </button> }
        </figure>

        <div>
          <h3>{product.product.name}</h3>

          {
            isSearch 
              ? <span data-testid="bagproduct-empty"></span> 
              : <div> 
                  <h4 data-testid="bagproduct-size">Tam: {product.size}</h4>
                  <div className="bagProduct__counter">
                    <button type="button" onClick={() => dispatch(cartRemoveProduct(product.product, {size: product.size, sku: product.sku}))} > <FiMinus /> </button>
                    <p data-testid="bagproduct-count"> {product.productCount} </p>
                    <button type="button" onClick={() => dispatch(cartAddProduct(product.product, {size: product.size, sku: product.sku}))}> <FiPlus /> </button>
                  </div>
                </div>
          }
        </div>
      </section>

      <section className="bagProduct__price">
        <h3>{product.product.regular_price}</h3>
        <h4>{product.product.installments}</h4>
      </section>
    </article>
  )
}

export default BagProduct
