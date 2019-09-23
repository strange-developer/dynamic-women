import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { hot } from 'react-hot-loader';
import styled, { createGlobalStyle } from 'styled-components';
import modernNormalize from 'styled-modern-normalize';

import Routes from './routes';
import Header from './header';

const ModernNormalize = createGlobalStyle`${modernNormalize}`;

const PageBackground = styled.div`
  background: #f1f2f7;
`;

const Application = () => (
  <PageBackground>
    <ModernNormalize />
    <Header />
    <Routes />
  </PageBackground>
);

export default hot(module)(Application);
