import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from '../../constants/colors';

const SwitchContainer = styled.label`
  display: flex;
  align-items: center;
  width: 26px;
  height: 13px;
  position: relative;
`;

const SwitcherBackground = styled.div`
  background-color: ${colors.primary};
  height: 10px;
  width: 100%;

  border-radius: 8px;
`;

const Circle = styled.div`
  height: 13px;
  width: 13px;
  position: absolute;
  border-radius: 50%;

  top: 0;
  background-color: ${props =>
    props.isEnabled ? colors.blue : colors.secondary3};
  ${props => (props.isEnabled ? 'right' : 'left')}: 0;
`;

const Hidden = styled.div`
  display: none;
`;

export function Switch(props) {
  const { id, onChange, state } = props;
  const [isEnabled, setEnabled] = useState(state);

  return (
    <SwitchContainer>
      <SwitcherBackground htmlFor={id} />
      <Circle isEnabled={isEnabled} />
      <Hidden>
        <input
          onChange={event => {
            onChange(event);
            setEnabled(event.target.checked);
          }}
          id={id}
          type="checkbox"
        />
      </Hidden>
    </SwitchContainer>
  );
}

Switch.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  state: PropTypes.bool
};
Switch.defaultProps = {
  id: 'switcher',
  state: false
};

export default Switch;
