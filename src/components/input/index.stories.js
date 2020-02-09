import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { select, withKnobs, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { Input } from './input';
import { colors } from '../../constants';

const optionsType = {
  text: 'text',
  password: 'password'
};

const colorsOptions = {
  blue: colors.blue,
  green: colors.green,
  red: colors.red,
};

storiesOf('Input', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('basic <Input isFluid />', () => {
    return (
      <Input
        id="id"
        name="name"
        onChange={action('onChange')}
        type={select('type', optionsType, optionsType.text)}
        labelText={text('labelText', 'label')}
        color={select('Color', colorsOptions, colorsOptions.blue)}
        isFluid
      />
    );
  })
  .add('basic <Input isFluid={false}/>', () => {
    return (
      <Input
        id="id"
        name="name"
        onChange={action('onChange')}
        type={select('type', optionsType, optionsType.text)}
        labelText={text('labelText', 'label')}
        color={select('Color', colorsOptions, colorsOptions.blue)}
        isFluid={false}
      />
    );
  });
