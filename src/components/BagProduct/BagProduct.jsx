import React from 'react';
import './BagProduct.css' 
import { FiPlus, FiMinus } from 'react-icons/fi';


const BagProduct = () => {
  return (
    <article className="bagProduct">
      <section className="bagProduct__info">
        <figure className="bagProduct__photo">
          <img src="https://viniciusvinna.netlify.app/assets/api-fashionista/20002605_615_catalog_1.jpg" alt=""/>
          <button type="button" class="bagProduct__remove"> Remover item </button>
        </figure>

        <div>
          <h3>
            CALÇA CLASSIC PRINT
          </h3>
          <h4>
            Tam: 40
          </h4>
          <div className="bagProduct__counter">
            <button type="button"> <FiMinus /> </button>
            <p> 1 </p>
            <button type="button"> <FiPlus /> </button>
          </div>
        </div> 
      </section>

      <section className="bagProduct__price">
        <h3>
          R$ 159,90
        </h3>
        <h4>
          3x R$ 53,30
        </h4>
      </section>
    </article>
  )
}

export default BagProduct
