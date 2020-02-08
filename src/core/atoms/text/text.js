import React from 'react';
import PropTypes from 'prop-types';

import { Font } from '../../styled';

export function Text({ text, fontSize, color }) {
  return (
    <Font
      fontSize={parseInt(fontSize, 10)}
      color={color}
    >{text}</Font>
  );
}

Text.propTypes = {
  fontSize: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Text;
