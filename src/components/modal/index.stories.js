import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { select, withKnobs, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { SmartHouseModal } from './modal';

storiesOf('SmartHouseModal', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('<SmartHouseModal />', () => {
    return (
      <SmartHouseModal showModal />
    );
  });
