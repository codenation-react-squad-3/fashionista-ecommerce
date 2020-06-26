import React from 'react'
import { useDispatch } from 'react-redux'

import { cartAddProduct, cartRemoveProduct } from '../../store/actions/cartActions' 
import './ProductPage.scss'
const ProductPage = (product) => {
  const dispatch = useDispatch();

  const addProductToBag = () => {
    dispatch(cartAddProduct(product));
  }

  const removeProduct = () => {
    dispatch(cartRemoveProduct(product));
  }

  return (
    <article className="productPage">
      <figure className="productPage__photo">
        <img src={ product.image } alt=""/>
      </figure>
      <section className="productPage__productInfo">
        <h3 className="productPage__productTitle"> { product.name } </h3>
        <p className="productPage__price">{product.regular_price}
            <span className="productPage__priceParcelas">{product.installments}</span>
        </p>
        <div>
            <p className="productPage__chooseSize">Escolha o tamanho</p>
            <div className="productPage__sizes">
                <button className="btn--clothingSize">P</button>
                <button className="btn--clothingSize">M</button>
                <button className="btn--clothingSize">G</button>
            </div>
            <button className="btn--cart" onClick={ () => addProductToBag() }>Adicionar à Sacola</button>
        </div>
      </section>
    </article>
  )
}

export default ProductPage;
