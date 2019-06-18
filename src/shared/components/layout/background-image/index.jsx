import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Background = styled.div`
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
  background: linear-gradient(
    to right,
    rgba(252, 233, 252, 1) 0%,
    rgba(245, 142, 214, 1) 37%,
    rgba(189, 116, 166, 1) 51%,
    rgba(230, 80, 188, 1) 100%
  );
  background-size: cover;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
`;

const ChildrenContainer = styled.div`
  position: relative;
  z-index: 3;
`;

const BackgroundImageLayout = ({ children }) => (
  <React.Fragment>
    <ColorOverlay>
      <Background />
    </ColorOverlay>
    <ChildrenContainer>{children}</ChildrenContainer>
  </React.Fragment>
);

BackgroundImageLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
};

export default BackgroundImageLayout;
