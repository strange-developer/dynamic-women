import React from 'react';

import { NavbarLayout } from 'shared/components/layout';
import SearchResult from './result';

const SearchResults = () => (
  <React.Fragment>
    <NavbarLayout />
    <SearchResult />
  </React.Fragment>
);

export default SearchResults;
