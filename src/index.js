import React from 'react';
import ReactDOM from 'react-dom';
import AppleBasket from './AppleBasket';

import store from './store'

ReactDOM.render(
  <AppleBasket store={store} />,
  document.getElementById('root')
);
