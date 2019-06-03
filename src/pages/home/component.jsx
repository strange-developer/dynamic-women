import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  background: url('./assets/images/background.jpg') no-repeat;
  background-size: cover;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.3;
  z-index: 1;
`;

const ColorOverlay = styled.div`
  position: absolute;
  background-color: #d9d9d9;
  background-size: cover;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 70vh;
`;

const Home = () => (
  <ColorOverlay>
    <Background>
      <SearchContainer>
        <input type="text" />
      </SearchContainer>
    </Background>
  </ColorOverlay>
);

export default Home;
