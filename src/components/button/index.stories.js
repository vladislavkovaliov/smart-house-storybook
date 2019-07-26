import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import Button from './button';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('Standard Button', () => {
    return (
      <Button
        onClick={action('onClick')}
        text={text('Button text', 'Default')}
      />
    );
  })
  .add('Fluid Button', () => {
    return (
      <Button
        onClick={action('onClick')}
        isFluid
        text={text('Button text', 'Default')}
      />
    );
  })
  .add('Transparent Button', () => {
    return (
      <Button
        onClick={action('onClick')}
        isTransparent
        text={text('Button text', 'Default')}
      />
    );
  });