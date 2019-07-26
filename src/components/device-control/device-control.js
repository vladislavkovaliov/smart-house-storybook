import React, { useState } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import colors from '../../constants/colors';
import Default from '../../constants/default';
import { Icon } from '../icon/icon';
import Switch from '../switch/switch';

import {
  StatusText,
  DeviceIcon,
  DeviceContainer,
  DeviceContent,
  DeviceHeader,
  DeviceInfo } from './styled';
  
import { Text } from '../../core/atoms';

export function DeviceControlTitle(props) {
  const { deviceName } = props;

  return <Text
    color={colors.white}
    fontSize={Default.fontSize + 4}
    text={deviceName} />;
}

DeviceControlTitle.propTypes = {
  deviceName: PropTypes.string.isRequired
};

export function DeviceControl(props) {
  const { iconName, state, deviceName, date, id } = props;
  const [deviceState, setDeviceState] = useState(state);
  const formatedDate = moment(date).format('MMMM DD, YYYY');

  return (
    <DeviceContainer>
      <DeviceHeader>
        <Switch
          id={id}
          onChange={event => setDeviceState(event.target.checked)}
        />
      </DeviceHeader>
      <DeviceContent>
        <DeviceIcon>
          <Icon
            iconName={iconName}
            state={deviceState}
            width={42}
            height={51}
          />
        </DeviceIcon>
        <DeviceInfo>
          <DeviceControlTitle deviceName={deviceName} />
          <StatusText isActive={deviceState} />
          <Text text={formatedDate} />
        </DeviceInfo>
      </DeviceContent>
    </DeviceContainer>
  );
}

DeviceControl.propTypes = {
  state: PropTypes.bool,
  date: PropTypes.string,
  id: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  deviceName: PropTypes.string.isRequired
};

DeviceControl.defaultProps = {
  state: false
};

export default DeviceControl;
