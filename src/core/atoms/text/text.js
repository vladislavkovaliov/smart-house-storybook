import React from 'react';
import styled from 'styled-components';
import { color, typography } from 'styled-system';
import propTypes from 'prop-types';
import Default from '../../../constants/default';
import colors from '../../../constants/colors';

const Font = styled.div`
  ${color};
  ${typography};
`;

export default function Text({ text, fontSize, color, ...props }) {
  console.log(color);
  return (
    <Font
      fontSize={fontSize}
      color={color}
      {...props}
    >{text}</Font>
  );
}

Text.propTypes = {
  fontSize: propTypes.number,
  color: propTypes.string,
};

Text.defaultProps = {
  fontSize: Default.fontSize,
  color: colors.blue,
};
