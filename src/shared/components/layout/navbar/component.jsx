import React from 'react';
import styled from 'styled-components';

import colors from 'shared/style-guide/colors';

const Background = styled.div`
  background-color: ${colors.navbar.background};
  color: ${colors.navbar.text};
  padding: 16px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 320px) {
    display: block;
  }
  @media only screen and (max-width: 568px) {
    display: block;
  }
`;

const Logo = styled.img`
  height: 36px;
  width: 36px;
`;

const SearchContainer = styled.div`
  flex-grow: 0.8;
  display: flex;
  align-items: center;
  padding-left: 24px;
`;

const SearchInput = styled.input`
  width: 100%;
  background-color: ${colors.input.background};
  border: 1px solid ${colors.input.border};
  color: ${colors.input.font};
  padding: 4px;
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const SearchLogoContainer = styled.div`
  display: flex;
`;

const LinkContainer = styled.div`
  padding: 0 16px;

  @media only screen and (max-width: 320px) {
    padding-top: 16;
  }
  @media only screen and (max-width: 568px) {
    padding-top: 16px;
  }
`;

const LogoContainer = styled.div`
  flex-grow: 0.2;
`;

const Navbar = () => (
  <Background>
    <SearchLogoContainer>
      <LogoContainer>
        <Logo src="/assets/images/logo.jpg" alt="Logo" />
      </LogoContainer>
      <SearchContainer>
        <SearchInput placeholder="Search" />
      </SearchContainer>
    </SearchLogoContainer>
    <LinksContainer>
      <LinkContainer>About Us</LinkContainer>
      <LinkContainer>Contact Us</LinkContainer>
    </LinksContainer>
  </Background>
);

export default Navbar;
