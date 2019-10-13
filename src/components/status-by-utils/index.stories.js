import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { StatusByUtils } from './status-by-utils';


storiesOf('StatusByUtils', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('<StatusByUtils />', () => {
    return <StatusByUtils />;
  });
