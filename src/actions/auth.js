//import axios here for the http request from node
//set the local storage to get the item from the token
//dispatch the auth & token and id here
//export the auth, signin, signout, signup
//include veryfing the user email here 
import axios from 'axios';
import { SIGN_IN, TOKEN, CREA_USER, VERIFY_EMAIL } from '../config';

//pass the key name here to return it's token value
const tokenObject = {
  headers: {
    authorization: localStorage.getItem('token'),
  },
};
//dispatch the run time when loading set to true return a promise with a succesful login
export const tokenAuth = token => {
  return dispatch => {
    dispatch({
      type: 'AUTH:BEGIN_TOKEN_SIGN_IN',
      auth: {
        loading: true,
      },
    });
    axios
      .get(TOKEN, tokenObject)
      .then(({ data }) => {
        dispatch({
          type: 'AUTH:SUCCESSFUL_TOKEN_SIGN_IN',
          auth: {
            loading: false,
            token: localStorage.getItem('token'),
            id: data.user._id,
          },
        });
      })
      .catch(() => {
        dispatch({
          type: 'AUTH:FAILED_SIGN_IN',
          auth: {
            loading: false,
          },
        });
      });
  };
};
//dispatch the runtime with the email and password parameters load true return a promise 
//that will add that key to the storage | update the value if the user exsist use the setItem method here 
export const signIn = (email, password) => {
  return dispatch => {
    dispatch({
      type: 'AUTH:CLICKED_SIGN_IN',
      auth: {
        loading: true,
      },
    });
    axios
      .post(SIGN_IN, { email, password })
      .then(({ data }) => {
        // if verified email & account
        if (data.active === true) {
          localStorage.setItem('token', data.token);
          dispatch({
            type: 'AUTH:SUCCESSFUL_SIGN_IN',
            auth: {
              token: data.token,
              loading: false,
              id: data.id,
            },
          });
        } else {
          dispatch({
            type: 'AUTH:FAILED_EMAIL_UNVERIFIED',
            auth: {
              loading: false,
              error: false,
              unverifiedEmail: true,
            },
          });
        }
      })
      .catch(() => {
        dispatch({
          type: 'AUTH:FAILED_SIGN_IN',
          auth: {
            loading: false,
          },
        });
      });
  };
};
//remove the item from the local storage dispatch the authentication and load to tru 
export const signOut = () => {
  return dispatch => {
    dispatch({
      type: 'AUTH:CLICKED_SIGN_OUT',
      auth: {
        loading: true,
      },
    });
    localStorage.removeItem('token');
    dispatch({
      type: 'AUTH:SUCCESSFUL_SIGN_OUT',
      auth: {
        loading: false,
        token: null,
      },
    });
  };
};

//pass two parameters email and password for the signup return a promise with the dispatch
//loading * catching the error set the value to false.
export const signUp = (email, password) => {
  return dispatch => {
    dispatch({
      type: 'AUTH:CLICKED_SIGN_UP',
      auth: {
        loading: true,
      },
    });
    axios
      .post(CREA_USER, { email, password })
      .then(({ data }) => {
        dispatch({
          type: 'AUTH:SUCCESSFUL_ACCOUNT_CREATION',
          auth: {
            loading: false,
            error: false,
            message: data.message,
            accountCreated: data.accountCreated,
          },
        });
      })
      .catch(error => {
        dispatch({
          type: 'AUTH:FAILED_SIGN_UP',
          auth: {
            error: error.response.data.error,
            loading: false,
          },
        });
      });
  };
};
//verify the email return a dispatch set it's value to true return a promise setting the dispatch to 
//false at load time
export const verifyEmail = token => {
  return dispatch => {
    dispatch({
      type: 'AUTH:BEGIN_VERIFY_EMAIL',
      auth: {
        loading: true,
      },
    });
    axios
      .post(VERIFY_EMAIL, { token })
      .then(({ data }) => {
        dispatch({
          type: 'AUTH:SUCCESSFUL_VERIFY_EMAIL',
          auth: {
            loading: false,
            error: false,
            token: data.token,
            id: data.id,
            message: data.message,
          },
        });
      })
      .catch(() => {
        dispatch({
          type: 'AUTH:FAILED_VERIFY_EMAIL',
          auth: {
            loading: false,
            error: false,
          },
        });
      });
  };
};