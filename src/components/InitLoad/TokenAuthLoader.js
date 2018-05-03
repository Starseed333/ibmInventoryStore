//import react here & react-redux
//set the token here 
//import the mateiral npm here
//include the modal for the sign in here  

import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import Progress from 'material-ui/CircularProgress';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';

export class TokenAuthLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      loaded: false,
      label: 'Cancel',
    };
  }
  handleClose = () => {
    this.setState({ open: false });
  };
  componentWillReceiveProps(nextProps) {
    const auth = nextProps.auth;
    if (auth.loading) {
      this.setState(() => ({ open: true }));
    } else if (auth.token) {
      this.setState({ loaded: true, label: 'Okay' });
    }
  }
  render() {
    const { loaded, label } = this.state;
    const actions = [
      <RaisedButton label={label} onClick={this.handleClose} primary={true} />,
    ];
    return (
      <Dialog
        title="You are being signed in..."
        modal={true}
        open={this.state.open}
        actions={actions}
      >
        {loaded ? <p>Succesful sign in</p> : <Progress />}
      </Dialog>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(TokenAuthLoader);