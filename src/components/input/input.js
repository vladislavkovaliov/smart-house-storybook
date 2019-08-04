import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color } from 'styled-system';

import { Styled } from '../../core';
import { colors } from '../../constants';

export const StyledInput = styled.input`
  width: 100%;
  height: 32px;
  box-sizing: border-box;
  border-width: 1px;
  border-radius: 6px;
  border-style: solid;
  padding-left: 4px;
  padding-right: 4px;

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active,
  input:-webkit-autofill:valid {
  // TODO: could be removed
    -webkit-text-fill-color: red !important;   
  }
  
  ${color};
`;

export const StyledLabel = styled.label`
  font-size: 23px;
  font-weight: 300;
  font-family: Roboto, sans-serif;
  color: ${colors.white};
`;

export function Input(props) {
  const { type, width, labelText, id, name, isFluid, ...restProps } = props;
  const { blue: color, primary: bgColor } = colors;

  return (
    <Styled.Container
      width={isFluid ? '100%' : width}
    >
      <StyledLabel
        htmlFor={id}
      >{labelText}</StyledLabel>
      <StyledInput
        id={id}
        name={name}
        color={color}
        bg={bgColor}
        type={type}
        {...restProps}
      />
    </Styled.Container>
  );
}

Input.propTypes = {
  onChange: PropTypes.func,
  type: PropTypes.string,
  width: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  isFluid: PropTypes.bool,
};

Input.defaultProps = {
  onChange: () => {},
  type: 'text',
  width: '327px',
  isFluid: false,
};
