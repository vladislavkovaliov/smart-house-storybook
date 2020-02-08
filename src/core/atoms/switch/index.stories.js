import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';

import Switch from './switch';

storiesOf('Switch', module)
  .add('basic <Switch />', () => {
    return <Switch
      id={text('id', 'switch')}
      isEnabled={boolean('isEnable', false)}
      onChange={action('onChange')}
    />;
  });
