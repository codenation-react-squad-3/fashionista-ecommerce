import React from 'react'
import './HomeProductCard.css'

const HomeProductCard = (props) => {
    let productImage;
    let productDiscount;
    let productRegularPrice;

    if(!props.image){
        productImage = <img src="https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível" alt="" className="product__image"/>
    } else {
        productImage = <img src={props.image} alt="" className="product__image"/>
    }

    if(props.discount_percentage){
        productRegularPrice = <span className="product__price product__price--regular">{props.regular_price}</span>
        productDiscount = <span className="product__discount">-{props.discount_percentage}</span>
    } else{
        productRegularPrice = <span></span>
        productDiscount = <span></span>
    }

    return (
        <div className="container">
            <a href={'/product/' + props.style}>
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

