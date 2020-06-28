import React from 'react';
import { useDispatch } from 'react-redux'

import Modal from '../Modal/Modal'
import { FiPlus, FiMinus } from 'react-icons/fi';

import './BagProduct.scss'

import { cartAddProduct, cartRemoveProduct } from '../../store/actions/cartActions'

const BagProduct = ({ product = {}, isSearch, size }) => {
  const dispatch = useDispatch();

  return (
    <Modal title="Carrinho">
      <article className="bagProduct">
        <section className="bagProduct__info">
          <figure className="bagProduct__photo">
            <img src="https://viniciusvinna.netlify.app/assets/api-fashionista/20002605_615_catalog_1.jpg" alt="" />
            <button type="button" className="bagProduct__remove"> Remover item </button>
          </figure>

          <div>
            <h3>{product.name}</h3>
            <h4>Tam: {size}</h4>
            <div className="bagProduct__counter">
              <button type="button" onClick={() => dispatch(cartAddProduct(product))} > <FiMinus /> </button>
              <p> 1 </p>
              <button type="button" onClick={() => dispatch(cartRemoveProduct(product))}> <FiPlus /> </button>
            </div>
          </div>
        </section>

        <section className="bagProduct__price">
          <h3>{product.regular_price}</h3>
          <h4>{product.installments}</h4>
        </section>
      </article>
    </Modal>
  )
}

export default BagProduct
