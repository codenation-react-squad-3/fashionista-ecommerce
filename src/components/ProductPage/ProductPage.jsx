import React from 'react'
import './ProductPage.css'

export default function ProductPage() {
    return (
        <article className="productPage">
            <section className="productPage__photo">
                <img src="https://images.unsplash.com/photo-1582041148887-67274b989ae3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60" alt=""/>
            </section>
            <section className="productPage__productInfo">

                <h2 className="productPage__productTitle">Compre esse Vestido agora</h2>
                <p className="productPage__price">R$ 99,99
                    <span className="productPage__priceParcelas">em até 99x de R$1,01</span>
                </p>
                <div>
                    <p className="productPage__chooseSize">Escolha o tamanho</p>
                    <div className="productPage__sizes">
                        <button className="btn--clothingSize">P</button>
                        <button className="btn--clothingSize">M</button>
                        <button className="btn--clothingSize">G</button>
                    </div>
                    <button className="btn--cart">Adicionar à Sacola</button>
                </div>

            </section>
        </article>
    )
}
