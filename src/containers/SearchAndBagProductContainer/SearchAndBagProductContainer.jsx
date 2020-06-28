import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import './SearchAndBagProductContainer.scss';
import SearchBar from '../../components/SearchBar/SearchBar'
import BagProduct from '../../components/BagProduct/BagProduct';

const SearchAndBagProductContainer = () => {
  const { cartList } = useSelector(state => state.cartProducts);
  const [childData, setChildData] = useState([]);
  const [cartListUpdated, setCartListUpdated] = useState([]);

  // Vou pegar da store quando estiver disponível
  const isSearch = true;

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
              <SearchBar passChildData={setChildData}/>
            : <div> 
              {
                cartListUpdated.length > 0
                ?
                cartListUpdated.map((product, index) =>{
                  return (
                    <BagProduct product={{ ...product}} isSearch={false} key={index} />
                  )
                })

                : <div className="searchAndBagProduct__emptyBag"> Sua sacola está vazia :/</div>
              }
            </div>
        }
      </div>
  )
}

export default SearchAndBagProductContainer;