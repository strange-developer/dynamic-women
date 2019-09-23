import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  padding: 16px;
`;

const PageContainer = ({ children }) => <Container>{children}</Container>;

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageContainer;
