//import react and redux here 
//import the router | AppRouter
//import the authorization for the sign in here 
//import the TokenAuth here which includes the modal to enable the user
//to sign in 
//creat a const set the value of local storage and retreive the item by the token
//use the component did mount method for this app
//set the state to true
//render the store here 

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter from './components/router/AppRouter';
import { tokenAuth } from './actions/auth';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TokenAuthLoader from './components/InitLoad/TokenAuthLoader';

const store = configureStore();

class App extends Component {
  componentDidMount() {
    //sign in automatically if the token exists 
    const token = localStorage.getItem('token');
    if (token) {
      store.dispatch(tokenAuth(token));
      this.setState({ open: true });
    }
  }

  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <div>
            <AppRouter />
            <TokenAuthLoader />
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
