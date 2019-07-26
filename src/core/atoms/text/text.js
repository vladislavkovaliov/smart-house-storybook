import React from 'react';
import styled from 'styled-components';
import { color, typography } from 'styled-system';
import PropTypes from 'prop-types';
import Default from '../../../constants/default';
import { colors } from '../../../constants';

const Font = styled.div`
  ${color};
  ${typography};
`;

export default function Text({ text, fontSize, color, ...props }) {
  return (
    <Font
      fontSize={fontSize}
      color={color}
      {...props}
    >{text}</Font>
  );
}

Text.propTypes = {
  fontSize: PropTypes.number,
  color: PropTypes.string,
  text: PropTypes.string.isRequired,
};

Text.defaultProps = {
  fontSize: Default.fontSize,
  color: colors.blue,
};
