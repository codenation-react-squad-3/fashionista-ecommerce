import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';

import ProductsCatalog from '../containers/ProductsCatalog/ProductsCatalog'
import ProductPageContainer from '../containers/ProductPageContainer/ProductPageContainer';
import PageNotFound from '../components/PageNotFound/PageNotFound';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ProductsCatalog}></Route>
    <Route exact path="/product/:id" component={ProductPageContainer}></Route>

    <Route path='/404' component={PageNotFound} />
    <Redirect from='*' to='/404' />
  </Switch> 
);

export default Routes;