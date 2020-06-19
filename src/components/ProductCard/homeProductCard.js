import React from 'react'
import './HomeProductCard.scss'

function HomeProductCard (props) {
    return (
        <div>
            <img src={props.image} alt=""/>
            <span className="teste"> Foto bla bla</span>
            <div></div>
            <div>
                <div> {props.name} </div>
                <div>
                    <span></span>
                    <span> {props.actual_price} </span>
                </div>
            </div>
        </div>
    )
}

export default HomeProductCard;

