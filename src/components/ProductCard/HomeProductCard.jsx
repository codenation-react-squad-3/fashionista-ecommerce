import React from 'react'
import './HomeProductCard.scss'

const HomeProductCard = (props) => {
  const productImage = props.image
    ? <img src={props.image} alt="" className="product__image"/>
    : <img src="https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível" alt="" className="product__image"/>

  const productRegularPrice = props.discount_percentage
    ? <span className="product__price product__price--regular">{props.regular_price}</span>
    : <></>
      
  const productDiscount = props.discount_percentage
    ? <span className="product__discount">-{props.discount_percentage}</span>
    : <></>

  return (
    <div className="productCard__container">
      <a href={'/product/' + props.code_color}>
        <div>
          {productImage}
          {productDiscount}
        </div>
        <div>
          <h3 className="product__title"> {props.name} </h3>
          {productRegularPrice}
          <span className="product__price product__price--actual"> {props.actual_price} </span>
        </div>
      </a>
    </div>
  )
}

export default HomeProductCard;

