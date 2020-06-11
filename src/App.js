import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BagProduct from './components/BagProduct/BagProduct';
import ProductPage from './components/ProductPage/ProductPage';

class App extends Component {
  render() {
    return (
      <div>
        <BagProduct></BagProduct>
        <BagProduct></BagProduct>
      </div>
      
    );
  }
}

export default App;
