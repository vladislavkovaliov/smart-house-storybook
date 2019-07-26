import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { select, withKnobs, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { Input } from './input';

const optionsType = {
  text: 'text',
  password: 'password'
};

storiesOf('Input', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('Simple input', () => {
    return (
      <Input
        id="id"
        name="name"
        onChange={action('onChange')}
        type={select('type', optionsType, optionsType.text)}
        labelText={text('labelText', 'label')}
      />
    );
  });
