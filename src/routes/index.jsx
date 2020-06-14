import React from 'react'
import { Route, Switch } from 'react-router-dom';

import ProductsCatalog from '../containers/ProductsCatalog/ProductsCatalog'
import ProductPage from '../components/ProductPage/ProductPage';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ProductsCatalog}></Route>
    <Route exact path="/product/:id" component={ProductPage}></Route>
  </Switch> 
);

export default Routes;