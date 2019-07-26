import React from 'react';
import PropTypes from 'prop-types';

import { Text } from '../../../core/atoms';

export default function StatusText({ isActive, ...props }) {
  return <Text
    text={`${isActive ? 'Active since' : 'Inactive since'}`}
    {...props}
  />;
}

StatusText.propTypes = {
  isActive: PropTypes.bool.isRequired
};
