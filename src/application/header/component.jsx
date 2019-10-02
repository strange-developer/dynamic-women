import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  padding: 8px;
  background: #fff;
`;
const Image = styled.img`
  height: 64px;
  width: 64px;
  padding: 8px;
`;

const Header = () => (
  <HeaderContainer>
    <div>
      <Image src="/assets/images/logo.jpg" alt="" />
    </div>
  </HeaderContainer>
);

export default Header;
