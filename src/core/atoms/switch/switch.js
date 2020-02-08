import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from '../../../constants/colors';
import { Display, Container} from '../../styled';

export const Background = styled(Display)`
  background-color: ${colors.primary};
  height: 10px;
  padding-top: 1.5px;
  padding-bottom: 1.5px;
  width: 100%;
  border-radius: 8px;
`;

export const Circle = styled.label`
  height: 13px;
  width: 13px;
  position: absolute;
  border-radius: 50%;
  cursor: pointer;
  top: 0;
  background-color: ${props =>
    props.isEnabled ? colors.blue : colors.secondary3};
  ${props => (props.isEnabled ? 'right' : 'left')}: 0;
`;

export function Switch(props) {
  const { id, onChange, isEnabled } = props;
  return (
    <Container position="relative" width={26}>
      <Background />
      <Circle htmlFor={id} isEnabled={isEnabled} />
      <Display display="none">
        <input
          onChange={onChange}
          id={id}
          type="checkbox"
        />
      </Display>
    </Container>
  );
}

Switch.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isEnabled: PropTypes.bool.isRequired,
};

export default Switch;
