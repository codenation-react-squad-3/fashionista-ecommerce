import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiShoppingBag } from 'react-icons/fi';
import logo from '../../assets/images/fashionista.svg';
import './Topbar.scss';
import Modal from '../Modal/Modal'
import useModal from '../../utils/useModal'

const Topbar = () => {
  const {isShowing, toggle} = useModal();

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
            <button type="button" className="topbar__icon" onClick={toggle}> <FiSearch /> </button>
            <button type="button" className="topbar__icon"> 
              <FiShoppingBag /> 
              <div className="topbar__icon-counter"> 1 </div>
            </button>
          </div>
        </div>
      </header>
      <Modal
        isShowing={isShowing}
        hide={toggle}
        isSearchModal={true}
      />
    </React.Fragment>
  )
};

export default Topbar;
