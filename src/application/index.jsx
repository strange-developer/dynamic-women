import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import modernNormalize from 'styled-modern-normalize';

import store from 'reducers/store';

import Routes from './routes';

const ModernNormalize = createGlobalStyle`${modernNormalize}`;

const Application = () => (
  <Provider store={store}>
    <ModernNormalize />
    <Routes />
  </Provider>
);

export default hot(module)(Application);
