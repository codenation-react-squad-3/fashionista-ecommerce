import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiShoppingBag } from 'react-icons/fi';
import { useSelector } from 'react-redux'

import logo from '../../assets/images/fashionista.svg';
import './Topbar.scss';

const Topbar = () => {
  const { cartCount } = useSelector(state => state.cartProducts);

  return (
    <header className="topbar">
      <div className="container">
        <div className="topbar__logo">
          <Link to="/" >
            <img src={logo} alt="Fashionista E-commerce" />
          </Link>
        </div>
        <div className="topbar__icons">
          <button type="button" className="topbar__icon"> <FiSearch /> </button>
          <button type="button" className="topbar__icon"> 
            <FiShoppingBag /> 
            <div className="topbar__icon-counter"> {cartCount} </div>
          </button>
        </div>
      </div>
    </header>
  );
} 

export default Topbar;
