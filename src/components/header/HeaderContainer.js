// Authentication here import react, redux, and the header component
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';

//Export the container here pass in the auth paramater and use the spread operator
//for the props check if loggedin 
export const Container = ({ auth }, props) => {
  return <Header {...props} loggedIn={!!auth.token} />;
};

export class HeaderContainer extends Component {
  render() {
    return <Header {...this.props} loggedIn={!!this.props.auth.token} />;
  }
}
//state for the cart & auth if a customer has items in their cart it should??????
//reflect the inventory
const mapStateToProps = state => ({
  cart: state.cart,
  auth: state.auth,
});

export default connect(mapStateToProps)(HeaderContainer);