import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Switch from './switch';


storiesOf('Switch', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('<Switch />', () => {
    return <Switch onChange={action('onChange')} />;
  });
