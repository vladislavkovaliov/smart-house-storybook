import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { DeviceControl } from './device-control';

const icons = {
  webcamera: 'webcamera',
  alert: 'alert',
  sensors: 'sensors',
  wifi: 'wifi',
  light: 'light',
  money: 'money',
  devices: 'devices',
  water: 'water',
  outlet: 'outlet',
  security: 'security',
  speaker: 'speaker',
  temperature: 'temperature'
};

const state = {
  on: 'on',
  off: 'off'
};

storiesOf('DeviceControl', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('<DeviceControl />', () => {
    return (
      <DeviceControl
        id="uniq-id"
        iconName={select('iconName', icons, 'webcamera')}
        date={text('Date', '12/12/2019')}
        deviceName={text('Device Name', 'Camera')}
      />
    );
  });
