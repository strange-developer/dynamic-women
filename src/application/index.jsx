import React from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';

import store from 'reducers/store';

import Routes from './routes';

const Application = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default hot(module)(Application);
