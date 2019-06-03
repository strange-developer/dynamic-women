import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from '../../style-guide/colors';

const InputContainer = styled.div`
  width: 100%;
`;

const InputField = styled.input`
  background-color: ${colors.input.background};
  border: 1px solid ${colors.input.border};
  color: ${colors.input.font};
  padding: 16px;
  width: 100%;
`;

const TextInput = ({ type, value }) => (
  <InputContainer>
    <InputField type={type} value={value} />
  </InputContainer>
);

TextInput.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
};

TextInput.defaultProps = {
  type: 'text',
};

export default TextInput;
