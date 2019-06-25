import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from 'pages/home';
import SearchResults from 'pages/search-results';

import { root, searchResults } from './urls';

const Routes = () => (
  <BrowserRouter>
    <Route exact component={Home} path={root()} />
    <Route exact component={SearchResults} path={searchResults()} />
  </BrowserRouter>
);

export default Routes;
