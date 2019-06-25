import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 12px;
  margin: 12px 8px;
  box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
  background-color: #fff;
`;

const CompanyHeadingContainer = styled.div`
  display: flex;
`;

const LogoContainer = styled.div`
  padding: 4px;
`;

const Logo = styled.img`
  height: 36px;
  width: 36px;
`;

const CompanyDescriptionContainer = styled.div`
  max-height: 60px;
  overflow: hidden;
`;

const CompanyNameContainer = styled.div`
  padding: 8px 16px;
`;

const BlockEllipsis = styled.div`
  display: block;
  display: -webkit-box;
  max-width: 100%;
  height: 43px;
  margin: 0 auto;
  font-size: 14px;
  line-height: 1;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const SearchResult = () => (
  <Container>
    <CompanyHeadingContainer>
      <LogoContainer>
        <Logo src="/assets/images/derivco-logo.jpg" />
      </LogoContainer>
      <CompanyNameContainer>
        <div>Company Name</div>
      </CompanyNameContainer>
    </CompanyHeadingContainer>
    <CompanyDescriptionContainer>
      <BlockEllipsis>{text}</BlockEllipsis>
    </CompanyDescriptionContainer>
    <div>Tags</div>
  </Container>
);

export default SearchResult;
