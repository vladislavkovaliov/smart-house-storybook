import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '../../constants';

import { Styled } from '../../core';

export function Button({ text, type, isFluid, isTransparent, ...props }) {
  const maxWidth = isFluid ? '100%' : 'none';
  const width = isFluid ? '100%' : 'none';
  const backgroundColor = isTransparent ? 'transparent' : `${colors.blue}`;

  return (
    <Styled.Btn
      style={{
        maxWidth,
        width,
        backgroundColor,
      }}
      type={type}
      {...props}
    >
      {text}
    </Styled.Btn>
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
