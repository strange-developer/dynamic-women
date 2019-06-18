import React from 'react';
import styled from 'styled-components';

import { BackgroundImageLayout } from 'shared/components/layout';
import TextInput from 'shared/components/text-input';

const SearchContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 70vh;
  padding: 24px;
  width: 100%;
`;

const Home = () => (
  <BackgroundImageLayout>
    <SearchContainer>
      <TextInput type="text" />
    </SearchContainer>
  </BackgroundImageLayout>
);

export default Home;
