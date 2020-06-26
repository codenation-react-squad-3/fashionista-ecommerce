import React from 'react'
import {Link} from 'react-router-dom';
import './HomeProductCard.scss'

const HomeProductCard = (props) => {
  let productImage;
  let productDiscount;
  let productRegularPrice;

  productImage = props.image
    ? <img src={props.image} alt="" className="product__image"/>
    : <img src="https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível" alt="" className="product__image"/>

    productRegularPrice = props.discount_percentage
      ? <span className="product__price product__price--regular">{props.regular_price}</span>
      : <span></span>
      
    productDiscount = props.discount_percentage
      ? <span className="product__discount">-{props.discount_percentage}</span>
      : <span></span>  

  return (
    <div className="productCard__container">
      <Link to={'/product/' + props.code_color}>
        <div>
          {productImage}
          {productDiscount}
        </div>
        <div>
          <h3 className="product__title"> {props.name} </h3>
          {productRegularPrice}
          <span className="product__price product__price--actual"> {props.actual_price} </span>
        </div>
      </Link>
    </div>
  )
}

export default HomeProductCard;

