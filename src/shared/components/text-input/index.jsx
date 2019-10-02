import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from '../../style-guide/colors';

const TextFieldContainer = styled.div`
  display: flex;
  height: 52px;
`;

const TextField = styled.input`
  background-color: ${colors.input.background};
  border: 1px solid ${colors.input.border};
  color: ${colors.input.font};
  padding: 16px;
  width: 100%;
`;

const TextInput = ({ type, value, Adornment, ...props }) => (
  <TextFieldContainer>
    <TextField type={type} value={value} {...props} />
  </TextFieldContainer>
);

TextInput.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  Adornment: PropTypes.func,
};

TextInput.defaultProps = {
  type: 'text',
  Adornment: undefined,
};

export default TextInput;
