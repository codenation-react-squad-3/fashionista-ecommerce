import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import './SearchAndBagProductContainer.scss';
import SearchBar from '../../components/SearchBar/SearchBar'
import BagProduct from '../../components/BagProduct/BagProduct';

const SearchAndBagProductContainer = ({ isSearch }) => {
  const { cartList } = useSelector(state => state.cartProducts);
  const { productsList } = useSelector(state => state.products);
  const [cartListUpdated, setCartListUpdated] = useState([]);
  const { cartTotalPrice } = useSelector(state => state.cartProducts);
  const { cartCount } = useSelector(state => state.cartProducts);

  useEffect(() => {
    const updateCartList = () => {
      setCartListUpdated([...cartList]);
    }

    updateCartList();
  }, [cartList]);

  return (
    <div className="searchAndBagProduct__container">
      {
        isSearch
          ?
          <SearchBar productsList={productsList} />
          : <React.Fragment>
            <div>
              {
                cartListUpdated.length > 0
                  ?
                  cartListUpdated.map((product, index) => {
                    return (
                      <BagProduct product={{ ...product }} isSearch={false} key={index} />
                    )
                  })

                  : <div className="searchAndBagProduct__emptyBag"> Sua sacola está vazia :/</div>
              }
            </div>
            <div className="total-price__tag">
              <span className="total-price__text">Subtotal - </span>
              {
                cartCount === 0
                  ?
                  <span className="total-price__text">R$ 0,00</span>
                  :
                  <span className="total-price__text">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(cartTotalPrice)}</span>
              }
            </div>
          </React.Fragment>
      }
    </div>
  )
}

export default SearchAndBagProductContainer;