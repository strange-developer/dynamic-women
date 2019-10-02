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

const SearchControlContainer = styled.div`
  display: flex;
  height: 52px;
`;

const SearchInputContainer = styled.div`
  flex: 1;
`;

const SearchButtonContainer = styled.div`
  flex: 0;
`;

const SearchButton = styled.button`
  height: 100%;
  padding: 0 16px;
  border: none;
  background-color: #e92f60;

  &:hover {
    cursor: pointer;
  }
`;

const SearchImage = styled.img`
  width: 36px;
`;

const Home = () => (
  <PageContainer>
    <SearchContainer>
      <SearchContent>
        <Body1>{text.searchText}</Body1>
        <SearchControlContainer>
          <SearchInputContainer>
            <TextInput type="text" placeholder={text.searchInputPlaceholder} />
          </SearchInputContainer>
          <SearchButtonContainer>
            <SearchButton type="button">
              <SearchImage src="/assets/icons/search.svg" />
            </SearchButton>
          </SearchButtonContainer>
        </SearchControlContainer>
      </SearchContent>
    </SearchContainer>
  </PageContainer>
);

export default Home;
