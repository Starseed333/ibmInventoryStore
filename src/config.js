//deploy to heroku include the url here once the application is deployed 
//use this url as the basis for each api call
//export mobile screensize here set the average query size here 

//IBM store heroku link
const url = 'https://ibminventorystore.herokuapp.com/';

//export the basis for the api call here 
export const API = {
  MAIN: `${url}`,
  SIGN_IN: `${url}/api/users/signin`,
  TOKEN: `${url}/`,
};

export const CREA_USER = `${url}/api/users`;
export const SIGN_IN = `${url}/api/users/signin`;
export const TOKEN = `${url}/auth`;
export const CART_GET = `${url}/api/cart`;
export const PROD_GET_ALL = `${url}/api/products`;
export const PROD_GET_ONE = `${url}/api/product`;
export const PROD_IMAGE = `${url}/images/`;
export const VERIFY_EMAIL = `${url}/api/users/verify`;



export const ScreenSize = {
  mobile: '450px',
};