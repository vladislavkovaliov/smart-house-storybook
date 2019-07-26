import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { select, withKnobs, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import Input from './input';

const optionsType = {
  text: 'text',
  password: 'password'
};

const optionsValid = {
  valid: true,
  invalid: false,
  default: null
};

storiesOf('Input', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('<Input />', () => {
    return (
      <Input
        onChange={action('onChange')}
        type={select('type', optionsType, optionsType.text)}
        valid={select('valid', optionsValid, optionsValid.default)}
        labelText={text('labelText', '')}
      />
    );
  });
