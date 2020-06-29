import React, { useState } from 'react';
import { useDispatch} from 'react-redux'

import { cartAddProduct } from '../../store/actions/cartActions' 
import './ProductPage.scss'
const ProductPage = (product) => {
  const dispatch = useDispatch();
  const [isSizeChosen, setIsSizeChosen] = useState();
  const [chosenSize, setChosenSize] = useState({size: '', sku: ''});

  const changeChosenSize = (sizeObject) => {
    setIsSizeChosen(true);
    setChosenSize({...sizeObject});
  }

  const addProductToBag = () => {
    isSizeChosen
      ? dispatch(cartAddProduct(product, chosenSize))
      : setIsSizeChosen(false)
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
              {
                product.sizes.map(size => {
                  return <button className="btn--clothingSize" key={size.sku}
                    disabled={!size.available} onClick = {() => changeChosenSize({size: size.size, sku: size.sku})}> 
                    { size.size }
                  </button>
                })
              }
            </div>
            <button className="btn--cart" onClick={ () => addProductToBag() }>Adicionar à Sacola</button>
        </div>

        { 
          isSizeChosen === false 
            ? <div className="productPage__sizeRequired"> É necessário escolher um tamanho </div> 
            : <div> </div> }
      </section>
    </article>
  )
}

export default ProductPage;
