import React from 'react';

import { storiesOf } from "@storybook/react";
import {boolean, text} from "@storybook/addon-knobs";
import {action} from "@storybook/addon-actions";

import Button from './button';

storiesOf('Button', module)
  .add('basic <Button />', () => {
    return <Button
      onClick={action('onClick')}
      isFluid={boolean('Fluid', false)}
      isTransparent={boolean('Transparent', false)}
    >Default</Button>;
  });
