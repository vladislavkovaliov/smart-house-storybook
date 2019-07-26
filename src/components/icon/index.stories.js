import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { Icon } from './icon';

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
  on: true,
  off: false
};

storiesOf('Icon', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('<Icon />', () => {
    return (
      <Icon
        iconName={select('iconName', icons, 'webcamera')}
        state={select('state', state, false)}
        width={text('width')}
        height={text('height')}
      />
    );
  });
