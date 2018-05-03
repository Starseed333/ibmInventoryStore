//import React | React Dom | Normalize | App here

import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './index.css';
import App from './App';


// HRM allow module to be updated at runtime without the need to refresh page
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(<NextApp />, document.getElementById('root'));
  });
}
