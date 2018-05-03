//import React here and rRedux
//check for the authentication here 
//use the spread operator to render the props after the 
//componentWillMount method
//set the props here to push the history for the authentication
//connect to the state props and to the authentication
//return the component incorporate the props for this componenet using the spread 
//operator

import React, { Component } from 'react';
import { connect } from 'react-redux';

export default ComposedComponent => {
  class Authentication extends Component {
    componentWillMount() {
      if (!this.props.auth.token) {
        this.props.history.push('/');
      }
    }
    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => ({
    auth: state.auth,
  });

  return connect(mapStateToProps)(Authentication);
};
