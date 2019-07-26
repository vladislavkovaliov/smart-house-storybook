import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../constants/colors';

export const padding = 16;
export const height = 33;

const Btn = styled.button`
  color: ${colors.white};
  border: none;
  text-transform: uppercase;
  font-family: Roboto, sans-serif;
  height: ${height}px;
  padding-right: ${padding}px;
  padding-left: ${padding}px;
`;

export function Button({ text, type, isFluid, isTransparent, ...props }) {
  const maxWidth = isFluid ? '100%' : 'none';
  const width = isFluid ? '100%' : 'none';
  const backgroundColor = isTransparent ? 'transparent' : `${colors.blue}`;

  return (
    <Btn
      style={{
        maxWidth,
        width,
        backgroundColor,
      }}
      type={type}
      {...props}
    >
      {text}
    </Btn>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  isTransparent: PropTypes.bool,
  isFluid: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  isTransparent: false,
  isFluid: false,
};

export default Button;
