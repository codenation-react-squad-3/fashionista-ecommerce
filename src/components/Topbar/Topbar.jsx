import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiShoppingBag } from 'react-icons/fi';
import { useSelector } from 'react-redux'
import Drawer from '../Drawer/Drawer'
import logo from '../../assets/images/fashionista.svg';
import './Topbar.scss';
import SearchAndBagProductContainer from '../../containers/SearchAndBagProductContainer/SearchAndBagProductContainer';

const Topbar = () => {
  const { cartCount } = useSelector(state => state.cartProducts);
  const [isSearch, setIsSearch] = useState(false);
  const [isCart, setIsCart] = useState(false);

  return (
    <React.Fragment>
      <header className="topbar">
        <div className="container">
          <div className="topbar__logo">
            <Link to="/" >
              <img src={logo} alt="Fashionista E-commerce" />
            </Link>
          </div>
          <div className="topbar__icons">
            <button type="button" className="topbar__icon" onClick={() => setIsSearch(true)}> <FiSearch /> </button>
            <button type="button" className="topbar__icon" onClick={() => setIsCart(true)}>
              <FiShoppingBag />
              <div className="topbar__icon-counter"> {cartCount} </div>
            </button>
          </div>
        </div>
      </header>
      <Drawer
        isShowing={!!(isCart || isSearch)}
        hide={isSearch ? setIsSearch : setIsCart}
        title = {isSearch ? 'Buscar Produtos' : `Sacola (${cartCount})` }
      >
        <SearchAndBagProductContainer isSearch={isSearch}/>
      </Drawer>
    </React.Fragment>
  );
}

export default Topbar;
