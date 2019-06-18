import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from 'pages/home';

import { root } from './urls';

const Routes = () => (
  <BrowserRouter>
    <Route exact component={Home} path={root()} />
  </BrowserRouter>
);

export default Routes;
