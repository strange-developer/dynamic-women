import React from 'react';
import styled from 'styled-components';

import SearchResult from './result';

const SearchResultContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const SearchResults = () => (
  <React.Fragment>
    <SearchResultContainer>
      <SearchResult />
    </SearchResultContainer>
  </React.Fragment>
);

export default SearchResults;
