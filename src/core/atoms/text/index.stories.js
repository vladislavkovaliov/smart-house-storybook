import React from 'react';

import { storiesOf } from '@storybook/react';

import Text from './text';
import {text, select} from "@storybook/addon-knobs";

const colors = {
  white: 'white',
  black: 'black',
  red: 'red',
};

storiesOf('Text', module)
  .add('basic <Text />', () => {
    return <Text
      text={text('Text', 'Text')}
      fontSize={text('Font Size', '14')}
      color={select('Color', colors, 'red')}
    />;
  });
