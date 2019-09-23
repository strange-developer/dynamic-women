import React from 'react';
import styled from 'styled-components';

import TextInput from 'shared/components/text-input';
import { Body1 } from 'shared/components/typography';
import PageContainer from 'shared/components/page-container';

import text from './text';

const SearchContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const SearchContent = styled.div`
  width: 100%;
  max-width: 500px;
`;

const Home = () => (
  <PageContainer>
    <SearchContainer>
      <SearchContent>
        <Body1>{text.searchText}</Body1>
        <TextInput type="text" placeholder={text.searchInputPlaceholder} />
      </SearchContent>
    </SearchContainer>
  </PageContainer>
);

export default Home;
