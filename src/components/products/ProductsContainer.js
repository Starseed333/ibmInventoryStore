//Import React Component 
//import redux here

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllProducts } from '../../actions/products';
import Products from './Products';

export class ProductsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }
//render component to server 
  componentDidMount() {
    this.props.getProducts();
  }
  //set the State for the products incldue the contents here
  //render the product component 
  componentWillReceiveProps(nextProps) {
    const products = nextProps.products;
    if (products.items) {
      const contents = products.items;
      this.setState(() => ({
        products: contents,
      }));
    }
  }
  render() {
    return <Products products={this.state.products} />;
  }
}

//map the state to the props here for the products and auth/id
const mapStateToProps = state => ({
  products: state.products,
  id: state.auth.id,
});

//map the dispatch here for adding an item and getting a product?
const mapDispatch = dispatch => ({
  getProducts: () => dispatch(getAllProducts()),
});

export default connect(mapStateToProps, mapDispatch)(ProductsContainer);