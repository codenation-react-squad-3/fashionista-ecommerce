import React from 'react';
import { useDispatch } from 'react-redux'
import { FiPlus, FiMinus } from 'react-icons/fi';

import './BagProduct.scss'

import { cartAddProduct, cartRemoveProduct } from '../../store/actions/cartActions'

const BagProduct = ({product, isSearch, size}) => {
  const dispatch = useDispatch();

  return (
    <article className="bagProduct">
      <section className="bagProduct__info">
        <figure className="bagProduct__photo">
          <img src={ product.image } alt="" />
          { isSearch ? <span></span> : <button type="button"> Remover item </button> }
        </figure>

        <div>
          <h3>{product.name}</h3>

          {
            isSearch 
              ? <span></span> 
              : <div> 
                  <h4>Tam: {size}</h4>
                  <div className="bagProduct__counter">
                    <button type="button" onClick={() => dispatch(cartAddProduct(product))} > <FiMinus /> </button>
                    <p> 1 </p>
                    <button type="button" onClick={() => dispatch(cartRemoveProduct(product))}> <FiPlus /> </button>
                  </div>
                </div>
          }
        </div>
      </section>

      <section className="bagProduct__price">
        <h3>{product.regular_price}</h3>
        <h4>{product.installments}</h4>
      </section>
    </article>
  )
}

export default BagProduct
