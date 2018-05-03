//import react and react router


import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../header/HeaderContainer';
import Products from '../products/ProductsContainer';
import Product from '../productItem/ProductItemContainer';
import SignUp from '../sign_up/SignUpContainer';
import SignUpConfirm from '../confirmations/SignUpConfirm';
import SignIn from '../sign_in/SignInContainer';
import SignInConfirm from '../confirmations/SignInConfirm';
import SignOutConfirm from '../confirmations/SignOutConfirm';
import SignOut from '../sign_out/SignOutContainer';
import CheckAuth from '../Aut/CheckAuth';;

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/products" component={Products} />
          <Route exact path="/product/:id" component={Product} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signout" component={CheckAuth(SignOut)} />
          <Route exact path="/confirm/signin" component={SignInConfirm} />
          <Route exact path="/confirm/signout" component={SignOutConfirm} />
          <Route exact path="/confirm/signup" component={SignUpConfirm} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
