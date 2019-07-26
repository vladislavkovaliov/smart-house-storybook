import React from 'react';

import icons from '../../asserts/icons';
import PropTypes from 'prop-types';

export function Icon(props) {
  const { iconName, state, width, height } = props;
  const src = icons[iconName][state ? 'on' : 'off'];

  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`
      }}
    >
      <img src={src} alt={iconName} />
    </div>
  );
}

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
  state: PropTypes.bool.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};

Icon.defaultProps = {
  width: 34,
  height: 34,
};
