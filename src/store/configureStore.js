//import redux here to configure the store 
//import auth | products | productItem | compose the enhancer here ??
//invert the action control by dispatching the function

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import auth from '../reducers/auth';
import products from '../reducers/products';
import product from '../reducers/productItem';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

export default () => {
  const store = createStore(
    combineReducers({
      auth,
      products,
      product,
      form: formReducer,
    }),
    //composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};